import React, { Component } from 'react'

const initialState = {
  bagel: ''
}

class Form extends Component {
  
  state = initialState

  handleSubmit(event) {
    event.preventDefault()
    this.props.submitBagel(this.state.bagel)
    this.setState(initialState)
  }

  handleUserBagel(event) {
    this.setState({
      bagel: event.target.value 
    })
  }

  render() {
    return(
      <>
        <h3>This is the Form</h3>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <input name='bagel' value={this.state.bagel} onChange={event => this.handleUserBagel(event)} />
          <button type='submit' >Submit</button>
        </form>
      </>
    )
  }
}

export default Form