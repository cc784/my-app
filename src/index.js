import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
//  props默认值
// 声明一个类组件
class HomeTop extends Component { 
  constructor(props) {
    super(props);
	console.log(props);
  }
  render() {
    return (
     
     <div>
        <h1>屋顶的颜色是 {this.props.acolor} 尺寸 {this.props.asize}</h1>
        
     </div>
    )
  }
}
// 函数式组件
const HomeFooter =(props) =>{
return <div>
  <h1> 屋底的颜色是{props.bcolor} 尺寸{props.bsize}</h1>
  <h2>{props.null_}</h2>
</div>
}
// 指定一个默认属性
HomeFooter.defaultProps = {
  null_: "yellow"
}
// 声明父组件
class Person extends Component{
  state ={
    color:"blue",
    size:100
  }
  render(){
    return(
      <div>
        <HomeTop acolor={this.state.color} asize={this.state.size}></HomeTop>
        <HomeFooter bcolor={this.state.color} bsize={this.state.size}></HomeFooter>
      </div>
    )
  }
}
ReactDOM.render(<Person/>, document.getElementById('root'))