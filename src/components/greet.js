import React from 'react'

//   function greet(){
//     return <h1>Hello roshan</h1>
//   }


// we can also write as a function


 const greet =(props)=>{
 console.log(props);
 return (
    <div>
 <h1>
    Hello {props.name} a.k.a {props.heroname}
  </h1>
  {props.children}
  </div>
 )
 }
  export default greet
