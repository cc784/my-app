import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
// state的声明和使用

class Person extends Component{
  // 1.声明 state
  state ={
    date:'2088',
    msg:'来日方长'
  }
  render() {
    return (
      <div>
        {/* 2 使用state */}
        <h1>{this.state.date}</h1>
        <h2>{this.state.msg}</h2>
      </div>
    )
  }
}
/*
  1.类属性的方式声明
  2.state 声明
  3.render中渲染调用
*/
ReactDOM.render(<Person/>, document.getElementById('root'))