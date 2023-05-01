import React, { Component } from 'react'

 class lifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'roshan'
      }
      console.log("lifecycle B constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleB getderivedstatefromprops')
        return null
    }
    componentDidMount(){
        console.log("lifecycleB componentdidmount")
    }
    shouldComponentUpdate(){
      console.log("lifecycleB should componentupdate")
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("lifecycleB getsnapshotbeforeupdate")
      return null
    }
    componentDidUpdate(){
      console.log("componentdidupdate lifecycleB")
    }
    
    
  render() {
    console.log('lifecycleB rendered method')
    return <div>lifecycleB</div>
  }
}

export default lifecycleB
