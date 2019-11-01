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
    handleChange = input => e => {
        console.log(input);
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, emailAddress, phoneNumber} = this.state.personalInfo;
        const values = { firstName, lastName, emailAddress, phoneNumber}
        switch(step) {
            case 1:
                return (
                    <  AboutYou
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
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