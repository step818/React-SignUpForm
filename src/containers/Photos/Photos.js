import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Photos.css';
import Auxillary from '../../hoc/Auxillary/Auxillary';

export class Photos extends Component {
	state = {
		stepFiveForm: {
			photoMethod: {
				elementType: 'radio',
				elementConfig: {
					options: [
						{value: 'Option 1', name: 'photoOpt', displayValue: 'Option 1 - Submit your own professional photos.'},
						{value: 'Option 2', name: 'photoOpt', displayValue: 'Option 2 - Schedule a FREE professional photoshoot. Choose a preferred date and time below.'}
					]
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false,
				date: '',
				time: ''
			},
			preferedDate: {
				elementType: 'date',
				elementConfig: {
					type: 'date'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			preferredTime: {
				elementType: 'time',
				elementConfig: {
					type: 'time'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			}
		}
	}

	handleChange = (e, formElement) => {
		console.log("formElement: ", formElement);
		const updatedStepFiveForm = {
			...this.state.stepFiveForm
		};
		const updatedFormElement = {
			...updatedStepFiveForm[formElement]
		};
		// set value to a variable to be able to pass as argument.
		updatedFormElement.value = e.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement,
		updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedStepFiveForm[formElement] = updatedFormElement;
		// check to see if the step is valid
		let updatedFormIsValid = true;
		for (let formElement in updatedStepFiveForm) {
			updatedFormIsValid = updatedStepFiveForm[formElement].valid && updatedFormIsValid;
		}
		this.setState({stepFiveForm: updatedStepFiveForm});
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
		// Assign each element in the form array an id and config
		const formElementsArray = [];
		for (let key in this.state.stepFiveForm) {
			formElementsArray.push({
				id: key,
				config: this.state.stepFiveForm[key]
			});
		}
		let form = (
			<form onSubmit={this.stepFiveHandler}>
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
							{/* disabled={!this.state.formIsValid} */}
							<Button btnType="Danger" clicked={this.previous}>Back</Button>
							<Button btnType="Success"  clicked={this.continue}>Next</Button>
				</form>
	);
	return (
				<Auxillary>
							<div className={classes.Photos}>
										<p>Add photos to your TableFlash menu</p>
										{form}
							</div>
				</Auxillary>
	)
	}
}

export default Photos;
