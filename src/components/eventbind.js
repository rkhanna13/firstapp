import React, { Component } from 'react'

 class eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    }
    clickHandler(){
        this.setState({
            message:'goodbye!'
        })
        console.log(this);
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        <button onClick={()=> this.clickHandler()}>click</button>
      </div>
    )
  }
}

export default eventbind
