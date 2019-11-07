import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Checkout.css';
import Auxillary from '../../hoc/Auxillary/Auxillary';

export class Checkout extends Component {
	state = {
		stepSixForm: {
			legalName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Legal/Business Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			einNumber: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'EIN Number(GST/HST Number for Canada)'
				},
				value: '',
				validation: {
					required: true,
					minLength: 9,
					maxLength: 9
				},
				valid: false,
				touched: false
			},
			routingNumber: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Routing Number(Transit Number)'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			accountNumber: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Account Number'
				},
				value: '',
				validation: {
					required: true,
					minLength: 10,
					maxLength: 12
				},
				valid: false,
				touched: false
			}
		},
		formIsValid: false
	}

	handleChange = (e, formElement) => {
		const updatedStepSixForm = {
			...this.state.stepSixForm
		};
		const updatedFormElement = {
			...updatedStepSixForm[formElement]
		};
		// 
		updatedFormElement.value = e.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement, 
		updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedStepSixForm[formElement] = updatedFormElement;
		// check to see if the step is valid
		let updatedFormIsValid = true;
		for (let formElement in updatedStepSixForm) {
			updatedFormIsValid = updatedStepSixForm[formElement].valid && updatedFormIsValid;
		}
		this.setState({stepSixForm: updatedStepSixForm, formIsValid: updatedFormIsValid});
	}

	// Check user follows rules of each input
	checkValidity = (value, rules) => {
		let isValid = true;
		if (rules.required) {
			isValid = value.value.trim() !== '' && isValid;
		}
		if (rules.minLength) {
			isValid = (value.value.length >= rules.minLength) && isValid;
		}
		if (rules.maxLength) {
			isValid = (value.value.length <= rules.maxLength) && isValid;
				}
		return isValid;
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
		for (let key in this.state.stepSixForm) {
			formElementsArray.push({
				id: key,
				config: this.state.stepSixForm[key]
			});
		}
		let form = (
			<form onSubmit={this.stepSixHandler}>
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
				<Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.continue}>Next</Button>
			</form>
		);
		return (
			<Auxillary>
				<div className={classes.Checkout}>
					<p>Getting paid</p>
					{form}
				</div>
			</Auxillary>
		);
	}
}

export default Checkout;
