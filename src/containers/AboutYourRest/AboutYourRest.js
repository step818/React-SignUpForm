import React, { Component } from 'react';

import classes from './AboutYourRest.css';

class AboutYourRest extends Component {
	state = {

	}

	render() {
		return (
			<div
				className={classes.AboutYourRest}
				style={{
					transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: this.props.show ? '1' : '0'
				}}>
					<p>hello</p>
			</div>
		);
	}
}

export default AboutYourRest;