import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
//import logo from './logo.svg';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
