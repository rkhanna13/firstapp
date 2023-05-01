import React, { PureComponent } from 'react'

 class purecomponent extends PureComponent {
  render() {
    console.log("***********purecomponent render************")
    return (
      <div>
        Pure component     {this.props.name}
    </div>
    )
  }
}

export default purecomponent
