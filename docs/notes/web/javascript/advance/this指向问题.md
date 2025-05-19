---
title: JavaScript深入理解this指向 - 完整指南
meta:
  - name: description
    content: 深入解析JavaScript中this的绑定规则、作用域和使用场景。包括默认绑定、隐式绑定、显式绑定和new绑定等核心概念，帮助你彻底掌握this指向问题。
  - name: keywords
    content: JavaScript,this指向,this绑定规则,默认绑定,隐式绑定,显式绑定,new绑定,箭头函数,this作用域
---

> 本文将全面介绍JavaScript中this的概念、绑定规则和常见使用场景，帮助你深入理解this的工作原理，避免开发中的常见陷阱。
# this到底是什么？
先说结论：this是在运行时进行绑定的，并不是编写时绑定，它的上下文取决于函数调用时的各种条件，this的绑定和函数声明的位置没有关系，只取决于函数的调用方式。
总结：this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数怎样被调用。
## 1、绑定规则
this的绑定规则有四种：默认绑定、隐式绑定、显式绑定、new绑定。下面来逐个分析一下。

## 2、默认绑定
咱们最常用的函数调用是：**独立函数调用** 像这样
~~~js
function foo(){
	console.log(this.a);  // 2
}
var a = 2;
foo(); // 这里就是最常用的独立函数调用（函数名+小括号调用）
~~~
在这里就发现了一个问题：为啥打印`this.a`可以正确打印出结果`2`呢？
这就是this的绑定规则之一：默认绑定。独立函数调用的`this`指向全局对象。这里的全局对象就是`window`，我们在全局作用域下声明了`a = 2`，那么在全局对象中就有`window.a = 2;`，所以在打印`console.log(this.a);`时相当于打印`console.log(window.a);`，又因为`window.a = 2;`，所以这里就打印出结果`2`。
**注意：** 在严格模式下，不能将全局对象用于默认绑定，这时`this`会被绑定为`undefined`。
~~~js
function foo() {
    'use strict';
	console.log(this.a); // 这里就会报错了  ·Cannot read properties of undefined (reading 'a')·
}
var a = 2;
foo();
~~~
**但是：** 这里还有一个小细节，在严格模式下调用`foo()`默认绑定不受影响。
~~~js
function foo(){
	console.log(this.a);
}
var a = 2;
(function(){
	'use strict';
	foo(); // 2
})();
~~~

## 3、 隐式绑定
需要考虑调用位置是否有上下文对象，或者说被某个对象拥有或者包含。
这又是什么意思是呢？
~~~js
function foo(){
	console.log(this.a);
}
var obj = {
	a: 3,
	foo: foo
}
obj.foo(); // 3
~~~
`foo` 声明后被当做属性添加到了`obj`对象中，其实无论是在`obj`中直接定义还是先定义再添加到`obj`中，严格意义来说这个函数都不属于`obj`对象。然而，调用位置会使用`obj`的上下文来引用函数，隐式绑定规则就会把函数中的`this`绑定到这个上下文对象，所以`this.a`和`obj.a`是一样的。
`this`绑定的对象`距离函数调用最近的`。如何理解这句话呢？
~~~js
function foo(){
	console.log(this.a);
}
var obj2 = {
	a: 3,
	foo: foo
}
var obj1 = {
	a: 2,
	obj2: obj2
}
obj1.obj2.foo(); // 3
~~~
`foo的this`只跟`obj2`有关系与`obj1`没有关系。
### 3.1 、隐式丢失
并不是说将函数声明到那个对象上在调用的时候`this`就会指向这个对象，要看最终的调用方式，不同的调用方式可能会导致隐式绑定丢失。
~~~js
function foo(){
	console.log(this.a);
}
var obj = {
	a: 2,
	foo: foo
}
var bar = obj.foo; // 将foo函数赋值给了bar
var a = '全局属性';
bar(); // 全局属性
~~~
这里要注意调用的细节，`bar`函数在这里是独立函数调用，根据`this`绑定规则，独立函数调用`this`会绑定全局对象（非严格模式），这也验证了`this`是运行时绑定，而不是声明时绑定，无论函数声明在什么地方，它都与`this`的绑定无关。

