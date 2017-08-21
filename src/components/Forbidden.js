import React from 'react'
import {Link} from 'react-router-dom'

import Button from 'material-ui/Button';


function Forbidden(props) {
  return (
    <div>
      <h2>Sorry, Insufficient permissions.</h2>
      <Button raised>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  )
}

export default Forbidden;