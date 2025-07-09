<template>
  <div>
    <h1 style="margin-bottom: 0.5em;">📚 笔记总览</h1>
    <blockquote>这里汇总了所有主要知识分类，点击下方任意卡片即可快速跳转到对应内容。</blockquote>
    <div class="cards">
      <div class="card" v-for="card in cards" :key="card.title">
        <div class="card-title">{{ card.title }}</div>
        <div class="card-links">
          <a v-for="link in card.links" :key="link.text" :href="link.href" :target="link.external ? '_blank' : undefined">{{ link.text }}</a>
        </div>
      </div>
    </div>
    <hr />
    <blockquote>持续更新中，欢迎收藏与关注！</blockquote>
  </div>
</template>

<script setup>
const cards = [
  {
    title: '前端笔记',
    links: [
      { text: 'Vue', href: 'notes/web/vue/' },
      { text: 'React', href: 'notes/web/react/' },
      { text: 'CSS', href: 'notes/web/css/' },
      { text: 'JavaScript', href: 'notes/web/javascript/' },
      { text: 'TypeScript', href: 'notes/web/typescript/' },
    ],
  },
  {
    title: '服务端笔记',
    links: [
      { text: 'NodeJS', href: 'notes/server/nodejs/' },
    ],
  },
  {
    title: 'C/C++',
    links: [
      { text: 'C语言', href: 'notes/underlying/C语言/' },
      { text: 'C++', href: 'notes/underlying/C++/' },
    ],
  },
  {
    title: '数据库笔记',
    links: [
      { text: 'Postgresql', href: 'notes/server/db/' },
    ],
  },
  {
    title: '计算机网络',
    links: [
      { text: '计算机网络基础', href: 'notes/net/base/' },
      { text: '计算机网络进阶', href: 'notes/net/advance/' },
    ],
  },
  {
    title: '操作系统',
    links: [
      { text: '操作系统基础', href: 'notes/os/base/' },
      { text: '操作系统进阶', href: 'notes/os/advance/' },
    ],
  },
  {
    title: '工程化',
    links: [
      { text: '前端工程化-Vue', href: 'engineering/web/vue/' },
      { text: '前端工程化-React', href: 'engineering/web/react/' },
      { text: '后端工程化-NodeJS', href: 'engineering/server/node/' },
    ],
  },
  {
    title: '数据结构与算法',
    links: [
      { text: '数据结构', href: 'algorithm/data-structure/' },
      { text: '算法', href: 'algorithm/algorithm/' },
    ],
  },
  {
    title: '面试',
    links: [
      { text: '前端面试', href: 'interview/web/' },
      { text: '后端面试', href: 'interview/server/' },
    ],
  },
  {
    title: '其他',
    links: [
      { text: 'Github 仓库', href: 'https://github.com/csc666888/csc-notes', external: true },
    ],
  },
];
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
}
.card {
  flex: 1 1 260px;
  min-width: 240px;
  max-width: 340px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 24px 20px 18px 20px;
  transition: box-shadow 0.2s;
  border: 1px solid #f0f0f0;
}
.card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  border-color: #e0e0e0;
}
.card-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 12px;
  color: #2c3e50;
}
.card-links a {
  display: inline-block;
  margin: 0 8px 8px 0;
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}
.card-links a:hover {
  text-decoration: underline;
}
</style> 