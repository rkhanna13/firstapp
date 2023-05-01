import React, { Component } from 'react'

 class input extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    
      
    }
    focusinput(){
        this.inputRef.current.focus() 
        //here focus will focus the input element 
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} / >
      </div>
    )
  }
}

export default input
