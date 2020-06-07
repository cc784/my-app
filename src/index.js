import React ,{ Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
// JSX嵌套JSX  JSX循环
const list = ['苹果', '香蕉', '雪梨', '西瓜'];
const Test = () => {
  return (
    <div >
      {
        <div>
          {
            list.map(function (v) {
              return (
                <h1 key={v}>{v}</h1>
              )
            })
          }
        </div>
      }
      <div style={{ color:'yellow', fontSize:"50px"}}>颜色好好看</div>
    </div>
  )
}

ReactDOM.render(<Test />, document.getElementById('root'));