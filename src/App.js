import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';
import Denemehooks from './components/Denemehooks';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Denemehooks />
        <hr />
        <AddUser />
        <Users />
      </div>
    );
  }
}
export default App;
