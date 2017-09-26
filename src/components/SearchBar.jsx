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
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ e => this.onInputChange(e.target.value) } />
      </div>
    );
  }
  /**
   * onInputChange
   * @param {*} e 
   */
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;