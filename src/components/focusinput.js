import React, { Component } from 'react'

 class focusinput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    clickhandler(){
        this.componentRef.current.focusinput()
    }
  render() {
    return (
      <div>
        <input ref={this.componentRef} />
        <button onClick={this.clickhandler}>Focus input</button>
      </div>
    )
  }
}

export default focusinput
