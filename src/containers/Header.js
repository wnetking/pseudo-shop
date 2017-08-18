import React, {Component} from 'react';
import logo from '../img/logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu'

const styles = {
  root      : {
    marginTop: 30,
    width    : '100%',
  },
  marginLeft: {
    marginLeft: 'auto',
  },
};

class Header extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            <img src={logo} className="App-logo" alt="logo"/>
          </Typography>
          <IconButton color="contrast" aria-label="Menu" className={classes.marginLeft}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
