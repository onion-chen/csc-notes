---
title: CommonJS的模块规范
meta:
  - name: description
    content: 本节将介绍CommonJS的模块规范
---
# CommonJS的模块规范

## 为什么需要CommonJS
在JavaScript发展历程中，主要在浏览器端发光发热。官方规范（ECMAScript）规范化的时间较早，规范涵盖的范畴非常小。随着HTML5规范的推广以及各大浏览器厂商对规范的支持，在浏览器中出现了更多、更强大的API调用。但对于后端JavaScript的规范却远远落后，对于JavaScript本身而言规范依然是薄弱的。主要体现在

- 没有模块系统
- 标准库少：ECMA仅定义了部分核心库，对于文件系统，I/O流等常见需求却没有标准的API，ECMA的规范主要还是停留在了前端浏览器上。
- 没有标准接口：在JavaScript中，几乎没有定义过Web服务器或者数据库之类的标准统一接口。
- 缺乏包管理系统：导致JavaScript基本没有能力自动加载和安装依赖。

CommonJS规范的提出是想让JavaScript具备开发大型应用的基础能力，主要体现在

- 服务端JavaScript应用程序
- 命令行工具
- 桌面图形界面应用程序

## CommonJS具体规范定义

CommonJS对模块的定义十分简单，主要分为**模块引用**、**模块定义**、**模块标识**三部分`。

## 1、模块引用
先看示例代码
~~~js
const aModule = require('aModule');
~~~
在CommonJS规范中，存在`require()`方法，这个方法接收模块标识，以此引入一个模块的API到当前上下文中。

## 2、模块定义
在模块中，上下文提供`require()`方法来引入外部模块，对应引入的功能，上下文提供了`exports`对象，它代表模块本身，并且`exports`对象是唯一的导出出口。在模块中，还存在一个`module`对象，它代表模块的本身，而`exports`是`module`的一个属性。在Node中，一个文件就是一个模块，将方法挂载到`exports`对象上作为属性即可定义导出方式。

示例代码
~~~js
// 文件a.js
exports.add = (a, b) => {
  return a + b;
}
~~~
在另一个文件中，可以通过`require`方法引入模块后，就可以调用`a`模块定义的属性和方法了

代码示例
~~~js
const {add} = require('a.js');
console.log(add(1, 2)); // 3
~~~

**注意**：因为`exports`是`module`的一个属性，我们也可以通过 `module.exports = add (a, b) => a + b`导出属性和方法。但是在实际开发中请勿在一个模块中混合使用`exports`和`module.exports`去导出属性和方法，看下面例子

没问题的导出
~~~js
// a.js
module.exports.sub = () => {
  console.log(123);
}

exports.add = (a, b) => {
  return a + b;
}
~~~

有问题的导出
~~~js
// b.js
module.exports = () => {
  console.log(123);
}

exports.add = (a, b) => {
  return a + b;
}
~~~
仔细对比一下两次导出，有问题的导出是将`module.exports`指向了新的引用，这就与`exports`切断了联系，导致`exports`成为了一个孤立的对象，而导出是导出的`module.exports`中的属性和方法，这也导致了`b.js`文件中`add`方法没有被正确导出来。

所以在实际开发中一个js文件（模块）应该减少或禁止`module.exports`和`exports`的混合使用。

## 3、模块标识
模块标识就是传递给`require`方法的参数，它必须符合小驼峰命名的字符串或者以`.`、`..`开头的相对路径，或者绝对路径。

模块的定义十分简单，接口也十分简洁。它的意义在于将类聚的方法和变量等限制在私有的作用域中，同时支持引入和导出功能，每个模块都有独立的空间，它们互不干扰。

CommonJS构建的这套导入导出机制使得用户完全不必考虑变量污染问题。

<Utterances />