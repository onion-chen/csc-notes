import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";

import sidebar from "./sidebar.config.js";

export default defineUserConfig({
  lang: "zn-CN",
  base: "/csc-notes/",
  dest: "docs/.vuepress/dist",

  title: "CSC-NOTES",
  description: "用代码丈量世界，用文字记录成长",

  head: [
    ["link", { rel: "icon", href: "/csc-notes/favicon.ico" }],
  ],

  plugins: [
    [
      searchPlugin({
        maxSuggestions: 10, // 最大建议数
        hotKeys: ["s", "/"], // 快捷键（按 s 或 / 聚焦搜索框）
        locales: {
          "/": { placeholder: "搜索文档" }, // 中文提示
        },
      })
    ]
  ],

  theme: defaultTheme({
    logo: "/logo.png",

    navbar: [
      { text: "首页", link: "/" },
      // { text: 'Vue', link: '/notes/vue/' },
      { text: "JavaScript", link: "/notes/javascript/" },
      { text: "Typescript", link: "/notes/typescript/" },
      { text: "CSS", link: "/notes/css/" },
      { text: "NodeJS", link: "/notes/nodejs/" },
      {
        text: "Github",
        link: "https://github.com/csc666888/csc-notes",
        target: "_blank",
        icon: "/github.png",
      },
    ],
    sidebar,
  }),

  bundler: viteBundler(),
});
