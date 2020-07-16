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

  render() {
    return (
      <>
        <h1>This is Our bagels App</h1>
        <Form />
        <BagelsContainer bagels={this.state.bagels} />
      </>
    );
  }
}

export default App;
