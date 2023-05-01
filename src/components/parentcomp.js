import React, { Component, PureComponent } from 'react'
import Memocomp from './memocomp'

 class parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'roshan'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'roshan'
            })
        },2000)
    }
    
  render() {
    console.log("**************parent component render ***************")
    return (
      <div>
        parent component
        <Memocomp name={this.state.name} />
        {/* <regularcomp name={this.state.name}></regularcomp> */}
        {/* <PureComponent name={this.state.name}></PureComponent> */}
      </div>
    )
  }
}

export default parentcomp
