import React ,{ Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
// 函数式组件

const Test = () =>{
  return(
    <div>这个就是一个简单的函数式组件</div>
  )
}

ReactDOM.render(<Test/>, document.getElementById('root'))