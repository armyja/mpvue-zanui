# mpvue-zanui

> 使用 mpvue 重写 [zanui-weapp](https://github.com/youzan/zanui-weapp/)

## 使用方法

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

## Bug

- Field 输入框界面中，带圆角输入框因为 css 问题，placeholder 无法靠右


## todo
- [ ] props 属性使用对象包装
- [ ] props 中不注入 function，用 $emit 替换
- [ ] CSS 全局引用改为分块引用
