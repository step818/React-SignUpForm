import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Services.css';

export class Services extends Component {
	state = {
		serviceMethods: {
			elementType: 'select',
			elementConfig: {
					options: [
							{value: 'dineIn'},
							{value: 'takeOut'},
							{value: 'dineInAndTakeOut'}
					]
			}
		}
	}

	handleChange = (e, formElement) => {
		console.log("formElement: ", formElement);
		const updatedStepFourForm = {
			...this.state.stepFourForm
		};
		const updatedFormElement = {
			...updatedStepFourForm[formElement]
		};
		// 
		updatedFormElement.value = e.target.value;
		// updatedFormElement.valid = this.checkValidity(updatedFormElement, 
		// formElement.config.validation);
		updatedFormElement.touched = true;
		updatedStepFourForm[formElement] = updatedFormElement;
		// check to see if the step is valid
		// let updatedFormIsValid = true;
		// for (let formElement in updatedStepFourForm) {
		// 	updatedFormIsValid = updatedStepFourForm[formElement].valid && updatedFormIsValid;
		// }
		this.setState({stepFourForm: updatedStepFourForm});
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
		for (let key in this.state) {
			formElementsArray.push({
				id: key,
				config: this.state[key]
			});
		}
		let form = (
			<form onSubmit={this.stepFourHandler}>
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
						changed={(event) => this.handleChange(event, formElement.id)} />
				))}
				{/* disabled={!this.state.formIsValid} */}
				<Button btnType="Danger" clicked={this.previous}>Back</Button>
				<Button btnType="Success"  clicked={this.continue}>Next</Button>
			</form>
		)
		return (
			<div className={classes.Services}>
				<p>What TableFlash service would you like to use</p>
				{form}
			</div>
		)
	}
}

export default Services;
