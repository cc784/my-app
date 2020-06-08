import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 1 引入 prop-types
import PropTypes from 'prop-types'; 
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//  props默认值
// 声明一个类组件
let HomeNav = (props) => {
  return  <div>
  <div>标题</div>
  <div>{props.children}</div>
</div>
  
}
// 2  指定要求接收的数据格式
HomeNav.propTypes ={
  color:PropTypes.string,
  nums:PropTypes.number
}



class Home extends Component {
  state = {
    color: "blue",
    nums:100
  }
  render() {
    return (
      <div>
        <HomeNav {...this.state}></HomeNav>
         {/* 这里放动态插入的内容 */}
         <div>小标题你 这是一个 插槽</div>
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))