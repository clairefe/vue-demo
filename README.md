# movie_view

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 简单框架原理
 首先，我们需要理解MVVM框架，其实MVVM就是Model-View-ViewModel
同时还有MVC框架，MVC就是Model-View-Controller
其实对于前端而言，并没有严格意义上MVC框架，而我们以VUE作为MVVM框架的代表来进行表述

Model就是数据层，View是视图，ViewModel是实现两者之间进行通信的桥梁。
通过数据绑定实现Model-View渲染，通过事件监听从View反应到Model。
