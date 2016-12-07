import React, { Component } from 'react';

const API_KEY = 'AIzaSyDG9H83lykRsu_KxgxZlizo5818FJt8C9I'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  
  render () {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}


export default SearchBar;
