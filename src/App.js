import React from 'react';
import BagelsContainer from './Components/BagelsContainer'
import Form from './Components/Form'

class App extends React.Component {
  state = {
    bagels: []
  }
  
  componentDidMount() {
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(result => this.setState({ bagels: result }))
  }

  submitBagel = bagel => {
    console.log('submitBagel', bagel)
    
    fetch('http://bagel-api-fis.herokuapp.com/bagels', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type:bagel})
    }).then(response => response.json())
      .then(bagel => this.setState({bagels: [...this.state.bagels, bagel]}))
  }

  updateOptimisticRender = () => {
    const newBagel = this.state.bagels.find(newBagel => {
      return this.state.bagels.name === newBagel.name && this.state.bagels.id === null
    })
  }

  deleteBagel = (bagel) => {
    const newBagels = this.state.bagels.filter(newBagel => {
      return newBagel !== bagel
    })
    this.setState({bagels: newBagels})
    fetch(`http://bagel-api-fis.herokuapp.com/bagels/${bagel.id}`, {
      method: 'DELETE',
    })
  }

  render() {
    return (
      <>
        <h1>This is Our bagels App</h1>
        <Form submitBagel={this.submitBagel} />
        <BagelsContainer bagels={this.state.bagels} deleteBagel={this.deleteBagel} />
      </>
    );
  }
}

export default App;
