import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';


const GreenBtn = (props) =>{
  setInterval(()=>{
    props.onChangeColor("green");
  },1000)
  return(
    <button>绿色</button>

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
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))