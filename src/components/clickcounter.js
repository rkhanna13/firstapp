import React, { Component } from 'react'
import updatedcomponent from './withcounter,'

 class clickcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementcount=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }
    
  render() {
    const {count}=this.state
    return (

        <button onClick={this.incrementcount}>
            {this.props.name}clickX-times{count}</button>
      
    )
  }
}

export default updatedcomponent (clickcounter)
