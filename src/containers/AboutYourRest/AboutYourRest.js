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
		formisValid: false
	}
	//
	previous = e => {
		e.preventDefault();
		this.props.prevStep();
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

	render() {
		const { value, handleChange, formIsValid } = this.props;
		const formElementsArray = [];
		for (let key in this.props.restaurantInfo) {
			formElementsArray.push({
				id: key,
				config: this.props.restaurantInfo[key]
			});
		}
		let form = (
			<form onSubmit={this.stepTwoHandler}>
				{formElementsArray.map(formElement => (
					<Input
						valueType={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={value}
						key={formElement.id}
						touched={formElement.config.touched}
						shouldValidate={formElement.config.validation}
						invalid={!formIsValid}
						changed={handleChange(formElement)} />
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