import React, { Component } from 'react';

const API_KEY = 'AIzaSyDG9H83lykRsu_KxgxZlizo5818FJt8C9I'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render () {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
