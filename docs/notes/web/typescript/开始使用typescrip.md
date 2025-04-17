# 初始化typescrip项目
## 1. 安装依赖
```shell
# 新建一个文件夹
mkdir my-typescritp
cd my-typescript
# 使用npm初始化package.json
npm init -y
# 安装TSC、TSCLint和Nodejs声明包(建议全局安装)
npm install -g typescript tslint @types/node
```
## 2. tsconfig.json
每个typescrip项目都应该在根目录初始化一个名为tsconfig.json的文件，这个文件是配置typescrip到底该按照那种方式工作的。

下面是一个简单的配置文件
```json
{
  "compilerOprions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015"
  },
  "include": [
    "src"
  ]
}
```
| 选项 | 说明 |
| --- | --- |
| include | TSC 在那个文件夹中处理typescript文件 |
| lib | TSC运行代码的环境有哪些API？包括ES5的Function。prototype.bind、ES2015的Object.assign和DOM的document.querySelector等 |
| module | TSC把代码编译成那个模块系统（CommonJS、ES2015等） |
| outDir | TSC把编译好的文件放到哪里 |
| strict | 检查无效代码时尽量严格。 |
| target | TSC把代码编成那个JavaScript版本（ES3、ES5、ES2015、ES2016等）|

