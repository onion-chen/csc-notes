---
home: true
heroImage: /logo.png
heroText: CSC-NOTES
tagline: 用代码丈量世界，用文字记录成长
actions:
  - text: 即刻开始
    link: /notes/javascript/
    type: primary
features:
- title: 前沿技术
  details: 涵盖JavaScript、TypeScript、Node.js等最新技术实践，每周更新原创教程
  icon: 🚀
- title: 全栈式开发
  details: 理解整个系统的架构设计，包括服务器架构、数据库架构和前端架构，能够设计出高效、可扩展和易于维护的系统
  icon: ⚙️
- title: 开源生态
  details: 持续输出开源项目，提供可复用的工程化解决方案
  icon: 🌐
footer: MIT Licensed | Copyright © 2025 CSC
---

<!-- 自定义内容区块 -->
## 🎯 近期更新
[TypeScript](/notes/typescript/README.md) 

## 🌟 精选专栏
<div class="feature-grid">
  <a href="./notes/javascript/" class="grid-item">
    <img src="/javascript.png" alt="JavaScript">
    <div class='content'>JavaScript</div>
  </a>
</div>

<style>
.feature-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}
.grid-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.2s;
  background: var(--c-bg-accent);
  min-width: 200px;
  flex: 1;
}
.grid-item:hover {
  transform: translateY(-5px);
}
.grid-item img {
  margin-right: 0.5rem;
  width: 16px; /* 可根据需要调整 */
  height: 16px; /* 可根据需要调整 */
}
.grid-item .content {
  margin: 0;
  white-space: nowrap;
}
</style>