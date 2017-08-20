import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import '../styles/App.css';

import Catalog from './Catalog'
import Header from './Header'
import CreateProduct from './CreateProduct'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Catalog} />
          <Route path="/create-product" component={CreateProduct} />
        </div>
      </Router>
    );
  }
}

export default App;
