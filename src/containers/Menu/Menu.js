import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Menu.css';

export class Menu extends Component {
	state = {
		stepThreeForm: {
			menuMethods: {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'link', displayValue: 'Link to Menu'},
						{value: 'file', displayValue: 'Upload file'}
					]
				},
				value: 'link',
				validation: {
					
				},
				valid: true,
				touched: false
			},
			linkMethod: {
				elementType: 'input',
				elementConfig: {
					type: 'url',
					placeholder: 'http://www.menu-example.com'
				},
				value: '',
				validation: {},
				valid: false,
				touched: false
			},
			fileMethod: {
				elementType: 'file',
				elementConfig: {
					type: 'hidden',
				},
				value: '',
				validation: {},
				valid: true,
				touched: true
			}
		},
		formIsValid: false
	}

	handleChange = (e, formElement) => {
	const updatedStepThreeForm = {
		...this.state.stepThreeForm
	};
	const updatedFormElement = {
		...updatedStepThreeForm[formElement]
	};
	// 
	updatedFormElement.value = e.target.value;
	// Hide file input unless user has chosen "file"
	if (updatedFormElement.value === 'file') {
		updatedStepThreeForm.fileMethod.elementConfig.type = "file";
	}
	else if (updatedFormElement.value === 'link'){
		updatedStepThreeForm.fileMethod.elementConfig.type = "hidden";
		updatedStepThreeForm.fileMethod.valid = true;
		updatedStepThreeForm.fileMethod.touched = true;
	}
	updatedFormElement.valid = this.checkValidity(updatedFormElement, 
	updatedFormElement.validation);
	updatedFormElement.touched = true;
	updatedStepThreeForm[formElement] = updatedFormElement;
	// check to see if the step is valid
	let updatedFormIsValid = true;
	for (let formElement in updatedStepThreeForm) {
		updatedFormIsValid = updatedStepThreeForm[formElement].valid && updatedFormIsValid;
	}
	this.setState({stepThreeForm: updatedStepThreeForm, formIsValid: updatedFormIsValid});
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
// pass state as props in each continue method
		console.log("stepThreeHandler");
		const formData = {};
		for (let formElementIdentifier in this.state.stepThreeForm) {
			formData[formElementIdentifier] = this.state.stepThreeForm[formElementIdentifier].value;
		}
		this.props.formHandler(formData);
	}

	render() {
	// Assign each element in the form array an id and config
	const formElementsArray = [];
	for (let key in this.state.stepThreeForm) {
		formElementsArray.push({
		id: key,
		config: this.state.stepThreeForm[key]
		});
	}
	let form = (
		<form onSubmit={this.stepThreeHandler}>
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
		<Button btnType="Danger" clicked={this.previous}>Back</Button>
		<Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.continue}>Next</Button>
		</form>
	);
	return (
		<div className={classes.Menu}>
		<p>Share your menu</p>
		{form}
		</div>
	)
	}
}

export default Menu;