## 4、显式绑定
在JavaScript中所有函数都有`call`和`apply`方法，它们的第一个参数是给`this`准备的，接着调用函数时将其绑定到`this`。因为这里可以直接指定`this`，因此被称为显示绑定。
~~~js
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2
}
foo.call(obj); // 2
~~~
通过`foo.call()`可以在调用`foo`时强制把它绑定到`obj`上。
**注意：** 如果传入了一个原始类型（字符串、数字、布尔）来当做`this`的绑定对象，这个原始值会被转换成它的对象形式（new String()，new Number()， new Boolean()）。这样通常被称为“装箱”。从`this`绑定的角度来说，`call、apply`是一样的，区别就在它们需要的其他参数不一样，但对`this`绑定来说不用考虑这些。
### 4.1、硬绑定
~~~js
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2
}
var bar = function () {
	foo.call(obj);
}
bar(); // 2
// 硬绑定的bar不可能在修改它的this
bar.call(window); // 2
~~~
下面来说一下：创建了函数`bar()`，并在它内部手动调用了`foo.call(obj)`，因此强制把`foo`的`this`绑定到了`obj`。无论之后如何调用函数`bar`，它总会手动在`obj`上调用`foo`。这种绑定是一种显示的强制绑定，因此也称之为“硬绑定”。主要应用场景就是创建一个包裹函数、负责接收参数并返回值。
~~~js
function foo(param) {
	console.log(this.a, param);
	return this.a + param;
}
var obj = {
	a: 2
}
var bar = function(param) {
	return foo.call(obj, param);
}
var b = bar(3); // 2, 3
console.log(b); // 5
~~~
另一种使用方法就是创建一个可重复使用的辅助函数
~~~js
function foo(param){
	console.log(this.a, param);
	return this.a + param;
}
function bind(fn, obj) {
	return function() {
		return fn.apply(obj, arguments);
	}
}
var obj = {
	a: 2
}
var bar = bind(foo, obj);
var b = bar(3); // 2 3
console.log(b); // 5
~~~
**总结**：简单来说这种“硬绑定”就是使得函数无论如何调用，函数的`this`都不会发生变化。
令人欣慰的时JavaScript为我们内置了这个方法`bind`。
~~~js
function foo(param) {
	console.log(this.a, param);
	return this.a + param;
}
var obj = {
	a: 2
}
var bar = foo.bind(obj);
var b = bar(3) // 2 3
console.log(b); // 5
~~~
`bind`函数返回一个新函数，它会把你指定的参数设置为`this`的上下文并调用原始函数。

## 5、new绑定
使用`new`来调用函数，或者说发生构造函数调用时，会自动执行下面操作

-	创建（构造）一个全新的对象
-	这个新对象会被执行[[Prototype]]连接
-	这个新对象会绑定到函数调用的this
-	如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象
~~~js
function foo(a) {
	this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
~~~
使用`new `来调用`foo()`时，我们会构造一个新对象并把它绑定到`foo()`调用中的`this`上，`new`是最后一种可以影响函数调用`this`绑定行为的方法。
## 6、优先级
到现在已经了解了所有`this`绑定的四条规则，如果某个调用位置应用了多个不同的规则该怎么办呢？下面就来详细聊聊吧。
显而易见的是默认绑定的优先级是四种规则里面最低的，隐式绑定和显示绑定那个优先级更高呢？
~~~js
function foo(){
	console.log(this.a);
}
var obj1 = {
	a: 2,
	foo: foo
}
var obj2 = {
	a: 3,
	foo: foo
}
obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2
~~~
通过这个例子可以看出来显式绑定优先级更高。
再来看看隐式绑定和new绑定谁的优先级更高呢？
~~~js
function foo(param) {
	this.a = param;
}
var obj1 = {
	foo: foo
};
var obj2 = {};
obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4
~~~
这个例子可以得出 new 绑定比隐式绑定优先级要高。
**注意：** `new`和`apply/call`无法一起使用，因此无法通过 `new foo.call(obj1)`来直接进行测试，但是可以使用“硬绑定”来测试它们的优先级。
~~~js
function foo(param) {
	this.a = param;
}
var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3);
console.log(obj1.a); // 2
console.log(baz.a); // 3
~~~
`bar`被硬绑定到`obj1`上，但是 `new bar(3)`并没有预想的那样把`obj1.a`修改为3。相反，`new`修改了硬绑定（到obj1的）调用`bar()`中的`this`，得到了新的对象`baz`并将`baz.a`赋值为3。

