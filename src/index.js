import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
// state的赋值
// state的赋值方式通过 this.setState方法 来实现

// 需要注意的是， 不能 使用 this.state.date= 100 直接修改

 
class Person extends Component{
  constructor(){
    super();
    this.state= {
      date:12313,
      msg:'来日方长'
    }
    
  }
  
// 2.事件声明
handleClick =() =>{
  // 获取
  let {date} =this.state;
  let {msg} =this.state;

  // 修改
  this.setState({
    date:date + 1000,
    msg:'已修改'+1
  })
  }
  render(){
    return(
      <div >
        <button onClick={this.handleClick}>按钮</button>
        <h1>{this.state.date}</h1>
        <h1>{this.state.msg}</h1>
        
      </div>
    )
  }
}

ReactDOM.render(<Person/>, document.getElementById('root'))