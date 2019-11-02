/* eslint-disable default-case */
import React, { Component } from 'react'

import AboutYou from '../AboutYou/AboutYou';
import AboutYourRest from '../AboutYourRest/AboutYourRest';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Photos from '../Photos/Photos';
import Checkout from '../Checkout/Checkout';
import Confirm from '../Confirm/Confirm';

class SignupProcess extends Component {
    state = {
        step: 1,
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
    // Assign a variable to state.personalInfo[input]
    
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
    handleChange = formElement => e => {
        console.log("formElement: ", formElement);
        const value = e.target.value;
        console.log(value)
        
        const updatedForm = {
            ...this.state.personalInfo
        };
        console.log("updatedForm: ", updatedForm);
        const updatedFormElement = {
            ...updatedForm[formElement]
        };
        console.log("updatedFormElement: ", updatedFormElement);
        updatedFormElement.value = value;

        updatedFormElement.valid = this.checkValidity(updatedFormElement, 
        formElement.config.validation);

        console.log("updatedForm: ", updatedForm);
        console.log("updatedFormElement: ", updatedFormElement);
        updatedForm[formElement] = updatedFormElement;
        console.log("updatedForm[formElement]: ",  updatedForm[formElement]);
        console.log(updatedForm[formElement].length);
        let updatedFormIsValid = true;
        for (let formElement in updatedForm) {
            updatedFormIsValid = updatedFormElement.valid && updatedFormIsValid;
            console.log("updatedForm[formElement].valid: ", updatedForm[formElement].valid);
        }
        console.log("updatedFormIsValid: ", updatedFormIsValid);

        this.setState({[formElement]: value, formIsValid: updatedFormIsValid});
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
        console.log("isValid: ", isValid);
		return isValid;
	}

    render() {
        const { step, formIsValid } = this.state;
        const { firstName, lastName, emailAddress, phoneNumber} = this.state.personalInfo;
        const values = { firstName, lastName, emailAddress, phoneNumber}
        switch(step) {
            case 1:
                return (
                    <  AboutYou
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        formIsValid={formIsValid}
                        personalInfo={this.state.personalInfo}
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
                    <Services 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}/>
                )
            case 5:
                return (
                    <Photos 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}/>
                )
            case 6:
                return (
                    <Checkout 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}/>
                )
            case 7:
                return (
                    <Confirm 
                        prevStep={this.prevStep}/>
                )
        }

    }
}


export default SignupProcess;