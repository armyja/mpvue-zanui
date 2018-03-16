# mpvue-zanui

> 使用 mpvue 重写 [zanui-weapp](https://github.com/youzan/zanui-weapp/)，实现了其中所有组件。

## 使用方法

### 运行小程序 demo

``` bash
1. git clone
git clone https://github.com/samwang1027/mpvue-zanui.git

2. 安装依赖
cd mpvue-zanui && npm install

3. 启动程序
npm run dev

4. 预览
打开微信开发者工具，新建项目，将目录指向 /dist 即可
```

### 引用组件


1. 安装 npm 包

```
npm install mpvue-zanui
```

2. 将 `node_modules/mpvue-zanui/src/assets/zanui.wxss` 拷贝到自己的项目文件夹中，并在 `App.vue` 内导入


~~3. 调用方式在 `node_modules/mpvue-zanui/index.js` 中，如 `import {TopTips} from 'mpvue-zanui'`~~

3. 由于需要等待 mpvue-loader 升级重构，暂时仅能直接引用 `import TopTips from 'mpvue-zanui/src/components/zan/toptips'`

4. 组件的详细使用方式通过阅读源码理解




## Bug

- Field 输入框界面中，带圆角输入框因为 css 问题，placeholder 无法靠右


## todo
- [ ] props 属性使用对象包装
- [ ] props 中不注入 function，用 $emit 替换
- [ ] CSS 全局引用改为分块引用
