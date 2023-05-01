import React, { Fragment } from 'react'

function fragments() {
  return (
    // instead of using div tage here we can use React.Fragment because to avoid additional div
    // tag which is include in the dom tree to avoid that we use fragments
    <React.Fragment> 
      <h1>Fragment Demos</h1>
      <p>This describes the fragment demo component</p>
    </React.Fragment>
  ) 
}

export default fragments
