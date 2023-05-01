import React, { Component } from 'react'
import frinput from './frinput'
 class frparentinput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    clickhandler=()=>{
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <frinput ref={this.inputRef} />
        <button onClick={this.clickhandler}>focus input</button>
      </div>
    )
  }
}

export default frparentinput
