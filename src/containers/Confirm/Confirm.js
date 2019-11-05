import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import classes from './Confirm.css';

export class Confirm extends Component {
	state = {
		stepSevenForm: {
			agreed: false
		}
	}

	handleChange = (e, formElement) => {
		console.log("formElement: ", formElement);
		const updatedStepSevenForm = {
			...this.state.stepSevenForm
		};
		const updatedFormElement = {
			...updatedStepSevenForm[formElement]
		};
		// 
		updatedFormElement.value = e.target.value;
		// updatedFormElement.valid = this.checkValidity(updatedFormElement, 
		// formElement.config.validation);
		updatedFormElement.touched = true;
		updatedStepSevenForm[formElement] = updatedFormElement;
		// check to see if the step is valid
		// let updatedFormIsValid = true;
		// for (let formElement in updatedStepSevenForm) {
		// 	updatedFormIsValid = updatedStepSevenForm[formElement].valid && updatedFormIsValid;
		// }
		this.setState({stepSevenForm: updatedStepSevenForm});
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
		const formElementsArray = [];
		for (let key in this.state.stepSevenForm) {
			formElementsArray.push({
				id: key,
				config: this.state.stepSevenForm[key]
			});
		}
		let form = (
			<form onSubmit={this.stepSevenHandler}>
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
				<div className={classes.Confirm}>
					<p>Terms and conditions</p>
					{form}
				</div>
			</Auxillary>
		)
	}
}

export default Confirm;
