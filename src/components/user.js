import React, { Component } from 'react'

 class user extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin:false

      }
    }
    
  render() {

    // -----------------fourth approach(short circuit method)------------

     return this.state.isloggedin && <div>welcome roshan</div>
     // if its true then it shown welcome roshan if it's false then its
    //  show nothing in the screen



    // -----------------third approach-----------------------ternary

    return(
      this.state.isloggedin ?
      <div>welcome roshan</div> :
      <div>welcome guest</div>
    )





    // -----------------second approach------------------------
    let message  // store the element which isgoing to be rendered
    if(this.state.isloggedin){
      message =<div>welcome roshan</div>
    }else{
      message= <div>welcome guest</div>
    }

    return <div>{message}</div>
    // this is called the element variable approach




    //--------------first approach--------------------
    
    // if(this.state.isloggedin){
    //     return 
    //         <div>welcome roshan</div>
    // }   else{
    //       return
    //         <div> Welcome guest</div>
    //     }
    }
   
     

  }


export default user
