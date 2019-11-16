import React, { Component } from 'react';

import classes from './App.css';
import SignupProcess from './containers/SignupProcess/SignupProcess';

class App extends Component {
    render() {
        return (
        <div className={classes.App}>
            <SignupProcess/>
        </div>
        );
    }
}

export default App;
