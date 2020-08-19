# 约定式路由

umi对路由的处理，主要通过两种方式：

1. **约定式**：使用约定好的文件夹和文件，来代表页面，umi会根据开发者书写的页面，生成路由配置。
2. 配置式：直接书写路由配置文件

## 路由匹配

umi约定
1. 页面：工程中的pages文件夹中存放的是页面。如果工程包含src目录，则src/pages是页面文件夹
1. 路由：页面的文件名，以及页面的文件路径，是该页面匹配的路由
3. 如果页面的文件名是index，则可以省略文件名，（注意避免文件名和当前目录中的文件夹名称相同）
4. 布局：如果src/layouts目录存在，则该目录中的index.js表示的是全局的通用布局，布局中的children则会添加具体的页面
5. 子布局：如果pages文件夹中包含_layout.js，则_layout.js所在目录以及其所有的子目录中的页面，共用这个布局
6. 404约定:pages/404.js，表示404页面，如果路由无匹配，则会渲染该界面（开发模式无效，只有部署后才会生效）
7. 使用`:名称` ，会产生动态路由

## 路由跳转

1. 链接跳转： 
```js
import {Link,NavLink} from 'umi';

<Link to="/sub" activeStyle={{color: "red"}}>sub</Link>
<NavLink to="/sub" activeStyle={{color: "red"}}>sub</NavLink>
```

2. 代码跳转
```js
import React from "react";
import { useHistory } from "umi";

export default function Page1() {
  const router = useHistory();
  return (
    <div>
      <div>page1</div>
      <button onClick={() => router.push("/page2")}>去page2</button>
    </div>
  );
}

```

## 路由信息的获取

所有的页面、布局组件，都会通过props，接收到下面的props

+ match: 等同于react-router的match
+ history: 等同于react-router的history（不同于原来的history.location.query的是，这里的history.location.query被封装成了一个对象，使用的是query-string这个库）
+ location: 等同于react-router的location（不同于原来的location.query的是，这里的location.query被封装成了一个对象，使用的是query-string这个库）


如果要在普通组件中获取路由信息，则需要使用withRouter来进行封装
```js
import React from "react";
import { withRouter } from "umi";

function C(props) {
  return <div>{props.location.pathname}</div>;
}
export default withRouter(C);
```