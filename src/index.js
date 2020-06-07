import React ,{ Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
let msg =1
let isBoy ='男生'
//使用對象
const person = {
  name: "使用對象"
};   
// 使用方法
const format = (msg) => {
  return '---' + msg + '---';
}
function Test(){
  return(
    <Fragment>
    <h1>我就是jsx</h1>
    <h1>我大概就是jsx</h1>
    <h1>{1 + 1}</h1>
    <h1>{'hello world'}</h1>
    <h1>{msg}</h1>
    <h1>{isBoy ? "男生" : "女生"}</h1>
    <h1>{person.name}</h1>
  <h1>{format(msg)}</h1>
    </Fragment>
  )
}

ReactDOM.render(<Test />, document.getElementById('root'));