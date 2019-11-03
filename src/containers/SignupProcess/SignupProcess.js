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
        // Maybe make a form: { pInf: , rInfo: , ... } attribute
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
			restaurantPhone: {
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
        menuInfo: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'link', displayValue: 'Link to Menu'},
                    {value: 'file', displayValue: 'PDF, JPEG, or Photo upload'}
                ]
            },
            value: 'link',
            validation: {},
            valid: true
        }
		
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
        const updatedSignUp = {
            ...this.state[formElement]
        };
        console.log(updatedSignUp);
        const updatedForm = {
            ...updatedSignUp
        };
        console.log("first updated form: ", updatedForm);
        const updatedFormElement = {
            ...updatedForm[formElement]
        };
        console.log("first update form element: ", updatedFormElement);
        updatedFormElement.value = value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement, 
        formElement.config.validation);
        console.log("updatedForm: ", updatedForm);
        console.log("updatedFormElement: ", updatedFormElement);
        updatedForm[formElement] = updatedFormElement;
        console.log("updatedForm[formElement]: ",  updatedForm[formElement]);
        let updatedFormIsValid = true;
        for (let formElement in updatedForm) {
            console.log("vld: ",formElement);
            updatedFormIsValid = updatedForm[updatedFormElement].valid && updatedFormIsValid;
            console.log("updatedForm[updatedFormElement].valid: ", updatedForm[updatedFormElement].valid);
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
        const { restaurantName, restaurantPhone, deliveryHours, street, city, stateProvince, postalCode } = this.state.restaurantInfo;
        const { link, file } = this.state.menuInfo;
        const values = { firstName, lastName, emailAddress, phoneNumber, restaurantName, restaurantPhone, deliveryHours, street, city, stateProvince, postalCode, link, file}
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
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        restaurantInfo={this.state.restaurantInfo}/>
                )
            case 3:
                return (
                    <Menu 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChang={this.handleChange}
                        values={values}
                        menuInfo={this.state.menuInfo}
                        />
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