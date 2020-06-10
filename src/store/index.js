// 导入管理员
import reducer from "./reducer";
// 1 引 入  thunk 用来实现异步action
import thunk from "redux-thunk";
// 2 引入 redux的中间件 加载器  // 2 借助 redux库的一个函数来创建仓库
import {createStore,applyMiddleware  } from "redux";



// 3 创建仓库 使用管理员  一起 导出去
export default createStore(reducer,applyMiddleware(thunk));