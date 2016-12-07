import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDG9H83lykRsu_KxgxZlizo5818FJt8C9I'

// create a new Component. This should produce HTML
// Take this component's generated HTML and put it on the page
const App = () => {
  return <div>
    <SearchBar />
  </div>;
}


ReactDOM.render(<App />, document.querySelector('.container'));
