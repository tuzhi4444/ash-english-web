/* 首页 / 入门测试 / 单词学习（含自由复习） */
(function () {
  'use strict';
  var A = window.App, core = A.core, S = A.Store, Plan = A.Plan, esc = A.esc;
  var WORDS = core('shared/data/words').WORDS;
  var Srs = core('shared/utils/srs');
  var Inflect = core('shared/utils/inflect');
  var Options = core('shared/utils/options');
  var UsageNotes = core('shared/data/usageNotes');
  var Stats = core('shared/utils/stats');
  var Passages = core('shared/data/passages/index');

  // ========================= 首页 =========================
  A.register('home', {
    title: '首页',
    render: function () {
      if (!S.hasStore()) {
        return '<div class="card welcome">' +
          '<div class="big-icon">📚</div>' +
          '<h1>Ash英语</h1>' +
          '<p>一个系统化的英语学习工具，包含 1900+ 词汇、36 种句式框架、听力训练、对话场景和间隔复习算法。</p>' +
          '<p>词库按口语使用频率排序，学习也严格按这个顺序走。入门测试沿这条序列抽 ' +
          Plan.ASSESSMENT_SAMPLE_SIZE + ' 个词，找出<b>你大概该从第几个词开始学</b>。</p>' +
          '<p>测不准也没关系——之后会看你在新词上的真实表现自动调整起点，几天内就会修到位。' +
          '不想做题的话直接<b>从零开始</b>也行。</p>' +
          '<button class="btn primary block" onclick="location.hash=\'#/assessment\'">开始</button>' +
          '</div>';
      }
      S.refreshStore();
      var st = S.getStore();
      var t = S.getTodayTargets();
      var c = S.getActiveLevelCompletion() || { words: 0, framework: 0, shadowing: 0, listening: 0, dialogue: 0 };
      var gate = Plan.getPhaseGate(st.plan.currentPhase);
      var retained = Plan.getRetainedCount(st.words);
      var ratio = Math.round(Plan.getRetainedRatio(st.words) * 100);
      var canPlay = S.canPlayCurrentLevel();
      var studyDays = Object.keys(st.stats.dailyStudyTime || {})
        .filter(function (d) { return (st.stats.dailyStudyTime[d] || 0) > 0; }).length;
      var todayNew = S.getTodayNewWords().length;
      var calib = st.plan.calib;
      var showCalib = calib && calib.lastDate === Plan.todayStr() && calib.lastSkip > 0;

      var tasks = [
        ['words', '📗', '单词学习', c.words, t.words],
        ['framework', '✏️', '框架造句', c.framework, t.framework],
        ['shadowing', '🎤', '跟读训练', c.shadowing, t.shadowing],
        ['listening', '🎧', '听辨训练', c.listening, t.listening],
        ['dialogue', '💬', '对话场景', c.dialogue, t.dialogue]
      ];

      var h = '<div class="card phase">' +
        '<div class="phase-top">' +
          '<div><span class="chip">Phase ' + st.plan.currentPhase + '</span> ' +
            '<b>' + esc(Plan.PHASE_NAMES[st.plan.currentPhase]) + '</b>' +
            '<div class="hint">第 ' + st.plan.planDay + ' 关 · 已学 ' + studyDays + ' 天</div></div>' +
          '<div class="phase-num"><div class="hint">巩固率</div><div class="big">' + ratio + '%</div></div>' +
        '</div>' +
        '<div class="bar"><i style="width:' +
          (gate ? Math.min(100, Math.round(retained / gate.retainedWords * 100)) : 100) + '%"></i></div>' +
        '<div class="phase-foot"><span>已巩固 ' + retained + ' 词</span>' +
          '<span>' + (gate ? '下一阶段：' + gate.retainedWords + ' 词 / ' + Math.round(gate.ratio * 100) + '%' : '已满级') + '</span></div>' +
      '</div>';

      if (showCalib) {
        h += '<div class="notice">最近的新词对你偏简单，已把学习起点往后挪了 ' + calib.lastSkip +
          ' 个词。被跳过的词没有删掉，仍排在队列后面。可在「我的」里关闭自动调整。</div>';
      }

      if (todayNew > 0) {
        h += '<a class="free-review" href="#/words?mode=free">' +
          '<div><div class="fr-title">🔁 再练今天的新词</div>' +
          '<div class="hint">' + todayNew + ' 个 · 翻卡 + 听写两步 · 不计入今日任务</div></div>' +
          '<span class="arrow">›</span></a>';
      }

      h += '<h2 class="sec">今日任务' + (canPlay ? '' : ' <span class="hint">（今天已练完，明天再来）</span>') + '</h2>';
      h += '<div class="card list">';
      tasks.forEach(function (r) {
        var pct = r[4] > 0 ? Math.min(100, Math.round(r[3] / r[4] * 100)) : 100;
        h += '<a class="row' + (canPlay ? '' : ' locked') + '" href="' + (canPlay ? '#/' + r[0] : '#/home') + '">' +
          '<span class="row-icon">' + r[1] + '</span>' +
          '<span class="row-main"><span class="row-title">' + r[2] + '</span>' +
          '<span class="bar sm"><i style="width:' + pct + '%"></i></span></span>' +
          '<span class="hint">' + r[3] + '/' + r[4] + '</span><span class="arrow">›</span></a>';
      });
      h += '</div>';

      var ps = Passages.getUnlockedPassages(st.plan.currentPhase);
      h += '<h2 class="sec">连续听力</h2><div class="card list">' +
        '<a class="row" href="#/passage"><span class="row-icon">📖</span>' +
        '<span class="row-main"><span class="row-title">短文听力</span></span>' +
        '<span class="hint">' + st.passage.completed.length + '/' + ps.length + '</span><span class="arrow">›</span></a>' +
        '<a class="row" href="#/dialogue_list"><span class="row-icon">💬</span>' +
        '<span class="row-main"><span class="row-title">对话场景库</span></span>' +
        '<span class="hint">' + (st.dialogue.practiced || []).length + '/' +
        core('shared/data/dialogues/index').getUnlockedDialogues(st.plan.currentPhase).length +
        '</span><span class="arrow">›</span></a>' +
        '<a class="row" href="#/browser"><span class="row-icon">🔍</span>' +
        '<span class="row-main"><span class="row-title">词库浏览</span></span><span class="arrow">›</span></a>' +
        '</div>';

      h += '<div class="card stat-row"><div><div class="big">' + Stats.totalLearned(st) + '</div><div class="hint">学过的词</div></div>' +
        '<div><div class="big">' + st.plan.cleared.length + '</div><div class="hint">已通关</div></div>' +
        '<div><div class="big">' + Stats.formatDuration(st.stats.totalStudyTime) + '</div><div class="hint">总时长</div></div></div>';
      return h;
    }
  });

  // ========================= 入门测试 =========================
  var GUESS_RATE = 0.25, RANK_WINDOW = 300, START_MARGIN = 0.15;
  var SAMPLE = Plan.ASSESSMENT_SAMPLE_SIZE;

  A.register('assessment', {
    title: '入门测试',
    render: function () { return '<div id="asmt"></div>'; },
    mount: function (root) {
      var byRank = WORDS.slice().sort(function (a, b) { return a.rank - b.rank; });
      var rankIndex = {};
      byRank.forEach(function (w, i) { rankIndex[w.en] = i; });
      var sample = [], correct = 0, attempted = 0, idx = 0;
      var box = root.querySelector('#asmt');

      function buildOptions(word) {
        var self = rankIndex[word.en];
        var near = WORDS.filter(function (w) {
          return w.pos === word.pos && w.en !== word.en && w.zh !== word.zh &&
            Math.abs(rankIndex[w.en] - self) <= RANK_WINDOW;
        });
        var src = near.length >= 3 ? near : WORDS.filter(function (w) {
          return w.en !== word.en && w.zh !== word.zh;
        });
        var picks = {}, n = 0, guard = 0;
        while (n < 3 && guard++ < 400) {
          var p = src[Math.floor(Math.random() * src.length)];
          if (p && !picks[p.en]) { picks[p.en] = 1; n++; }
        }
        return A.shuffle([word.en].concat(Object.keys(picks)));
      }

      function intro() {
        box.innerHTML = '<div class="card">' +
          '<div class="big-icon">📝</div><h1>' + SAMPLE + ' 个词，定你的学习起点</h1>' +
          '<p>词库里的 1900 多个词按<b>口语使用频率</b>排序，学习也严格按这个顺序投放。' +
          '测试沿这条序列<b>等距抽 ' + SAMPLE + ' 个词</b>，从最常用一路问到最生僻。</p>' +
          '<h3>为什么是"看中文选英文"</h3>' +
          '<p>最早的版本是直接问你"认不认识"。问题是<b>自评不准，而且朝一个方向不准</b>——' +
          '看到眼熟就点认识，但眼熟不等于知道意思。这种高估是<b>系统性的</b>，不会因为多做几题而抵消。</p>' +
          '<p class="hint">实测：习惯性高估 10% 的话，' + SAMPLE + ' 题的总误差是 273 个词，' +
          '加到 200 题也只降到 257 个词——题量翻十倍，误差只降 6%，因为占大头的是偏差不是随机波动。</p>' +
          '<p>方向也有讲究。给英文选中文考的是<b>"再认"</b>（中文一摆出来就想起来了），' +
          '而这个 app 教到的标准是<b>"产出"</b>：听写要拼出来、语境要填对词形。' +
          '所以改成给中文选英文，跟听写、语境同一个方向。</p>' +
          '<h3>测不准也不要紧</h3>' +
          '<p>这 ' + SAMPLE + ' 道题只负责给个<b>起步位置</b>。开始学之后会盯着你在新词上的真实表现——' +
          '连续零失误就说明这批太简单，起点自动往后挪，几天内修到位。' +
          '所以别为了"考好"去蒙，如实作答收敛得更快。</p>' +
          '<h3>它不会做什么</h3>' +
          '<ul class="hint"><li><b>没有任何词会被跳过</b>。答对只是把它排到队列后面，前面学完照样会轮到</li>' +
          '<li>不会因为你答对就算掌握——掌握与否只由后面的练习决定</li>' +
          '<li>不确定就点"想不起来"，别蒙</li></ul>' +
          '<div class="opt-card"><div class="opt-title">做 ' + SAMPLE + ' 题测试<span class="tag">约 2 分钟</span></div>' +
          '<div class="hint">适合已有基础的人。测完直接从对你有挑战的地方起步，省下的时间以周计。</div></div>' +
          '<div class="opt-card"><div class="opt-title">从零开始<span class="tag">不用做题</span></div>' +
          '<div class="hint">适合零基础或不想做题的人。从最常用的第 1 个词开始按词频往下学。' +
          '就算你已经会一些，那些词四步全过、很快毕业，不会长期占用时间。</div></div>' +
          '<button class="btn primary block" id="go">做 ' + SAMPLE + ' 题测试</button>' +
          '<button class="btn ghost block" id="zero">从零开始</button></div>';
        box.querySelector('#go').onclick = start;
        box.querySelector('#zero').onclick = function () {
          S.createInitialStore([], 0, 0); A.go('home');
        };
      }

      function start() {
        var band = Math.floor(byRank.length / SAMPLE);
        sample = [];
        for (var i = 0; i < SAMPLE; i++) {
          var from = i * band, to = (i === SAMPLE - 1) ? byRank.length : from + band;
          sample.push(byRank[from + Math.floor(Math.random() * (to - from))]);
        }
        correct = 0; attempted = 0; idx = 0;
        question();
      }

      function question() {
        var w = sample[idx];
        var opts = buildOptions(w);
        box.innerHTML = '<div class="progress"><span class="hint">' + (idx + 1) + ' / ' + SAMPLE + '</span>' +
          '<div class="bar"><i style="width:' + Math.round(idx / SAMPLE * 100) + '%"></i></div></div>' +
          '<div class="card center"><div class="hint">哪个词是这个意思？</div>' +
          '<div class="prompt-zh">' + esc(w.zh) + '</div><div class="hint">' + esc(w.pos) + '</div></div>' +
          '<div class="opts">' + opts.map(function (o, i) {
            return '<button class="opt" data-i="' + i + '">' + esc(o) + '</button>';
          }).join('') + '</div>' +
          '<button class="btn ghost block" id="dunno">想不起来</button>' +
          '<p class="hint center">不确定就点"想不起来"——乱蒙会让起点定得偏深，前几周反而更吃力</p>';
        box.querySelectorAll('.opt').forEach(function (b) {
          b.onclick = function () {
            attempted++;
            if (opts[+b.dataset.i] === w.en) correct++;
            next();
          };
        });
        box.querySelector('#dunno').onclick = next;
      }

      function next() {
        idx++;
        if (idx < SAMPLE) { question(); return; }
        // 猜对校正：扣掉蒙对的部分（与小程序端同一套公式）
        var known = (correct - attempted * GUESS_RATE) / (1 - GUESS_RATE);
        var ratio = Math.max(0, Math.min(1, known / SAMPLE));
        var frac = Math.max(0, ratio - START_MARGIN);
        var skip = Math.min(byRank.length - 1, Math.floor(frac * byRank.length));
        var startRank = skip > 0 ? byRank[skip].rank : 0;
        box.innerHTML = '<div class="card"><div class="big-icon">🎉</div><h1>测试完成</h1>' +
          '<div class="kv"><span>抽样词汇</span><b>' + SAMPLE + ' 词</b></div>' +
          '<div class="kv"><span>答对</span><b>' + correct + ' / ' + attempted + ' 题</b></div>' +
          '<div class="kv"><span>估计词汇量</span><b>' + Math.round(ratio * WORDS.length) + ' 词</b></div>' +
          '<div class="kv"><span>认识比例</span><b>' + Math.round(ratio * 100) + '%</b></div>' +
          (skip > 0
            ? '<h3>你的起点：第 ' + (skip + 1) + ' 个词「' + esc(byRank[skip].en) + '」</h3>' +
              '<p class="hint">排在它前面的 ' + skip + ' 个更常用的词会挪到队列末尾——<b>不是删掉</b>，' +
              '等这一批学完就会轮到。起点已经从估算位置往回退了一截，宁可让你多学几个已经会的词。</p>'
            : '<h3>从第 1 个词开始</h3><p class="hint">按口语词频从高到低学。</p>') +
          '<p class="hint">「估计词汇量」已扣掉蒙对的部分，所以可能低于答对数——这是有意的。' +
          SAMPLE + ' 道题只能粗略定位，重测有出入很正常；真正把起点修准的是接下来几天的练习。</p>' +
          '<button class="btn primary block" id="fin">开始学习</button></div>';
        box.querySelector('#fin').onclick = function () {
          S.createInitialStore([], SAMPLE, startRank);
          A.go('home');
        };
      }

      intro();
    }
  });

  // ========================= 单词学习 =========================
  // 步骤配置来自打包进来的 shared/utils/plan，与小程序端同一份定义
  var STEP_NEW = Plan.WORD_STEPS.new;
  var STEP_REVIEW = Plan.WORD_STEPS.review;
  var STEP_FREE = Plan.WORD_STEPS.free;
  var LABELS = { flip: '翻卡', dictation: '听写', context: '语境', listening: '听辨' };
  var MISS_NEW = Plan.WORD_MAX_MISSES.new, MISS_REVIEW = Plan.WORD_MAX_MISSES.review;
  var RECHECK_GAP = 6, MAX_RECHECK = 2;

  A.register('words', {
    title: '单词学习',
    render: function () { return '<div id="w"></div>'; },
    mount: function (root, params) {
      var free = params.mode === 'free';
      var box = root.querySelector('#w');
      var st = S.getStore();
      var queue = [], i = 0, step = 0, modes = [], maxMiss = 0, misses = 0;
      var done = 0, total = 0, correctCount = 0, recheckLeft = {}, isReviewWord = false;
      var score = 0, combo = 0;

      function init() {
        if (free) {
          var names = S.getTodayNewWords();
          queue = A.shuffle(WORDS.filter(function (w) { return names.indexOf(w.en) >= 0; }));
          if (!queue.length) {
            box.innerHTML = '<div class="card center"><p>今天还没有学过新词，先去「单词学习」学一批再回来练。</p>' +
              '<button class="btn ghost block" onclick="history.back()">返回</button></div>';
            return;
          }
          total = queue.length; done = 0; correctCount = 0;
        } else {
          if (!S.canPlayCurrentLevel()) {
            box.innerHTML = '<div class="card center"><p>今天已通关，明天再来。</p>' +
              '<button class="btn ghost block" onclick="history.back()">返回</button></div>';
            return;
          }
          var q = S.getTodayWordQueue().queue;
          var c = S.getActiveLevelCompletion() || { words: 0 };
          var t = S.getTodayTargets();
          done = c.words; total = t.words;
          queue = q.slice(0, Math.max(0, total - done));
          if (!queue.length) {
            box.innerHTML = '<div class="card center"><p>🎉 今天没有待学的词了，明天再来吧。</p>' +
              '<button class="btn ghost block" onclick="history.back()">返回</button></div>';
            return;
          }
        }
        i = 0; recheckLeft = {};
        loadWord();
      }

      function stepsFor(w) {
        if (free) return { modes: STEP_FREE, miss: MISS_REVIEW, review: true };
        var r = S.getStore().words[w.en.toLowerCase()];
        var review = !!w.__recheck || !!(r && r.seen && r.stage > 0);
        return { modes: review ? STEP_REVIEW : STEP_NEW, miss: review ? MISS_REVIEW : MISS_NEW, review: review };
      }

      function loadWord() {
        var s = stepsFor(queue[i]);
        modes = s.modes; maxMiss = s.miss; isReviewWord = s.review;
        step = 0; misses = 0;
        render();
      }

      function render() {
        var w = queue[i];
        var mode = modes[step];
        var pct = total > 0 ? Math.min(100, Math.round(done / total * 100)) : 0;
        var h = '<div class="progress"><span class="hint">' + done + ' / ' + total +
          '</span><span class="hint">剩余 ' + (queue.length - i) +
          (free ? '' : '　得分 ' + score + '　连击 ' + combo) + '</span>' +
          '<div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
          '<div class="steps">' + modes.map(function (m, k) {
            return '<span class="stepchip' + (k === step ? ' active' : (k < step ? ' done' : '')) + '">' +
              (k < step ? '✓ ' : '') + LABELS[m] + '</span>';
          }).join('') + '</div>';

        if (mode === 'flip') {
          h += '<div class="card center flash" id="card"><div class="prompt-zh">' + esc(w.zh) + '</div>' +
            '<div class="hint">' + esc(w.pos) + '</div><div id="rev"></div>' +
            '<div class="hint" id="tip">点击卡片翻牌</div></div>' +
            '<div class="opts two" id="fa" hidden>' +
            '<button class="btn ghost" data-ok="0">不认识</button>' +
            '<button class="btn primary" data-ok="1">认识</button></div>';
        } else if (mode === 'dictation') {
          h += '<div class="card center"><div class="hint">听发音，拼出这个单词</div>' +
            '<button class="btn ghost" id="play">🔊 播放发音</button>' +
            '<input class="input" id="inp" placeholder="输入英文单词" autocapitalize="off" autocomplete="off">' +
            '<button class="btn primary block" id="ck">校验</button></div>';
        } else if (mode === 'context') {
          var blank = Inflect.findFormInSentence(w.en, w.example);
          var sent = blank ? w.example.replace(blank.form, '________') : w.example;
          h += '<div class="card"><div class="sent">' + esc(sent) + '</div>' +
            '<div class="hint">' + esc(w.exampleZh) + '　提示：' + esc(w.zh) + '</div>' +
            (blank
              ? '<input class="input" id="inp" placeholder="填入正确词形" autocapitalize="off" autocomplete="off">' +
                '<button class="btn primary block" id="ck">校验</button>'
              : '<button class="btn primary block" id="skip">继续</button>') + '</div>';
        } else {
          var opts = Options.buildMeaningOptions(w, 4);
          h += '<div class="card"><div class="hint">听整句，选出正确的中文意思</div>' +
            '<button class="btn ghost" id="play">🔊 再听一次</button>' +
            '<div class="opts">' + opts.map(function (o, k) {
              return '<button class="opt" data-i="' + k + '" data-v="' + esc(o) + '">' + esc(o) + '</button>';
            }).join('') + '</div></div>';
        }
        box.innerHTML = h;
        bind(mode, w);
      }

      function bind(mode, w) {
        var rate = S.getSettings().speechRate;
        if (mode === 'flip') {
          var card = box.querySelector('#card');
          card.onclick = function () {
            if (card.dataset.f) return;
            card.dataset.f = '1';
            var note = UsageNotes.getUsageNote(w.en);
            box.querySelector('#rev').innerHTML = '<div class="word-en">' + esc(w.en) + '</div>' +
              (note ? '<div class="note">核心：' + esc(note.core) + '</div>' +
                (note.senses && note.senses.length
                  ? '<button class="btn ghost" id="nt">📖 用法详解（' + note.senses.length + ' 种用法）</button>' +
                    '<div id="ntb" hidden class="notebody">' + note.senses.map(function (x) {
                      return '<div class="sense"><b>' + esc(x.use) + '</b>' +
                        '<div>' + esc(x.en) + '</div><div class="hint">' + esc(x.zh) + '</div></div>';
                    }).join('') + '</div>'
                  : '')
              : '');
            var nt = box.querySelector('#nt');
            if (nt) nt.onclick = function (ev) {
              ev.stopPropagation();
              var b = box.querySelector('#ntb'); b.hidden = !b.hidden;
            };
            box.querySelector('#tip').remove();
            var fa = box.querySelector('#fa'); fa.hidden = false;
            if (S.getSettings().autoSpeak) A.platform.speak(w.en, rate);
            fa.querySelectorAll('button').forEach(function (b) {
              b.onclick = function () { judge(b.dataset.ok === '1', w); };
            });
          };
        } else if (mode === 'dictation') {
          A.platform.speak(w.en, rate);
          box.querySelector('#play').onclick = function () { A.platform.speak(w.en, rate); };
          var inp = box.querySelector('#inp');
          var go = function () { judge(inp.value.trim().toLowerCase() === w.en.toLowerCase(), w); };
          box.querySelector('#ck').onclick = go;
          inp.onkeydown = function (e) { if (e.key === 'Enter') go(); };
          inp.focus();
        } else if (mode === 'context') {
          var blank = Inflect.findFormInSentence(w.en, w.example);
          if (!blank) { box.querySelector('#skip').onclick = function () { judge(true, w); }; return; }
          var ip = box.querySelector('#inp');
          var g2 = function () { judge(ip.value.trim().toLowerCase() === blank.form.toLowerCase(), w); };
          box.querySelector('#ck').onclick = g2;
          ip.onkeydown = function (e) { if (e.key === 'Enter') g2(); };
          ip.focus();
        } else {
          A.platform.speak(w.example, rate);
          box.querySelector('#play').onclick = function () { A.platform.speak(w.example, rate); };
          box.querySelectorAll('.opt').forEach(function (b) {
            b.onclick = function () { judge(b.dataset.v === w.exampleZh, w); };
          });
        }
      }

      function judge(ok, w) {
        if (ok) { score += 10 + combo * 2; combo++; } else { misses++; combo = 0; }
        A.platform.speak(w.example, S.getSettings().speechRate);
        var last = step >= modes.length - 1;
        box.insertAdjacentHTML('beforeend',
          '<div class="feedback ' + (ok ? 'ok' : 'no') + '">' +
          (ok ? '✅ 答对了' : '❌ 正确答案：' + esc(w.en)) +
          '<div class="hint">' + esc(w.example) + '<br>' + esc(w.exampleZh) + '</div>' +
          '<button class="btn primary block" id="nx">' + (last ? '下一个词' : '下一步') + '</button></div>');
        box.querySelector('#nx').onclick = function () {
          if (!last) { step++; render(); return; }
          commit(w);
        };
        box.querySelector('#nx').scrollIntoView({ block: 'nearest' });
      }

      function commit(w) {
        var passed = misses <= maxMiss;
        if (free) {
          // 自由复习：不计任务、不动 SRS、不参与校准（与小程序端三条规则一致）
          if (passed) correctCount++;
          done++;
          i++;
          if (i >= queue.length) return finish();
          loadWord();
          return;
        }
        var isRecheck = !!w.__recheck;
        if (!isRecheck || !passed) S.updateWordRecord(w.en, passed);
        if (!isRecheck) {
          if (!isReviewWord) { S.recordNewWordResult(misses === 0); S.recordTodayNew(w.en); }
          S.completeLevelTask('words', 1);
          done++;
        }
        // 当堂补考
        var wasNew = isRecheck || !isReviewWord;
        if (wasNew) {
          var key = w.en.toLowerCase();
          var left = recheckLeft[key] === undefined ? MAX_RECHECK : recheckLeft[key];
          if ((!isRecheck || !passed) && left > 0) {
            recheckLeft[key] = left - 1;
            var at = Math.min(queue.length, i + 1 + RECHECK_GAP);
            var copy = Object.assign({}, w); copy.__recheck = true;
            queue.splice(at, 0, copy);
          }
        }
        i++;
        if (i >= queue.length) return finish();
        loadWord();
      }

      function finish() {
        if (free) {
          box.innerHTML = '<div class="card center"><div class="big-icon">🎉</div><h1>这一轮练完了</h1>' +
            '<div class="big">' + correctCount + '/' + total + '</div><div class="hint">答对</div>' +
            '<p class="hint">这一轮不计入今日任务，也不会改变复习计划——纯粹是多看几眼。想练几轮就练几轮。</p>' +
            '<button class="btn primary block" id="again">再来一轮</button>' +
            '<button class="btn ghost block" onclick="location.hash=\'#/home\'">返回首页</button></div>';
          box.querySelector('#again').onclick = init;
        } else {
          box.innerHTML = '<div class="card center"><div class="big-icon">🎉</div><h1>本局结算</h1>' +
            '<p class="hint">今日单词 ' + done + ' / ' + total + '</p>' +
            '<button class="btn primary block" onclick="location.hash=\'#/home\'">返回首页</button></div>';
        }
      }

      init();
    }
  });
})();
