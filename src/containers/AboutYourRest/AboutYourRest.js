import React, { Component } from 'react';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './AboutYourRest.css';

class AboutYourRest extends Component {
	state = {
		stepTwoForm: {
			restaurantName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Restaurant Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			phoneNumber: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Phone Number'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			deliveryHours: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Delivery Hours (ie. Mon 10am - 10pm)'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			city: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'City'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			stateProvince: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'State / Province'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Zip / Postal Code'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			}
		},
		formisValid: false
	}
	handleChange = (e, formElement) => {
		const updatedStepTwoForm = {
			...this.state.stepTwoForm
		};
		const updatedFormElement = {
			...updatedStepTwoForm[formElement]
		};
		// 
		updatedFormElement.value = e.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement, 
		updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedStepTwoForm[formElement] = updatedFormElement;
		// check to see if the step is valid
		let updatedFormIsValid = true;
		for (let formElement in updatedStepTwoForm) {
			updatedFormIsValid = updatedStepTwoForm[formElement].valid && updatedFormIsValid;
		}
		this.setState({stepTwoForm: updatedStepTwoForm, formIsValid: updatedFormIsValid});
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
	//
	previous = e => {
		e.preventDefault();
		this.props.prevStep();
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
// pass state as props in each continue method
		console.log("stepTwoHandler");
		const formData = {};
		for (let formElementIdentifier in this.state.stepTwoForm) {
			formData[formElementIdentifier] = this.state.stepTwoForm[formElementIdentifier].value;
		}
		this.props.formHandler(formData, 2);
	}

	render() {
		const formElementsArray = [];
		for (let key in this.state.stepTwoForm) {
			formElementsArray.push({
				id: key,
				config: this.state.stepTwoForm[key]
			});
		}
		let form = (
			<form onSubmit={this.stepTwoHandler}>
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
				<div className={classes.AboutYourRest}>
					<p>Tell us about your restaurant</p>
					{form}
				</div>
			</Auxillary>
		);
	}
}

export default AboutYourRest;