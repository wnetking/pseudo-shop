import React from 'react';
import List, { ListItem } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'


const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
  li: {
    minWidth: 300,
    padding: 0
  },
  a: {
    display: 'block',
    width: '100%',
    padding: '10px 40px',
    textDecoration: 'none',
    color: '#000'
  }
};


function Menu(props) {
  return (
    <div>
      <List>
        <ListItem button className={props.classes.li}>
          <Link to="/" className={props.classes.a}>Catalog</Link>
        </ListItem>
        <ListItem button className={props.classes.li}>
          <Link to="/create-product" className={props.classes.a}>Create</Link>
        </ListItem>
      </List>
    </div>
  )
}

export default withStyles(styles)(Menu);