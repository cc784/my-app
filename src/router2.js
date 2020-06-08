import React from 'react';
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
          <Route  component={User} path="/user" ></Route>
          <Route exact component={About} path="/about" ></Route>
        </section>
      </Router>
    </div>
  );
}

const Home = () => <div>首页的内容</div>

/* 
路由嵌套
1 肯定先满足 第一层的路由 /user
2 再去满足   第二层的路由 /user/detail
 */
const User = () => <div>
  <h2>用户的内容</h2>
  <ul>
    <li><Link to="/user/1"  >小明</Link></li>
    <li><Link to="/user/2"  >小红</Link></li>
    <li><Link to="/user/3"  >小黄</Link></li>
    <li><Link to="/user/4"  >小黑</Link></li>
    <li><Link to="/user/5"  >小白</Link></li>
  </ul>
  <div>
    <h3>用户的详情</h3>
    {/* react、的路由内做一个约定 :id =>  1 2 3 4 55555     */}
    <Route path="/user/:id"  component={UserDetail} ></Route>
  </div>
</div>

const UserDetail=()=><div>xxx用户的详情</div>

const About = () => <div>关于的内容</div>


export default App;
