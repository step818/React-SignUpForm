import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';

class App extends Component {
    state = {
        signUpForm: {
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
                elementType: 'select'
            }
        }
    }

  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default App;
