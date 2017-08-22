import React, {Component} from 'react';
import logo from '../img/logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from 'material-ui/Drawer';

import Menu from '../components/Menu/'

const styles = {
  marginLeft: {
    marginLeft: 'auto',
  },
  img:{
    height: 40
  }
};

class Header extends Component {
  state = {
    open: {right: false}
  };

  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({open: drawerState});
  };

  handleRightOpen  = () => this.toggleDrawer('right', true);
  handleRightClose = () => this.toggleDrawer('right', false);

  render() {
    const classes = this.props.classes;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            <img src={logo} className={classes.img} alt="logo"/>
          </Typography>
          <IconButton color="contrast" aria-label="Menu" className={classes.marginLeft} onClick={this.handleRightOpen}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer anchor="right" open={this.state.open.right} onRequestClose={this.handleRightClose} onClick={this.handleRightClose}>
          <Menu />
        </Drawer>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
