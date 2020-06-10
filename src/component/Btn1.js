import React, { Component } from 'react';
import {connect  } from "react-redux";
import { cartNumAdd,initNumAction} from "../store/actionCreator";
import axios from 'axios';
class Btn1 extends Component{
    handleClick= (unit) =>{
        this.props.addNum(unit);
        // console.log(props)
    }
  //生命周期 组件挂再完毕
    componentDidMount() {
      this.props.initNum();
      // axios.get("http://157.122.54.189:9060/home/swiper")
      // .then(res => {
      //   const num = res.data.body.length;
      //   console.log(num)
      //   this.props.initNum(num);
      // })
    }

    render(){
        console.log(this.props.btnNum)
       
        return(
           <div>
                {/* <button style={{backgroundColor:"red" }}  onClick={this.handleClick}>Btn1</button> */}
                <button onClick={()=>this.handleClick(1)} >Btn1-{this.props.btnNum}</button>
               {this.props.btnNum}
           </div>
        );
    }
}

// 
const mapStateToProps =(state) =>{
    return{
        btnNum:state.cartReducer.num 
    }
}

//派发通知
const mapDispathToProps = (dispatch) => {
  return {
    initNum: function (num){
      dispatch(initNumAction(num))
    }
  }
}


  //
const mapDispatchToProps = (dispatch) => {
    return {
      addNum: function (unit) {
        // 触发 addNum的时候  这个函数将会 把 通知 告诉到管理员中
        // 只要出现了dispatch => 肯定会去到管理员内的一个函数中 
        dispatch(cartNumAdd(unit) );
      },
      initNum(){
        dispatch(initNumAction())
      }
    }
  }
const connFunc = connect(mapStateToProps,mapDispatchToProps,);

export default connFunc(Btn1);