---
slug: Vue.js_Review_Question_Bank
title: Vue.js复习题库
tags: [Vue.js, node.js]
description: Vue.js复习题库
hide_table_of_contents: false
date: 2025-12-11T00:00
unlisted: false
---

Vue.js复习题库。

{/* truncate */}

## 单选题

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 下列 v-model 提供的修饰符中，用于自动将用户输入的值转换为数字类型的修饰符是</Wenben>
    <Xuanxiang>.right</Xuanxiang>
    <Xuanxiang>.left</Xuanxiang>
    <Xuanxiang ans>.number</Xuanxiang>
    <Xuanxiang>.lazy</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 下列选项中，vue-router 的安装命令正确的是</Wenben>
    <Xuanxiang>node install vue-router@4</Xuanxiang>
    <Xuanxiang ans>yarn add vue-router@4</Xuanxiang>
    <Xuanxiang>npm I vue-router@4</Xuanxiang>
    <Xuanxiang>npm Install vueRouter@4</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 下列选项中，关于 Vue Router 全局前置守卫 beforeEach（）方法的说法错误的是</Wenben>
    <Xuanxiang>beforeEach() 方法中 from 参数表示当前导航正要离开的路由对象</Xuanxiang>
    <Xuanxiang ans>beforeEach() 方法中若省略 next 参数，则不允许用户访问任何一个路由</Xuanxiang>
    <Xuanxiang>beforeEach() 方法中 to 参数表示目标路由对象</Xuanxiang>
    <Xuanxiang>beforeEach() 方法中接收 to、from、next 形参</Xuanxiang>
    <Jiexi>
      beforeEach() 方法的基本用法: `router.beforeEach((to, from, next) => { ... })`

      这里的三个参数分别是：

      - to：目标路由对象，也就是我们将要导航到的路由
      - from：当前路由对象，也就是我们正要离开的路由
      - next：一个函数，用于决定下一步的导航行为

      B选项：在 Vue Router 3.x 版本中，beforeEach 的回调函数必须调用 next()，否则导航会被卡住。
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 下列选项中，可以实现捕获 Enter 键的事件修饰符是</Wenben>
    <Xuanxiang>.once</Xuanxiang>
    <Xuanxiang>.prevent</Xuanxiang>
    <Xuanxiang>.capture</Xuanxiang>
    <Xuanxiang ans>.enter</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. 下列选项中，用于获取 Vue Router 全局实例对象的方法是</Wenben>
    <Xuanxiang ans>useRouter()</Xuanxiang>
    <Xuanxiang>route()</Xuanxiang>
    <Xuanxiang>useRoute()</Xuanxiang>
    <Xuanxiang>router()</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 下列 v-model 提供的修饰符中，用于自动过滤用户输入的首尾空白字符的修饰符是</Wenben>
    <Xuanxiang>.number</Xuanxiang>
    <Xuanxiang ans>.trim</Xuanxiang>
    <Xuanxiang>.lazy</Xuanxiang>
    <Xuanxiang>.right</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 下列选项中，用于在路由匹配规则中实现路由重定向的属性是</Wenben>
    <Xuanxiang>forword</Xuanxiang>
    <Xuanxiang>replace</Xuanxiang>
    <Xuanxiang>push</Xuanxiang>
    <Xuanxiang ans>redirect</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 下列 v-model 提供的修饰符中，用于在 change 事件触发时更新数据的修饰符是</Wenben>
    <Xuanxiang>.number</Xuanxiang>
    <Xuanxiang>.right</Xuanxiang>
    <Xuanxiang>.trim</Xuanxiang>
    <Xuanxiang ans>.lazy</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>9. 下列选项中，关于前、后端路由的说法错误的是</Wenben>
    <Xuanxiang ans>Vue 中的路由属于后端路由</Xuanxiang>
    <Xuanxiang>后端路由的整个过程发生在服务器端</Xuanxiang>
    <Xuanxiang>Node.js 环境中的 Express 框架中的路由属于后端路由</Xuanxiang>
    <Xuanxiang>前端路由的整个过程发生在浏览器端</Xuanxiang>
    <Jiexi>
      | **维度**   | **前端路由**                 | **后端路由**          |
      | -------- | ------------------------ | ----------------- |
      | **处理位置** | 浏览器（客户端）                 | 服务器端              |
      | **技术本质** | 基于 HTML5 History API 或 hash | 基于服务器路由表匹配        |
      | **页面刷新** | 无刷新（SPA特性）               | 整页刷新              |
      | **典型应用** | Vue Router/React Router  | Express/Flask 路由系统 |
      
      A选项：Vue Router 是典型的前端路由实现，通过管理客户端路由状态实现 SPA（单页应用）。它通过监听 URL 变化（如`hashchange`或`popstate`事件），在不向服务器请求新页面的情况下切换组件视图。
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>10. 下列选项中，关于跨组件之间数据传递说法错误的是</Wenben>
    <Xuanxiang>对子组件而言，如果想要注入上层组件提供的数据，则需要使用到 inject() 函数</Xuanxiang>
    <Xuanxiang>跨组件之间之前的数据共享可以通过依赖注入的方式来实现</Xuanxiang>
    <Xuanxiang>provide() 函数可以提供一个值，可以被后代组件所注入</Xuanxiang>
    <Xuanxiang ans>provide() 函数可以接收 2 个参数，第 1 个参数是要注入的值，第 2 个参数是注入名</Xuanxiang>
    <Jiexi>
      | **传递方式**           | **适用场景**    | **API用法**                     | **数据流向**     |
      | ------------------ | ----------- | ----------------------------- | ------------ |
      | **props**          | 父子组件（层级明确）  | 父组件传值 `<Child :msg="data" />` | 单向（父→子）      |
      | **provide/inject** | 跨层级组件（深层嵌套） | 祖先 `provide('key', value)`    | 祖先→后代（跨层级穿透） |
      |                    |             | 后代 `inject('key')`            |              |
      
      D选项：第 1 个参数是注入名，第 2 个参数是要注入的值
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>11. 下列选项中，关于单文件组件说法错误的是</Wenben>
    <Xuanxiang>模板用于搭建当前组件的 DOM 结构</Xuanxiang>
    <Xuanxiang>单文件组件由模板、样式与逻辑三部分构成</Xuanxiang>
    <Xuanxiang>在使用 Vite 创建 Vue 项目后，每个后缀名为 .vue 文件的都用来定义一个单文件组件</Xuanxiang>
    <Xuanxiang ans>样式用于通过 JavaScript 代码为当前组件设置样式</Xuanxiang>
    <Jiexi>`<style>`标签内是 CSS 代码，不属于 JavaScript。但可以通过 JavaScript 来修改 CSS 样式。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>12. 下列选项中，关于 Vue Router 的描述错误的是</Wenben>
    <Xuanxiang>Vue Router 是 Vue.js 官方的路由管理器</Xuanxiang>
    <Xuanxiang ans>Vue Router 提供的路由功能不能直接在 Vue 组件中使用</Xuanxiang>
    <Xuanxiang>Vue Router 是一个基于 Hash 或 HTML5 模式的前端路由库</Xuanxiang>
    <Xuanxiang>Vue Router 可以用于创建单页面应用(SPA)</Xuanxiang>
  </Workitem>
</Workpaper>