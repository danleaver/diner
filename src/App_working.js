import React, { Component } from 'react';
import DinerList from './components/diners/DinerList';
import DinerForm from './components/diners/DinerForm';
class App extends Component {
  state = { diners: [
    {id: 1, name: 'I dont care', address: '123 street', hours: 'Mon-Fri 10am-2pm'},
    {id: 2, name: 'Eggciting', address: '321 street', hours: 'Mon-Fri 6am-12pm'},
    {id: 3, name: "Henry's Place", address: '123 street', hours: 'Mon-Fri 10am-2pm'},
  ] }
  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  addDiner = (incomingDiner) => {
    const { diners } = this.state
    let newDiner = { id: this.getId(), ...incomingDiner }
    this.setState({ diners: [newDiner, ...diners] })
  }
  render() {
    const { diners } = this.state 
    // const diners = this.state.diners
    return(
      <div>
        <DinerForm addDiner={this.addDiner} />
        <DinerList diners={this.state.diners} />
      </div>
    )
  }
}
export default App;