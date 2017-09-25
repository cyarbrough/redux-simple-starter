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
    return (
      <div>
        <input onChange={ (e) => this.onInputChange(e) } />
      </div>
    );
  }
  /**
   * onInputChange
   * @param {*} e 
   */
  onInputChange(e) {
    this.setState({ term: e.target.value });
  }
}

export default SearchBar;