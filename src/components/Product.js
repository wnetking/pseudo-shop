import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card : {
    maxWidth: 345,
  },
  media: {
    height: 250
  },
  price: {
    marginLeft : 'auto',
    marginRight: '15px',
    fontWeight : '700'
  }
};

function Product(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.data.img} title={props.data.name}/>
        <CardContent>
          <Typography type="headline" component="h2">
            {props.data.name}
          </Typography>
          <Typography component="p">
            {props.data.desc}
          </Typography>
        </CardContent>
        <CardActions>
          {props.admin ?
            <Button dense color="primary" onClick={props.onDelete.bind(null, props.data.id)}>
              delete
            </Button>
            :
            null
          }
          <Typography component="p" className={classes.price}>
            {props.data.price}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);