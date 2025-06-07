# C语言概述
C程序时怎么样的，初见C程序会感觉奇怪，程序中有许多 {} cp->tort *ptr++等这样的符号，然后在学习C的过程中，对这些符号和C语言特有的其他符号会越来越熟悉。

## 1. 简单的C程序示例
```c
#include <stdio.h>
int main(void) {
    int num; /* 声明一个变量 num */
    num = 1;

    printf("Hello World!");
    printf("computer. \n");
    printf("I am %d years old.", 18);

    return 0;
}
```
### 1.2 示例解释
<div style="text-align: center">
  <img src="@/notes/underlying/c/示例解释.png">
</div>

### 1.3 快速概要
#include<stdio.h>

该行时告诉编译器把 **stdio.h** 中的内容包含在当前程序中。**stdio.h** 是C编译器软件包的标准部分，它提供键盘输入和屏幕输出支持。

int main (void)

C程序包含一个或多个函数，它们是C程序的基本模块。程序中有一个名为 **main** 的函数。圆括号表明 **main** 是一个函数名。 int 表明main函数返回一个整数，void表明main不带任何参数。

/* 声明一个变量 */

注释在 /* 和 */两个符号之间，这些注释能提供程序的可读性，编译器在编译的时候会忽略它们。

{
    
        左花括号标识函数定义开始，右花括号表示函数定义结束。

        int num;  表明使用一个名为num的变量，而且num是int（整数）类型。

        num = 1; 把1赋值给名为num的变量

        printf("Hello World!"); 调用printf函数，在屏幕上输出 **Hello World**。

        printf("computer. \n"); \n 会告诉计算机另起一行，把光标移至下一行。

        printf("I am %d years old.", 18); 最后调用的printf %d告诉计算机输出的时候这个占位符使用18替换。
}


<Utterances />