import React, {Component} from 'react';

import '../styles/App.css';

import Catalog from './Catalog'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Catalog />
      </div>
    );
  }
}

export default App;
