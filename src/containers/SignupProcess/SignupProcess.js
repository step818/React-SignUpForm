/* eslint-disable default-case */
import React, { Component } from 'react';
import axios from '../../axios';

import AboutYou from '../AboutYou/AboutYou';
import AboutYourRest from '../AboutYourRest/AboutYourRest';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Photos from '../Photos/Photos';
import Checkout from '../Checkout/Checkout';
import Confirm from '../Confirm/Confirm';
import Success from '../Success/Success';

class SignupProcess extends Component {
		state = {
				step: 1
		// Maybe make a form: { pInf: , rInfo: , ... } attribute
		}
		//Proceed to next step
		nextStep = () => {
				const { step } = this.state;
				this.setState({
						step: step + 1
				});
		}
		// Go back to prev step
		prevStep = () => {
				const { step } = this.state;
				this.setState({
						step: step - 1
				});
		}
	
		
		formHandler = (dataFromChild, step) => {
// store data in here from all components
// if (nex on confirm is clicked) {
// anotherFunction(allData);
			const formData = { dataFromChild }
			axios.post('/form.json', formData)
				.then(response => console.log(response.data, response.status))
				.catch(error => console.log(error));
// Print the data to the console once at end of the form
			if ( step === 7 ) {
				axios.get('https://stepsignup.firebaseio.com/form.json')
					.then((response) => {
						console.log("SignUp Data: ", response.data)
					});
			} 
// switch statement was first instinct
// keep it here in case IF statement doesnt work
			}
		

	render() {
		const { step } = this.state;
	
		switch(step) {
			case 1:
				return (
					<AboutYou
						nextStep={this.nextStep}
						formHandler={this.formHandler}
							/>
					)
				case 2:
					return (
						<AboutYourRest
							nextStep={this.nextStep}
							prevStep={this.prevStep}
							formHandler={this.formHandler}
						/>
					)
				case 3:
					return (
							<Menu 
									nextStep={this.nextStep}
									prevStep={this.prevStep}
									formHandler={this.formHandler}
									/>
						)
					case 4:
							return (
									<Services 
											nextStep={this.nextStep}
											prevStep={this.prevStep}
											formHandler={this.formHandler}
											/>
							)
					case 5:
							return (
									<Photos 
											nextStep={this.nextStep}
											prevStep={this.prevStep}
											formHandler={this.formHandler}
											/>
							)
					case 6:
							return (
									<Checkout 
											nextStep={this.nextStep}
											prevStep={this.prevStep}
											formHandler={this.formHandler}
											/>
							)
					case 7:
							return (
									<Confirm
											nextStep={this.nextStep}
											prevStep={this.prevStep}
											formHandler={this.formHandler}
											printForm={this.printForm}
											/>
							)
					case 8:
							return (
								<Success/>			
							)
			}
	}
}

export default SignupProcess;