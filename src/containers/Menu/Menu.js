import React, { Component } from 'react'

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

export class Menu extends Component {
  state = {
    menuInfo: {
      elementType: 'select',
      elementConfig: {
          options: [
              {value: 'link', displayValue: 'Link to Menu'},
              {value: 'file', displayValue: 'PDF, JPEG, or Photo upload'}
          ]
      },
      value: 'link',
      validation: {},
      valid: true
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
    const formElementsArray = [];
    for (let key in this.state.menuInfo) {
      formElementsArray.push({
        id: key,
        config: this.state.menuInfo[key]
      });
    }
    let form = (
      <form>
        {formElementsArray.map(formElement => (
          <Input
            valueType={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            key={formElement.id}
            touched={formElement.config.touched}
            shouldValidate={formElement.config.validation}
            invalid={!formElement.config.valid}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <Button btnType="Danger" clicked={this.previous}>Back</Button>
        <Button btnType="Success" clicked={this.continue}>Next</Button>
      </form>
    );
    return (
      <div>
        <p>Share your menu</p>
        {form}
      </div>
    )
  }
}

export default Menu;
