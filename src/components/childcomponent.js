import React from 'react'
// import Mycomponent10 from './childcomponent'
function Mycomponent11() {
  return (
    <div>
    <button onClick={() => this.props.greetHandler('child')}>Greet parent</button>
    </div>
  )
}

export default Mycomponent11
