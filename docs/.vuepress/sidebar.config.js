export default {
  "/": "",
  // '/notes/vue/': [
  //   {
  //     text: 'Vue',
  //     children: [
  //       '/notes/vue/README.md',
  //       '/notes/vue/vue2.md',
  //       '/notes/vue/vue3.md',
  //     ],
  //   },
  // ],
  "/notes/javascript/": [
    {
      text: "JavaScript",
      link: "/notes/javascript/README.md",
      children: [
        {
          text: "this指向问题",
          link: "/notes/javascript/this指向问题.md",
        },
        {
          text: "作用域和闭包",
          link: "/notes/javascript/作用域和闭包.md",
        },{
          text: "变量和函数提升",
          link: "/notes/javascript/变量和函数提升.md",
        },
      ],
    },
  ],
  "/notes/nodejs/": [
    {
      text: "NodeJS",
      link: "/notes/nodejs/README.md",
      children: [
        {
          text: "CommonJS规范",
          link: "/notes/nodejs/CommonJS规范.md",
        },
      ],
    },
  ],
  "/notes/css/": [
    {
      text: "CSS",
      children: ["/notes/css/README.md", "/notes/css/css3.md"],
    },
  ],
  "/notes/typescript/": [
    {
      text: "Typescript",
      children: ["/notes/typescript/README.md"],
    },
  ],
};
