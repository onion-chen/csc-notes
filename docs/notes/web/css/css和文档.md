---
title: CSS3 完整特性指南：从基础到高级特性详解
meta:
  - name: description
    content: 深入解析CSS3核心特性，包括模块化体系、选择器、布局模型等。从基础概念到实践应用，助您掌握现代CSS开发技巧。
  - name: keywords
    content: CSS3,模块化,选择器,盒模型,Flexbox,Grid布局,动画,过渡效果,媒体查询,响应式设计
  - name: author
    content: CSC Notes
---
# 🎨 CSS 3 特性简介

> 本文将全面介绍CSS3的核心特性，帮助您深入理解现代CSS开发技术，掌握网页样式设计的精髓。

## 1. ⚙️ 模块化体系
CSS3采用模块化架构，将不同功能特性划分为独立模块，便于维护和扩展。主要包含以下核心模块：

- **📦 Box Model**（盒模型）
  - 控制元素的尺寸、内外边距和边框
  - 支持`box-sizing`属性调整盒模型计算方式

- **🎨 Color Module**（颜色模块）
  - 支持RGB、RGBA、HSL、HSLA等多种颜色表示方式
  - 提供`opacity`属性控制透明度

- **🎯 Selectors**（选择器）
  - 强大的元素选择机制
  - 支持属性选择器、伪类和伪元素

- **📐 Flexbox/Grid**（弹性/网格布局）
  - Flexbox：一维布局系统，适合组件级布局
  - Grid：二维布局系统，适合页面级布局

- **🎬 Transitions/Animations**（过渡/动画）
  - 过渡：平滑属性变化效果
  - 动画：创建复杂的动画序列

- **📱 Media Queries**（媒体查询）
  - 响应式设计的基础
  - 根据设备特性调整样式

## 2. 🧱 层叠与继承

### 2.1 层叠机制
层叠是CSS的核心特性之一，决定了样式的优先级。当多个样式规则应用到同一个元素时，层叠机制决定最终采用哪个样式。

优先级从高到低：
1. `!important`标记的样式
2. 内联样式（style属性）
3. ID选择器（#id）
4. 类选择器（.class）
5. 标签选择器（div, p等）
6. 通用选择器（*）

```css
/* 层叠示例 */
h1 {
  color: red !important; /* 🔝最高优先级 */
  color: blue;  /* 会被上面的规则覆盖 */
}

.title {
  color: green; /* 类选择器优先级低于!important */
}
```

### 2.2 继承机制
继承允许子元素自动获取父元素的某些样式属性，提高样式编写效率。

常见的可继承属性：
- 文字相关：`font-family`, `font-size`, `color`
- 行高相关：`line-height`
- 文本相关：`text-align`, `text-indent`

```css
/* 继承示例 */
body {
  font-family: Arial;
  color: #333;
  line-height: 1.6;
}

p {
  /* 👪自动继承body的字体、颜色和行高设置 */
  font-size: 16px; /* 可以覆盖或补充特定属性 */
}

.no-inherit {
  /* 使用initial可以取消继承 */
  color: initial;
}
```

## 3. 🔍 选择器类型详解

选择器是CSS中最基础也是最强大的功能之一，掌握选择器可以精确控制页面中的任何元素。

### 3.1 基本选择器
```css
/* 🔍 常用基本选择器示例 */
#header { /* ID选择器 */
  background: #f5f5f5;
}

.menu { /* 类选择器 */
  display: flex;
}

div { /* 标签选择器 */
  margin: 10px;
}

* { /* 通用选择器 */
  box-sizing: border-box;
}
```

### 3.2 属性选择器
```css
/* 📌 属性选择器的多种匹配方式 */
[data-type="primary"] { /* 精确匹配 */
  background: #007bff;
}

[class^="icon-"] { /* 开头匹配 */
  background-size: contain;
}

[href$=".pdf"] { /* 结尾匹配 */
  color: red;
}

[title*="user"] { /* 包含匹配 */
  cursor: pointer;
}
```

### 3.3 伪类选择器
```css
/* 🖱️ 常用伪类选择器 */
.button:hover { /* 鼠标悬停 */
  background: #eee;
}

.list li:nth-child(odd) { /* 奇数项 */
  background: #f9f9f9;
}

.input:focus { /* 获得焦点 */
  border-color: #66afe9;
}

.link:visited { /* 已访问链接 */
  color: purple;
}
```

### 3.4 伪元素选择器
```css
/* ✨ 伪元素使用示例 */
.quote::before {
  content: "\201C"; /* 左引号 */
  font-size: 2em;
}

.tooltip::after {
  content: attr(data-tip);
  display: none;
}

.tooltip:hover::after {
  display: block;
}
```

### 3.5 组合选择器
```css
/* ➕ 组合选择器的不同关系 */
div > p { /* 直接子元素 */
  margin: 10px 0;
}

ul + p { /* 相邻兄弟 */
  margin-top: 20px;
}

h2 ~ p { /* 后续所有兄弟 */
  color: #666;
}

.sidebar .widget { /* 后代选择器 */
  margin-bottom: 15px;
}
```

## 4. Web样式简介
css的目标是提供一个简单的声明式样式语言，而且具有一定的灵活性，能为文档编写人员和用户提供等同的样式化功能。层叠样式表中的“层叠”是指样式可以结合使用，而且具有优先级，文档编写人员和用户都有话语权，不过最终的决策权在用户手中。

