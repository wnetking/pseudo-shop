import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import getRandomImg from '../utils/getRandomImg'

const styles = theme => ({
  container: {
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center'
  },
  textField: {
    marginLeft : theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width      : 300,
  },
  btnWrap  : {
    marginTop: 30
  }
});

class CreateProduct extends Component {
  state = {
    open   : false,
    message: null
  }

  snackbarOpen = (message) => {
    this.setState({open: true, message: message});
  }

  snackbarRequestClose = () => {
    this.setState({open: false});
  }

  clearForm = () => {
    document.getElementById('name').value        = '';
    document.getElementById('price').value       = '';
    document.getElementById('description').value = '';
  }

  onSave = () => {
    let name        = document.getElementById('name').value,
        price       = document.getElementById('price').value,
        description = document.getElementById('description').value,
        data        = {
          id   : Math.floor(Math.random() * 1e6),
          name : name,
          img  : getRandomImg(),
          price: `${price}$`,
          desc : description
        }

    if (name === '' || price === '' || description === '') {
      this.snackbarOpen('All fills is  required');
      return;
    }

    this.props.addProductAction(data);

    this.snackbarOpen(`${data.name} was saved!`);

    this.clearForm();
  }

  render() {
    const classes = this.props.classes;

    if (!this.props.admin) {
      return (
        <Redirect to='/forbidden'/>
      )
    }

    return (
      <div className={classes.container}>
        <h2>Create product</h2>
        <TextField id="name" label="Product name" className={classes.textField} margin="normal"/>
        <TextField id="price" label="Product price" type="number" className={classes.textField} margin="normal"/>
        <TextField id="description" label="Product description" multiline rows="4" className={classes.textField} margin="normal"/>
        <div>
          <Button raised className={classes.btnWrap} onClick={this.onSave}>Save</Button>
        </div>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={this.state.open} autoHideDuration={6e3} onRequestClose={this.snackbarRequestClose} SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }} message={<span id="message-id">{this.state.message}</span>}/>
      </div>
    )
  }
}

CreateProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateProduct);
