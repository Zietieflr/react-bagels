import React from 'react';
import BagelsContainer from './Components/BagelsContainer'
import Form from './Components/Form'

class App extends React.Component {
  state = {
    bagels: ['bagel 1', 'bagel 2']
  }
  
  render() {
    return (
      <>
        <h1>This is Our bagels App</h1>
        <Form />
        <BagelsContainer />
      </>
    );
  }
}

export default App;
