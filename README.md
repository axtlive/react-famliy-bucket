# react-redux 其他api

> 详情参考： https://react-redux.js.org/api

## connect

- mergeProps: 是个函数，有三个参数，
  - 参数一：stateProps,该参数的值来自于mapStateToProps返回的值
  - 参数二：dispatchProps，该参数的值来自于mapDispatchToProps返回的值
  - 参数三：ownProps，来自于组件使用者传递的属性
  - 返回值：是一个对象，该对象的属性最终会被传递到connect所包装的组件中

- options：是一个配置对象
  
## connectAdvanced

该函数和connect一样，也是用于连接React组件和Redux仓库的，只不过它的配置比connect少一些

该函数需要传递两个参数：
  - 参数一：selectorFactory
    - 参数1：dispatch
    - 参数2：factoryOptions，配置
    - 返回值：是个函数 
      -  参数1：state
      -  参数2：ownProps
      -  返回的是一个对象：该对象的属性最终，会成为包装的组件的属性
  - 参数二：connectOptions

## createProvider
createProvider(字符串key)：通过一个唯一的key值创建一个Provider组件,在connect的时候传入那个options配置对象。

```js
const Provider1 = createProvider('key1');
const Provider2 = createProvider('key2');
```