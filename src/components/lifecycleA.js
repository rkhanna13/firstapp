import React, { Component } from 'react'
import lifecycleB from './lifecycleB';

 class lifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'roshan'
      }
      console.log("lifecycle A constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getderivedstatefromprops')
        return null
    }
    componentDidMount(){
        console.log("lifecycleA componentdidmount")
    }
    shouldComponentUpdate(){
      console.log("lifecycleA should componentupdate")
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("lifecycle a getsnapshotbeforeupdate")
      return null
    }
    componentDidUpdate(){
      console.log("componentdidupdate lifecycleA")
    }
    changeState=()=>{
      this.setState({
        name:'padhloab'
      })
    }
    
  render() {
    console.log('lifecycleA rendered method')
    return(
        <div>
            <div>lifecycleA </div>
            <button onClick={this.changeState}>changestate</button>
            <lifecycleB />
        </div>
    ) 
  }
}

export default lifecycleA
