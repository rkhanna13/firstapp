import React from 'react'

function memocomp({name}) {
    console.log("rendering memo component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(memocomp)
