import React ,{ Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
// JSX嵌套JSX  JSX循环

const parentProps ={
  className: "redCls",
  "data-index":100
}

const Test =() =>{
  return React.createElement(
    "div",
    parentProps,
    [
      React.createElement(
        "span",
        null,
        "你们好呀"
      ),
      React.createElement(
        "h1",
        null,
        "你们好呀"
      ),
      React.createElement(
        "h2",
        null,
        "这就是jsx语法糖"
      ),
    ]
  )
}

ReactDOM.render(<Test/>,document.getElementById('root'))