// 1 导入管理员
import reducer from "./reducer";
// 2 借助 redux库的一个函数来创建仓库
import { createStore  } from "redux";

// 3 创建仓库 使用管理员  一起 导出去
export default createStore(reducer);