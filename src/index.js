import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

//函數式組件
function Clock(props) {
  return (
    <div>
      <h1>現在時間是{props.date.toLocaleTimeString()}</h1>
      <h2>在這是副標題</h2>
    </div>
  )
}

function run(){
  ReactDOM.render(
    <Clock date={new Date()} />,document.querySelector('#root')
  )
}
setInterval(run, 1000);