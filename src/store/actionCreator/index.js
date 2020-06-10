import axios from 'axios';

// 创建 购物车数量增加的action
export const cartNumAdd = (unit) => {
    return {
      type: "add", unit
    }
  }

  export const initNumAction = () => {
    // 1 返回一个函数 还有一个形参 dispatch
    return (dispatch) => {
      // 2 发送异步请求
      axios.get("http://157.122.54.189:9060/home/swiper")
        .then(res => {
          const num = res.data.body.length;
          // 3 数据回来 自己再触发 dispatch => 下一步 就到了管理员里面
          dispatch({ type: "init", unit: num });
        })
    }
  }
  