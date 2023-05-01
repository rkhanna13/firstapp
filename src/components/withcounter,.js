import React from "react";

const updatedcomponent = originalcomponent=>{
    class Newcomponent extends React.Component{
        render(){
            return<originalcomponent name='roshan'/ >
        }
    }
    return Newcomponent
}
export default updatedcomponent