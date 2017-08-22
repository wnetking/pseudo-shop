import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {styles} from './styles'


function CatalogFooter(props) {
  const getAdditionalInfo = () => {
    let {products} = props

    let getTotalPrice = () => {
      let total = 0;

      products.forEach((item) => {
        total += parseInt(item.price, 10)
      })

      return total;
    }

    return {
      count       : products.length,
      totalPrice  : getTotalPrice(),
      averagePrice: getTotalPrice() / products.length
    }
  }

  const classes = props.classes;
  let {count, totalPrice, averagePrice} = getAdditionalInfo();

  return (
    <div className={classes.root}>
      <Badge className={classes.badge} badgeContent={count} color="primary">
        All Products Count
      </Badge>
      <Typography component="p" className={classes.badge}>
        Average price: <span>{!isNaN(averagePrice) ? averagePrice.toFixed(2) : 0}$</span>
      </Typography>
      <Typography component="p" className={classes.badge}>
        Total price: <span>{totalPrice}$</span>
      </Typography>
      {props.admin ?
        <Button dense color="primary" onClick={props.onDelete} className={classes.btn}>
          Delete All
        </Button>
        :
        null
      }
    </div>
  );
}

CatalogFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CatalogFooter);