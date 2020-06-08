import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';

class HomeTop extends Component{
  render(){
    return(
      <div>
          <h1>屋顶的颜色是 {this.props.acolor} 尺寸 {this.props.asize}</h1>
      </div>
    )
  }
}

class Home extends Component{
  state ={
    color:'blue',
    size:100
  }
  render(){
    return(
      <div>
        <HomeTop acolor={this.state.color} asize={this.state.size}></HomeTop>
        {/* <HomeTop {...this.state}></HomeTop> */}

      </div>
    )
  }
}
ReactDOM.render(<Home/>,document.getElementById('root'))