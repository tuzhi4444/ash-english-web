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
        h += '<div class="lv ' + cls + '" data-n="' + n + '">' + n + '</div>';
      }
      h += '</div><p class="hint">「第 N 关」是通关数，不是天数——请假不会推进关卡。'
        + '点已通关的关卡可以回刷（本次会话内有效，重开 app 会回到当前关）。</p>';
      return h;
    },
    mount: function (root) {
      var st = S.getStore();
      if (!st) return;
      root.querySelectorAll('.lv').forEach(function (el) {
        var n = +el.dataset.n;
        if (n > st.plan.planDay) return;          // 未解锁的不给点
        el.style.cursor = 'pointer';
        el.onclick = function () {
          if (n === st.plan.activeLevel) { A.go('home'); return; }
          S.updateStore(function (s) {
            return Object.assign({}, s, { plan: Object.assign({}, s.plan, { activeLevel: n }) });
          });
          A.toast('已切到第 ' + n + ' 关');
          A.go('home');
        };
      });
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
        kvLink('学过的词', learned + ' 词', '已学') +
        kvLink('已巩固', retained + ' 词', '已巩固') +
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
  /** 可点击的统计行 —— 点进词库看具体是哪些词 */
  function kvLink(k, v, status) {
    return '<a class="kv tappable" href="#/browser?status=' + encodeURIComponent(status) + '">' +
      '<span>' + k + ' ›</span><b>' + v + '</b></a>';
  }

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
        '<button class="btn ghost block" id="imp">从文件导入</button>' +
        '<button class="btn ghost block" id="impclip">从剪贴板导入</button>' +
        '<input type="file" id="file" accept=".json" hidden>' +
        '<button class="btn ghost block" id="rsttime">重置学习时长</button>' +
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
      var impclip = root.querySelector('#impclip');
      if (impclip) impclip.onclick = function () {
        if (!navigator.clipboard || !navigator.clipboard.readText) {
          A.toast('浏览器不支持读剪贴板，请用文件导入'); return;
        }
        navigator.clipboard.readText().then(function (txt) {
          try {
            S.setStore(core('shared/utils/migrate').migrateStore(JSON.parse(txt)));
            A.toast('导入成功'); A.go('home');
          } catch (e) { A.toast('剪贴板内容不是有效存档'); }
        }).catch(function () { A.toast('读取剪贴板失败'); });
      };
      // 计时曾经有 bug 记出过离谱的时长，单独给一个只清时长的入口
      var rt = root.querySelector('#rsttime');
      if (rt) rt.onclick = function () {
        if (!confirm('将学习总时长和每日时长清零，其他学习进度不受影响。确定继续吗？')) return;
        S.updateStore(function (s) {
          return Object.assign({}, s, { stats: Object.assign({}, s.stats,
            { totalStudyTime: 0, dailyStudyTime: {} }) });
        });
        A.toast('已重置'); A.route();
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
      var cur = S.getStore().plan.currentPhase;
      var chips = '<div class="chips">';
      for (var p = 1; p <= cur; p++)
        chips += '<button class="chip-btn' + (p === cur ? ' active' : '') + '" data-p="' + p + '">Phase ' + p + '</button>';
      chips += '<button class="chip-btn" data-p="0">我导入的</button></div>';
      return '<div class="card">' + chips + '</div><div id="list"></div>';
    },
    mount: function (root) {
      var st = S.getStore();
      if (!st) return;
      function draw(p) {
        root.querySelectorAll('.chip-btn').forEach(function (b) {
          b.classList.toggle('active', +b.dataset.p === p);
        });
        var list = p === 0 ? (st.customPassages || [])
          : Passages.PASSAGES.filter(function (x) { return x.phase === p; });
        var doneIds = st.passage.completed;
        root.querySelector('#list').innerHTML = list.length
          ? '<div class="card list">' + list.map(function (x) {
              var d = doneIds.indexOf(x.id) >= 0;
              return '<a class="row" href="#/passage_detail?id=' + encodeURIComponent(x.id) + '">' +
                '<span class="row-icon">' + (d ? '✅' : '📖') + '</span>' +
                '<span class="row-main"><span class="row-title">' + esc(x.title) + '</span>' +
                '<span class="hint">' + (x.questions ? x.questions.length : 0) + ' 题</span></span>' +
                '<span class="arrow">›</span></a>';
            }).join('') + '</div>'
          : '<div class="card center"><p class="hint">' +
            (p === 0 ? '还没有导入的材料，可以在「词库 → 我的材料」里粘贴一段英文生成。' : '这个阶段暂无短文。') +
            '</p></div>';
      }
      root.querySelectorAll('.chip-btn').forEach(function (b) {
        b.onclick = function () { draw(+b.dataset.p); };
      });
      draw(st.plan.currentPhase);
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
  // 状态口径与统计页、小程序端一致（见 pages/browser/browser.js 的 STATUS_OPTIONS）
  var STATUS_OPTIONS = ['全部', '新词', '已学', '学习中', '已巩固', '已毕业'];

  /** 学过的词显示"第几级 · 下次复习" */
  function stageDetail(r, calendarDay) {
    if (r.mastered) return '已走完全部 ' + Srs.MAX_STAGE + ' 级，不再出现';
    var parts = ['第 ' + (r.stage || 0) + ' / ' + Srs.MAX_STAGE + ' 级'];
    if (r.due !== null && r.due !== undefined) {
      var d = r.due - calendarDay;
      parts.push(d <= 0 ? '待复习' : d + ' 天后复习');
    }
    if (r.lapses) parts.push('错过 ' + r.lapses + ' 次');
    return parts.join(' · ');
  }

  var POS_OPTIONS = ['全部', 'n.', 'v.', 'adj.', 'adv.', 'prep.', 'conj.', '其他'];
  var CORE_POS = ['n.', 'v.', 'adj.', 'adv.', 'prep.', 'conj.'];

  A.register('browser', {
    title: '词库',
    render: function () {
      return '<div class="tabs2"><button class="tab2 active" data-t="words">词库</button>' +
        '<button class="tab2" data-t="materials">我的材料</button></div>' +
        '<div id="pane"></div>';
    },
    mount: function (root, params) {
      var paneEl = root.querySelector('#pane');
      var tab = 'words';
      var status = STATUS_OPTIONS.indexOf(params.status) >= 0 ? params.status : '全部';
      var pos = '全部', letter = '全部', kw = '';
      var LIMIT = 200;

      var letters = ['全部'];
      var seenL = {};
      WORDS.forEach(function (w) {
        var c = w.en.charAt(0).toUpperCase();
        if (!seenL[c]) { seenL[c] = 1; letters.push(c); }
      });
      letters = [letters[0]].concat(letters.slice(1).sort());

      root.querySelectorAll('.tab2').forEach(function (b) {
        b.onclick = function () {
          tab = b.dataset.t;
          root.querySelectorAll('.tab2').forEach(function (x) { x.classList.toggle('active', x === b); });
          tab === 'words' ? drawWords() : drawMaterials();
        };
      });

      // ---------- 词库 ----------
      function matches(w, st) {
        var r = st.words[w.en.toLowerCase()];
        if (status === '全部') return true;
        if (status === '新词') return !r || !r.seen;
        if (!r || !r.seen) return false;
        if (status === '已学') return !r.testSkipped;
        if (status === '学习中') return !Plan.isRetained(r);
        if (status === '已巩固') return Plan.isRetained(r);
        if (status === '已毕业') return !!r.mastered;
        return true;
      }

      function drawWords() {
        var st = S.getStore() || { words: {}, plan: { calendarDay: 0 } };
        var q = kw.trim().toLowerCase();
        var arr = WORDS.filter(function (w) {
          if (q && w.en.toLowerCase().indexOf(q) < 0 && w.zh.indexOf(q) < 0) return false;
          if (pos === '其他') { if (CORE_POS.indexOf(w.pos) >= 0) return false; }
          else if (pos !== '全部' && w.pos !== pos) return false;
          if (letter !== '全部' && w.en.charAt(0).toUpperCase() !== letter) return false;
          return matches(w, st);
        });
        var show = arr.slice(0, LIMIT);
        paneEl.innerHTML =
          '<div class="card"><input class="input" id="q" placeholder="搜索单词或中文释义" value="' + esc(kw) + '">' +
          chipRow('s', STATUS_OPTIONS, status) +
          chipRow('p', POS_OPTIONS, pos) +
          chipRow('l', letters, letter) + '</div>' +
          '<p class="hint center">共 ' + arr.length + ' 个词' + (arr.length > LIMIT ? '，显示前 ' + LIMIT + ' 个' : '') + '</p>' +
          (show.length ? '<div class="card list">' + show.map(function (w) {
            var r = st.words[w.en.toLowerCase()] || {};
            var seen = !!r.seen;
            var retained = seen && Plan.isRetained(r);
            var cls = !seen ? 'new' : (r.mastered ? 'ok' : (retained ? '' : 'warn'));
            var label = !seen ? '新词' : (r.mastered ? '已毕业' : (retained ? '已巩固' : '学习中'));
            return '<div class="row"><span class="row-main wordcell" data-en="' + esc(w.en) + '">' +
              '<span class="row-title">' + esc(w.en) + ' <span class="hint">' + esc(w.pos) + '</span> 🔊</span>' +
              '<span class="hint">' + esc(w.zh) + '</span>' +
              (seen ? '<span class="hint">' + esc(stageDetail(r, st.plan.calendarDay)) + '</span>' : '') +
              '</span>' +
              '<span class="tag ' + cls + '">' + label + '</span>' +
              '<span class="wactions">' +
              '<span class="wact' + (r.favorite ? ' on' : '') + '" data-fav="' + esc(w.en) + '">' + (r.favorite ? '⭐' : '☆') + '</span>' +
              '<span class="wact' + (r.markedDifficult ? ' on' : '') + '" data-hard="' + esc(w.en) + '">' + (r.markedDifficult ? '⚠️' : '△') + '</span>' +
              '</span></div>';
          }).join('') + '</div>'
          : '<div class="card center"><p class="hint">没有匹配的单词</p></div>');

        paneEl.querySelector('#q').oninput = function () { kw = this.value; drawWords(); };
        paneEl.querySelectorAll('[data-chip]').forEach(function (b) {
          b.onclick = function () {
            var g = b.dataset.chip, v = b.dataset.v;
            if (g === 's') status = v; else if (g === 'p') pos = v; else letter = v;
            drawWords();
          };
        });
        paneEl.querySelectorAll('.wordcell').forEach(function (el) {
          el.onclick = function () { A.platform.speak(el.dataset.en, S.getSettings().speechRate); };
        });
        paneEl.querySelectorAll('[data-fav]').forEach(function (el) {
          el.onclick = function (e) { e.stopPropagation(); toggle(el.dataset.fav, 'favorite'); };
        });
        paneEl.querySelectorAll('[data-hard]').forEach(function (el) {
          el.onclick = function (e) { e.stopPropagation(); toggle(el.dataset.hard, 'markedDifficult'); };
        });
      }

      function chipRow(group, list, cur) {
        return '<div class="chips">' + list.map(function (x) {
          return '<button class="chip-btn' + (x === cur ? ' active' : '') +
            '" data-chip="' + group + '" data-v="' + esc(x) + '">' + esc(x) + '</button>';
        }).join('') + '</div>';
      }

      function toggle(en, field) {
        var key = en.toLowerCase();
        S.updateStore(function (s) {
          var r = s.words[key] || core('shared/utils/srs').emptyRecord();
          var nr = Object.assign({}, r); nr[field] = !r[field];
          var w = Object.assign({}, s.words); w[key] = nr;
          return Object.assign({}, s, { words: w });
        });
        drawWords();
      }

      // ---------- 我的材料 ----------
      function drawMaterials() {
        var st = S.getStore();
        var list = (st && st.customPassages) || [];
        paneEl.innerHTML = '<div class="card">' +
          '<h3>粘贴一段英文，生成听力材料</h3>' +
          '<p class="hint">每行一句，至少 2 句。会自动生成几道挖词题。</p>' +
          '<input class="input" id="ti" placeholder="标题（可留空）">' +
          '<textarea class="input ta" id="tx" rows="6" placeholder="每行一句英文…"></textarea>' +
          '<button class="btn primary block" id="imp">生成材料</button></div>' +
          (list.length ? '<div class="card list">' + list.map(function (p) {
            return '<div class="row"><span class="row-icon">📄</span>' +
              '<a class="row-main" href="#/passage_detail?id=' + encodeURIComponent(p.id) + '">' +
              '<span class="row-title">' + esc(p.title) + '</span>' +
              '<span class="hint">' + p.lines.length + ' 句 · ' + p.questions.length + ' 题</span></a>' +
              '<span class="wact" data-del="' + esc(p.id) + '">🗑</span></div>';
          }).join('') + '</div>'
          : '<div class="card center"><p class="hint">还没有导入的材料</p></div>');

        paneEl.querySelector('#imp').onclick = doImport;
        paneEl.querySelectorAll('[data-del]').forEach(function (el) {
          el.onclick = function () {
            if (!confirm('删除这份材料？')) return;
            S.updateStore(function (s) {
              return Object.assign({}, s, { customPassages: s.customPassages.filter(function (x) {
                return x.id !== el.dataset.del; }) });
            });
            drawMaterials();
          };
        });
      }

      /** 和小程序端 generateQuestions 同一套规则：挑长词挖空，同文取干扰项 */
      function genQuestions(lines) {
        var qs = [];
        for (var i = 0; i < Math.min(3, lines.length); i++) {
          var words = lines[i].split(/\s+/).filter(function (w) { return w.length > 3; });
          if (words.length < 4) continue;
          var target = words[Math.floor(Math.random() * words.length)].replace(/[.,!?;:"']/g, '');
          if (target.length < 3) continue;
          var pool = [];
          lines.join(' ').split(/\s+/).forEach(function (w) {
            w = w.replace(/[.,!?;:"']/g, '');
            if (w.length > 3 && w !== target && pool.indexOf(w) < 0) pool.push(w);
          });
          if (pool.length < 3) continue;
          var opts = A.shuffle([target].concat(A.shuffle(pool).slice(0, 3)));
          qs.push({ q: '第 ' + (i + 1) + ' 句里出现了哪个词？', options: opts, answer: opts.indexOf(target) });
        }
        return qs;
      }

      function doImport() {
        var text = paneEl.querySelector('#tx').value.trim();
        var title = paneEl.querySelector('#ti').value.trim();
        var lines = text.split(/\n+/).map(function (l) { return l.trim(); }).filter(Boolean);
        if (lines.length < 2) { A.toast('至少需要 2 句'); return; }
        var p = {
          id: 'custom_' + Date.now(), phase: 1, title: title || '自定义材料',
          lines: lines, linesZh: lines.map(function () { return ''; }),
          text: lines.join(' '), questions: genQuestions(lines), source: 'imported'
        };
        S.updateStore(function (s) {
          return Object.assign({}, s, { customPassages: (s.customPassages || []).concat([p]) });
        });
        A.toast('导入成功');
        drawMaterials();
      }

      drawWords();
    }
  });

})();
