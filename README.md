# Ash英语 · 网页版

手机浏览器直接打开就能用的英语学习工具。与微信小程序版**共用同一套学习逻辑**。

**在线使用：** https://tuzhi4444.github.io/ash-english-web/

## 功能

- **1902 个高频词**，按口语使用频率排序投放
- **单词四步法**：翻卡 → 听写 → 语境填词形 → 听整句选义
- **当堂补考**：新词学完隔几个词再考一次，避免"学完就忘"
- **再练今日新词**：随时重刷当天新词（翻卡 + 听写），不计任务、不影响复习计划
- **36 种句式框架**造句、**跟读训练**（语音识别打分）、**听辨训练**、**36 个对话场景**、**150 篇短文听力**
- **间隔重复算法**：1 → 3 → 7 → 15 → 30 → 60 → 120 → 240 天
- **入门测试**：20 题四选一（中文→英文），带猜对校正，定学习起点
- **起点自动校准**：新词连续零失误时自动往后跳，跳过你已经会的词

## 数据

学习进度存在浏览器 localStorage 里，**不上传任何服务器**。

换设备或清缓存前，请到「我的 → 导出存档」保存 JSON 文件，在新设备用「导入存档」恢复。小程序版导出的存档也可以直接导入（格式相同）。

发音走 TTS 服务；服务不可用时自动回退到浏览器内置语音合成。语音识别用浏览器的 Web Speech API，不支持的浏览器会降级为自评。

## 与小程序版的关系

学习逻辑（SRS 调度、关卡、阶段推进、入门测试、起点校准）**不是重写的，是从小程序工程直接打包的**：

```
english-app-mp/shared/**   ← 唯一事实来源
english-app-mp/store/index.js
        │
        │  node build.js
        ▼
english-app-web/js/core.bundle.js
```

这样两版行为完全一致，改一处不会分叉。网页端只额外实现了宿主层（`js/platform.js`：localStorage / 音频 / 语音识别）和界面。

小程序端改了逻辑后，重新生成：

```bash
node build.js          # 默认找 ../english-app-mp
MP_DIR=/path/to/mp node build.js
```

## 本地运行

纯静态，无需构建工具：

```bash
python3 -m http.server 8781
```

然后打开 http://localhost:8781

## 目录

```
index.html            页面外壳
css/app.css           样式（移动优先，支持深色模式）
js/core.bundle.js     自动生成 —— 勿手改
js/platform.js        宿主层：存档 / 发音 / 语音识别
js/app.js             路由与外壳
js/views-*.js         各页面
build.js              从小程序工程打包核心逻辑
```

## 浏览器支持

iOS Safari / Android Chrome / 桌面 Chrome、Edge、Safari。

语音识别依赖 Web Speech API，目前 Chrome 系支持最好；iOS Safari 上跟读会自动降级为自评模式，其余功能不受影响。
