import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root : {
    display        : 'flex',
    marginTop      : 30,
    marginBottom   : 30,
    padding        : '20px 15px',
    width          : '100%',
    backgroundColor: "#fff",
    boxSizing      : 'border-box'
  },
  btn  : {
    marginLeft: "auto"
  },
  badge: {
    margin      : `0 ${theme.spacing.unit * 2}px`,
    paddingRight: 15,
    alignSelf   : 'center'
  }
});

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
        Average price: <span>{averagePrice.toFixed(2)}$</span>
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