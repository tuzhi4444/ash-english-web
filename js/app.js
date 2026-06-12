// ========= Ash英语 Web版 - app.js =========
// 由微信小程序转换，适配 GitHub Pages 静态部署

(function() {
  const app = window.app = {};

  // ========= 工具函数 =========

  // localStorage 工具
  function _get(k) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch(e) { return null; }
  }
  function _set(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {}
  }

  // Toast
  app.toast = function(msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
    setTimeout(function() { el.classList.add('hidden'); }, 2200);
  };

  // Modal (Promise)
  app.modal = function(title, content, showInput, placeholder) {
    return new Promise(function(resolve) {
      var m = document.getElementById('modal');
      if (!m) { resolve(null); return; }
      document.getElementById('modal-title').textContent = title || '';
      document.getElementById('modal-content').textContent = content || '';
      var inp = document.getElementById('modal-input');
      if (showInput) {
        inp.style.display = 'block';
        inp.value = '';
        inp.placeholder = placeholder || '';
      } else {
        inp.style.display = 'none';
      }
      m.classList.remove('hidden');
      var ok = function() { m.classList.add('hidden'); resolve(inp.value || true); };
      var no = function() { m.classList.add('hidden'); resolve(null); };
      document.getElementById('modal-confirm').onclick = ok;
      document.getElementById('modal-cancel').onclick = no;
    });
  };

  // ========= 视图切换 =========
  function _showView(name) {
    var views = ['view-home', 'view-words', 'view-grammar'];
    views.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.classList.remove('active');
    });
    var target = document.getElementById('view-' + name);
    if (target) target.classList.add('active');
    var tabs = ['tab-home', 'tab-words', 'tab-grammar'];
    tabs.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.classList.remove('active');
    });
    var tab = document.getElementById('tab-' + name);
    if (tab) tab.classList.add('active');
  }

  app.showView = function(name) {
    _showView(name);
    if (name === 'home') _refreshHome();
    if (name === 'words') app.wordsShowIntro();
    if (name === 'grammar') app.grammarShowGuide();
  };

  app.goWords = function() { app.showView('words'); };
  app.goGrammar = function() { app.showView('grammar'); };

  // ========= 首页 =========
  function _refreshHome() {
    var store = _get('word_game_v2') || {};
    var hs = store.highScore || 0;
    var dn = (_get('ash_words_day_number') >= 1) ? _get('ash_words_day_number') : 1;
    var el1 = document.getElementById('home-word-desc');
    if (el1) el1.textContent = '第 ' + dn + ' 天 · 最高分 ' + hs;
    var gs = _get('ash_grammar_v1') || {};
    var el2 = document.getElementById('home-grammar-desc');
    if (el2) el2.textContent = '今日已答对 ' + (gs.done || 0) + '/50';
  }

  // ========= 发音工具 =========
  function speakWord(text) {
    if (!text) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch(e) {}
  }

  app.onWordsSpeak = function() {
    var st = wState;
    if (!st) return;
    var w = st.phase2Active ? st.phase2Deck[st.phase2Idx] : st.deck[st.idx];
    if (w) speakWord(w.en);
  };

  // ========= 单词学习：常量 & 存储 =========
  var W_KEY = 'word_game_v2';
  var W_BACKUP_KEY = 'word_game_v2_backup';
  var W_DAY_KEY = 'ash_words_day_number';
  var W_START_KEY = 'ash_words_start_date';
  var W_EBB_GAPS = [1, 2, 4, 7, 15];
  var W_DAILY_NEW = 20;
  var W_DAILY_MAX = 120;

  var wStore = null;
  var wState = null;

  function _normalizeStore(raw) {
    var d = { highScore:0, totalRuns:0, mastery:{}, ebbinghaus:{cursor:0,progress:{},lastPlanDate:'',todayQueue:[]}, favorites:{}, mastered:{}, learned:{}, customWords:[], autoSpeak:true };
    var x = Object.assign({}, d, raw || {});
    x.ebbinghaus = Object.assign({}, d.ebbinghaus, x.ebbinghaus || {});
    x.favorites = _normalizeRecordKeys(x.favorites || {});
    x.mastered = _normalizeRecordKeys(x.mastered || {});
    x.learned = _normalizeRecordKeys(x.learned || {});
    x.mastery = _normalizeRecordKeys(x.mastery || {});
    x.customWords = Array.isArray(x.customWords) ? x.customWords : [];
    return x;
  }

  function _normalizeRecordKeys(record) {
    var out = {};
    var src = record || {};
    Object.keys(src).forEach(function(key) {
      var ck = String(key || '').trim().toLowerCase();
      if (!ck) return;
      out[ck] = src[key];
    });
    return out;
  }

  function wLoadStore() {
    try {
      var cur = _get(W_KEY);
      if (cur) return _normalizeStore(cur);
    } catch(e) {}
    try {
      var b = _get(W_BACKUP_KEY);
      if (b) { var d = _normalizeStore(b); _set(W_KEY, d); return d; }
    } catch(e) {}
    return _normalizeStore({});
  }

  function wSaveStore(store) {
    _set(W_KEY, store);
    _set(W_BACKUP_KEY, store);
  }

  function wGetStartDate() {
    var saved = _get(W_START_KEY);
    if (saved && /^\d{4}-\d{2}-\d{2}$/.test(saved)) return new Date(saved + 'T00:00:00');
    var now = new Date();
    var ymd = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
    _set(W_START_KEY, ymd);
    return new Date(ymd + 'T00:00:00');
  }

  function wGetSelectedDayNumber() {
    var raw = _get(W_DAY_KEY);
    if (raw === null || raw === undefined) { _set(W_DAY_KEY, 1); return 1; }
    var n = Number(raw || 1);
    return (Number.isInteger(n) && n >= 1) ? n : 1;
  }

  function wTodayStr() {
    var dayNum = wGetSelectedDayNumber();
    var d = wGetStartDate();
    d.setDate(d.getDate() + dayNum - 1);
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }

  function wAddDays(dateStr, n) {
    var d = new Date(dateStr + 'T00:00:00');
    d.setDate(d.getDate() + n);
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }

  function getWordList(store) {
    var base = Array.isArray(WORDS_DATA) ? WORDS_DATA : [];
    var custom = Array.isArray(store.customWords) ? store.customWords : [];
    if (!custom.length) return base;
    var map = new Map();
    base.concat(custom).forEach(function(w) {
      if (!w || !w.en) return;
      map.set(String(w.en).trim().toLowerCase(), { zh: String(w.zh||'').trim(), en: String(w.en).trim() });
    });
    return Array.from(map.values());
  }

  function buildDayPlanQueue(store, dayNum) {
    var words = getWordList(store);
    var picked = [];
    var seen = new Set();
    function addDayChunk(d) {
      var s = (d - 1) * W_DAILY_NEW;
      var e = Math.min(s + W_DAILY_NEW, words.length);
      for (var i = s; i < e; i++) {
        var w = words[i];
        if (!w) continue;
        if (store.mastered && store.mastered[w.en]) continue;
        if (seen.has(w.en)) continue;
        seen.add(w.en);
        picked.push(w);
      }
    }
    var reviewDays = W_EBB_GAPS.map(function(g) { return dayNum - g; }).filter(function(d) { return d >= 1; });
    reviewDays.forEach(addDayChunk);
    addDayChunk(dayNum);
    return picked.slice(0, W_DAILY_MAX);
  }

  function updateEbbinghaus(store, word, type) {
    var t = wTodayStr();
    var e = store.ebbinghaus;
    var key = word.en;
    var old = e.progress[key] || { stage: 0, learned: t, nextDue: t };
    var stage = old.stage;
    var nextDue = old.nextDue;
    if (type === 'know') {
      stage = Math.min(stage + 1, W_EBB_GAPS.length - 1);
      nextDue = wAddDays(t, 1);
    } else {
      stage = 0;
      nextDue = wAddDays(t, 1);
    }
    e.progress[key] = { stage: stage, learned: old.learned || t, nextDue: nextDue };
  }

  function _masteryOf(w) {
    var store = wStore || wLoadStore();
    return Math.max(0, Number(((store.mastery || {})[w.en] || 0)));
  }
  function _setMastery(w, v) {
    var store = wStore || wLoadStore();
    if (!store.mastery) store.mastery = {};
    store.mastery[w.en] = Math.max(0, Math.floor(v));
  }

  function markLearned(w) {
    if (!w || !w.en) return;
    var store = wStore || wLoadStore();
    if (!store.learned) store.learned = {};
    var key = String(w.en).trim().toLowerCase();
    var today = wTodayStr();
    var old = store.learned[key] || {};
    store.learned[key] = { firstSeen: old.firstSeen || today, lastSeen: today };
    wSaveStore(store);
  }

  // ========= 单词页：显示/隐藏子视图 =========
  function _hideAllWordsViews() {
    var ids = ['words-intro', 'words-game', 'words-result', 'words-mastered',
               'words-favorites', 'words-learned', 'words-stats',
               'words-tomorrow', 'words-wordpool', 'words-custom'];
    ids.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  }

  app.wordsShowIntro = function() {
    wStore = wLoadStore();
    var dn = wGetSelectedDayNumber();
    var hs = wStore.highScore || 0;
    var el1 = document.getElementById('words-day-badge');
    if (el1) el1.textContent = '第 ' + dn + ' 天 · 艾宾浩斯计划';
    var el2 = document.getElementById('words-high-score');
    if (el2) el2.textContent = hs;
    var el3 = document.getElementById('words-day-num');
    if (el3) el3.textContent = dn;
    _hideAllWordsViews();
    var intro = document.getElementById('words-intro');
    if (intro) intro.style.display = 'block';
  };

  app.wordsShowIntro = app.wordsShowIntro;

  // ========= 开始游戏 =========
  function startWordGame(mode) {
    wStore = wLoadStore();
    var dn = wGetSelectedDayNumber();
    var pool = buildDayPlanQueue(wStore, dn);
    if (!pool.length) { app.toast('今日词库为空'); return; }
    var deck = pool.slice();
    wState = {
      mode: mode, pool: pool, deck: deck,
      idx: 0, revealed: false,
      score: 0, streak: 0, maxStreak: 0,
      know: 0, dont: 0,
      wrongMap: new Map(), checkedInput: false,
      autoSpeak: true,
      spellGate: null,
      phase2Active: false, phase2Deck: deck, phase2Idx: 0, phase2Round: 2, phase2WrongMap: new Map(),
      waitingConfirm: false
    };
    _hideAllWordsViews();
    var game = document.getElementById('words-game');
    if (game) game.style.display = 'block';
    _renderWordCard();
  }

  app.wordsStartCard = function() { startWordGame('card'); };
  app.wordsStartDictation = function() { startWordGame('dictation'); };
  app.wordsStartSpelling = function() { startWordGame('spelling'); };

  // ========= 渲染当前题 =========
  function _renderWordCard() {
    var st = wState; if (!st) return;
    var w = st.phase2Active ? st.phase2Deck[st.phase2Idx] : st.deck[st.idx];
    if (!w) { _finishWordGame(); return; }
    markLearned(w);
    st.revealed = false; st.checkedInput = false; st.waitingConfirm = false;
    var left = st.phase2Active ? (st.phase2Deck.length - st.phase2Idx) : (st.deck.length - st.idx);
    var labels = { card: "普通翻卡模式", dictation: "听写模式", spelling: "拼写模式" };
    var modeInfo = "";
    if (st.phase2Active) modeInfo = "第" + st.phase2Round + "遍拼写校验 · 错词自动进入下一遍";
    else if (st.spellGate) modeInfo = "拼写通过后才可继续";
    else modeInfo = labels[st.mode] || "";
    var showInput = (st.mode === "dictation" || st.mode === "spelling" || !!st.spellGate || st.phase2Active);
    var flipText = "翻卡";
    var flipDisabled = false;
    if (st.phase2Active) { flipText = "第" + st.phase2Round + "遍拼写"; flipDisabled = true; }
    else if (st.spellGate) { flipText = "请先完成拼写"; flipDisabled = true; }
    else if (st.mode === "spelling") { flipText = "拼写后自动翻卡"; flipDisabled = true; }
    var promptText = w ? w.zh : "";
    var answerText = w ? w.en : "";
    var tipLines = [];
    try { if (window.WordAnalyzer && window.WordAnalyzer.generateTip) { var t = window.WordAnalyzer.generateTip(answerText); if (t) tipLines = t.split(String.fromCharCode(10)).filter(Boolean); } } catch(e) {}
    // DOM
    var _el;
    _el = document.getElementById("wg-prompt"); if (_el) _el.textContent = promptText;
    _el = document.getElementById("wg-answer"); if (_el) { _el.textContent = answerText; _el.style.display = "none"; }
    _el = document.getElementById("wg-placeholder"); if (_el) _el.style.display = "";
    _el = document.getElementById("wg-tip-box"); if (_el) _el.style.display = (tipLines.length > 0) ? "block" : "none";
    if (tipLines.length > 0) {
      _el = document.getElementById("wg-tip-lines"); if (_el) { _el.innerHTML = ""; tipLines.forEach(function(tl) {
        var sp = document.createElement("span"); sp.className = "memory-tip-text"; sp.textContent = tl; _el.appendChild(sp);
      }); }
    }
    _el = document.getElementById("wg-mode-text"); if (_el) _el.textContent = modeInfo;
    _el = document.getElementById("wg-progress"); if (_el) _el.textContent = (st.phase2Active ? st.phase2Idx : st.idx) + 1 + "/" + st.deck.length;
    _el = document.getElementById("wg-score"); if (_el) _el.textContent = st.score;
    _el = document.getElementById("wg-high"); if (_el) _el.textContent = (wStore.highScore||0);
    _el = document.getElementById("wg-streak"); if (_el) _el.textContent = st.streak;
    _el = document.getElementById("wg-remain"); if (_el) _el.textContent = left;
    _el = document.getElementById("wg-spell-box"); if (_el) _el.style.display = showInput ? "block" : "none";
    _el = document.getElementById("wg-spell-input"); if (_el) _el.value = "";
    _el = document.getElementById("wg-spell-result"); if (_el) _el.textContent = "";
    _el = document.getElementById("wg-confirm-wrong"); if (_el) _el.style.display = "none";
    _el = document.getElementById("wg-flip-btn"); if (_el) { _el.textContent = flipText; _el.disabled = flipDisabled; }
    _el = document.getElementById("wg-know-btn"); if (_el) _el.disabled = true;
    _el = document.getElementById("wg-dont-btn"); if (_el) _el.disabled = true;
    // 收藏按钮
    var isFav = !!(wStore.favorites && w && wStore.favorites[w.en]);
    _el = document.getElementById("wg-fav-btn"); if (_el) { _el.textContent = isFav ? "★ 已收藏" : "☆ 收藏"; _el.classList.toggle("on", isFav); }
    // 自动发音
    if (st.autoSpeak && !st.phase2Active && !st.spellGate) {
      if (st.mode === "dictation" || st.mode === "spelling") speakWord(answerText);
    }
  }

  // ========= 翻卡 =========
  app.onWordsFlip = function() {
    var st = wState; if (!st || st.revealed) return;
    if (st.phase2Active || st.spellGate || st.mode === "spelling") return;
    st.revealed = true;
    var w = st.deck[st.idx];
    var _el;
_el = document.getElementById("wg-answer"); if (_el) _el.style.display = "block";
_el = document.getElementById("wg-placeholder"); if (_el) _el.style.display = "none";
_el = document.getElementById("wg-card"); if (_el) _el.classList.add("revealed");
_el = document.getElementById("wg-flip-btn"); if (_el) _el.disabled = true;
_el = document.getElementById("wg-know-btn"); if (_el) _el.disabled = false;
_el = document.getElementById("wg-dont-btn"); if (_el) _el.disabled = false;
    if (st.autoSpeak && w) speakWord(w.en);
  };

  // ========= 输入 =========
  app.onWordsInput = function(e) { if (wState) wState._inputVal = e.target.value; };
  app.onWordsInputKeydown = function(e) { if (e.key === "Enter") app.onWordsCheckInput(); };

  // ========= 提交拼写 =========
  app.onWordsCheckInput = function() {
    var st = wState; if (!st) return; if (st.waitingConfirm) return;
    var w = st.phase2Active ? st.phase2Deck[st.phase2Idx] : st.deck[st.idx];
    var ans = String(w.en).trim().toLowerCase();
    var user = (document.getElementById("wg-spell-input").value || "").trim().toLowerCase();
    if (!user) { document.getElementById("wg-spell-result").textContent = "先输入再提交"; return; }
    var ok = (user === ans);
    // 第二遍拼写校验
    if (st.phase2Active) {
      if (!ok) {
        st.wrongMap.set(w.en, w); st.phase2WrongMap.set(w.en, w); st.waitingConfirm = true;
        document.getElementById("wg-spell-result").textContent = "正确答案：" + w.en;
        document.getElementById("wg-confirm-wrong").style.display = "flex"; return;
      }
      document.getElementById("wg-spell-result").textContent = "拼写正确";
      st.phase2Idx++;
      if (st.phase2Idx >= st.phase2Deck.length) { setTimeout(_advancePhase2Round, 600); }
      else { setTimeout(_renderWordCard, 600); } return;
    }
    // 拼写闸门
    if (st.spellGate) {
      if (!ok) {
        st.waitingConfirm = true; document.getElementById("wg-spell-result").textContent = "正确答案：" + w.en;
        document.getElementById("wg-confirm-wrong").style.display = "flex"; return;
      }
      var gt = st.spellGate; st.spellGate = null;
      var m = _masteryOf(w);
      if (gt === "know") { st.score += 2; st.know++; st.streak++; st.maxStreak = Math.max(st.maxStreak, st.streak); _setMastery(w, m+1); }
      else { st.dont++; st.streak = 0; _setMastery(w, m-1); st.wrongMap.set(w.en, w); }
      updateEbbinghaus(wStore, w, gt); wSaveStore(wStore);
      document.getElementById("wg-spell-result").textContent = "拼写正确";
      setTimeout(_nextWord, 600); return;
    }
    // 拼写模式
    if (st.mode === "spelling") {
      if (!ok) { st.waitingConfirm = true; document.getElementById("wg-spell-result").textContent = "正确答案：" + w.en; document.getElementById("wg-confirm-wrong").style.display = "flex"; return; }
      document.getElementById("wg-spell-result").textContent = "拼写正确";
      setTimeout(function() { _judgeWord("know"); }, 450); return;
    }
    // 听写模式
    if (!ok) { st.waitingConfirm = true; document.getElementById("wg-spell-result").textContent = "正确答案：" + w.en; document.getElementById("wg-confirm-wrong").style.display = "flex"; return; }
    document.getElementById("wg-spell-result").textContent = "拼写正确";
    st.revealed = true;
    var elA = document.getElementById("wg-answer"); if (elA) elA.style.display = "block";
    var elPh = document.getElementById("wg-placeholder"); if (elPh) elPh.style.display = "none";
    var elC = document.getElementById("wg-card"); if (elC) elC.classList.add("revealed");
    var elFb = document.getElementById("wg-flip-btn"); if (elFb) elFb.disabled = true;
    var elKb = document.getElementById("wg-know-btn"); if (elKb) elKb.disabled = false;
    var elDb = document.getElementById("wg-dont-btn"); if (elDb) elDb.disabled = false;
  };

  // ========= 错误确认 =========
  app.onWordsConfirmWrong = function() {
    var st = wState; if (!st || !st.waitingConfirm) return; st.waitingConfirm = false;
    document.getElementById("wg-confirm-wrong").style.display = "none";
    if (st.phase2Active) { st.phase2Idx++; if (st.phase2Idx >= st.phase2Deck.length) { _advancePhase2Round(); } else { _renderWordCard(); } return; }
    if (st.spellGate) {
      var gt = st.spellGate; st.spellGate = null;
      var w = st.deck[st.idx];
      var m = _masteryOf(w); st.dont++; st.streak = 0; _setMastery(w, m-1); st.wrongMap.set(w.en, w);
      updateEbbinghaus(wStore, w, "dont"); wSaveStore(wStore); _nextWord(); return;
    }
    if (st.mode === "spelling") { _judgeWord("dont"); return; }
    // 听写翻卡
    st.revealed = true;
    var elA = document.getElementById("wg-answer"); if (elA) elA.style.display = "block";
    var elPh = document.getElementById("wg-placeholder"); if (elPh) elPh.style.display = "none";
    var elC = document.getElementById("wg-card"); if (elC) elC.classList.add("revealed");
    var elFb = document.getElementById("wg-flip-btn"); if (elFb) elFb.disabled = true;
    var elKb = document.getElementById("wg-know-btn"); if (elKb) elKb.disabled = false;
    var elDb = document.getElementById("wg-dont-btn"); if (elDb) elDb.disabled = false;
  };

  // ========= 判断 =========
  app.onWordsKnow = function() { _judgeWord("know"); };
  app.onWordsDont = function() { _judgeWord("dont"); };

  function _startSpellGate(type) {
    var st = wState; st.spellGate = type; st.revealed = false;
    var elA = document.getElementById("wg-answer"); if (elA) elA.style.display = "none";
    var elPh = document.getElementById("wg-placeholder"); if (elPh) elPh.style.display = "";
    var elC = document.getElementById("wg-card"); if (elC) elC.classList.remove("revealed");
    var elSb = document.getElementById("wg-spell-box"); if (elSb) elSb.style.display = "block";
    var elFb = document.getElementById("wg-flip-btn"); if (elFb) { elFb.disabled = true; elFb.textContent = "请先完成拼写"; }
    var elKb = document.getElementById("wg-know-btn"); if (elKb) elKb.disabled = true;
    var elDb = document.getElementById("wg-dont-btn"); if (elDb) elDb.disabled = true;
  }

  function _judgeWord(type) {
    var st = wState; if (!st) return;
    var w = st.deck[st.idx]; var m = _masteryOf(w);
    if (type === "dont" && !st.spellGate && st.mode !== "spelling") { _startSpellGate(type); return; }
    if (type === "know") { st.score += 2; st.know++; st.streak++; st.maxStreak = Math.max(st.maxStreak, st.streak); _setMastery(w, m+1); }
    else { st.dont++; st.streak = 0; _setMastery(w, m-1); st.wrongMap.set(w.en, w); }
    updateEbbinghaus(wStore, w, type); wSaveStore(wStore);
    _nextWord();
  }

  // ========= 流程控制 =========
  function _nextWord() {
    var st = wState; if (!st) return; st.idx++;
    if (st.idx >= st.deck.length) { _startSecondPass(); return; }
    _renderWordCard();
  }

  function _startSecondPass() {
    var st = wState; st.phase2Active = true; st.phase2Deck = st.deck.slice();
    st.phase2Idx = 0; st.phase2Round = 2; st.phase2WrongMap = new Map();
    app.modal("第一遍完成", "进入第二遍拼写校验：错误词会自动进入下一遍，直到0错误才完成今日任务。", false).then(function() { _renderWordCard(); });
  }

  function _advancePhase2Round() {
    var st = wState;
    var wrongList = Array.from(st.phase2WrongMap.values());
    if (!wrongList.length) { _finishWordGame(); return; }
    st.phase2Round += 1;
    if (st.phase2Round >= 3) { for (var i=wrongList.length-1; i>0; i--) { var j=Math.floor(Math.random()*(i+1)); [wrongList[i],wrongList[j]]=[wrongList[j],wrongList[i]]; } }
    st.phase2Deck = wrongList; st.phase2Idx = 0; st.phase2WrongMap = new Map();
    app.modal("进入第"+st.phase2Round+"遍", "上一遍仍有"+wrongList.length+"个错词"+(st.phase2Round>=3?"，顺序已随机打乱":"")+"，继续拼写直到全对。", false)
      .then(function() { _renderWordCard(); });
  }

  function _finishWordGame() {
    var st = wState; var store = wStore;
    store.totalRuns = (store.totalRuns||0)+1;
    var isNew = st.score > (store.highScore||0); if (isNew) store.highScore = st.score;
    wSaveStore(store);
    document.getElementById("words-game").style.display = "none";
    var result = document.getElementById("words-result"); if (result) result.style.display = "block";
    document.getElementById("wr-title").textContent = isNew ? "新纪录！" : "完成今日任务";
    document.getElementById("wr-score").textContent = st.score;
    document.getElementById("wr-high").textContent = store.highScore;
    document.getElementById("wr-know").textContent = st.know;
    document.getElementById("wr-dont").textContent = st.dont;
    document.getElementById("wr-streak").textContent = st.maxStreak;
    document.getElementById("wr-runs").textContent = store.totalRuns;
    var rb = document.getElementById("wr-replay-btn"); if (rb) rb.style.display = (st.wrongMap.size > 0) ? "block" : "none";
  }

  app.wordsRestart = function() {
    var st = wState; if (!st) { app.wordsShowIntro(); return; }
    startWordGame(st.mode);
  };

  function startWordGameWithPool(mode, pool) {
    wStore = wLoadStore();
    var deck = pool.slice();
    wState = { mode:mode, pool:pool, deck:deck, idx:0, revealed:false, score:0, streak:0, maxStreak:0,
      know:0, dont:0, wrongMap:new Map(), checkedInput:false, autoSpeak:true, spellGate:null,
      phase2Active:false, phase2Deck:deck, phase2Idx:0, phase2Round:2, phase2WrongMap:new Map(), waitingConfirm:false };
    _hideAllWordsViews();
    var g = document.getElementById("words-game");
    if (g) g.style.display = "block";
    _renderWordCard();
  }


  app.wordsReplayWrong = function() {
    var st = wState;
    if (!st || !st.wrongMap.size) return;
    var pool = Array.from(st.wrongMap.values());
    wState = null;
    startWordGameWithPool(st.mode, pool);
  };


  app.onWordsToggleFav = function() {
    var st = wState; if (!st) return;
    var w = st.phase2Active ? st.phase2Deck[st.phase2Idx] : st.deck[st.idx];
    if (!w) return;
    if (!wStore.favorites) wStore.favorites = {};
    if (wStore.favorites[w.en]) delete wStore.favorites[w.en]; else wStore.favorites[w.en] = true;
    wSaveStore(wStore); _renderWordCard();
  };


  app.onWordsDeleteWord = function() {
    var st = wState; if (!st) return;
    var w = st.phase2Active ? st.phase2Deck[st.phase2Idx] : st.deck[st.idx];
    if (!w) return;
    if (!wStore.mastered) wStore.mastered = {};
    wStore.mastered[w.en] = true; wSaveStore(wStore);
    app.toast("已删除：" + w.en);
    st.dont++; st.streak=0; st.wrongMap.set(w.en,w);
    updateEbbinghaus(wStore,w,"dont"); _nextWord();
  };


  app.wordsToggleTools = function() {
    var p = document.getElementById("wg-tools-panel");
    var arrow = document.getElementById("wg-tools-arrow");
    var visible = p && p.style.display !== "none";
    if (p) p.style.display = visible ? "none" : "block";
    if (arrow) arrow.textContent = visible ? "▼" : "▲";
    if (visible) return;
    var toolsHTML = "";
    var items = [
      ["app.wordsShowStats","学习统计"],
      ["app.wordsShowLearned","已学习单词"],
      ["app.wordsShowFavorites","收藏单词"],
      ["app.wordsFavoriteDrill","练收藏词"],
      ["app.wordsWrongDrill","错词重练"],
      ["app.wordsShowTomorrow","明日计划"],
      ["app.wordsShowMastered","已掌握管理"],
      ["app.wordsSelectDay","切换天数"]
    ];
    items.forEach(function(it){ toolsHTML += '<div class="tool-item" onclick="'+it[0]+'()">'+it[1]+'</div>'; });
    p.innerHTML = toolsHTML;
  };


  function _findWordByEn(en) {
    var store = wStore || wLoadStore();
    var all = getWordList(store);
    for (var i=0;i<all.length;i++) { if (all[i].en === en) return all[i]; }
    return null;
  }

  function _pickWordsByEns(ens) {
    var out = [];
    for (var i=0;i<ens.length;i++) { var w=_findWordByEn(ens[i]); if(w) out.push(w); }
    return out;
  }


  app.wordsSelectDay = function() {
    var cur = wGetSelectedDayNumber();
    app.modal("选择学习天数", "当前：第"+cur+"天\n请输入天数：", true)
      .then(function(v) {
        if (!v) return;
        var n = Number(v.trim());
        if (!Number.isInteger(n) || n<1) { app.toast("请输入正整数"); return; }
        _set(W_DAY_KEY, n);
        app.toast("已切换到第"+n+"天");
        setTimeout(function(){startWordGame("card");},1000);
      });
  };


  app.wordsShowStats = function() {
    wStore = wLoadStore(); var s=wStore; var dn=wGetSelectedDayNumber();
    document.getElementById("ws-runs").textContent = s.totalRuns||0;
    document.getElementById("ws-high").textContent = s.highScore||0;
    document.getElementById("ws-learned").textContent = Object.keys(s.learned||{}).length;
    document.getElementById("ws-mastered").textContent = Object.keys(s.mastered||{}).length;
    document.getElementById("ws-fav").textContent = Object.keys(s.favorites||{}).length;
    document.getElementById("ws-day").textContent = dn;
    _hideAllWordsViews();
    document.getElementById("words-stats").style.display = "block";
  };


  app.wordsShowLearned = function() {
    wStore = wLoadStore();
    var list = _pickWordsByEns(Object.keys(wStore.learned||{}));
    var el = document.getElementById("wl-list");
    if(el){
      el.innerHTML="";
      list.forEach(function(w){
        var div = document.createElement("div");
        div.className = "word-list-item";
        div.innerHTML = '<div class="wli-left"><span class="wli-zh">'+w.zh+'</span><span class="wli-en">'+w.en+'</span></div>';
        el.appendChild(div);
      });
      if(!list.length) el.innerHTML='<div class="empty-tip">暂无</div>';
    }
    document.getElementById("wl-title").textContent="已学习单词（"+list.length+"）";
    _hideAllWordsViews();
    document.getElementById("words-learned").style.display = "block";
  };


  app.wordsShowFavorites = function() {
    wStore = wLoadStore();
    var list = _pickWordsByEns(Object.keys(wStore.favorites||{}));
    var el = document.getElementById("wf-list");
    if(el){
      el.innerHTML="";
      list.forEach(function(w){
        var div = document.createElement("div");
        div.className = "word-list-item";
        div.innerHTML = "<div class=\"wli-left\"><span class=\"wli-zh\">"+w.zh+"</span><span class=\"wli-en\">"+w.en+"</span></div><button class=\"wli-btn\" onclick=\"app._unfav('"+w.en+"')\">\u53D6\u6D88</button>";
        el.appendChild(div);
      });
      if(!list.length) el.innerHTML='<div class="empty-tip">暂无</div>';
    }
    var db = document.getElementById("wf-drill-btn");
    if(db) db.style.display = list.length>0?"block":"none";
    document.getElementById("wf-title").textContent="收藏单词（"+list.length+"）";
    _hideAllWordsViews();
    document.getElementById("words-favorites").style.display = "block";
  };

  app._unfav = function(en) {
    wStore = wLoadStore();
    if (wStore.favorites && wStore.favorites[en]) delete wStore.favorites[en];
    wSaveStore(wStore);
    this.wordsShowFavorites();
  };

  app.wordsFavoriteDrill = function() {
    wStore = wLoadStore();
    var list = _pickWordsByEns(Object.keys(wStore.favorites||{}));
    if(!list.length){app.toast("没有收藏词");return;}
    wState=null;
    startWordGameWithPool("card",list);
  };


  // 错词重练（菜单入口）
  app.wordsWrongDrillFromMenu = function() {
    var st = wState;
    if (!st || !st.wrongMap.size) { app.toast("没有错词记录"); return; }
    var pool = Array.from(st.wrongMap.values());
    wState = null;
    startWordGameWithPool("card", pool);
  };


  app.wordsShowMastered = function() {
    wStore = wLoadStore();
    var list = _pickWordsByEns(Object.keys(wStore.mastered||{}));
    var el = document.getElementById("wm-list");
    if(el){
      el.innerHTML="";
      list.forEach(function(w){
        var div = document.createElement("div");
        div.className = "word-list-item";
        div.innerHTML = "<div class=\"wli-left\"><span class=\"wli-zh\">"+w.zh+"</span><span class=\"wli-en\">"+w.en+"</span></div><button class=\"wli-btn wli-btn-restore\" onclick=\"app._unmaster('"+w.en+"')\">\u6062\u590D</button>";
        el.appendChild(div);
      });
      if(!list.length) el.innerHTML='<div class="empty-tip">暂无</div>';
    }
    document.getElementById("wm-title").textContent="已掌握词（"+list.length+"）";
    _hideAllWordsViews();
    document.getElementById("words-mastered").style.display = "block";
  };


  app._unmaster = function(en) {
    wStore = wLoadStore();
    if (wStore.mastered && wStore.mastered[en]) delete wStore.mastered[en];
    wSaveStore(wStore);
    this.wordsShowMastered();
  };


  app.wordsShowTomorrow = function() {
    var dn = wGetSelectedDayNumber()+1;
    var store = wLoadStore();
    var queue = buildDayPlanQueue(store,dn);
    var newWords = []; var revWords = [];
    queue.forEach(function(w){
      var key = w.en;
      if (store.learned && store.learned[key]) revWords.push(w);
      else newWords.push(w);
    });
    var nl = document.getElementById("wt-new-list");
    if(nl){nl.innerHTML="";newWords.forEach(function(w){
      nl.innerHTML += '<div class="word-list-item"><span class="wli-zh">'+w.zh+'</span><span class="wli-en">'+w.en+'</span></div>';
    });}
    var rl = document.getElementById("wt-review-list");
    if(rl){rl.innerHTML="";revWords.forEach(function(w){
      rl.innerHTML += '<div class="word-list-item"><span class="wli-zh">'+w.zh+'</span><span class="wli-en">'+w.en+'</span></div>';
    });}
    document.getElementById("wt-new-label").textContent = "明日新词（"+newWords.length+"）";
    document.getElementById("wt-review-label").textContent = "明日复习（"+revWords.length+"）";
    _hideAllWordsViews();
    document.getElementById("words-tomorrow").style.display = "block";
  };


  // ========= 词库管理 =========
  app.wordsShowWordPool = function() {
    wStore = wLoadStore();
    var words = getWordList(wStore);
    var total = words.length;
    var deletedCount = 0;
    for (var k in (wStore.mastered||{})) { if(wStore.mastered[k]) deletedCount++; }
    document.getElementById("wp-title").textContent = "词库管理（"+(total-deletedCount)+"/"+total+"）";
    document.getElementById("wp-search").value = "";
    this._wpFilter = "all";
    this._renderWordPool(words);
    _hideAllWordsViews();
    document.getElementById("words-wordpool").style.display = "block";
  };

  app._wpSearchText = "";
  app._wpFilter = "all";

  app.onWordPoolSearch = function(e) {
    app._wpSearchText = e.target.value.trim().toLowerCase();
    wStore = wLoadStore();
    app._renderWordPool(getWordList(wStore));
  };

  app.onWordPoolFilter = function(filter, e) {
    app._wpFilter = filter;
    // update tab UI
    var tabs = document.querySelectorAll(".wpt-tab");
    for(var i=0;i<tabs.length;i++) tabs[i].classList.remove("active");
    if(e && e.target) e.target.classList.add("active");
    else if(filter === "all") {var t0=document.querySelectorAll(".wpt-tab")[0];if(t0)t0.classList.add("active");}
    else if(filter==="active"){var t1=document.querySelectorAll(".wpt-tab")[1];if(t1)t1.classList.add("active");}
    else{var t2=document.querySelectorAll(".wpt-tab")[2];if(t2)t2.classList.add("active");}
    wStore = wLoadStore();
    app._renderWordPool(getWordList(wStore));
  };

  app._renderWordPool = function(allWords) {
    var el = document.getElementById("wp-list"); if(!el) return;
    el.innerHTML = "";
    var search = app._wpSearchText;
    var filter = app._wpFilter;
    allWords.forEach(function(w){
      if(search && String(w.en).toLowerCase().indexOf(search)<0 && String(w.zh).indexOf(search)<0) return;
      var isDel = !!(wStore.mastered && wStore.mastered[w.en]);
      if(filter==="active"&&isDel)return; if(filter==="deleted"&&!isDel)return;
      var div = document.createElement("div");
      div.className = "word-list-item";
      div.innerHTML =
        "<div class=\"wli-left\"><span class=\"wli-zh\">"+w.zh+"</span><span class=\"wli-en\">"+w.en+"</span></div>" +
        "<button class=\"wli-btn "+(isDel?"wli-btn-restore":"")+"\" onclick=\"app.onToggleWordDelete('"+w.en+"')\">"+(isDel?"\u6062\u590D":"\u5220\u9664")+"</button>";
      el.appendChild(div);
    });
    if(!el.children.length) el.innerHTML='<div class="empty-tip">没有匹配的单词</div>';
  };


  app.onToggleWordDelete = function(en) {
    wStore = wLoadStore();
    if (!wStore.mastered) wStore.mastered = {};
    if (wStore.mastered[en]) delete wStore.mastered[en];
    else wStore.mastered[en] = true;
    wSaveStore(wStore);
    this.wordsShowWordPool();
  };


  // ========= 自定义单词表 =========
  app.wordsShowCustomWords = function() {
    wStore = wLoadStore();
    document.getElementById("wc-en-input").value="";
    document.getElementById("wc-zh-input").value="";
    document.getElementById("wc-batch-input").value="";
    this._renderCustomWords();
    _hideAllWordsViews();
    document.getElementById("words-custom").style.display="block";
  };

  app._renderCustomWords = function() {
    var list = wStore.customWords || [];
    document.getElementById("wc-title").textContent="自定义单词表（"+list.length+"）";
    var el = document.getElementById("wc-list");
    if(!el) return;
    el.innerHTML = "";
    list.forEach(function(w,i){
      var div = document.createElement("div");
      div.className = "word-list-item";
      div.innerHTML =
        '<div class="wli-left"><span class="wli-zh">'+(w.zh||"")+'</span><span class="wli-en">'+(w.en||"")+'</span></div>' +
        '<button class="wli-btn" onclick="app.onRemoveCustomWord('+i+')">删除</button>';
      el.appendChild(div);
    });
    if(!list.length)el.innerHTML='<div class="empty-tip">暂无</div>';
  };


  app.onAddCustomWord = function() {
    var enEl = document.getElementById("wc-en-input");
    var zhEl = document.getElementById("wc-zh-input");
    if (!enEl || !zhEl) return;
    var en = enEl.value.trim(); var zh = zhEl.value.trim();
    if(!en || !zh){app.toast("请填写英文和中文");return;}
    wStore = wLoadStore(); if(!wStore.customWords)wStore.customWords=[];
    wStore.customWords.push({en:en,zh:zh});wSaveStore(wStore);app.toast("添加成功");
    enEl.value="";zhEl.value="";this._renderCustomWords();
  };

  app.onImportCustomWords = function() {
    var ta = document.getElementById("wc-batch-input");
    if(!ta){return;}
    var text = ta.value.trim();if(!text){app.toast("请输入内容");return;}
    var lines = text.split(/[\r\n]+/).filter(function(l){return l.trim();});
    var added=0;var skip=0;
    lines.forEach(function(line){
      var parts=line.split(/s+/);if(parts.length<2){skip++;return;}
      var en=parts[0].trim();var zh=parts.slice(1).join("").trim();
      if(!en||!zh){skip++;return;}
      wStore=wLoadStore();if(!wStore.customWords)wStore.customWords=[];
      wStore.customWords.push({en:en,zh:zh});wSaveStore(wStore);added++;
    });
    ta.value="";this._renderCustomWords();app.toast("导入完成！+添加"+added+"，跳过"+skip);
  };


  app.onRemoveCustomWord = function(idx) {
    wStore = wLoadStore();
    if(Array.isArray(wStore.customWords)&&idx>=0&&idx<wStore.customWords.length){
      wStore.customWords.splice(idx,1);wSaveStore(wStore);
    }
    this._renderCustomWords();
  };


  // ========= 语法学习 =========
  var gState = null; // 语法状态
  var G_KEY = "ash_grammar_v1";

  function gLoad() { try { var v=_get(G_KEY); return v?v:{}; } catch(e){return {};} }
  function gSave(v) { _set(G_KEY,v); }


  // 解析 LESSON_GUIDE_MD 为课程列表
  function parseLessonsFromGuide() {
    if (!LESSON_GUIDE_MD || typeof LESSON_GUIDE_MD !== 'string') return [];
    var lines = LESSON_GUIDE_MD.split("\n");
    var lessons = [];
    var current = null;
    for (var i=0;i<lines.length;i++){
      var line = lines[i].trim();
      // 匹配 ## Lesson N 标题 或 ## Lesson N.标题
      var m = line.match(/^##s+Lessons+(d+)[.s]*(.*)$/i);
      if(m){
        if(current) lessons.push(current);
        current = { index: Number(m[1]), title: m[2]||"Lesson "+m[1], content: "" };
        continue;
      }
      if(current && line){
        current.content += (current.content ? "\n" : "") + line;
      }
    }
    if(current) lessons.push(current);
    return lessons;
  }

  var gLessonList = parseLessonsFromGuide();


  app.grammarShowGuide = function() {
    document.getElementById("grammar-guide").style.display="block";
    document.getElementById("grammar-game").style.display="none";
    document.getElementById("grammar-finish").style.display="none";
    this._grammarRefreshBadge();
    this._renderGrammarLessonList();
  };

  app._grammarRefreshBadge = function() {
    var gs = gLoad();
    document.getElementById("gg-badge").textContent = "今日巷答对 " + (gs.done||0) + "/50";
  };


  app.onGrammarPickerClick = function() {
    var sel = document.getElementById("gg-selector");
    sel.style.display = (sel.style.display==="none")?"block":"none";
    this._renderGrammarLessonList();
  };

  app._renderGrammarLessonList = function() {
    var el = document.getElementById("gg-lesson-list");
    if(!el)return;
    el.innerHTML="";
    gLessonList.forEach(function(lesson,i){
      var div = document.createElement("div");
      div.className = "tool-item";
      div.textContent = "📖 Lesson " + lesson.index + " " + lesson.title;
      div.onclick = function(){app.onSelectGrammarLesson(i);};
      el.appendChild(div);
    });
  };

  app.gCurrentLessonIdx = 0;

  app.onSelectGrammarLesson = function(idx) {
    this.gCurrentLessonIdx = idx;
    var lesson = gLessonList[idx];
    if(!lesson)return;
    document.getElementById("gg-lesson-title").textContent = "📖 Lesson " + lesson.index + " " + lesson.title;
    document.getElementById("gg-selector").style.display = "none";
    // 渲染内容（Markdown转简单文本）
    var body = document.getElementById("gg-lesson-body");
    body.innerHTML = "";
    var lines = lesson.content.split("\n");
    lines.forEach(function(line){
      if(!line.trim())return;
      var div = document.createElement("div");
      div.className = "lesson-line";
      // 简单的 markdown 处理
      var html = line.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/`([^`]+)`/g,'<code>$1</code>');
      div.innerHTML = '<span class="line-text">'+html+'</span>';
      body.appendChild(div);
    });
    // 导航按钮状态
    document.getElementById("gg-prev-btn").disabled=(idx<=0);
    document.getElementById("gg-next-btn").disabled=(idx>=gLessonList.length-1);
  };


  app.onGrammarPrevLesson = function() {
    if(this.gCurrentLessonIdx>0){this.gCurrentLessonIdx--;this.onSelectGrammarLesson(this.gCurrentLessonIdx);}
  };
  app.onGrammarNextLesson = function() {
    if(this.gCurrentLessonIdx<gLessonList.length-1){this.gCurrentLessonIdx++;this.onSelectGrammarLesson(this.gCurrentLessonIdx);}
  };


  // ========= 开始语法练习 =========
  app.onGrammarStart = function() {
    if (!GRAMMAR_QUESTIONS || !GRAMMAR_QUESTIONS.length) { app.toast("题库未加载"); return; }
    // 随机选50题
    var pool = GRAMMAR_QUESTIONS.slice().sort(function(){return Math.random()-0.5;}).slice(0,50);
    gState = { questions:pool, idx:0, done:0, wrong:0, totalAttempts:0, score:0, round:1, weakMap:{}, answered:new Set() };
    document.getElementById("grammar-guide").style.display="none";
    document.getElementById("grammar-game").style.display="block";
    document.getElementById("grammar-finish").style.display="none";
    this._renderGrammarQ();
  };


  app._renderGrammarQ = function() {
    var st = gState;
    if(st.idx>=st.questions.length){this._finishGrammar();return;}
    var q = st.questions[st.idx];
    document.getElementById("gg-meta").textContent = "第"+(st.idx+1)+"/"+st.questions.length+"题 · 已答对 "+st.done+" 错 "+st.wrong;
    document.getElementById("gg-q-text").textContent = q.q || q.question || "";
    document.getElementById("gg-options").innerHTML = "";
    document.getElementById("gg-dict-box").style.display = "none";
    document.getElementById("gg-result").style.display = "none";
    document.getElementById("gg-next-btn").style.display = "none";

    var isDict = q.type === "dictation" || q.type === "spell";
    if(isDict){
      document.getElementById("gg-dict-box").style.display = "block";
      document.getElementById("gg-dict-input").value = "";
      speakWord(q.answer || q.a || "");
      return;
    }

    // 选择题
    var opts = q.options || [q.A,q.B,q.C,q.D].filter(Boolean);
    opts.forEach(function(opt,i){
      var div = document.createElement("div");
      div.className = "opt-item";
      div.textContent = opt;
      div.dataset.idx = i;
      div.onclick = function(){ app._onGrammarOption(i); };
      document.getElementById("gg-options").appendChild(div);
    });
  };


  app._onGrammarOption = function(idx) {
    var st = gState;
    var q = st.questions[st.idx];
    st.totalAttempts++;
    var correctAnswer = q.answer || String(q.a||"").trim().toLowerCase();
    var selectedOpt = (q.options || [])[idx] || "";
    var isCorrect = false;

    // 判断方式：对比选项文本或索引
    var optText = selectedOpt.trim().toLowerCase();
    if(q.correctIndex !== undefined && idx === q.correctIndex) isCorrect=true;
    else if(optText === correctAnswer.toLowerCase()) isCorrect=true;
    else if(optText.indexOf(correctAnswer.toLowerCase())===0) isCorrect=true;
    else{
      // 尝试从选项中提取字母
      var letterMatch = selectedOpt.match(/^([A-D])[.s]/);
      if(letterMatch && letterMatch[1].toLowerCase()===correctAnswer.toLowerCase()) isCorrect=true;
    }

    // 高亮选项
    var items = document.querySelectorAll(".opt-item");
    for(var i=0;i<items.length;i++) items[i].classList.add(isCorrect&&i===idx ? "opt-correct":"");
    if(!isCorrect && items[idx]) items[idx].classList.add("opt-wrong");

    // 显示结果
    var resultHtml = "";
    if(isCorrect){
      st.done++; st.score+=2; resultHtml="✅ 回答正确！";
    }else{
      st.wrong++; resultHtml="❌ 回答错误。正确答案："+(q.answer||q.a||"");
      // 记录薄弱知识点
      var tag = q.tag || q.topic || q.lesson || ("L"+(q.lessonNum||""));
      st.weakMap[tag]=(st.weakMap[tag]||0)+1;
    }
    st.answered.add(st.idx);

    document.getElementById("gg-result").style.display="block";
    document.getElementById("gg-result-text").textContent=resultHtml;
    document.getElementById("gg-next-btn").style.display="block";
  };


  // 听写输入
  app.onGrammarDictInput = function(e) {};
  app.onGrammarDictKeydown = function(e) {
    if(e.key==="Enter")this.onGrammarSubmitSpell();
  };
  app.onGrammarSubmitSpell = function() {
    var st = gState; if(!st)return;
    var q = st.questions[st.idx]; st.totalAttempts++;
    var user = (document.getElementById("gg-dict-input").value||"").trim().toLowerCase();
    var ans = String(q.answer||q.a||"").trim().toLowerCase();
    var ok = (user===ans);
    var resultHtml = "";
    if(ok){st.done++;st.score+=2;resultHtml="✅ 拼写正确！";}
    else{st.wrong++;resultHtml="❌ 拼写错误。正确："+ans;var tag=q.tag||q.topic||q.lesson||"";st.weakMap[tag]=(st.weakMap[tag]||0)+1;}
    document.getElementById("gg-result").style.display="block";document.getElementById("gg-result-text").textContent=resultHtml;
    document.getElementById("gg-next-btn").style.display="block";
  };

  app.onGrammarNextQ = function(){
    var st=gState;if(!st)return;st.idx++;this._renderGrammarQ();
  };
  app.onGrammarBackToGuide = function(){this.grammarShowGuide();};


  app._finishGrammar = function() {
    var st = gState;
    var gs = gLoad(); gs.done = (gs.done||0)+st.done; gSave(gs);
    document.getElementById("grammar-game").style.display="none";
    document.getElementById("grammar-finish").style.display="block";
    document.getElementById("gf-round").textContent="第"+st.round+"遍";
    document.getElementById("gf-done").textContent = st.done+"/"+st.questions.length;
    document.getElementById("gf-attempts").textContent = st.totalAttempts;
    document.getElementById("gf-score").textContent = st.score;
    // 薄弱点
    var weakKeys = Object.keys(st.weakMap).sort(function(a,b){return st.weakMap[b]-st.weakMap[a];});
    var ws = document.getElementById("gf-weak-section");
    var wl = document.getElementById("gf-weak-list");
    if(ws&&wl){
      if(weakKeys.length>0){
        ws.style.display="block";wl.innerHTML="";
        weakKeys.forEach(function(k){wl.innerHTML+="<div class=\"finish-weak\">"+k+" ("+st.weakMap[k]+"\u6B21)</div>";});
      }else{ws.style.display="none";}
    }
  };

  app.onGrammarRestart = function(){this.onGrammarStart();};


  // ========= 初始化 =========
  function initApp() {
    // 默认显示首页
    _refreshHome();

    // 如果有语法课程，默认选中第一课
    if(gLessonList.length>0){
      app.gCurrentLessonIdx=0;
      app.onSelectGrammarLesson(0);
    }
  }

  // DOM ready
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",initApp);
  }else{
    initApp();
  }

})(); // end IIFE

