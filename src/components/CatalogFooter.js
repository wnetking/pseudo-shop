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
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Badge className={classes.badge} badgeContent={props.data.count} color="primary">
        All Products Count
      </Badge>
      <Typography component="p" className={classes.badge}>
        Average price: <span>{props.data.averagePrice.toFixed(2)}$</span>
      </Typography>
      <Typography component="p" className={classes.badge}>
        Total price: <span>{props.data.totalPrice}$</span>
      </Typography>
      <Button dense color="primary" onClick={props.onDelete} className={classes.btn}>
        Delete All
      </Button>
    </div>
  );
}

CatalogFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CatalogFooter);