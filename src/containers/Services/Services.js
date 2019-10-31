import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

export class Services extends Component {
  state = {
    serviceMethods: {
      elementType: 'select',
      elementConfig: {
          options: [
              {value: 'dineIn'},
              {value: 'takeOut'},
              {value: 'dineInAndTakeOut'}
          ]
      }
    }
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
    const formElementsArray = [];
    for (let key in this.state.serviceMethods) {
      formElementsArray.push({
        id: key,
        config: this.state.serviceMethods[key]
      });
    }
    let form = (
      <form>
        {formElementsArray.map}
      </form>
    )
    return (
      <div>
        <p>What TableFlash service would you like to use</p>
        {form}
      </div>
    )
  }
}

export default Services;
