import React, { Component } from 'react';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './AboutYourRest.css';

class AboutYourRest extends Component {
	state = {
		restaurantInfo: {
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
		formisValid: false,
		continuing: false
	}
	//
	stepTwoHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for (let formElementIdentifier in this.state.restaurantInfo) {
			formData[formElementIdentifier] = this.state.restaurantInfo[formElementIdentifier].value;
		}
	}
	// Changes input value as user types inside input
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedStepTwoForm = {
			...this.state.restaurantInfo
		};
		const updatedFormElement = {
			...updatedStepTwoForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedStepTwoForm[inputIdentifier] = updatedFormElement;
		let updatedFormIsValid = true;
		for (let inputIdentifier in updatedStepTwoForm) {
			updatedFormIsValid = updatedStepTwoForm[inputIdentifier].valid && updatedFormIsValid;
		}
		this.setState({restaurantInfo: updatedStepTwoForm, formIsValid: updatedFormIsValid});
	}
	// 
	checkValidity = (value, rules) => {

	}

	nextClicked = () => {
		this.setState({continuing: true});
	}
	render() {
		const formElementsArray = [];
		for (let key in this.state.restaurantInfo) {
			formElementsArray.push({
				id: key,
				config: this.state.restaurantInfo[key]
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
						changed={(event) => this.inputChangedHandler(event, formElement.id)} />
				))}
				<Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.nextClicked}>Next</Button>
			</form>
		);

		return (
			<Auxillary>
				<div
					className={classes.AboutYourRest}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}>
						<p>Tell us about your restaurant</p>
						{form}
				</div>
			</Auxillary>
		);
	}
}

export default AboutYourRest;