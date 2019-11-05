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
				signUp: {
					,
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
        // Maybe make a form: { pInf: , rInfo: , ... } attribute
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
        const { step, formIsValid } = this.state;
        const { firstName, lastName, emailAddress, phoneNumber} = this.state.signUp.personalInfo;
        const { restaurantName, restaurantPhone, deliveryHours, street, city, stateProvince, postalCode } = this.state.signUp.restaurantInfo;
        const { link, file } = this.state.signUp.menuInfo;
        const values = { firstName, lastName, emailAddress, phoneNumber, restaurantName, restaurantPhone, deliveryHours, street, city, stateProvince, postalCode, link, file}
        switch(step) {
            case 1:
                return (
                    <  AboutYou
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        formIsValid={formIsValid}
												personalInfo={this.state.signUp.personalInfo}
                        />
                )
            case 2:
                return (
                    <AboutYourRest
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        restaurantInfo={this.state.restaurantInfo}
												category={this.state.restaurantInfo}/>
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