import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './App.css';
import SignupProcess from './containers/SignupProcess/SignupProcess';

class App extends Component {
    state = {
        signUpForm: {
            
                // country: { add dropdown to select country.}
            },
            
            photoInfo: {
                
            },
            checkoutInfo: {
                
            },
            agreeToTerms: {
                agreed: false
            }
        }

    render() {
        return (
        <div className={classes.App}>
            <SignupProcess/>
        </div>
        );
    }
}

export default App;
