import React,{Component} from "react";

class message extends Component{
    constructor(){
        super() // this is required because we extend react component 
        //class and call has to made to the base class constructor
        // and then we create our state object 
        this.state={
            message:'welcome visitors'
        }
    }
    changeMessage(){
        this.setState({
            message:"thank u for subscribing"
        })
    }
    render(){
        return(
            <div>
                  <h1>{this.state.message}</h1>
                  <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
          


        ) 
    }
}

export default message