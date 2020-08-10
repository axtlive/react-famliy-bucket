# dva

> https://dvajs.com/

> dva不仅仅是一个第三方库，更是一个框架，它主要整合了redux的相关内容，让我们处理数据更加容易，实际上，dva依赖了很多：react、react-router、redux、redux-saga、redux-redux、connected-react-router等。

# 数据流向

![avatar](https://zos.alipayobjects.com/rmsportal/PPrerEAKbIoDZYr.png)

## dva的使用

1. 默认导出一个函数，通过调用该函数，可以得到一个dva应用程序对象。
```js
import dva from 'dva'
const app = dva()
```

2. app.router：路由方法，传入一个函数，该函数返回一个React节点，将来，应用程序启动后，会自动渲染该节点。
```js
import App from './App'
app.router(() => <App />);
```

3. app.start：该方法用于启动dva应用程序，可以认为启动的就是react程序，该函数传入一个选择器，用于选中页面中的某个DOM元素，react会将内容渲染到该元素内部。
```js
app.start("#root");
```

4. app.model:该方法用于顶一个模型，该模型可以理解为redux的action、reducer、redux-saga副作用处理的整合，整合成一个对象，将该对象传入model方法即可。（在启动之前定义模型）
  + namespace：命名空间，该属性是一个字符串，字符串的值，会被作为仓库中的属性保存
  + state：该模型的默认值，
  + reducers：该属性配置为一个对象，对象中的每个方法就是一个reducer，dva约定，方法的名字就是action的类型
  + effects：处理副作用，底层是用使用redux-saga实现的，该属性配置为一个对象，对象中的每个方法均处理一个副作用，方法的名字就是匹配的action类型
    - 参数1：action
    - 参数2：封装好的saga/effects
  + subscriptions：配置为一个对象，该对象中，可以写任意数量，任意名称的属性，每个属性是一个函数，这些函数会在模型加入到仓库中后立即执行。


5. 在dva中要同步路由到仓库：
   + 在调用dva函数时，配置history对象
   + 使用ConnectedRouter提供路由上下文

6. 配置
   + history：同步到仓库的history对象
   + initialState: 创建仓库时，使用的默认状态
   + onError：当仓库的运行发生错误时，运行的函数
   + onAction: 当触发action的时候运行的，即可以配置redux中间件
      - 传入一个中间件对象
      - 传入一个中间件数组
   + onStateChange: 当仓库中的状态发生变化的时候运行的函数
   + onReducer: 对模型中的reducer进行进一步封装
   + onEffect：类似于对模型中的effect进行进一步封装
   + extraReducers： 用于配置额外的reducer,它是一个对象，对象的每一个属性是一个方法，每个方法就是一个需要合并的reducer，方法名即属性名
   + extraEnhancers: 它是用于封装createStore函数的，dva会将原来的仓库创建函数作为参数传递，返回一个新的用于创建仓库的函数。函数必须放到数组中