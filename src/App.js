import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './App.css';
import SignupProcess from './containers/SignupProcess/SignupProcess';

class App extends Component {
    state = {
        signUpForm: {
            
                // country: { add dropdown to select country.}
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

    render() {
        return (
        <div classname={classes.App}>
            <SignupProcess/>
        </div>
        );
    }
}

export default App;