现在可以来判断`this`了。
1、函数是否在`new`中调用？如果是的话`this`绑定的是新创建的对象。
~~~js
var bar = new foo();
~~~
2、函数是否通过`call/apply`（显式绑定）或者（`bind`）如果是的话，`this`绑定的是指定的对象。
~~~js
var bar = foo.call(obj);
~~~
3、函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，`this`绑定的是这个上下文对象。
~~~js
var bar = obj1.foo();
~~~
4、如果都不是的话，使用默认绑定，如果是严格模式，`this`绑定的是`undefined`，否则绑定全局对象
~~~js
var bar = foo();
~~~
所以可以得出结论 new绑定 > 显式绑定（硬绑定）> 隐式绑定 > 默认绑定。
## 7、绑定例外
如果把`null`或者`undefind`作为`this`的绑定对象传入`call`、`apply`或者`bind`，这些值在调用时会被忽略，这时候会应用默认绑定规则。
~~~js
function foo() {
	console.log(this.a);
}
var a = 2;
foo.call(null); // 2
~~~
这就产生了副作用。如果某个函数使用了`this`(第三方库)，那么默认规则会把`this`绑定到全局对象，所以需要一种更安全的做法，传一个特殊的对象，把`this`绑定到这个对象不会对程序产生副作用，创建一个`DMZ`（demilitarized zone, 非军事区）对象，它就是一个空的非委托对象
~~~js
function foo(a, b){
	console.log(a, b);
}
// DMZ对象
var φ = Object.create(null);
foo.apply(φ， [2, 3]); // 2, 3
~~~
当我们需要忽略`this`绑定并总是传入一个DMZ对象时，任何对于`this`的使用都会被限制这个空对象中，不会对全局对象产生影响。

## 8、间接引用
你可能（有意或无意地）创建一个函数的“间接引用”，在这种情况下，调用这个函数会使用默认绑定规则。
~~~js
function foo() {
	console.log(this.a);
}
var a = 2;
var o = {
	a: 3, 
	foo: foo
};
var p = {
	a: 4
}
o.foo(); // 3
(p.foo = o.foo)(); // 2
~~~
赋值表达式`p.foo = o.foo`的返回值是`foo`函数的引用，因此调用位置是`foo()`而不是`p.foo()`或者`o.foo()`。所以这里是默认绑定。
**注意：** 对于默认绑定来说，决定`this`绑定对象的并不是调用位置是否处于严格模式，而是函数体是否处于严格模式。如果函数体处于严格模式，`this` => `undefined`，否则`this`会被绑定到全局对象。

## 9、箭头函数
箭头函数并不是使用`function`关键字定义的，箭头函数不适用`this`的四种标准规则，它的`this`是根据外层（函数或者全局）作用域来决定的。
~~~js
function foo(){
	return a => {
		console.log(this.a);
	}
}
var obj1 = {
	a: 2
};
var obj2 = {
	a: 3
};
var bar = foo.call(obj1);
bar.call(obj2); // 2而不是3
~~~
`foo`内部创建的箭头函数会捕获调用时`foo`的`this`,由于`foo()`的`this`绑定到了`obj1`，`bar`（箭头函数）的`this`也会绑定到`obj1`，箭头函数的绑定无法被修改（new也不行！）。
箭头函数可以像`bind`一样确保函数的`this`绑定到执行对象，其重要性还体现在它用更常见的词法作用域代替了传统的`this`绑定。
~~~js
function foo() {
	var that = this;
	setTimeout(function (){
		console.log(that.a);
	}, 1000);
}
var obj = {
	a: 2
};
foo.call(obj); // 2
~~~
如果经常编写`this`风格的代码如`vue2`，但是绝大部分时候会使用`that = this`或者箭头函数来否定`this`机制，那么你应当

-	只是用词法作用域并完全抛弃错误`this`风格代码
-	完全采用`this`风格，在必要时使用bind()，尽量避免使用`that = this`和箭头函数

## 10、小结
判断一个运行中的函数`this`绑定，需要先找到这个函数的直接调用位置。找到之后就可以应用下面四条规则来判断

-	由`new`调用？绑定到新建的对象
-	由`call、apply、bind`调用？绑定到指定对象
-	由上下文对象调用？绑定到这个上下文对象
-	默认：严格模式下绑定`undefined`，否则绑定到全局对象

**注意：** 箭头函数不适用上述规则。

<Utterances />