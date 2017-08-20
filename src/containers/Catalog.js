import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

import Product from '../components/Product'
import CatalogFooter from '../components/CatalogFooter'

import { fetchProducts } from '../utils/fetchProducts'

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      preload: true
    };

    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleDeleteAllProduct = this.handleDeleteAllProduct.bind(this);
    this.getAditionalInfo = this.getAditionalInfo.bind(this);
  }

  componentDidMount() {
    fetchProducts().then((data) => {
      this.setState({ products: data, preload: false });
    })
  }

  handleDeleteProduct(id) {
    const filterProducts = this.state.products.filter((item) => {
      return id !== item.id;
    })

    this.setState({
      products: filterProducts
    })
  }

  handleDeleteAllProduct() {
    this.setState({
      products: []
    })
  }

  getAditionalInfo() {
    let { products } = this.state


    let getTotalPrice = () => {
      let total = 0;

      products.forEach((item) => {
        total += parseInt(item.price, 10)
      })

      return total;
    }

    return {
      count: products.length,
      totalPrice: getTotalPrice(),
      averagePrice: getTotalPrice() / products.length
    }
  }

  render() {
    let { products, preload } = this.state;
    return (
      <div className="container mt-3">
        <Grid container spacing={24}>
          {!preload ?
            products.map((item, index) => (
              <Grid item xs={6} sm={4} md={3}  key={index}>
                <Product data={item} onDelete={this.handleDeleteProduct} />
              </Grid>
            ))
            :
            <CircularProgress color="accent" className="" />
          }
        </Grid>
        {!preload && products.length ?
          <CatalogFooter data={this.getAditionalInfo()} onDelete={this.handleDeleteAllProduct} />
          : null
        }
      </div>
    );
  }
}

export default Catalog;
