import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
// state的声明和使用 构造方法
 
class Person extends Component{
  constructor(){
    super();
    this.state= {
      data:"1234",
      msg:'来日方长'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.data}</h1>
        <h2>{this.state.msg} </h2>
      </div>
    )
  }
}

ReactDOM.render(<Person/>, document.getElementById('root'))