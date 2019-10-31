import React, { Component } from 'react';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './AboutYou.css';

class AboutYou extends Component {
	state = {
		personalInfo: {
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
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}
	inputChanged = (e, inputIdentifier) => {
		e.preventDefault();
		this.props.inputChangedHandler(e, inputIdentifier);
	}

	//
	stepOneHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for (let formElementIdentifier in this.state.personalInfo) {
			formData[formElementIdentifier] = this.state.personalInfo[formElementIdentifier].value;
		}
	}
	// Passes props to form page indicating input is being changed and validity should always be checked
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedStepOneForm = {
			...this.state.personalInfo
		};
		const updatedFormElement = {
			...updatedStepOneForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedStepOneForm[inputIdentifier] = updatedFormElement;
		let updatedFormIsValid = true;
		for (let inputIdentifier in updatedStepOneForm) {
			updatedFormIsValid = updatedStepOneForm[inputIdentifier].valid && updatedFormIsValid;
		}
		this.setState({personalInfo: updatedStepOneForm, formIsValid: updatedFormIsValid});
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

	render() {
		const formElementsArray = [];
		for (let key in this.state.personalInfo) {
			formElementsArray.push({
				id: key,
				config: this.state.personalInfo[key]
			});
		}
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
						changed={(event) => this.inputChangedHandler(event, formElement.id)} />
				))}
				<Button btnType="Success" disabled={!this.state.formIsValid}  clicked={this.continue}>Next</Button>
			</form>
		);

		return(
			<Auxillary>
				<div className={classes.AboutYou}>
					<p>Tell us about your self</p>
					{form}
				</div>
			</Auxillary>
		);
	}
}

export default AboutYou;