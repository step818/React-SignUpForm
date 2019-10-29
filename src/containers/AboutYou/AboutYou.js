import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import classes from './AboutYou.css';

class AboutYou extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state= {...}
	// }
	//State for first step
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

	stepOneHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for (let formElementIdentifier in this.state.personalInfo) {
			formData[formElementIdentifier] = this.state.personalInfo[formElementIdentifier].value;
		}
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
				<button btnType="Success">"Next" Create Button component</button>
			</form>
		);

		return(
			<div className={classes.AboutYou}>
				<p>Tell us about you</p>
				{form}
			</div>
		);
	}
}

export default AboutYou;