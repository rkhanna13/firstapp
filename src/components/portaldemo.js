import React from 'react'
import  ReactDOM  from 'react-dom'

function portaldemo() {
    //here in createportal we have to pass 2 paramter first is the heading here and second 
    // one is dom node to mount the element on to .
  return ReactDOM.createPortal ( 
    <h1>
      Portals demo
    </h1>,
    
    document.getElementById('portal-root')
  )
}

export default portaldemo
