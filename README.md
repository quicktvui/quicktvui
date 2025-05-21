# QUICKTVUI

`quicktvui`是[quicktvui](https://github.com/quicktvui/quicktvui)框架中上层Vue集成开发库，使用它开发程序可运行在任意集成了[quicktvui-sdk](https://github.com/quicktvui/quicktvui-sdk)的安卓`Runtime`当中。
```mermaid
graph LR
A[quicktvui] -- run on --> B[quicktvui-sdk]
B -- depends on --> C[hippy-tv]
```

> ℹ️ [quicktvui](https://github.com/quicktvui/quicktvui)由三部分组成：[quicktvui-sdk](https://github.com/quicktvui/quicktvui-sdk)（安卓RuntimeSDK）、[hippy-tv](https://github.com/quicktvui/hippy-tv)（基于hippy的tv扩展）、[quicktvui](https://github.com/quicktvui/quicktvui)（Vue 快应用框架）。 本仓库为上层vue开发库。

## 本地调试注意事项
1. 修改两个文件
```js
// 修改 src/main-native.ts文件-注释'@quicktvui/quicktvui3/dist/index.css'
import {QuickTVUI} from "@quicktvui/quicktvui3";
// import '@quicktvui/quicktvui3/dist/index.css';

// 修改scripts/hippy-webpack.dev.js文件-打开@quicktvui/quicktvui3
const aliases = {
  src: path.resolve('./src'),
  // '@': path.resolve('./src'),
  '@quicktvui/quicktvui3': path.resolve('./packages/src'),
};
```
2. 注意：每次修改代码后，需重新编译，否则页面不会加载新代码
