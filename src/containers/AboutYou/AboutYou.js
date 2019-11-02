import React, { Component } from 'react';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './AboutYou.css';

class AboutYou extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}
	// Passes props to form page indicating input is being changed and validity should always be checked
	// inputChangedHandler = (event, inputIdentifier) => {
	// 	const updatedStepOneForm = {
	// 		...this.state.personalInfo
	// 	};
	// 	const updatedFormElement = {
	// 		...updatedStepOneForm[inputIdentifier]
	// 	};
	// 	updatedFormElement.value = event.target.value;
	// 	updatedFormElement.valid = this.checkValidity(updatedFormElement, updatedFormElement.validation);
	// 	updatedFormElement.touched = true;
	// 	updatedStepOneForm[inputIdentifier] = updatedFormElement;
	// 	let updatedFormIsValid = true;
	// 	for (let inputIdentifier in updatedStepOneForm) {
	// 		updatedFormIsValid = updatedStepOneForm[inputIdentifier].valid && updatedFormIsValid;
	// 	}
	// 	this.setState({personalInfo: updatedStepOneForm, formIsValid: updatedFormIsValid});
	// }

	// // Check user follows rules of each input
	// checkValidity = (value, rules) => {
	// 	let isValid = true;
	// 	if (rules.required) {
	// 		isValid = value.value.trim() !== '' && isValid;
	// 	}
	// 	if (rules.minLength) {
	// 		isValid = (value.value.length >= rules.minLength) && isValid;
	// 	}
	// 	if (rules.maxLength) {
	// 		isValid = (value.value.length <= rules.maxLength) && isValid;
	// 	}
	// 	return isValid;
	// }

	render() {
		// pass arguments as props
		const { value, handleChange } = this.props;
		// map props to a form
		const formElementsArray = [];
		for (let key in this.props.personalInfo) {
			formElementsArray.push({
				id: key,
				config: this.props.personalInfo[key]
			});
		}
		// (event) => this.inputChangedHandler(event, formElement.id)
		let form = (
			<form onSubmit={this.stepOneHandler}>
				{formElementsArray.map(formElement => (
					<Input
						valueType={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={value}
						key={formElement.id}
						touched={formElement.config.touched}
						shouldValidate={formElement.config.validation}
						invalid={!formElement.config.valid}
						changed={handleChange(formElement)} />
				))}
				<Button btnType="Success" disabled={!this.props.formIsValid}  clicked={this.continue}>Next</Button>
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