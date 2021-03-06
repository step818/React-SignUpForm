import React, { Component } from 'react';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './AboutYou.css';

class AboutYou extends Component {
	state = {
		stepOneForm: {
			firstName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'First Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			lastName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Last Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			emailAddress: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Email Address'
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
			}
		},
		formIsValid: false
	}
// Use this to pass props from child to parent
	stepOneHandler = (e) => {
		e.preventDefault();
		
	}

	handleChange = (e, formElement) => {
		const updatedStepOneForm = {
			...this.state.stepOneForm
		};
		const updatedFormElement = {
			...updatedStepOneForm[formElement]
		};
		updatedFormElement.value = e.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement, 
		updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedStepOneForm[formElement] = updatedFormElement;
		// check to see if the step is valid
		let updatedFormIsValid = true;
		for (let formElement in updatedStepOneForm) {
			updatedFormIsValid = updatedStepOneForm[formElement].valid && updatedFormIsValid;
		}
		this.setState({stepOneForm: updatedStepOneForm, formIsValid: updatedFormIsValid});
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
	
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
// pass state as props in each continue method
		console.log("stepOneHandler");
		const formData = {};
		for (let formElementIdentifier in this.state.stepOneForm) {
			formData[formElementIdentifier] = this.state.stepOneForm[formElementIdentifier].value;
		}
		this.props.formHandler(formData, 1);
	}
	render() {
		const formElementsArray = [];
		// for each array within stepOneForm array
		// push an id and tag element(config) to be able to  access other info
		for (let key in this.state.stepOneForm) {
			formElementsArray.push({
				id: key,
				config: this.state.stepOneForm[key]
			});
		}
		// 
		let form = (
			<form onSubmit={this.stepOneHandler}>
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
						changed={(e) => this.handleChange(e, formElement.id)} />
				))}
				<Button btnType="Success"  disabled={!this.state.formIsValid} clicked={this.continue}>Next</Button>
			</form>
		);

		return(
			<Auxillary>
				<div className={classes.AboutYou}>
					<p>Tell us about your self</p>
					<div className={classes.Form}>
						{form}
					</div>
				
				</div>
			</Auxillary>
		);
	}
}

export default AboutYou;