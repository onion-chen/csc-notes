import { defineClientConfig } from '@vuepress/client'
import HomePage from './components/HomePage.vue' // 请替换为实际的组件路径

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册全局组件
    app.component('HomePage', HomePage)
  },
  setup() {},
  rootComponents: []
})