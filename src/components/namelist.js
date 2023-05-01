import React ,{Component} from 'react'

  function namelist() {
    const names =['roshan'," ", 'raju',' ','ganesh',' ','piyush']
    const namelist =   names.map(name => <h2>{names}</h2>)
      return <div>{namelist}</div>
      {/* <h2>{name[0]}</h2> */}
      {/* <h2>{name[1]}</h2> */} 
}
export default namelist