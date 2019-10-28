import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default App;
