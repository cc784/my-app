import React ,{  Component } from 'react';
import ReactDOM from 'react-dom';


const Header = () => {
  return (
    <div>
      <h1 className="hh11">我没有变颜色哦</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="hh11">我变颜色啦</h1>
      <style jsx>{
        `
       .hh11{
         background-color:red;
       }
       `
      }
      </style>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'))