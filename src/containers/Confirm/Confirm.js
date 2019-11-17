import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import classes from './Confirm.css';

export class Confirm extends Component {
	state = {
		stepSevenForm: {
			agreed: {
				elementType: 'checkbox',
				elementConfig: {
					type: 'checkbox'
				},
				value: 'agreed',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			}
		},
		formIsValid: false
	}

	handleChange = (e, formElement) => {
		const updatedStepSevenForm = {
			...this.state.stepSevenForm
		};
		const updatedFormElement = {
			...updatedStepSevenForm[formElement]
		};
		// 
		console.log("updatedFormElement.value: ", updatedFormElement.value);
		updatedFormElement.valid = this.checkValidity(updatedFormElement, 
		updatedFormElement.validation);
		if (updatedFormElement.valid === true) {
			updatedFormElement.value = "not agreed";
			updatedFormElement.touched = true;
		}
		else if (updatedFormElement.valid === false) {
			updatedFormElement.value = ' agreed';
			updatedFormElement.touched = false;
		}
		updatedStepSevenForm[formElement] = updatedFormElement;
		// check to see if the step is valid
		let updatedFormIsValid = true;
		for (let formElement in updatedStepSevenForm) {
			updatedFormIsValid = updatedStepSevenForm[formElement].valid && updatedFormIsValid;
		}
		this.setState({stepSevenForm: updatedStepSevenForm, formIsValid: updatedFormIsValid});
	}

	// Check user follows rules of each input
	checkValidity = (value, rules) => {
		let isValid = true;
		if (rules.required) {
			if (value.value === 'not agreed') {
				value.touched = false;
				isValid = false;
			}
			else if (value.value === ' agreed') {
				isValid = true;
			}
			return isValid;
		}
		if (rules.minLength) {
			isValid = (value.value.length >= rules.minLength) && isValid;
		}
		if (rules.maxLength) {
			isValid = (value.value.length <= rules.maxLength) && isValid;
				}
		return isValid;
	}

	//
	previous = e => {
		e.preventDefault();
		this.props.prevStep();
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
// pass state as props in each continue method
		console.log("stepSevenHandler");
		const formData = {};
		for (let formElementIdentifier in this.state.stepOneForm) {
			formData[formElementIdentifier] = this.state.stepOneForm[formElementIdentifier].value;
		}
		this.props.formHandler(formData);
	}

	render() {
		const formElementsArray = [];
		for (let key in this.state.stepSevenForm) {
			formElementsArray.push({
				id: key,
				config: this.state.stepSevenForm[key]
			});
		}
		let form = (
			<form onSubmit={this.stepSevenHandler}>
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
						changed={(e) => this.handleChange(e, formElement.id)}/>
				))}
				<Button btnType="Danger" clicked={this.previous}>Back</Button>
				<Button btnType="Success" disabled={!this.state.formIsValid} onClick={this.stepSevenHandler} clicked={this.continue}>Next</Button>
			</form>
		);
		return (
			<Auxillary>
				<div className={classes.Confirm}>
					<p>Terms and conditions</p>
					<p>By checking the box, I agree to Terms and Conditions Agreement and Merchant Terms of Use</p>
					{form}
				</div>
			</Auxillary>
		)
	}
}

export default Confirm;
