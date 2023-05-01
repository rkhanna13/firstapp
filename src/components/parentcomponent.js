import React, { Component } from 'react'
import Mycomponent11 from './childcomponent'

 class Mycomponent10 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent'
      }
      this.greetparent = this.greetparent.bind(this)
    }
    greetparent(childName){
        // alert('hello'+this.state.parentName)
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        <Mycomponent10 greetHandler={this.Mycomponent10} />
      </div>
    )
  }
}

export default Mycomponent10
