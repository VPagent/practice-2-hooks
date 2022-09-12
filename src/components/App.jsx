import { Component } from 'react';

class App extends Component {

  render() {
    const currentContacts = this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter))
    return (
      <>
      
      </>
    );
  };
};

export default App;