import React, { Component } from 'react'

 class classclick extends Component {
    clickHandler(){
        console.log("clicked button");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>clickMe</button>
      </div>
    )
  }
}

export default classclick
