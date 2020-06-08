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
  return <h1> 导航为 {props.color} 数量为 {props.nums}  </h1>
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
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))