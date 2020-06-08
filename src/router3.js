import React,{Component} from 'react';
import "./App.css";

import { HashRouter as Router, Link, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" >首页</Link>
          <Link to="/user">用户</Link>
          <Link to="/about" >关于</Link>
        </nav>
        <section>
          <Route exact component={Home} path="/" ></Route>
          <Route component={User} path="/user" ></Route>
          <Route exact component={About} path="/about" ></Route>
        </section>
      </Router>
    </div>
  );
}

const Home = () => <div>首页的内容</div>


class User extends Component {
  state = {
    list: [
      { text: "小明", id: 1 },
      { text: "小红", id: 2 },
      { text: "小黄", id: 3 },
      { text: "小黑", id: 4 },
      { text: "小白", id: 5 }
    ]
  }

  handleClick=(id)=>{
    // 关于路由的一些对象 全部都被存放在 this.props里面了！！
    // console.log(this.props);
    // history => 实现 路由跳转
    // location => 原生的js中 location
    // match 可以更好的获取 页面的 参数 
    // console.log(this.props);

    this.props.history.push("/user/"+id);
  }
  render() {
    return (
      <div>
        <h2>用户的内容</h2>
        <ul>
          {this.state.list.map(v => <li key={v.id} onClick={()=>this.handleClick(v.id)} ><button>{v.text}</button></li>)}
        </ul>
        <div>
          <h3>用户的详情</h3>
          <Route path="/user/:id" component={UserDetail} ></Route>
        </div>
      </div>
    );
  }
}



// 函数式组件 需要在 函数的形参中 获取 props 
const UserDetail = (props) =>{
  console.log(props);
return  <div>{props.match.params.id}用户的详情</div>
}

const About = () => <div>关于的内容</div>


export default App;
