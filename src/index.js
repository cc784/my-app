import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      inpValue:'',
      isChecked:''
    }
    this.inp =React.createRef();
  }
  handleClick(){
    this.inp.current.focus();
  }
  handleChangeValue(e){
    this.setState({
      inpValue: e.currentTarget.value
    })
  }
 
  render(){
    return(
      <div>
        <input type='text' ref={this.inp}></input>
        <button onClick={this.handleClick.bind(this)}>设置获取焦点</button>
        <input type='text' value={this.state.inpValue} onChange={this.handleChangeValue.bind(this)}></input>
        {this.state.inpValue}
    
      </div>
    )
  }
}

ReactDOM.render(<App/> , document.getElementById('root'))