// import * as reactRouterDom from "./dva/router";
// import * as sagaEffects from "./dva/saga";
// console.log(reactRouterDom);
// console.log(sagaEffects);

import dva from "./dva";

import routerConfig from "./routerConfig";
import counterModel from "./models/counter";
import studentModel from "./models/student";

// 得到一个dva应用程序对象;
const app = dva();

// 在启动之前定义模型;
app.model(counterModel);
app.model(studentModel);

// 设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
// 这个函数会往里面传入两个参数，一个dva（这里就是app），一个history
app.router(routerConfig);

// 启动
app.start("#root");
