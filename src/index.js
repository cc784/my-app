import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';
import Rout from '../src/router2'
import App from '../src/App'

// 1 引入仓库
import store from "./store";
// 2 借助 react-redux中的一个组件来实现传递
import { Provider } from "react-redux";

// ReactDOM.render(<Rout/>,document.getElementById('root'))
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));