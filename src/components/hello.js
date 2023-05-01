import React from 'react'

const hello=()=>{
    // return (
    //     <h1>Hello roshan</h1>
    // )
    // this below method accept three parameters
    // the first paraameter is a string which specifies the html tag to be rendered
    // for eg - div tage to be rendered
    // the second parameter we get to pass ay optional properties we don;t have right
    // so we can pass their null
    // the third parameter is the children for the html element that is 
    // children for the div tag for eg - hello roshan we can pass this as a third 
    // parameter
    return React.createElement('div',{id:'hello' , className:'dummyclass'}
    ,null,
    React.createElement('h1',null,'Hello roshan'))


}
export default hello