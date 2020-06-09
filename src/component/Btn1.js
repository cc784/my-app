import React, { Component, Fragment } from 'react';
import {connect  } from "react-redux";

class Btn1 extends Component{
    handleClick= () =>{
        this.props.addNum();
        // console.log(props)
    }
    render(){
        console.log(this.props.btnNum)
       
        return(
           <div>
                <button style={{backgroundColor:"red" }}  onClick={this.handleClick}>Btn1</button>
               {this.props.btnNum}
           </div>
        );
    }
}

// 
const mapStateToProps =(state) =>{
    return{
        btnNum:state.num 
    }
}

//
const mapDispatchToProps = (dispatch) => {
    return {
      addNum: function () {
        dispatch(
          {
            type: "add",
            unit: 1
          }
        );
      }
    }
  }
const connFunc=connect(mapStateToProps,mapDispatchToProps);
export default connFunc(Btn1);