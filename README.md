# Emby Crx

使用webpack打包，使用babel支持大部分浏览器
只需要引入`dist/bundle.js`即可，其中包含了css文件


```html
<script type="text/javascript" src="./dist/bundle.js" data-parentid="9" data-hidetitle="true"></script>"
```

- `data-parentid`: 可选；传入则只轮播这个媒体库（点进某个媒体库后看浏览器url，可以获取到这个parentid）
- `data-hidetitle`: 可选；默认为false，不隐藏媒体库名称（hover时）；传入true则隐藏