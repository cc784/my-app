import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  constructor(){
    super();
    this.inp =React.createRef();
  }
  handleClick(){
    this.inp.current.focus();
  }
  render(){
    return(
      <div>
        <input type='text' ref={this.inp}></input>
        <button onClick={this.handleClick.bind(this)}>设置获取焦点</button>
      </div>
    )
  }
}

ReactDOM.render(<App/> , document.getElementById('root'))