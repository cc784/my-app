import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';


const GreenBtn = (props) =>{
  // 子组件发出事件
  setInterval(()=>{
    props.onChangeColor("green");
  },4000)
  return(
    <button>绿色</button>

  )
}

// 子组件B
const Blue =(props)=>{
  const handleClick = () => {
    props.onChangeColor("red");
  }
  return(
    <div>
      蓝色
      <button style={{ color: props.color }} onClick={handleClick}>蓝色</button>
      </div>
  )
}
class App extends Component{
  state ={
    color:'red'
  }
  // 监听事件触发
  changeColor = (color) =>{
    this.setState({
      color
    })
  }
  render(){
    return(
      <div style={{ backgroundColor: this.state.color }}>
    <GreenBtn onChangeColor={this.changeColor}></GreenBtn>
    <Blue onChangeColor={this.changeColor} color={this.state.color}></Blue>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))