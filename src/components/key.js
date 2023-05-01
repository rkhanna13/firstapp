import React from 'react'

function key() {
    const ipls = ['csk',' ','mi',' ','gt',' ','csk']
// adding key inside the h1 tag
    const result = ipls.map((ipl ,index) => <h1 key={index}>{ipls} index is{index}</h1>)
  return (
    <div>
        <h1>{result}</h1>
      
    </div>
  )
}

export default key
