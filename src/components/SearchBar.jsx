import React, { Component } from 'react';

class SearchBar extends Component {
  /**
   * Constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  /**
   * Render
   */
  render() {
    return <input onChange={ this.onInputChange } />;
  }
  /**
   * onInputChange
   * @param {*} e 
   */
  onInputChange(e) {
    console.log(e.target.value);
  }
}

export default SearchBar;