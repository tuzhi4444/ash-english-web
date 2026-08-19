/**
 * 网页端宿主层：把小程序的 wx.* 能力换成浏览器等价物。
 *
 * core.bundle.js 里的逻辑一行没改，它只依赖两样东西：
 *   1. getApp() —— 返回存档读写接口
 *   2. platform 提供的存储 / 发音 / 语音识别
 * 这里就是把这两样在浏览器里实现出来。
 */
(function (global) {
  'use strict';

  var core = global.AshCore;
  var STORAGE_KEY = 'ash_english_v2';

  // ===== 存档：localStorage 代替 wx.getStorageSync =====
  var Storage = {
    load: function () {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) { return null; }
    },
    save: function (store) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
      } catch (e) {
        // 配额满：静默，不打断学习（和小程序端一致）
        console.warn('[storage] 写入失败', e);
      }
    },
    remove: function () {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    }
  };

  // ===== getApp() 垫片 =====
  // store/index.js 全靠它读写存档。小程序里是 App 实例，这里用一个等价对象。
  var _store = null;
  var app = {
    globalData: { store: null, ready: false },
    getStore: function () { return _store; },
    updateStore: function (updater) {
      if (!_store) return;
      _store = updater(_store);
      app.globalData.store = _store;
      Storage.save(_store);
    },
    setStore: function (s) {
      _store = s;
      app.globalData.store = s;
      Storage.save(s);
    },
    resetStore: function () {
      _store = null;
      app.globalData.store = null;
      Storage.remove();
    }
  };
  global.getApp = function () { return app; };

  // ===== 启动：读存档 → 迁移 → 刷新计划（与小程序 app.js 的 initStore 同步） =====
  function initStore() {
    var raw = Storage.load();
    if (raw) {
      var migrate = core('shared/utils/migrate');
      var plan = core('shared/utils/plan');
      var srs = core('shared/utils/srs');
      var WORDS = core('shared/data/words').WORDS;
      var s = migrate.migrateStore(raw);
      var fresh = srs.hasFreshWords(WORDS, s.words);
      s.plan = plan.refreshPlan(s, fresh);
      s.plan = plan.resumeActiveLevel(s.plan);
      _store = s;
      app.globalData.store = s;
      Storage.save(s);
    }
    app.globalData.ready = true;
  }

  // ===== 发音：沿用小程序同一个 TTS 服务，失败回退浏览器内置 =====
  var TTS_BASE = 'https://ash-english-audio-vercel.vercel.app/api/tts?text=';
  var audioEl = null;
  var speakToken = 0;

  function speak(text, rate, onEnd) {
    if (!text) { if (onEnd) onEnd(); return; }
    var my = ++speakToken;
    rate = rate || 1;
    if (!audioEl) {
      audioEl = new Audio();
      audioEl.preload = 'auto';
    }
    try { audioEl.pause(); } catch (e) {}
    audioEl.src = TTS_BASE + encodeURIComponent(text.trim());
    audioEl.playbackRate = rate;
    audioEl.onended = function () { if (my === speakToken && onEnd) onEnd(); };
    audioEl.onerror = function () {
      if (my !== speakToken) return;
      speakFallback(text, rate, onEnd);
    };
    var p = audioEl.play();
    if (p && p.catch) p.catch(function () {
      if (my === speakToken) speakFallback(text, rate, onEnd);
    });
  }

  // 浏览器内置语音合成。音色不如服务端，但断网/服务不可用时还能用
  function speakFallback(text, rate, onEnd) {
    if (!('speechSynthesis' in global)) { if (onEnd) onEnd(); return; }
    try {
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate || 1;
      u.onend = function () { if (onEnd) onEnd(); };
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    } catch (e) { if (onEnd) onEnd(); }
  }

  function stopSpeak() {
    speakToken++;
    try { if (audioEl) audioEl.pause(); } catch (e) {}
    try { if (global.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
  }

  // ===== 语音识别：Web Speech API；不支持时由调用方降级为自评 =====
  var SR = global.SpeechRecognition || global.webkitSpeechRecognition;
  var recog = null;

  function recognitionAvailable() { return !!SR; }

  function startRecognition(opts) {
    if (!SR) { opts.onError && opts.onError('当前浏览器不支持语音识别'); return; }
    try {
      recog = new SR();
      recog.lang = 'en-US';
      recog.interimResults = false;
      recog.maxAlternatives = 1;
      var got = '';
      recog.onresult = function (e) {
        got = e.results[0][0].transcript || '';
      };
      recog.onerror = function (e) {
        opts.onError && opts.onError(e.error === 'not-allowed' ? '需要麦克风权限' : '识别失败');
      };
      recog.onend = function () {
        opts.onRecordEnd && opts.onRecordEnd('');
        opts.onStop && opts.onStop(got);
      };
      recog.start();
    } catch (e) {
      opts.onError && opts.onError('无法启动识别');
    }
  }

  function stopRecognition() {
    try { if (recog) recog.stop(); } catch (e) {}
  }

  global.AshPlatform = {
    initStore: initStore,
    storage: Storage,
    speak: speak,
    stopSpeak: stopSpeak,
    recognitionAvailable: recognitionAvailable,
    startRecognition: startRecognition,
    stopRecognition: stopRecognition
  };
})(window);
