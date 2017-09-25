import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  render() {
    return (
      <div>API {API_KEY}</div>
    );
  }
}

export default App;
