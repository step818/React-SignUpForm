import React, { Component } from 'react';

import classes from './Success.css';

export class Success extends Component {
  render() {
    return (
      <div className={classes.Success}>
        <p>Success!</p>
        <p>Check your email soon for what to expect next.</p>
      </div>
    );
  }
}

export default Success;
