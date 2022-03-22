import React, { Component } from 'react';
import '../CSS/Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<p>&copy;2022 BIT TO QUBIT Limited. All rights reserved.</p>
				<a href="https://qrng.anu.edu.au/">POWERED BY ANU</a>
			</div>
		);
	}
}
