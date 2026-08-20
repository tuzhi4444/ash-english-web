/* 进度 / 统计 / 我的 / 短文听力 / 词库浏览 */
(function () {
  'use strict';
  var A = window.App, core = A.core, S = A.Store, Plan = A.Plan, esc = A.esc;
  var WORDS = core('shared/data/words').WORDS;
  var Stats = core('shared/utils/stats');
  var Srs = core('shared/utils/srs');
  var Passages = core('shared/data/passages/index');

  function needStore(name) {
    return '<div class="card center"><p>请先完成入门测试，开始学习后再来查看' + name + '。</p>' +
      '<button class="btn primary block" onclick="location.hash=\'#/home\'">去首页</button></div>';
  }

  // ========================= 进度（关卡） =========================
  A.register('levels', {
    title: '进度',
    render: function () {
      if (!S.hasStore()) return needStore('进度');
      S.refreshStore();
      var st = S.getStore();
      var gate = Plan.getPhaseGate(st.plan.currentPhase);
      var retained = Plan.getRetainedCount(st.words);
      var h = '<div class="card"><h2>Phase ' + st.plan.currentPhase + '　' +
        esc(Plan.PHASE_NAMES[st.plan.currentPhase]) + '</h2>' +
        '<div class="bar"><i style="width:' +
        (gate ? Math.min(100, Math.round(retained / gate.retainedWords * 100)) : 100) + '%"></i></div>' +
        '<div class="hint">已巩固 ' + retained + ' 词' +
        (gate ? '　门槛 ' + gate.retainedWords + ' 词 / ' + Math.round(gate.ratio * 100) + '%' : '　已满级') +
        '</div></div>';

      h += '<h2 class="sec">关卡</h2><div class="levels">';
      var last = Math.max(st.plan.planDay, st.plan.cleared.length) + 4;
      for (var n = 1; n <= last; n++) {
        var cleared = st.plan.cleared.indexOf(n) >= 0;
        var cur = n === st.plan.planDay;
        var cls = cleared ? 'cleared' : (cur ? 'current' : (n < st.plan.planDay ? 'cleared' : 'locked'));
        h += '<div class="lv ' + cls + '">' + n + '</div>';
      }
      h += '</div><p class="hint">「第 N 关」是通关数，不是天数——请假不会推进关卡。</p>';
      return h;
    }
  });

  // ========================= 统计 =========================
  A.register('stats', {
    title: '统计',
    render: function () {
      if (!S.hasStore()) return needStore('统计');
      var st = S.getStore();
      var last7 = Stats.last7Days(st.stats.dailyStudyTime);
      var maxSec = Math.max.apply(null, last7.map(function (d) { return d.seconds; }).concat([3600]));
      var learned = Stats.totalLearned(st);
      var retained = Plan.getRetainedCount(st.words);
      var mastered = Object.keys(st.words).filter(function (k) { return st.words[k].mastered; }).length;
      var studyDays = Object.keys(st.stats.dailyStudyTime || {})
        .filter(function (d) { return (st.stats.dailyStudyTime[d] || 0) > 0; }).length;

      var h = '<div class="card"><h3>近 7 天学习时长</h3><div class="chart">' +
        last7.map(function (d, i) {
          return '<div class="col' + (i === last7.length - 1 ? ' picked' : '') + '" data-i="' + i + '">' +
            '<div class="colbar" style="height:' +
            Math.max(4, Math.round(d.seconds / maxSec * 120)) + 'px"></div>' +
            '<div class="hint">' + d.label + '</div></div>';
        }).join('') + '</div>' +
        '<div class="chart-detail" id="cd"></div>' +
        '<p class="hint center">点柱子看那天的学习时长</p></div>';

      h += '<div class="card"><h3>学习进度</h3>' +
        kv('已通关', st.plan.cleared.length + ' 关') +
        kv('当前进度', '第 ' + st.plan.planDay + ' 关') +
        kv('入门至今', st.plan.calendarDay + ' 天') +
        kv('实际学习', studyDays + ' 天') +
        kv('学过的词', learned + ' 词') +
        kv('已巩固', retained + ' 词') +
        kv('已毕业', mastered + ' 词') +
        kv('总时长', Stats.formatDuration(st.stats.totalStudyTime)) + '</div>';

      h += '<div class="card"><h3>练习正确率</h3>' +
        kv('框架造句', Math.round(Stats.frameworkAccuracy(st) * 100) + '%') +
        kv('听辨训练', Math.round(Stats.listeningAccuracy(st) * 100) + '%') +
        kv('短文听力', Math.round(Stats.passageAccuracy(st) * 100) + '%') +
        kv('跟读最佳', st.shadowing.bestAccuracy + '%') + '</div>';
      return h;
    },
    mount: function (root) {
      var st = S.getStore();
      if (!st) return;
      var last7 = Stats.last7Days(st.stats.dailyStudyTime);
      var detail = root.querySelector('#cd');
      if (!detail) return;
      function show(i) {
        var d = last7[i];
        var p = String(d.date).split('-');
        detail.innerHTML = '<span>周' + d.label + '　' + Number(p[1]) + '月' + Number(p[2]) + '日</span>' +
          '<b>' + (d.seconds > 0 ? Stats.formatDuration(d.seconds) : '未学习') + '</b>';
        root.querySelectorAll('.col').forEach(function (c, k) {
          c.classList.toggle('picked', k === i);
        });
      }
      root.querySelectorAll('.col').forEach(function (c) {
        c.onclick = function () { show(+c.dataset.i); };
      });
      show(last7.length - 1);   // 默认显示今天
    }
  });
  function kv(k, v) { return '<div class="kv"><span>' + k + '</span><b>' + v + '</b></div>'; }

  // ========================= 我的（设置） =========================
  A.register('settings', {
    title: '我的',
    render: function () {
      if (!S.hasStore()) {
        return '<div class="card center"><p>还没有学习存档。</p>' +
          '<button class="btn primary block" onclick="location.hash=\'#/assessment\'">开始入门测试</button>' +
          '<button class="btn ghost block" id="imp2">从备份导入</button></div>';
      }
      var s = S.getSettings(), st = S.getStore();
      var skipped = st.plan.calib ? st.plan.calib.skipped : 0;
      return '<div class="card"><h3>学习设置</h3>' +
        row('自动朗读', '学习新词时自动播放发音', sw('autoSpeak', s.autoSpeak)) +
        row('自动调整学习起点', '新词连续零失误时自动往后跳，跳过你已经会的词。已跳过 ' + skipped + ' 个',
            sw('autoCalibrate', s.autoCalibrate !== false)) +
        row('每日新词', s.dailyNewWords + ' 个',
            '<input type="range" min="4" max="40" step="2" value="' + s.dailyNewWords + '" data-num="dailyNewWords">') +
        row('每日复习上限', s.maxReviewPerDay + ' 个',
            '<input type="range" min="20" max="200" step="10" value="' + s.maxReviewPerDay + '" data-num="maxReviewPerDay">') +
        row('语速', s.speechRate.toFixed(1) + '×',
            '<input type="range" min="0.6" max="1.4" step="0.1" value="' + s.speechRate + '" data-num="speechRate">') +
        '</div>' +
        '<div class="card"><h3>数据</h3>' +
        '<button class="btn ghost block" id="exp">导出存档</button>' +
        '<button class="btn ghost block" id="imp">导入存档</button>' +
        '<input type="file" id="file" accept=".json" hidden>' +
        '<button class="btn danger block" id="reset">清除全部进度</button></div>' +
        '<p class="hint center">数据保存在这台设备的浏览器里。换设备或清缓存前记得导出。</p>';
    },
    mount: function (root) {
      root.querySelectorAll('input[data-sw]').forEach(function (el) {
        el.onchange = function () {
          var p = {}; p[el.dataset.sw] = el.checked;
          S.updateSettings(p);
        };
      });
      root.querySelectorAll('input[data-num]').forEach(function (el) {
        el.onchange = function () {
          var p = {}; p[el.dataset.num] = parseFloat(el.value);
          S.updateSettings(p); A.route();
        };
      });
      var exp = root.querySelector('#exp');
      if (exp) exp.onclick = function () {
        var blob = new Blob([JSON.stringify(S.getStore())], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'ash-english-backup.json';
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      };
      var file = root.querySelector('#file');
      ['#imp', '#imp2'].forEach(function (sel) {
        var b = root.querySelector(sel);
        if (b && file) b.onclick = function () { file.click(); };
      });
      if (file) file.onchange = function () {
        var f = file.files[0]; if (!f) return;
        var fr = new FileReader();
        fr.onload = function () {
          try {
            var raw = JSON.parse(fr.result);
            var migrated = core('shared/utils/migrate').migrateStore(raw);
            S.setStore(migrated);
            A.toast('导入成功'); A.go('home');
          } catch (e) { A.toast('文件格式错误'); }
        };
        fr.readAsText(f);
      };
      var rst = root.querySelector('#reset');
      if (rst) rst.onclick = function () {
        if (!confirm('将删除所有学习进度、统计和设置，此操作不可撤销。确定继续吗？')) return;
        S.resetStore(); A.toast('已清除'); A.go('home');
      };
    }
  });
  function row(title, desc, ctrl) {
    return '<div class="srow"><div class="srow-main"><div>' + title + '</div>' +
      '<div class="hint">' + desc + '</div></div><div class="srow-ctrl">' + ctrl + '</div></div>';
  }
  function sw(key, on) {
    return '<label class="switch"><input type="checkbox" data-sw="' + key + '"' + (on ? ' checked' : '') + '><i></i></label>';
  }

  // ========================= 短文听力 =========================
  A.register('passage', {
    title: '短文听力',
    render: function () {
      if (!S.hasStore()) return needStore('短文听力');
      var st = S.getStore();
      var list = Passages.getUnlockedPassages(st.plan.currentPhase);
      var doneIds = st.passage.completed;
      return '<div class="card list">' + list.map(function (p) {
        var d = doneIds.indexOf(p.id) >= 0;
        return '<a class="row" href="#/passage_detail?id=' + encodeURIComponent(p.id) + '">' +
          '<span class="row-icon">' + (d ? '✅' : '📖') + '</span>' +
          '<span class="row-main"><span class="row-title">' + esc(p.title) + '</span>' +
          '<span class="hint">' + p.questions.length + ' 题</span></span><span class="arrow">›</span></a>';
      }).join('') + '</div>';
    }
  });

  A.register('passage_detail', {
    title: '短文',
    render: function () { return '<div id="v"></div>'; },
    mount: function (root, params) {
      var box = root.querySelector('#v');
      var p = Passages.PASSAGES.filter(function (x) { return x.id === params.id; })[0];
      if (!p) { box.innerHTML = '<div class="card">找不到这篇短文</div>'; return; }
      var qi = 0, correct = 0, listens = 0;

      function intro() {
        box.innerHTML = '<div class="card center"><h2>' + esc(p.title) + '</h2>' +
          '<p class="hint">先听 1-3 遍，再答 ' + p.questions.length + ' 道题。听的时候不看原文。</p>' +
          '<button class="btn primary block" id="play">🔊 播放（已听 ' + listens + ' 遍）</button>' +
          '<button class="btn ghost block" id="quiz">开始答题</button></div>';
        box.querySelector('#play').onclick = function () {
          if (listens >= 3) { A.toast('已达到最大收听次数'); return; }
          listens++;
          A.platform.speak(p.text || p.content || '', S.getSettings().speechRate);
          this.textContent = '🔊 播放（已听 ' + listens + ' 遍）';
        };
        box.querySelector('#quiz').onclick = quiz;
      }

      function quiz() {
        if (qi >= p.questions.length) return finish();
        var q = p.questions[qi];
        box.innerHTML = '<div class="progress"><span class="hint">' + (qi + 1) + ' / ' + p.questions.length + '</span></div>' +
          '<div class="card"><div class="sent">' + esc(q.q || q.question) + '</div>' +
          '<div class="opts">' + q.options.map(function (o, k) {
            return '<button class="opt" data-i="' + k + '">' + esc(o) + '</button>';
          }).join('') + '</div></div>';
        box.querySelectorAll('.opt').forEach(function (b) {
          b.onclick = function () {
            var ok = +b.dataset.i === q.answer;
            if (ok) correct++;
            box.insertAdjacentHTML('beforeend', '<div class="feedback ' + (ok ? 'ok' : 'no') + '">' +
              (ok ? '✅ 答对了' : '❌ 正确答案：' + esc(q.options[q.answer])) +
              '<button class="btn primary block" id="nx">下一题</button></div>');
            box.querySelector('#nx').onclick = function () { qi++; quiz(); };
          };
        });
      }

      function finish() {
        var already = S.getStore().passage.completed.indexOf(p.id) >= 0;
        if (!already) S.completeLevelTask('listening', p.questions.length);
        S.updateStore(function (s) {
          return Object.assign({}, s, { passage: {
            totalAttempts: s.passage.totalAttempts + 1,
            correctCount: s.passage.correctCount + correct,
            completed: s.passage.completed.indexOf(p.id) >= 0 ? s.passage.completed : s.passage.completed.concat([p.id]),
            history: s.passage.history.concat([{ passageId: p.id, score: correct,
              total: p.questions.length, date: new Date().toISOString() }]).slice(-100)
          } });
        });
        box.innerHTML = '<div class="card center"><div class="big-icon">🎉</div>' +
          '<div class="big">' + correct + '/' + p.questions.length + '</div>' +
          (already ? '<p class="hint">这篇之前做过，本次不计入今日听辨配额。</p>' : '') +
          '<div class="card"><div class="sent">' + esc(p.text || p.content || '') + '</div></div>' +
          '<button class="btn primary block" onclick="location.hash=\'#/passage\'">返回列表</button></div>';
      }
      intro();
    }
  });

  // ========================= 词库浏览 =========================
  A.register('browser', {
    title: '词库',
    render: function () {
      return '<div class="card"><input class="input" id="q" placeholder="搜索单词或中文释义"></div>' +
        '<div id="list"></div>';
    },
    mount: function (root) {
      var st = S.getStore() || { words: {} };
      var listEl = root.querySelector('#list');
      function draw(kw) {
        kw = (kw || '').trim().toLowerCase();
        var arr = WORDS;
        if (kw) arr = WORDS.filter(function (w) {
          return w.en.toLowerCase().indexOf(kw) >= 0 || w.zh.indexOf(kw) >= 0;
        });
        var show = arr.slice(0, 200);
        listEl.innerHTML = '<div class="card list">' + show.map(function (w) {
          var r = st.words[w.en.toLowerCase()];
          var tag = !r || !r.seen ? '<span class="tag new">新词</span>'
            : (r.mastered ? '<span class="tag ok">已毕业</span>'
            : (Plan.isRetained(r) ? '<span class="tag ok">已巩固</span>' : '<span class="tag">学习中</span>'));
          return '<div class="row static"><span class="row-main">' +
            '<span class="row-title">' + esc(w.en) + ' <span class="hint">' + esc(w.pos) + '</span></span>' +
            '<span class="hint">' + esc(w.zh) + '</span></span>' + tag + '</div>';
        }).join('') + '</div>' +
        (arr.length > show.length ? '<p class="hint center">仅显示前 200 条，共 ' + arr.length + ' 条</p>' : '');
      }
      root.querySelector('#q').oninput = function () { draw(this.value); };
      draw('');
    }
  });
})();
