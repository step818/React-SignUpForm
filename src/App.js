import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './App.css';
import AboutYou from './containers/AboutYou/AboutYou';
import AboutYourRest from './'

class App extends Component {
    state = {
        signUpForm: {
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
                        placeholder: 'Restaurant Phone Number'
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
                        placeHolder: 'i.e., Monday 10am-1pm, 3pm-9pm'
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
                        placeHolder: 'Street Address'
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
                        placeHolder: 'City'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                state: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeHolder: 'State/Province'
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
                        placeHolder: 'Zip/Postal Code'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touched: false
                }
                // country: { add dropdown to select country.}
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
            },
            serviceMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'dineIn'},
                        {value: 'takeOut'},
                        {value: 'dineInAndTakeOut'}
                    ]
                }
            },
            photoInfo: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Option 1'},
                        {Value: 'Option 2'}
                    ]
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                isOption2: false,
                date: '',
                time: ''
            },
            checkoutInfo: {
                legalName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Legal/Business Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                einNumber: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'EIN Number(GST/HST Number for Canada)'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 9,
                        maxLength: 9
                    },
                    valid: false,
                    touched: false
                },
                routingNumber: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Routing Number(Transit Number)'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                accountNumber: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Account Number'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 10,
                        maxLength: 12
                    },
                    valid: false,
                    touched: false
                }
            },
            agreeToTerms: {
                agreed: false
            }
        }
    }

    render() {
        return (
        <div classname={classes.App}>
            <AboutYou/>
            <AboutYourRest show={this.state.secondStep} abtRestClosed={this.backClickHandler} />
        </div>
        );
    }
}

export default App;
