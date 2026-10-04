/* 跟读训练 / 听辨训练 */
(function () {
  'use strict';
  var A = window.App, core = A.core, S = A.Store, Plan = A.Plan, esc = A.esc;
  var WORDS = core('shared/data/words').WORDS;
  var Options = core('shared/utils/options');
  var Text = core('shared/utils/text');

  function guard(box) {
    if (!S.canPlayCurrentLevel()) {
      box.innerHTML = '<div class="card center"><p>今天已通关，明天再来。</p>' +
        '<button class="btn ghost block" onclick="history.back()">返回</button></div>';
      return false;
    }
    return true;
  }
  function doneCard(box, text, extra) {
    box.innerHTML = '<div class="card center"><div class="big-icon">🎉</div><h1>' + text + '</h1>' +
      (extra || '') +
      '<button class="btn primary block" onclick="location.hash=\'#/home\'">返回首页</button></div>';
  }
  function prog(done, total, extra) {
    return '<div class="progress"><span class="hint">' + done + ' / ' + total + '</span>' +
      (extra ? '<span class="hint">' + extra + '</span>' : '') +
      '<div class="bar"><i style="width:' + (total ? Math.min(100, Math.round(done / total * 100)) : 0) + '%"></i></div></div>';
  }
  // ========================= 跟读训练 =========================
  var RECENT_DAYS = 3;
  A.register('shadowing', {
    title: '跟读训练',
    render: function () { return '<div id="v"></div>'; },
    mount: function (root) {
      var box = root.querySelector('#v');
      if (!guard(box)) return;
      var st = S.getStore();
      var t = S.getTodayTargets(), c = S.getActiveLevelCompletion() || { shadowing: 0 };
      var done = c.shadowing, total = t.shadowing, remain = Math.max(0, total - done);
      var rate = 1.0;          // 语速可切换（对应小程序的 toggleRate）
      var lastBlobUrl = null;  // 自己的录音，用于回放

      var learned = WORDS.filter(function (w) {
        var r = st.words[w.en.toLowerCase()];
        return r && r.seen && !r.testSkipped;
      });
      var cutoff = Date.now() - RECENT_DAYS * 86400000;
      var recent = {};
      (st.shadowing.history || []).forEach(function (h) {
        if (h.date && new Date(h.date).getTime() >= cutoff) recent[h.text] = 1;
      });
      var toItem = function (w) {
        var r = st.words[w.en.toLowerCase()];
        return { text: w.example, zh: w.exampleZh,
          wc: w.example.split(/\s+/).length,
          pri: (r && Plan.isRetained(r)) ? 1 : 0 };
      };
      var items = learned.filter(function (w) { return !recent[w.example]; }).map(toItem);
      if (items.length < remain) {
        var seen = {}; items.forEach(function (x) { seen[x.text] = 1; });
        learned.forEach(function (w) { if (!seen[w.example]) { items.push(toItem(w)); seen[w.example] = 1; } });
      }
      if (items.length < remain) {
        var seen2 = {}; items.forEach(function (x) { seen2[x.text] = 1; });
        for (var k = 0; k < WORDS.length && items.length < remain * 3; k++) {
          if (!seen2[WORDS[k].example]) { items.push(toItem(WORDS[k])); seen2[WORDS[k].example] = 1; }
        }
      }
      items = A.shuffle(items);
      items.sort(function (a, b) { return a.pri - b.pri; });
      var queue = items.slice(0, remain);
      queue.sort(function (a, b) { return a.wc - b.wc; });
      var idx = 0;

      function render() {
        if (idx >= queue.length) return doneCard(box, '跟读训练完成');
        var it = queue[idx];
        box.innerHTML = prog(done, total) +
          '<div class="card center"><div class="sent">' + esc(it.text) + '</div>' +
          '<div class="hint">' + esc(it.zh) + '</div>' +
          '<div class="opts two"><button class="btn ghost" id="play">🔊 播放原句</button>' +
          '<button class="btn ghost" id="rate">' + rate.toFixed(1) + 'x</button></div></div>' +
          '<div class="card center" id="rec">' +
          (A.platform.recognitionAvailable()
            ? '<button class="btn primary block" id="mic">🎙 点击开始跟读</button>'
            : '<p class="hint">当前浏览器不支持语音识别，跟读后自行判断即可。</p>') +
          '<div id="res"></div>' +
          '<button class="btn ghost block" id="ok">满意，下一句</button></div>';
        A.platform.speak(it.text, rate);
        box.querySelector('#play').onclick = function () { A.platform.speak(it.text, rate); };
        box.querySelector('#rate').onclick = function () {
          rate = rate === 1.0 ? 0.8 : 1.0;
          this.textContent = rate.toFixed(1) + 'x';
          A.platform.speak(it.text, rate);
        };
        box.querySelector('#ok').onclick = function () { record(it.text, 85); };
        var mic = box.querySelector('#mic');
        if (mic) mic.onclick = function () { listen(it, mic); };
      }

      function listen(it, mic) {
        mic.textContent = '🎙 说话中…'; mic.disabled = true;
        A.platform.startRecognition({
          onAudio: function (url) { lastBlobUrl = url; },
          onStop: function (said) {
            mic.textContent = '🎙 重新跟读'; mic.disabled = false;
            if (!said) { A.toast('没听清，再试一次'); return; }
            var d = Text.compareSpeech(it.text, said);
            var acc = Math.round(d.accuracy * 100);
            // 词级对比高亮：对的绿、错的红（和小程序的 diffWords 一致）
            var diff = (d.words || []).map(function (w) {
              return '<span class="dw ' + (w.matched ? 'hit' : 'miss') + '">' + esc(w.word || w.text || w) + '</span>';
            }).join(' ');
            box.querySelector('#res').innerHTML =
              '<div class="feedback ' + (acc >= 80 ? 'ok' : 'no') + '">' +
              '<div class="big">' + acc + '%</div>' +
              (diff ? '<div class="diffline">' + diff + '</div>' : '') +
              '<div class="hint">识别结果：' + esc(said) + '</div>' +
              '<div class="opts two">' +
              (lastBlobUrl ? '<button class="btn ghost" id="mine">▶ 听我的</button>' : '') +
              '<button class="btn ghost" id="again">重录</button></div>' +
              '<button class="btn primary block" id="nx">下一句</button></div>';
            var mine = box.querySelector('#mine');
            if (mine) mine.onclick = function () { new Audio(lastBlobUrl).play(); };
            box.querySelector('#again').onclick = function () {
              box.querySelector('#res').innerHTML = '';
              A.platform.speak(it.text, rate);
            };
            box.querySelector('#nx').onclick = function () { record(it.text, acc); };
          },
          onError: function (m) { mic.textContent = '🎙 重新跟读'; mic.disabled = false; A.toast(m); }
        });
      }

      function record(text, acc) {
        S.updateStore(function (s) {
          return Object.assign({}, s, { shadowing: {
            totalAttempts: s.shadowing.totalAttempts + 1,
            bestAccuracy: Math.max(s.shadowing.bestAccuracy, acc),
            practicedWords: s.shadowing.practicedWords,
            history: s.shadowing.history.concat([{ text: text, accuracy: acc, date: new Date().toISOString() }]).slice(-200)
          } });
        });
        S.completeLevelTask('shadowing', 1);
        done++; idx++; lastBlobUrl = null;
        render();
      }
      render();
    }
  });

  // ========================= 听辨训练 =========================
  A.register('listening', {
    title: '听辨训练',
    render: function () { return '<div id="v"></div>'; },
    mount: function (root) {
      var box = root.querySelector('#v');
      if (!guard(box)) return;
      var st = S.getStore();
      var phase = st.plan.currentPhase;
      var maxWords = phase === 1 ? 6 : (phase === 2 ? 10 : 999);
      var rate = phase === 1 ? 0.9 : 1.0;
      var t = S.getTodayTargets(), c = S.getActiveLevelCompletion() || { listening: 0 };
      var done = c.listening, total = t.listening, remain = Math.max(0, total - done);

      var learned = WORDS.filter(function (w) {
        var r = st.words[w.en.toLowerCase()];
        return r && r.seen && !r.testSkipped;
      });
      var base = learned.length ? learned : WORDS;
      var fit = base.filter(function (w) { return w.example.split(/\s+/).length <= maxWords; });
      var cutoff = Date.now() - RECENT_DAYS * 86400000;
      var recent = {};
      (st.listening.history || []).forEach(function (h) {
        if (h.date && new Date(h.date).getTime() >= cutoff) recent[h.text] = 1;
      });
      var pool = fit.filter(function (w) { return !recent[w.example]; });
      if (pool.length < remain) pool = fit.slice();
      if (pool.length < remain) pool = base.slice();
      if (pool.length < remain) {
        var existing = {};
        pool.forEach(function (w) { existing[w.en] = true; });
        WORDS.forEach(function (w) {
          if (pool.length < remain && !existing[w.en]) {
            pool.push(w); existing[w.en] = true;
          }
        });
      }
      pool = A.shuffle(pool);
      pool.sort(function (a, b) {
        var ra = st.words[a.en.toLowerCase()], rb = st.words[b.en.toLowerCase()];
        return ((ra && Plan.isRetained(ra)) ? 1 : 0) - ((rb && Plan.isRetained(rb)) ? 1 : 0);
      });
      var queue = pool.slice(0, remain), idx = 0, replays = 0;

      function render() {
        if (idx >= queue.length) return doneCard(box, '听辨训练完成');
        var w = queue[idx];
        replays = 0;
        var opts = Options.buildMeaningOptions(w, 4);
        box.innerHTML = prog(done, total) +
          '<div class="card"><div class="hint">听整句，选出正确的中文意思</div>' +
          '<button class="btn ghost" id="play">🔊 再听一次（剩 3 次）</button>' +
          '<div class="opts">' + opts.map(function (o) {
            return '<button class="opt" data-v="' + esc(o) + '">' + esc(o) + '</button>';
          }).join('') + '</div></div>';
        A.platform.speak(w.example, rate * S.getSettings().speechRate);
        box.querySelector('#play').onclick = function () {
          if (replays >= 3) return;
          replays++;
          this.textContent = '🔊 再听一次（剩 ' + (3 - replays) + ' 次）';
          A.platform.speak(w.example, rate * S.getSettings().speechRate);
        };
        box.querySelectorAll('.opt').forEach(function (b) {
          b.onclick = function () { answer(w, b.dataset.v === w.exampleZh); };
        });
      }

      function answer(w, ok) {
        S.updateStore(function (s) {
          return Object.assign({}, s, { listening: {
            totalAttempts: s.listening.totalAttempts + 1,
            correctCount: s.listening.correctCount + (ok ? 1 : 0),
            history: s.listening.history.concat([{ text: w.example, correct: ok, date: new Date().toISOString() }]).slice(-200)
          } });
        });
        S.completeLevelTask('listening', 1);
        done++; idx++;
        box.insertAdjacentHTML('beforeend', '<div class="feedback ' + (ok ? 'ok' : 'no') + '">' +
          (ok ? '✅ 答对了' : '❌ 正确答案：' + esc(w.exampleZh)) +
          '<div class="sent">' + esc(w.example) + '</div>' +
          '<button class="btn ghost" id="sp">🔊 重听</button>' +
          '<button class="btn primary block" id="nx">下一题</button></div>');
        box.querySelector('#sp').onclick = function () {
          A.platform.speak(w.example, rate * S.getSettings().speechRate);
        };
        box.querySelector('#nx').onclick = render;
      }
      render();
    }
  });

})();
