/* 框架造句 / 跟读训练 / 听辨训练 / 对话场景（列表 + 演练） */
(function () {
  'use strict';
  var A = window.App, core = A.core, S = A.Store, Plan = A.Plan, esc = A.esc;
  var WORDS = core('shared/data/words').WORDS;
  var Fw = core('shared/utils/framework');
  var Options = core('shared/utils/options');
  var Text = core('shared/utils/text');
  var Dlg = core('shared/data/dialogues/index');

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
  /** 阶段筛选条：短文和对话列表共用 */
  function phaseChips(cur, maxPhase) {
    var out = '<div class="chips">';
    for (var p = 1; p <= maxPhase; p++) {
      out += '<button class="chip-btn' + (p === cur ? ' active' : '') + '" data-p="' + p + '">Phase ' + p + '</button>';
    }
    return out + '</div>';
  }

  // ========================= 框架造句 =========================
  var SENT_LABEL = { declarative: '陈述句', interrogative: '疑问句', imperative: '祈使句' };
  var SLOT_LABEL = { infinitive: '动词原形', present: '第三人称单数', ing: '现在分词',
    past: '过去式', pastParticiple: '过去分词', noun: '名词', adjective: '形容词' };

  A.register('framework', {
    title: '框架造句',
    render: function () { return '<div id="v"></div>'; },
    mount: function (root) {
      var box = root.querySelector('#v');
      if (!guard(box)) return;
      var st = S.getStore();
      var pool = Plan.getUnlockedFrameworks(st.plan.currentPhase);
      var used = [];
      var t = S.getTodayTargets(), c = S.getActiveLevelCompletion() || { framework: 0 };
      var done = c.framework, total = t.framework;
      var fw, word, answer, wrong = 0;

      function next() {
        if (done >= total) return doneCard(box, '框架造句完成');
        fw = Fw.selectFramework(pool, S.getStore().framework, used);
        if (!fw) return doneCard(box, '没有可用的框架');
        word = Fw.selectWordForFramework(fw, WORDS, S.getStore().words, S.getStore().plan.currentPhase);
        if (!word) return next();
        if (used.length >= pool.length) used = [];
        used.push(fw.id);
        answer = Fw.getCorrectAnswer(word, fw.slotType);
        wrong = 0;
        render();
      }

      function render(opts) {
        var h = prog(done, total) +
          '<div class="card"><div class="hint">' + (SENT_LABEL[fw.sentenceType] || '') +
          '　填空：' + (SLOT_LABEL[fw.slotType] || fw.slotType) + '</div>' +
          '<div class="sent">' + esc(Fw.fillTemplate(fw.template, '________')) + '</div>' +
          '<div class="hint">提示：' + esc(word.zh) + (wrong >= 1 ? '　首字母 <b>' + esc(answer.charAt(0)) + '</b>' : '') + '</div>';
        if (wrong >= 2 && opts) {
          h += '<div class="opts">' + opts.map(function (o) {
            return '<button class="opt" data-v="' + esc(o) + '">' + esc(o) + '</button>';
          }).join('') + '</div>';
        } else {
          h += '<input class="input" id="inp" placeholder="填入正确词形" autocapitalize="off" autocomplete="off">' +
            '<button class="btn primary block" id="ck">校验</button>';
        }
        box.innerHTML = h + '</div>';
        if (wrong >= 2 && opts) {
          box.querySelectorAll('.opt').forEach(function (b) {
            b.onclick = function () { check(b.dataset.v); };
          });
        } else {
          var ip = box.querySelector('#inp');
          var go = function () { if (ip.value.trim()) check(ip.value.trim()); };
          box.querySelector('#ck').onclick = go;
          ip.onkeydown = function (e) { if (e.key === 'Enter') go(); };
          ip.focus();
        }
      }

      function check(v) {
        if (v.toLowerCase() === answer.toLowerCase()) return settle(wrong === 0);
        wrong++;
        if (wrong === 1) { A.toast('不对，再试试'); render(); }
        else if (wrong === 2) { A.toast('再来一次，三选一'); render(Fw.buildFormOptions(word, fw.slotType)); }
        else settle(false);
      }

      function settle(right) {
        var sentence = Fw.fillTemplate(fw.template, answer);
        var rec = S.getStore().framework[fw.id] || { attempts: 0, correct: 0, lastPracticed: '', wordsUsed: [], box: 1 };
        var nr = {
          attempts: rec.attempts + 1,
          correct: rec.correct + (right ? 1 : 0),
          lastPracticed: new Date().toISOString(),
          wordsUsed: rec.wordsUsed.indexOf(word.en) >= 0 ? rec.wordsUsed : rec.wordsUsed.concat([word.en]).slice(-20),
          box: right ? Math.min(5, rec.box + 1) : 1
        };
        S.updateStore(function (s) {
          var f = Object.assign({}, s.framework); f[fw.id] = nr;
          return Object.assign({}, s, { framework: f });
        });
        S.completeLevelTask('framework', 1);
        done++;
        A.platform.speak(sentence, S.getSettings().speechRate);
        box.insertAdjacentHTML('beforeend', '<div class="feedback ' + (right ? 'ok' : 'no') + '">' +
          (right ? '✅ 答对了' : '❌ 正确答案：' + esc(answer)) +
          '<div class="sent">' + esc(sentence) + '</div>' +
          '<div class="hint">' + esc(Fw.fillTemplateZh(fw.templateZh, word.zh, fw.slotType)) + '</div>' +
          '<button class="btn ghost" id="sp">🔊 重听</button>' +
          '<button class="btn primary block" id="nx">下一题</button></div>');
        box.querySelector('#sp').onclick = function () {
          A.platform.speak(sentence, S.getSettings().speechRate);
        };
        box.querySelector('#nx').onclick = next;
      }
      next();
    }
  });

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

  // ========================= 对话场景：列表 =========================
  A.register('dialogue_list', {
    title: '对话场景',
    render: function () {
      if (!S.hasStore()) return '<div class="card center"><p>请先完成入门测试。</p></div>';
      var st = S.getStore();
      var cur = st.plan.currentPhase;
      return '<div class="card">' + phaseChips(cur, cur) + '</div><div id="list"></div>';
    },
    mount: function (root) {
      var st = S.getStore();
      if (!st) return;
      var cur = st.plan.currentPhase;
      var practiced = st.dialogue.practiced || [];
      function draw(p) {
        root.querySelectorAll('.chip-btn').forEach(function (b) {
          b.classList.toggle('active', +b.dataset.p === p);
        });
        var list = Dlg.DIALOGUES.filter(function (d) { return d.phase === p; });
        root.querySelector('#list').innerHTML = '<div class="card list">' + list.map(function (d) {
          var done = practiced.indexOf(d.id) >= 0;
          return '<a class="row" href="#/dialogue?id=' + encodeURIComponent(d.id) + '">' +
            '<span class="row-icon">' + (done ? '✅' : '💬') + '</span>' +
            '<span class="row-main"><span class="row-title">' + esc(d.title) + '</span>' +
            '<span class="hint">' + esc(d.scene || '') + '</span></span><span class="arrow">›</span></a>';
        }).join('') + '</div>';
      }
      root.querySelectorAll('.chip-btn').forEach(function (b) {
        b.onclick = function () { draw(+b.dataset.p); };
      });
      draw(cur);
    }
  });

  // ========================= 对话场景：演练 =========================
  A.register('dialogue', {
    title: '对话场景',
    render: function () { return '<div id="v"></div>'; },
    mount: function (root, params) {
      var box = root.querySelector('#v');
      if (!guard(box)) return;
      var st = S.getStore();
      var pool = Dlg.getUnlockedDialogues(st.plan.currentPhase);
      if (!pool.length) return doneCard(box, '本阶段暂无对话场景');

      function pick() {
        var practiced = S.getStore().dialogue.practiced || [];
        var fresh = pool.filter(function (d) { return practiced.indexOf(d.id) < 0; });
        var src = fresh.length ? fresh : pool;
        return src[Math.floor(Math.random() * src.length)];
      }
      var dlg = params.id
        ? (Dlg.DIALOGUES.filter(function (d) { return d.id === params.id; })[0] || pick())
        : pick();
      var turn = 0, counted = {}, lastBlobUrl = null;
      var rate = st.plan.currentPhase === 1 ? 0.9 : (st.plan.currentPhase === 2 ? 0.95 : 1.0);
      var youTurns = dlg.turns.filter(function (t) { return t.speaker === 'you'; }).length;

      function start(d) { dlg = d; turn = 0; counted = {}; lastBlobUrl = null; render(); }

      function dots() {
        return '<div class="dots">' + dlg.turns.map(function (t, i) {
          return '<span class="dot' + (i < turn ? ' done' : (i === turn ? ' cur' : '')) +
            (t.speaker === 'you' ? ' you' : '') + '"></span>';
        }).join('') + '</div>';
      }

      function render() {
        if (turn >= dlg.turns.length) return finish();
        var t = dlg.turns[turn];
        var isYou = t.speaker === 'you';
        var h = '<div class="card"><div class="hint">' + esc(dlg.title || '') + '　' +
          (turn + 1) + ' / ' + dlg.turns.length + ' 句</div>' + dots();
        if (!isYou) {
          h += '<div class="bubble other"><div class="sent" id="ptxt">' +
            (S.getStore().plan.currentPhase >= 3 ? '<span class="masked">点击显示原文</span>' : esc(t.en)) +
            '</div><div class="hint">' + esc(t.zh || '') + '</div></div>' +
            '<div class="opts two"><button class="btn ghost" id="play">🔊 再听一次</button>' +
            '<button class="btn ghost" id="reveal">显示原文</button></div>' +
            '<button class="btn primary block" id="nx">继续</button>';
        } else {
          h += '<div class="bubble you"><div class="hint">轮到你说（中文提示）</div>' +
            '<div class="sent">' + esc(t.zh || '') + '</div></div>' +
            (A.platform.recognitionAvailable()
              ? '<button class="btn primary block" id="mic">🎙 点击开始说</button>' : '') +
            '<button class="btn ghost block" id="show">看参考说法</button>' +
            '<div id="ref"></div>';
        }
        box.innerHTML = h + '</div>';

        if (!isYou) {
          A.platform.speak(t.en, rate);
          box.querySelector('#play').onclick = function () { A.platform.speak(t.en, rate); };
          box.querySelector('#reveal').onclick = function () {
            box.querySelector('#ptxt').innerHTML = esc(t.en);
          };
          box.querySelector('#nx').onclick = function () { turn++; render(); };
        } else {
          var mic = box.querySelector('#mic');
          if (mic) mic.onclick = function () {
            mic.textContent = '🎙 说话中…'; mic.disabled = true;
            A.platform.startRecognition({
              onAudio: function (u) { lastBlobUrl = u; },
              onStop: function (said) {
                mic.textContent = '🎙 再说一次'; mic.disabled = false;
                if (!said) { A.toast('没听清，再试一次'); return; }
                // 对话没有标准答案：贴合度只做提示，绝不判对错、绝不卡关
                var acc = Math.round(Text.compareSpeech(t.en, said).accuracy * 100);
                box.querySelector('#ref').innerHTML =
                  '<div class="feedback"><div class="hint">你说的：' + esc(said) + '</div>' +
                  '<div class="hint">和参考说法的贴合度 ' + acc + '%——参考只是一种说法，' +
                  '说得不一样很正常，对话没有标准答案。</div>' +
                  (lastBlobUrl ? '<button class="btn ghost" id="mine">▶ 听我的</button>' : '') +
                  '</div>';
                var mine = box.querySelector('#mine');
                if (mine) mine.onclick = function () { new Audio(lastBlobUrl).play(); };
              },
              onError: function (m) { mic.textContent = '🎙 再说一次'; mic.disabled = false; A.toast(m); }
            });
          };
          box.querySelector('#show').onclick = function () {
            box.querySelector('#ref').innerHTML =
              '<div class="feedback ok"><div class="sent">' + esc(t.en) + '</div>' +
              '<div class="hint">参考说法只是一种说法，说得不一样很正常。</div>' +
              '<button class="btn ghost" id="sp">🔊 听一遍</button>' +
              '<button class="btn primary block" id="nx2">下一句</button></div>';
            A.platform.speak(t.en, rate);
            box.querySelector('#sp').onclick = function () { A.platform.speak(t.en, rate); };
            box.querySelector('#nx2').onclick = function () {
              if (!counted[turn]) {
                counted[turn] = 1;
                S.completeLevelTask('dialogue', 1);
                S.updateStore(function (s) {
                  return Object.assign({}, s, { dialogue: Object.assign({}, s.dialogue,
                    { totalTurns: s.dialogue.totalTurns + 1 }) });
                });
              }
              turn++; lastBlobUrl = null; render();
            };
          };
        }
      }

      function finish() {
        S.updateStore(function (s) {
          var p = s.dialogue.practiced.indexOf(dlg.id) >= 0
            ? s.dialogue.practiced : s.dialogue.practiced.concat([dlg.id]);
          return Object.assign({}, s, { dialogue: Object.assign({}, s.dialogue, { practiced: p }) });
        });
        doneCard(box, '这段对话练完了',
          '<p class="hint">你接了 ' + youTurns + ' 次话</p>' +
          '<button class="btn primary block" id="again">再演一遍</button>' +
          '<button class="btn ghost block" id="other">换一个场景</button>' +
          '<button class="btn ghost block" onclick="location.hash=\'#/dialogue_list\'">看全部场景</button>');
        box.querySelector('#again').onclick = function () { start(dlg); };
        box.querySelector('#other').onclick = function () { start(pick()); };
      }
      render();
    }
  });
})();
