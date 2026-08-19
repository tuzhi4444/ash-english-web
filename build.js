#!/usr/bin/env node
/**
 * 从小程序工程打包共享逻辑，生成 js/core.bundle.js。
 *
 * 为什么用生成而不是手抄：网页版和小程序版必须**行为完全一致**。
 * 手抄两份意味着以后每改一次 SRS 就要同步两遍，迟早分叉。
 * shared/ 和 store/ 里没有任何 wx API 依赖（store 只用到 getApp()，
 * 由网页端的宿主层补上），所以可以原样打包。
 *
 * 用法：node build.js  —— 每次小程序端改了逻辑，重跑一次即可。
 */
const fs = require('fs');
const path = require('path');

const MP = process.env.MP_DIR || path.join(__dirname, '..', 'english-app-mp');
const OUT = path.join(__dirname, 'js', 'core.bundle.js');

// 要打进包的模块（相对小程序根目录，不带 .js）
const ENTRIES = [
  'shared/data/words',
  'shared/data/frameworks',
  'shared/data/usageNotes',
  'shared/data/dialogues/builder',
  'shared/data/dialogues/phase1',
  'shared/data/dialogues/phase2',
  'shared/data/dialogues/phase3',
  'shared/data/dialogues/index',
  'shared/data/passages/builder',
  'shared/data/passages/phase1',
  'shared/data/passages/phase2',
  'shared/data/passages/phase3',
  'shared/data/passages/index',
  'shared/utils/inflect',
  'shared/utils/text',
  'shared/utils/options',
  'shared/utils/framework',
  'shared/utils/srs',
  'shared/utils/plan',
  'shared/utils/stats',
  'shared/utils/store',
  'shared/utils/migrate',
  'store/index',
];

function read(id) {
  const p = path.join(MP, id + '.js');
  if (!fs.existsSync(p)) throw new Error('找不到模块：' + p);
  return fs.readFileSync(p, 'utf8');
}

const parts = [];
for (const id of ENTRIES) {
  const src = read(id);
  parts.push(
    '__def(' + JSON.stringify(id) + ', function (module, exports, require) {\n' +
    src +
    '\n});\n'
  );
}

const header = `/* 自动生成，请勿手改 —— 由 build.js 从小程序工程打包。
   源：${path.relative(path.join(__dirname, '..'), MP)}
   生成时间：${new Date().toISOString()}
   共 ${ENTRIES.length} 个模块 */
(function (global) {
  var defs = {}, cache = {};
  function __def(id, fn) { defs[id] = fn; }
  // 把 "./x" / "../y/z" 解析成相对小程序根目录的模块 id
  function resolve(from, req) {
    if (req.charAt(0) !== '.') return req;
    var base = from.split('/'); base.pop();
    var segs = req.split('/');
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i];
      if (s === '.' || s === '') continue;
      if (s === '..') base.pop();
      else base.push(s);
    }
    var id = base.join('/');
    // 目录导入：a/b -> a/b/index
    if (!defs[id] && defs[id + '/index']) id = id + '/index';
    return id;
  }
  function req(from, id) {
    var rid = resolve(from, id);
    if (cache[rid]) return cache[rid].exports;
    var def = defs[rid];
    if (!def) throw new Error('模块未打包: ' + id + ' (from ' + from + ')');
    var mod = { exports: {} };
    cache[rid] = mod;
    def(mod, mod.exports, function (r) { return req(rid, r); });
    return mod.exports;
  }
  global.AshCore = function (id) { return req('', id); };

  /* ===== 以下为打包进来的模块 ===== */
`;

// 模块定义放在同一个 IIFE 内部，__def 是闭包里的局部函数——
// 早先写成 global.__def 再在外层调用，浏览器里能跑但 Node 里不行，
// 而我需要能在 Node 里跑同一份产物做验证
const footer = `})(typeof window !== 'undefined' ? window : globalThis);\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, header + '\n' + parts.join('\n') + '\n' + footer, 'utf8');
const kb = (fs.statSync(OUT).size / 1024).toFixed(0);
console.log(`已生成 ${path.relative(process.cwd(), OUT)}  (${ENTRIES.length} 个模块, ${kb}KB)`);
