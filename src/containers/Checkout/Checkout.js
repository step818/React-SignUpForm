import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Checkout.css';

export class Checkout extends Component {
  state = {

  }

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <div className={classes.Checkout}>
        <p>Getting paid</p>
      </div>
    )
  }
}

export default Checkout;
