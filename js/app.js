/**
 * 应用外壳：路由 + 页面挂载 + 公共工具。
 *
 * 每个视图导出 { title, render(params) -> html, mount(root, params) }。
 * 所有学习逻辑一律走 core('store/index') / core('shared/utils/*')，
 * 网页端不重新实现任何算法——那是两版分叉的开始。
 */
(function (global) {
  'use strict';

  var core = global.AshCore;
  var P = global.AshPlatform;
  var Store = core('store/index');
  var Plan = core('shared/utils/plan');

  var views = {};
  var current = null;

  function register(name, view) { views[name] = view; }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 极简哈希路由：#/words?mode=free
  function parseHash() {
    var h = (location.hash || '#/home').slice(2);
    var qi = h.indexOf('?');
    var name = qi < 0 ? h : h.slice(0, qi);
    var params = {};
    if (qi >= 0) {
      h.slice(qi + 1).split('&').forEach(function (kv) {
        var i = kv.indexOf('=');
        if (i > 0) params[decodeURIComponent(kv.slice(0, i))] = decodeURIComponent(kv.slice(i + 1));
      });
    }
    return { name: name || 'home', params: params };
  }

  function go(path) { location.hash = '#/' + path; }
  function back() {
    if (history.length > 1) history.back(); else go('home');
  }

  var TABS = [
    { name: 'home', label: '首页', icon: '📚' },
    { name: 'levels', label: '进度', icon: '🎯' },
    { name: 'stats', label: '统计', icon: '📊' },
    { name: 'settings', label: '我的', icon: '⚙️' }
  ];

  function renderTabs(active) {
    return '<nav class="tabbar">' + TABS.map(function (t) {
      return '<a class="tab' + (t.name === active ? ' active' : '') + '" href="#/' + t.name + '">' +
        '<span class="tab-icon">' + t.icon + '</span><span>' + t.label + '</span></a>';
    }).join('') + '</nav>';
  }

  // 学习页面停留时长计入统计。
  // 用 store 里的心跳计时器（和小程序端同一份实现）——
  // 早先是"进页面记时间戳、离开时一次性记 now - enterAt"，
  // 而手机上切走 App 时 visibilitychange/pagehide 未必可靠，
  // 时间戳会停在几小时前，某次路由切换就把这一大段记进去，
  // 于是出现单日 26 小时这种不可能的数。
  var TIMED = { words: 1, framework: 1, shadowing: 1, listening: 1, dialogue: 1, passage_detail: 1 };
  function startTiming(name) { if (TIMED[name]) Store.startStudyTimer(); }
  function flushStudyTime() { Store.stopStudyTimer(); }

  function route() {
    var r = parseHash();
    var view = views[r.name];
    if (!view) { go('home'); return; }

    flushStudyTime();
    P.stopSpeak();

    var app = document.getElementById('app');
    var isTab = TABS.some(function (t) { return t.name === r.name; });
    app.className = 'page' + (isTab ? ' has-tabs' : '');
    app.innerHTML =
      (isTab ? '' : '<header class="topbar"><button class="back" id="btn-back">‹</button>' +
        '<span class="topbar-title">' + esc(view.title || '') + '</span></header>') +
      '<main class="content" id="view"></main>' +
      (isTab ? renderTabs(r.name) : '');

    var host = document.getElementById('view');
    try {
      host.innerHTML = view.render(r.params) || '';
      if (view.mount) view.mount(host, r.params);
    } catch (e) {
      console.error('[view ' + r.name + ']', e);
      host.innerHTML = '<div class="card err">页面出错了：' + esc(e.message) + '</div>';
    }

    var b = document.getElementById('btn-back');
    if (b) b.onclick = back;

    current = r.name;
    startTiming(r.name);
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('pagehide', function () { flushStudyTime(); });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) flushStudyTime(); else startTiming(current);
  });

  // 轻量提示
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('show'); }, 10);
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { t.remove(); }, 300);
    }, 1600);
  }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  global.App = {
    register: register, go: go, back: back, route: route,
    esc: esc, toast: toast, shuffle: shuffle,
    core: core, platform: P, Store: Store, Plan: Plan
  };

  // 启动
  document.addEventListener('DOMContentLoaded', function () {
    P.initStore();
    if (!location.hash) location.hash = '#/home';
    route();
  });
})(window);
