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

	handleChange = formElement => e => {
		console.log("formElement: ", formElement);
		const value = e.target.value;
		const updatedSignUp = {
			...this.state.stepOneForm
		};
		const updatedFormElement = {
			...updatedSignUp[formElement]
		};
		updatedFormElement.value = e.target.value;
		// updatedFormElement.valid = this.checkValidity(updatedFormElement, 
		// formElement.config.validation);
		updatedFormElement.touched = true;
		updatedSignUp[formElement] = updatedFormElement;
		// check to see if the step is valid
		let updatedFormIsValid = true;
		for (let formElement in updatedSignUp) {
			updatedFormIsValid = updatedSignUp[formElement].valid && updatedFormIsValid;
		}

		this.setState({[formElement] : value, formIsValid: updatedFormIsValid});
		}
	

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}
	render() {
		// pass arguments as props
		const { value, handleChange, personalInfo } = this.props;
		// map props to a form
		const formElementsArray = [];
		// for each array within personalInfo array
		// push an id and tag element(config) to be able to access other info
		for (let key in personalInfo) {
			formElementsArray.push({
				id: key,
				config: personalInfo[key]
			});
			console.log("formElementsArray: ", formElementsArray);
		}
		// 
		let form = (
			<form onSubmit={this.stepOneHandler}>
				{formElementsArray.map(formElement => (
					<Input
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
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