## 5. 元素
元素是文档结构的根基。HTML中常用的元素有p、table、span、a、div等。文档中的每个元素都对文档的表现起一定作用。

### 5.1. 置换元素和非置换元素
css依赖元素，但并非每个元素都是以同样的方式创建。例如图像和段落是不同类型的元素，span和div也不同。对css来说，元素通常有两种形式：置换元素和非置换元素。

#### 置换元素
置换元素指用来置换元素内容的部分不由文档内容直接表示。在HTML中，最常见的置换元素就是img，它的内容由文档之外的图像文件替换。
```css
<img src="/logo.png">
```
这段标记只包含一个元素名和一个属性。input元素类似，根据类型的不同，会替换成单选按钮复选框或文本输入框。

#### 非置换元素
HTML元素大部分是非置换元素，元素的内容由用户决定，例如：段落、标题、单元格、列表等。

### 5.2. 元素的显示方式
除了置换元素和非置换元素之外，css还元素分为`块级`和`行内`两种基本类型。除此之外，还有其他显示类型，不过这两种是最常见的。

#### 块级元素
块级元素（默认）生成一个填满父级元素内容区域的框（独占一行），旁边不能有其他元素。也就是说，块级元素在元素框的前后都“断行”。HTML中最常见的块级元素是`p`和`div`。
列表项目是一种特殊的块级元素，它的表现与其他块级元素没有区别，此外还会再元素框旁边生成一个记号（无序列表通常是一个圆点，有序列表通常是数字）。除了多出的记号外，列表项目与其他块级元素没有区别。

#### 行内元素
行内元素在一行文本内生成的元素框，不打断所在行，HTML最常见的行内元素`span`、`a`、`em`等。这类元素不再自身所在的元素框断行，因此可以出现在另一个元素的内容中，且不影响所在的元素。

## 6. 把CSS引入到HTML上

### 1. link标签引入
```html
<link rel="stylesheet" type="text/css" href="sheet1.css">
```
`link`标签在HTML的基本作用是把样式文档与当前HTML文档关联起来。通过`link`标签链接外部样式表不是HTML的一部分却可以影响HTML的样式，这样的样式表为外部样式表。为正确加载外部样式表，`link`标签必须放在`head`元素中。
#### 属性
- rel: relation(关系)的简称，这里指定的关系是`stylesheet`
- type: 它的值始终是 `text/css`
- href: 它的值是样式表的URL，可以值绝对路径也可以是相对路径

### 2. Style元素
`style`元素也是一种引入样式的方式，让CSS可以直接写在文档中。
```html
<style type="text/css">
/* 样式内容 */
</style>
```
`style`元素可以直接包含应用到文档上的样式，也可以通过`@import`指定引入外部样式表。

### 3. @import指令
与`link`一样，浏览器遇到`@import`指令时会加载外部样式表，两者的区别在于语法和指令的位置。`@import`指令在`style`元素内部，并且必须放在其他CSS规则之前，否则会不起作用。
```html
<style type="type/css">
@import url("./style.css");
</style>
```
### 4. 行内样式
如果想为单个元素提供少量样式，不值得动用`style`或`link`,可以利用HTML元素的`style`属性设置行内样式。
```html
<p style="color: red">这是一个p元素</p>
```
**注意：** `style`属性的值只能是一些列规则声明，而不能包含整个样式表。因此不能在`style`元素中使用`@import`指令。

通常不建议使用`style`属性这样会导致CSS很多重要有点都不存在了，例如样式的集中管理。

## 7. 样式表中的内容
说了这么多，样式表中都可以写什么内容呢？
```css
h1{
  color: red;
}
body {
  background: blue;
}
```
嵌入式样式表中的大多数样式都是这样的，有简单的，有复杂的。如果文档中有style元素,里面很少没有规则。假如没有上面例子的规则也会有一些@import声明。
### 7.1. 标记
样式表中不能有标记，这一点看起来理所应当，不过HTML注释标记除外，由于历史原因，style元素中可以有HTML注释
```html
<style>
<!-- 
h1 {
  color: red;
}
body: {
  background: blue;
}
-->
</style>
```
### 7.2. 规则的结构
规则基本有两部分构成：选择符（selector）和声明块（declaration block）。声明块由一个或多个声明组成。而一个声明中包含一个属性和对应的值。
<div style="text-align: center">
<img src="@/notes/web/css/css规则结构.png">
</div>

### 7.3. 厂商前缀
经常使用AI的同学们都遇到过，AI给到的结果为了兼容其他浏览器都会有这样的标注`-o-border-image`。这就是厂商前缀，浏览器厂商通过它标记实验性或专属的属性、值或其他内容。

常见的厂商前缀

| 厂商 | 前缀 |
| --- | --- |
| 国际数字出版论坛定制的ePub格式 | -epub- |
| 基于Mozilla的浏览器（Firefox） | -moz- |
| 微软 | -ms- |
| Opera浏览器 | -o- |
| 基于webkit的浏览器（Safari和Chrome） | -webkit- |

厂商前缀出现的目的是为了测试新特性，这么做能保证兼容性，不必担心导致于其他浏览器不兼容。如今，编写CSS完全可以不使用厂商的前缀，不过偶尔遇到被人使用，也要认识。

<Utterances />