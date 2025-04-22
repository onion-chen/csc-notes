import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import {getDirname, path} from 'vuepress/utils';

import sidebar from "./sidebar.config.js";

export default defineUserConfig({
  lang: "zh-CN",
  base: "/csc-notes/",
  dest: "docs/.vuepress/dist",
  alias: {
    '@': path.resolve(getDirname(import.meta.url), './public'),
  },
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
          "/": { placeholder: "请输入搜索内容" }, // 搜索输入提示
        },
      })
    ]
  ],

  theme: defaultTheme({
    logo: "/logo.png",

    navbar: [
      { text: "首页", link: "/" },
      { 
        text: '我的笔记', 
        navbar: true,
        children: [
          { 
            text: "前端笔记", 
            link: "/notes/web/",
            navbar: true,
            children: [
              { text: "Vue", link: "/notes/web/vue/" },
              { text: "React", link: "/notes/web/react/" },
              { text: "CSS", link: "/notes/web/css/" },
              { text: "JavaScript", link: "/notes/web/javascript/" },
              { text: "TypeScript", link: "/notes/web/typescript/" },
            ]
          },
          {
            text: "服务端笔记", 
            link: "/notes/server/",
            navbar: true,
            children: [
              { text: "NodeJS", link: "/notes/server/nodejs/" },
            ]
          },
          {
            text: "数据库笔记", 
            link: "/notes/db/",
            navbar: true,
            children: [
              { text: "Postgresql", link: "/notes/server/db/" },
            ]
          },
          {
            text: "计算机网络", 
            link: "/notes/net/",
            navbar: true,
            children: [
              { text: "计算机网络基础", link: "/notes/net/base/" },
              { text: "计算机网络进阶", link: "/notes/net/advance/" },
            ]
          },
          {
            text: "操作系统", 
            link: "/notes/os/",
            navbar: true,
            children: [
              { text: "操作系统基础", link: "/notes/os/base/" },
              { text: "操作系统进阶", link: "/notes/os/advance/" },
            ]
          }
        ]
      },
      {
        text: '工程化', 
        navbar: true,
        children: [
          { 
            text: "前端工程化", 
            children: [
              { text: "Vue", link: "/engineering/web/vue/" },
              { text: "React", link: "/engineering/web/react/" },
            ],
            navbar: true,
           },
          { 
            text: "后端工程化",
            navbar: true,
            children: [
              { text: "NodeJS", link: "/engineering/server/node/" },
            ],
          }
        ]
      },
      {
        text: '数据结构与算法', 
        navbar: true,
        children: [
          { text: "数据结构", link: "/algorithm/data-structure/" },
          { text: "算法", link: "/algorithm/algorithm/" },
        ]
      },
      {
        text: '面试', 
        navbar: true,
        children: [
          { text: "前端面试", link: "/interview/web/" },
          { text: "后端面试", link: "/interview/server/" },
        ]
      },
      {
        text: "Github",
        link: "https://github.com/csc666888/csc-notes",
        target: "_blank"
      },
    ],
    sidebar,
  }),

  bundler: viteBundler(),
});
