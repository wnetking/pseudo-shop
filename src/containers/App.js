import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import '../styles/App.css';

import Catalog from './Catalog'
import Header from './Header'
import CreateProduct from './CreateProduct'
import Forbidden from '../components/Forbidden'
import CatalogFooter from '../components/CatalogFooter'

import * as mainActions from '../actions'

class App extends Component {
  state = {
    admin: true
  }

  componentDidMount() {
    let {fetchProductsAction} = this.props.mainActions
    fetchProductsAction();
  }

  render() {
    let {products, fetching} = this.props;
    let {
          deleteProductAction,
          deleteAllProductAction,
          addProductAction
        } = this.props.mainActions;

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => ( 
            <Catalog admin={this.state.admin} products={products} fetching={fetching}
             deleteProductAction={deleteProductAction}
             deleteAllProductAction={deleteAllProductAction} />
          )}/>
          <Route path="/create-product" render={() => (
            <CreateProduct addProductAction={addProductAction}
             admin={this.state.admin}/>
          )}/>
          <Route path="/forbidden" component={Forbidden}/>
          <CatalogFooter products={products}
           onDelete={deleteAllProductAction}
           admin={this.state.admin}/>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
