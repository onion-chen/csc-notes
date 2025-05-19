---
title: CommonJS模块规范详解：模块化JavaScript开发标准
meta:
  - name: description
    content: 深入解析CommonJS模块规范，包括模块引用、定义和标识。了解为什么需要CommonJS，如何使用exports和module.exports，以及在Node.js中的最佳实践。
  - name: keywords
    content: CommonJS,Node.js,模块化开发,JavaScript模块系统,exports,module.exports,require,模块标识
---
# 1.CommonJS的模块规范

## 1.1什么是CommonJS？
CommonJS是一个项目，其目标是为JavaScript在浏览器以外的平台（如服务器、桌面、命令行工具等）制定一个生态系统标准。它对模块定义进行了规范化，使JavaScript能够在任何地方开发和运行。

## 1.2为什么需要CommonJS？
在JavaScript发展历程中，主要在浏览器端发光发热。官方规范（ECMAScript）规范化的时间较早，规范涵盖的范畴非常小。随着HTML5规范的推广以及各大浏览器厂商对规范的支持，在浏览器中出现了更多、更强大的API调用。但对于后端JavaScript的规范却远远落后，对于JavaScript本身而言规范依然是薄弱的。主要体现在：

- **没有模块系统**：缺乏一个标准的模块管理机制
- **标准库少**：ECMA仅定义了部分核心库，对于文件系统，I/O流等常见需求却没有标准的API，ECMA的规范主要还是停留在了前端浏览器上
- **没有标准接口**：在JavaScript中，几乎没有定义过Web服务器或者数据库之类的标准统一接口
- **缺乏包管理系统**：导致JavaScript基本没有能力自动加载和安装依赖

CommonJS规范的提出是想让JavaScript具备开发大型应用的基础能力，主要应用场景包括：

- **服务端JavaScript应用程序**：如Node.js服务器应用
- **命令行工具**：使用Node.js开发的CLI工具
- **桌面图形界面应用程序**：如Electron开发的跨平台桌面应用

## 1.2CommonJS的优势
- **简单易用**：采用同步加载模块的方式，代码清晰直观
- **作用域隔离**：每个模块都有独立的作用域，避免变量污染
- **依赖管理**：自动处理模块依赖关系，确保模块按正确顺序加载
- **版本管理**：配合npm包管理系统，可以方便地管理模块版本

## 1.4CommonJS具体规范定义

CommonJS对模块的定义十分简单，主要分为三个核心概念：**模块引用（require）**、**模块定义（exports）**、**模块标识（模块名）**。让我们详细了解每个部分。

## 1.5模块引用（require）
模块引用是CommonJS规范中最基本的操作，通过`require()`方法来实现。

### 1.5.1基本语法
~~~js
const myModule = require('./myModule'); // 引入本地模块
const express = require('express');     // 引入npm包
~~~

### 1.5.2require的特点
- **同步加载**：模块加载是同步的，按顺序依次执行
- **缓存机制**：多次引用同一模块时只会加载一次
- **路径解析**：支持相对路径和绝对路径
- **文件类型**：可以引入.js、.json、.node等类型的文件

## 1.6模块定义（exports）
在Node.js中，每个文件都被视为一个独立的模块。CommonJS规范提供了两种方式来导出模块内容：`exports`对象和`module.exports`。

### 1.6.1exports对象
`exports`是一个特殊的对象，它是`module.exports`的引用。我们可以通过给`exports`添加属性来导出内容。
~~~js
// math.js - 使用exports导出多个方法
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;

// 在其他文件中使用
const math = require('./math');
console.log(math.add(2, 3));      // 5
console.log(math.subtract(5, 2));  // 3
~~~

### 1.6.2module.exports对象
`module.exports`是模块系统创建的对象，它是真正的导出对象。我们可以直接替换整个`module.exports`对象。

~~~js
// person.js - 使用module.exports导出类
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

module.exports = Person;

// 在其他文件中使用
const Person = require('./person');
const person = new Person('张三');
person.sayHello();  // 输出: Hello, I'm 张三
~~~

### 1.6.3exports vs module.exports
理解`exports`和`module.exports`的关系是很重要的：

1. **正确的用法**：
~~~js
// 方式1：通过exports添加属性
exports.method1 = () => {};
exports.method2 = () => {};

// 方式2：直接替换module.exports
module.exports = {
  method1: () => {},
  method2: () => {}
};
~~~

2. **错误的用法**：
~~~js
// 错误示例：混合使用导致exports失效
module.exports = () => {
  console.log('主函数');
};

exports.helper = () => {  // 这个方法不会被导出！
  console.log('辅助函数');
};
~~~

### 1.6.4最佳实践
1. **保持一致性**：在一个模块中只使用一种导出方式
2. **导出单一值**：使用`module.exports`
3. **导出多个值**：使用`exports`或`module.exports`对象
4. **避免修改exports引用**：不要使用`exports = {...}`
5. **使用解构导入**：推荐使用`const { method } = require('./module')`的方式导入需要的方法

## 1.7模块标识（Module Identifier）
模块标识是传递给`require`方法的参数，用于定位和加载模块。Node.js支持多种类型的模块标识。

### 1.7.1模块标识的类型
1. **核心模块**
```js
const fs = require('fs');           // 内置模块
const path = require('path');       // 内置模块
```

2. **第三方模块**
```js
const express = require('express'); // npm安装的模块
const lodash = require('lodash');   // npm安装的模块
```

3. **文件模块**
```js
// 相对路径
const myModule = require('./myModule');        // 当前目录
const utils = require('../utils');             // 上级目录

// 绝对路径
const config = require('/root/app/config');    // 从根目录开始
```

### 1.7.2模块解析规则
1. **文件扩展名**：
   - 可以省略.js、.json、.node扩展名
   - 按顺序尝试加载：.js → .json → .node

2. **目录作为模块**：
   - 查找package.json中的main字段
   - 如果没有package.json，则查找index.js

3. **node_modules查找**：
   - 从当前目录开始，逐级向上查找node_modules目录
   - 直到根目录或找到目标模块

## 1.8总结
CommonJS规范为JavaScript模块化开发提供了完整的解决方案：

- **简单易用**：模块定义和使用方式直观
- **作用域隔离**：每个模块都有独立的作用域
- **依赖管理**：自动处理模块间的依赖关系
- **灵活导出**：支持多种导出方式

通过CommonJS规范，我们可以构建出结构清晰、易于维护的Node.js应用。

<Utterances />