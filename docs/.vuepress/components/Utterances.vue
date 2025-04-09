<template>
    <p>💬 欢迎评论！请确保您已登录 GitHub。</p>
    <div ref="comments"></div>
  </template>
  
  <script>
  export default {
    name: "Utterances",
    mounted() {
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.setAttribute("repo", "csc666888/csc-notes"); // 替换为你的 GitHub 仓库
      script.setAttribute("issue-term", "pathname"); // 根据页面路径生成评论
      script.setAttribute("theme", "github-light"); // 主题，可选值：github-light, github-dark 等
      script.setAttribute("crossorigin", "anonymous");
      this.$refs.comments.appendChild(script);
    },
  };
  </script>
  
  <style scoped>
  p {
    margin-top: 35PX;
    padding: 0;
    font-size: 14px;
    color: #333;
  }
  </style>