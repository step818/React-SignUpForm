/* eslint-disable default-case */
import React, { Component } from 'react'

import AboutYou from '../AboutYou/AboutYou';
import AboutYourRest from '../AboutYourRest/AboutYourRest';

class SignupProcess extends Component {
    state = {
        step: 1
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
                    // <Menu />
                    <h1>Menu</h1>
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