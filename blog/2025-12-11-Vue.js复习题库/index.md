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
  <Workitem xuanze>
    <Wenben>13. 下列选项中，用于定义组件缓存的标签是</Wenben>
    <Xuanxiang> \<slot\>标签</Xuanxiang>
    <Xuanxiang ans>\<KeepAlive\>标签</Xuanxiang>
    <Xuanxiang>\<template\>标签</Xuanxiang>
    <Xuanxiang>\<component\>标签</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>14. 下列选项中，关于自定义指令说法错误的是</Wenben>
    <Xuanxiang>私有自定义指令只能在声明该指令的组件中使用</Xuanxiang>
    <Xuanxiang>在 Vue 中，可以通过 app.directive() 函数声明全局自定义指令</Xuanxiang>
    <Xuanxiang>全局自定义指令可以在全局进行使用</Xuanxiang>
    <Xuanxiang ans>在 Vue 中，不能为自定义指令绑定参数</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>15. 下列选项中，当路由离开对应组件的视图时才会触发的 Vue Router 的导航守卫函数是</Wenben>
    <Xuanxiang>beforeEnter()</Xuanxiang>
    <Xuanxiang>beforeRouteUpdate()</Xuanxiang>
    <Xuanxiang>beforeRouteEnter()</Xuanxiang>
    <Xuanxiang ans>beforeRouteLeave()</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>16. 下列选项中，关于 npm 工具说法正确的是</Wenben>
    <Xuanxiang ans>npm 安装包时，必须等到当前包安装完成后才会继续后面的安装</Xuanxiang>
    <Xuanxiang>使用 npm 安装同一个包时，会对包进行缓存，再次安装时无须重复下载</Xuanxiang>
    <Xuanxiang>使用 “npm install 包名 -g” 命令表示将包安装到当前项目中</Xuanxiang>
    <Xuanxiang>使用 npm 命令时，不需要安装 Node.js</Xuanxiang>
    <Jiexi>
      B选项：
      - 缓存仅针对**相同版本**的包，若安装不同版本，仍需重新下载；
      - 若手动清理了缓存（如 `npm cache clean --force`），或使用 `--no-cache` 强制不使用缓存，再次安装仍需下载；
      - 缓存本质是“本地存储已下载的包”，首次安装后再次安装**相同版本**时会直接读取缓存，无需网络下载，但题目中“无须重复下载”未限定“相同版本”和“缓存未清理”，因此表述不准确，B选项错误。
      
      C选项：`-g` 是 `--global` 的缩写，表示**全局安装**（安装到系统级目录）
      
      D选项：必须的运行库，npm是Node.js的**内置包管理器**，与Node.js捆绑安装
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>17. 下列 Vue 3 项目的目录结构中，项目的入口文件是</Wenben>
    <Xuanxiang ans>src\main.js</Xuanxiang>
    <Xuanxiang>src</Xuanxiang>
    <Xuanxiang>src\App.vue</Xuanxiang>
    <Xuanxiang>.vscode</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>18. 下列选项中，当组件被缓存时执行的生命周期函数是</Wenben>
    <Xuanxiang>onActivated()函数</Xuanxiang>
    <Xuanxiang>onUpdated()函数</Xuanxiang>
    <Xuanxiang>onMounted()函数</Xuanxiang>
    <Xuanxiang ans>onDeactivated()函数</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>19. 下列选项中，关于作用域插槽说法错误的是</Wenben>
    <Xuanxiang ans>具名插槽和作用域插槽不可以作用在同一个 \<slot\> 标签上</Xuanxiang>
    <Xuanxiang>通过作用域插槽可以实现在父组件中使用子组件中的数据</Xuanxiang>
    <Xuanxiang>作用域插槽是带有数据的插槽</Xuanxiang>
    <Xuanxiang>在作用域插槽中，可以将数据通过类似传递 props 属性的形式添加到 \<slot\> 标签上</Xuanxiang>
    <Jiexi>
      具名插槽（通过 `name` 属性定义）和作用域插槽（通过向插槽传递数据）**完全可以共存**在同一个 `<slot>` 标签上。
      
      - 具名插槽的核心是 **区分插槽位置**（通过 `name` 标识不同插槽，如 `<slot name="header">`）；
      - 作用域插槽的核心是 **子组件向父组件传递数据**（通过在 `<slot>` 上绑定属性，如 `<slot :user="user">`）。
      
      两者的功能互不冲突，甚至经常结合使用
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>20. 下列选项中，用于将响应式对象中的所有属性转换为响应式数据的函数是</Wenben>
    <Xuanxiang>reactive()</Xuanxiang>
    <Xuanxiang>toRef()</Xuanxiang>
    <Xuanxiang>ref()</Xuanxiang>
    <Xuanxiang ans>toRefs()</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>21. 下列选择中，关于 MVVM 的说法错误的是</Wenben>
    <Xuanxiang>ViewModel 负责监听 Model 或者 View 的改变</Xuanxiang>
    <Xuanxiang>Model 主要负责业务数据的处理</Xuanxiang>
    <Xuanxiang ans>Model 和 View 可以直接通信，互相监控双方的动作，并及时进行相应操作</Xuanxiang>
    <Xuanxiang>View 负责视图的处理</Xuanxiang>
    <Jiexi>
      MVVM架构的核心设计理念就是 **“分离关注点”**，严格禁止 Model（数据层）和 View（视图层）直接通信。
      
      - **Model** 是纯粹的数据模型（如后端返回的数据、本地状态管理），它只负责 **存储和处理数据**，不关心视图如何展示；
      - **View** 是用户界面（如页面、组件），它只负责 **展示数据和接收用户交互**，不关心数据从哪里来、如何变化；
      - **ViewModel** 是连接 Model 和 View 的“桥梁”，它 **监听 Model 的变化并通知 View 更新**，同时 **监听 View 的用户操作并同步到 Model**。
      
      简单说：**Model ↔ ViewModel ↔ View**，Model 和 View 之间必须通过 ViewModel 中转，**绝对不能直接通信**。因此，C选项“Model 和 View 可以直接通信”的说法错误。
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>22. 下列选项中，关于插槽说法错误的是</Wenben>
    <Xuanxiang ans>在封装组件时，可以通过 \<component\> 标签定义插槽</Xuanxiang>
    <Xuanxiang>插槽是组件封装期间为组件的使用者预留的占位符，允许组件的使用者在组件内展示特定的内容</Xuanxiang>
    <Xuanxiang>在 \<slot\> 标签内可以添加内容作为插槽的默认内容</Xuanxiang>
    <Xuanxiang>在父组件中使用子组件的插槽时，需要将子组件写成双标签的形式</Xuanxiang>
    <Jiexi>定义插槽的唯一标签是 \<slot\>，而 \<component\> 是 Vue 中用于动态渲染组件的标签（例如根据组件名动态切换不同组件），两者功能完全无关。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>23. 下列选项中，在 Vue 3 中创建路由实例的函数为</Wenben>
    <Xuanxiang ans>createRouter()</Xuanxiang>
    <Xuanxiang>createRoute()</Xuanxiang>
    <Xuanxiang>createRouterModule()</Xuanxiang>
    <Xuanxiang>createVueRouter()</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>24. 下列选项中，用于在路由匹配规则中实现嵌套路由的属性是</Wenben>
    <Xuanxiang>forword</Xuanxiang>
    <Xuanxiang>redirect</Xuanxiang>
    <Xuanxiang ans>children</Xuanxiang>
    <Xuanxiang>push</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>25. 下列选项中，用于全局注册组件的方法是</Wenben>
    <Xuanxiang>mount()</Xuanxiang>
    <Xuanxiang ans>component()</Xuanxiang>
    <Xuanxiang>directive()</Xuanxiang>
    <Xuanxiang>unmount()</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>26. 下列选项中，关于单页Web应用说法错误的是</Wenben>
    <Xuanxiang>单页 Web 应用中的数据是通过 Ajax 获取的，不需要重新加载</Xuanxiang>
    <Xuanxiang>单页 Web 应用将所有的功能局限于一个 Web 页面中</Xuanxiang>
    <Xuanxiang ans>在页面加载完成后，该页面会因用户的操作而进行页面的重新加载或跳转</Xuanxiang>
    <Xuanxiang>单页 Web 应用仅在 Web 页面的初始化时加载相应的资源</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>27. 下列选项中，关于侦听器说法错误的是</Wenben>
    <Xuanxiang>watch() 函数中第 1 个参数表示侦听器的来源</Xuanxiang>
    <Xuanxiang>侦听器通过 watch() 函数定义</Xuanxiang>
    <Xuanxiang>通过侦听器可以实现在数据更新后进行相应的操作</Xuanxiang>
    <Xuanxiang ans>watch() 函数的第 2 个参数是一个对象，该对象的常用选项有 deep、immediate</Xuanxiang>
    <Jiexi>
      `watch()` 函数的 **第二个参数是“回调函数”**（数据变化时执行的操作），而 **第三个参数才是选项对象**（包含 `deep`、`immediate` 等配置）
      ```javascript
      watch(
       侦听源,  // 第1个参数：要监听的数据（如 count）
       (newVal, oldVal) => {},  // 第2个参数：数据变化时的回调函数
       { deep: true, immediate: true }  // 第3个参数：选项对象（可选）
      );
      ```
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>28. 下列选项中，关于插槽说法错误的是</Wenben>
    <Xuanxiang>插槽是组件封装期间为组件的使用者预留的占位符</Xuanxiang>
    <Xuanxiang>当需要使用多个插槽时，则需要为每个 \<slot\> 插槽指定具体的 name 属性</Xuanxiang>
    <Xuanxiang>在定义插槽时，直接写一个 \<slot\> 标签，它属于默认插槽</Xuanxiang>
    <Xuanxiang ans>如果组件的使用者为插槽提供内容，则默认内容生效</Xuanxiang>
    <Jiexi>插槽的“默认内容”（即 `<slot>` 标签之间的文本/元素）**仅在“使用者未提供插槽内容”时生效**。一旦使用者提供了插槽内容，默认内容会被 **完全替换**。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>
      29. 阅读代码，下面这段代码实现的功能是
      ```js showLineNumbers
      const router = createRouter({
          routes: [
              {
                  path: '/users',
                  component: Users,
                  children: [
                      {
                          path: 'profile',
                          component: UserProfile
                      }
                  ]
              }
          ]
      });
      ```
    </Wenben>
    <Xuanxiang>定义了路由 /users/profile</Xuanxiang>
    <Xuanxiang ans>定义了嵌套路由 /users和/users/profile</Xuanxiang>
    <Xuanxiang>定义了路由 /users 和 /profile</Xuanxiang>
    <Xuanxiang>定义了路由 /users</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>30. 下列选项中，关于 ref() 函数说法错误的是</Wenben>
    <Xuanxiang>ref() 函数返回值为响应式数据</Xuanxiang>
    <Xuanxiang ans>ref() 函数用于将响应式对象中的单个属性转换为响应式数据</Xuanxiang>
    <Xuanxiang>如果需要更改响应式数据的值，可以通过“响应式数据.value = 新值”进行修改</Xuanxiang>
    <Xuanxiang>ref() 函数的参数为数据</Xuanxiang>
    <Jiexi>
      - `ref()`的设计目的是**创建新的响应式数据**，而非“转换响应式对象的单个属性”。
      - 当你已经有一个响应式对象（如reactive创建的对象），若想提取其中的单个属性并保持响应式，应该使用 **`toRef()`或`toRefs()`**，而不是`ref()`！
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>31. 下列选项中，用于在 Vue Router 路由中定义动态参数的符号是</Wenben>
    <Xuanxiang>()</Xuanxiang>
    <Xuanxiang ans>:</Xuanxiang>
    <Xuanxiang>\{\}</Xuanxiang>
    <Xuanxiang>\[\]</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>32. 下列选项中，关于 v-if 说法错误的是</Wenben>
    <Xuanxiang ans>v-if 为内容渲染指令</Xuanxiang>
    <Xuanxiang>当 v-if 的值为 false 时，元素从 DOM 树中移除</Xuanxiang>
    <Xuanxiang>当 v-if 的值为 true 时，元素存在于 DOM 树中</Xuanxiang>
    <Xuanxiang>v-if 是根据布尔值切换元素的显示或隐藏状态</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>33. 下列选项中，关于双向数据绑定指令说法错误的是</Wenben>
    <Xuanxiang ans>v-model 内部会为不同的元素绑定相同的属性和事件</Xuanxiang>
    <Xuanxiang>使用 v-model 可以在 input 元素上创建双向数据绑定</Xuanxiang>
    <Xuanxiang>Vue 提供了 v-model 来实现双向数据绑定</Xuanxiang>
    <Xuanxiang>v-model 的语法格式为 \<标签名 v-model="数据名"\>\</标签名\></Xuanxiang>
    <Jiexi>v-model 会根据不同的表单元素类型，自动绑定**不同的属性**</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>34. 下列选项中，关于 Vue 说法错误的是</Wenben>
    <Xuanxiang>Vue 支持 Pinia 插件</Xuanxiang>
    <Xuanxiang ans>Vue 中自定义指令以 “on-” 开头</Xuanxiang>
    <Xuanxiang>Vue 相比 Angular 和 React 而言，是一个轻量级的前端库</Xuanxiang>
    <Xuanxiang>Vue 支持双向数据绑定</Xuanxiang>
    <Jiexi>Vue的指令系统（包括内置指令和自定义指令）**统一以`v-`**</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>35. 下列选项中，关于 KeepAlive 组件说法错误的是</Wenben>
    <Xuanxiang>只要是被 \<KeepAlive\> 标签包裹的组件就不会销毁</Xuanxiang>
    <Xuanxiang>在 \<KeepAlive\> 标签上添加 max 属性来设置最多可以缓存的组件实例个数</Xuanxiang>
    <Xuanxiang ans>若只想要对应组件名的组件被缓存，则需要通过 \<KeepAlive\> 标签的 exclude 属性来实现</Xuanxiang>
    <Xuanxiang>KeepAlive 组件通过 \<KeepAlive\> 标签来定义</Xuanxiang>
    <Jiexi>
      - `include`属性：**只缓存**指定名称的组件（白名单）
      - `exclude`属性：**不缓存**指定名称的组件（黑名单）
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>36. 下列选项中，关于 npm 中常用的命令说法错误的是</Wenben>
    <Xuanxiang>“npm install 包名”用于为项目安装指定名称的包</Xuanxiang>
    <Xuanxiang>“npm uninstall 包名”用于卸载指定名称的包</Xuanxiang>
    <Xuanxiang ans>“npm i 包名”用于更新指定名称的包</Xuanxiang>
    <Xuanxiang>“npm -v”命令用于查看 npm 的版本</Xuanxiang>
    <Jiexi>`npm i` 是 `npm install` 的缩写形式，它的作用是**安装**包</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>37. 下列关于单文件组件的说法中，错误的是</Wenben>
    <Xuanxiang>逻辑用于通过 JavaScript 代码处理组件的数据与业务</Xuanxiang>
    <Xuanxiang>样式用于通过 CSS 代码为当前组件设置样式</Xuanxiang>
    <Xuanxiang ans>在 Vue 3 中，\<template\> 标签中的 DOM 结构只能有一个根节点</Xuanxiang>
    <Xuanxiang>模板用于搭建当前组件的 DOM 结构</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>38. 下列选项中，关于事件绑定指令说法错误的是</Wenben>
    <Xuanxiang ans>“v-on:事件名”简写为“:事件名”</Xuanxiang>
    <Xuanxiang>事件名即 DOM 中的事件名，如 click、input、keyup 等</Xuanxiang>
    <Xuanxiang>事件绑定指令为 v-on</Xuanxiang>
    <Xuanxiang>事件绑定指令可以为 DOM 元素绑定事件</Xuanxiang>
    <Jiexi>
      `v-on`的简写是`@`，而`:`是 v-bind 的简写。这是 Vue 中最容易混淆的两个简写符号
      
      - `v-bind:属性名` → `:属性名`（绑定属性）
      - `v-on:事件名` → `@事件名`（绑定事件）
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>39. 下列常用的自定义指令生命周期函数中，用于在绑定元素被挂载之前调用函数是</Wenben>
    <Xuanxiang>mounted()函数</Xuanxiang>
    <Xuanxiang>updated()函数</Xuanxiang>
    <Xuanxiang>created()函数</Xuanxiang>
    <Xuanxiang ans>beforeMount()函数</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>40. 下列选项中，用于声明全局自定义指令的方法是</Wenben>
    <Xuanxiang ans>directive()</Xuanxiang>
    <Xuanxiang>mount()</Xuanxiang>
    <Xuanxiang>component()</Xuanxiang>
    <Xuanxiang>unmount()</Xuanxiang>
  </Workitem>
</Workpaper>