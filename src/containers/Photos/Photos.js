import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Input/Input';
import classes from './Photos.css';

export class Photos extends Component {
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
    // Assign each element in the form array an id and config
    let form = {
      
    }
    return (
      <div className={classes.Photos}>
        <p>Add photos to your TableFlash menu</p>
        {form}
      </div>
    )
  }
}

export default Photos;
