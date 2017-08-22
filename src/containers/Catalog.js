import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {CircularProgress} from 'material-ui/Progress';

import Product from '../components/Product/'

class Catalog extends Component {
  render() {
    let {products, fetching, admin} = this.props;

    return (
      <div className="container mt-3">
        <Grid container spacing={24}>
          {!fetching ?
            products.map((item, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Product data={item}
                  onDelete={this.props.deleteProductAction}
                  admin={admin}/>
              </Grid>
            ))
            :
            <CircularProgress color="accent" className=""/>
          }
        </Grid>
      </div>
    );
  }
}

export default Catalog;
