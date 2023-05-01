import React, { Component } from 'react'
import updatedcomponent from './withcounter,'
 class hovercounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementcount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
    
  render() {
    const{count}=this.state
    
       return <h2 onMouseOver={this.incrementcount}>
        {this.props.name}Hovered {count} times</h2>
      
    
  }
}

export default updatedcomponent (hovercounter)
