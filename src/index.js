import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

let element4 =(
  <div>
    <span>橫著躺</span>
    <span>竪著躺</span>
  </div>
)

let man = '發熱'
let element3 =(
  <div>
    <h1>今天是否隔離</h1>
    <h2>{ man == '發熱'? <button>隔離</button>:element4 }</h2>
  </div>
)

ReactDOM.render(
  element3,
  document.getElementById('root')
)