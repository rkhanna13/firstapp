import React, { Component } from 'react'

 class refsdemo extends Component {
    constructor(props) {
      super(props)
    //   create a ref by just mentioning the following code.
    this.inputRef = React.createRef()
    // using callback ref and we can write as cbRef


    this.cbRef = null
    this.setcbRef = element =>{
        this.cbRef = element
    }
    }
    componentDidMount(){

        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

    }
    clickhandler=()=>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setcbRef} />
        <button onClick={this.clickhandler}>click</button>
      </div>
    )
  }
}

export default refsdemo
