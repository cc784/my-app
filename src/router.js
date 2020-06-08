import React, { Component } from 'react';
// 1 引入 路由 
import { HashRouter , Route, Link } from "react-router-dom";

//
class App extends Component{
  render(){
    return(
      <div>
        {/* 使用哈希将所有路由小组件包裹起来 */}
        <HashRouter>
        {/* 3.路由链接 */}
        <nav>
          <Link to="/">首页</Link>
          <Link to="/user">用户</Link>
          <Link to="/about">关于</Link>
        </nav>
        {/* 4.路由内容 */}
        <section>
          <Route path="/"  exact component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/about" component={About}></Route>
        </section>
        </HashRouter>
      </div>
    )
  }
}
// 5.页面内容
const Home =() =><div>首页的内容</div>
const User =() =><div>首页的内容2</div>
const About =() =><div>首页的内容3</div>
// function Home(){
//   return<h1>Home</h1>
// }
// function User(){
//   return<h1>User</h1>
// }
// function About(){
//   return<h1>About</h1>
// }

export default App;