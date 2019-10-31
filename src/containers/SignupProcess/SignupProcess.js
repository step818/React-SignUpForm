/* eslint-disable default-case */
import React, { Component } from 'react'

import AboutYou from '../AboutYou/AboutYou';
import AboutYourRest from '../AboutYourRest/AboutYourRest';
import Menu from '../Menu/Menu';

class SignupProcess extends Component {
    state = {
        step: 1,
        signUpForm: {

        }
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
    // Handle change inside inputs
    ///// !!!!!!!!!!!!!!!!!!
    ///// !!!!!!!!!!!!!!!!!!!!!!!!!!
    // Might have to adjust formIsValid to be able to continue to next step
    inputChangedHandler = (event, inputIdentifier) => {
		const updatedStepOneForm = {
			...this.state.signUpForm
		};
		const updatedFormElement = {
			...updatedStepOneForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedStepOneForm[inputIdentifier] = updatedFormElement;
		let updatedFormIsValid = true;
		for (let inputIdentifier in updatedStepOneForm) {
			updatedFormIsValid = updatedStepOneForm[inputIdentifier].valid && updatedFormIsValid;
		}
		this.setState({signUpForm: updatedStepOneForm, formIsValid: updatedFormIsValid});
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

    render() {
        const { step } = this.state;

        switch(step) {
            case 1:
                return (
                    <  AboutYou
                        nextStep={this.nextStep}
                    />
                )
            case 2:
                return (
                    <AboutYourRest
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}/>
                )
            case 3:
                return (
                    <Menu 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}/>
                )
            case 4:
                return (
                    // <Services />
                    <h1>Services</h1>
                )
            case 5:
                return (
                    // <Photo />
                    <h1>Photos</h1>
                )
            case 6:
                return (
                    // <Checkout />
                    <h1>Checkout</h1>
                )
            case 7:
                return (
                    // <Confirm />
                    <h1>Confirm</h1>
                )
        }

    }
}

export default SignupProcess;