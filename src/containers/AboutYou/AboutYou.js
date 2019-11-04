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