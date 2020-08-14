import dva from "dva";
import createLoading from "dva-loading";
import { createBrowserHistory } from "history";

import routerConfig from "./routerConfig";
import counterModel from "./models/counter";
import studentModel from "./models/student";

// import myDvaPlugin from "./myDvaPlugin";

// 得到一个dva应用程序对象;
const app = dva({
  history: createBrowserHistory(),
});

// app.use(myDvaPlugin);
// dva-loading插件
app.use(
  createLoading({
    namespace: "handleEffects", // redux里面改了个名字而已，原来叫loading，现在是设置的namespace
  }),
);

// 在启动之前定义模型;
app.model(counterModel);
app.model(studentModel);

// 设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
// 这个函数会往里面传入两个参数，一个dva（这里就是app），一个history
app.router(routerConfig);

// 启动
app.start("#root");
