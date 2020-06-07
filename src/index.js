import React ,{ Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
// 组件

class Test extends Component{
  render(){
    return(
      <div>
        hello
      </div>
    )
  }
}
ReactDOM.render(<Test/>, document.getElementById('root'))