// 1 自己定义数据
const defaultState = {
    num: 10000,
    date:1234567
  }
  
  // 2 导出去 函数 固定 
  export default (state=defaultState,action)=>{
    // state 做一个深拷贝
    let newState =JSON.parse(JSON.stringify(state))
    if(action.type ==='add'){
      newState.num += action.unit;
      return newState;
    }
  return state;
  }