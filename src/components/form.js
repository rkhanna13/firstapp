import React, { Component } from 'react'

 class form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'react'
      }
    }
    handleusernamechange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlecommentchange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handletopicchange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handlesubmit= event=>{
        alert(`${this.state.username} ${this.state.comment}${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div>

        <label>Username</label>
        <input type='text'  value={this.state.username}
         onChange={this.handleusernamechange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment}
            onChange={this.handlecommentchange} ></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic}
            onChange={this.handletopicchange}></select>
            <select>
                <option value="react">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <button>Submit</button>


      </form>
    )
  }
}

export default form
