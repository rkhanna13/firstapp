import React from 'react'
import './mystyle.css'
function stylesheet(props) {
  let classname = props.primary ? 'primary':''
  return (
    <div>
      {/* <h1 className='primary'>stylesheet</h1> */}

      {/* --------------------------------------------------------------------- */}

      {/* here using classname as a props  */}
      {/* <h1 className={classname}>stylesheet</h1> */}

      {/* ------------------------------------------------------------------------------ */}
      {/* now we can use template literals */}
      <h1 className={`${classname} font-xl `}>stylesheet</h1>

      {/* ----------------------------------------------------------------------------------- */}
    </div>
  )
}

export default stylesheet
