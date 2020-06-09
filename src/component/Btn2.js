import React, { Component, Fragment } from 'react';
import {connect  } from "react-redux";

class Btn1 extends Component{
    
    render(){
        // console.log(this.props.btnNum)
        
        return(
            
           <div>
                <button style={{backgroundColor:"red" }}>Btn1</button>
               {this.props.btnDate}
           </div>
        );
    }
}

// 
const mapStateToProps =(state) =>{
    return{
        btnNum:state.cartReducer.num ,
        btnDate:state.cartReducer.date
    }
}

const connFunc=connect(mapStateToProps);
export default connFunc(Btn1);