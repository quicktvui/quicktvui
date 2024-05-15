# QUICKTVUI

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