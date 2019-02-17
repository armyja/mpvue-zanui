# mpvue-zanui

使用 mpvue 重写 [zanui-weapp](https://github.com/youzan/zanui-weapp/)，实现了其中所有组件。

> Vant Weapp 是基于有赞 Zanui 组件库进行的品牌升级，对于仍在使用 Zanui 的用户，建议逐渐使用 Vant Weapp 替换原有的组件。  
>  
> Zanui 后续会进入维护状态，仓库地址为：https://github.com/youzan/zanui-weapp  
> Vant 在 mpvue 的使用方法可参照 https://github.com/Rychou/mpvue-vant  


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

2. 在 `App.vue` 内通过 `@import '~mpvue-zanui/src/assets/style/zanui.wxss';` 的方式导入zanui样式


~~3. 调用方式在 `node_modules/mpvue-zanui/index.js` 中，如 `import {TopTips} from 'mpvue-zanui'`~~

3. 由于需要等待 mpvue-loader 升级重构，暂时仅能直接引用 `import TopTips from 'mpvue-zanui/src/components/zan/toptips'`

4. 组件的详细使用方式通过阅读源码理解




## Bug

- Field 输入框界面中，带圆角输入框因为 css 问题，placeholder 无法靠右


## todo
- [ ] props 属性使用对象包装
- [ ] props 中不注入 function，用 $emit 替换
- [ ] CSS 全局引用改为分块引用
