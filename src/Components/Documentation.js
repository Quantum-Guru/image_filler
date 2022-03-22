import React, { Component } from 'react';
import '../CSS/Documentation.css';

class Documentation extends Component {
	render() {
		let mainClassName = !this.props.isLoaded ? 'documentation active' : 'documentation';
		return (
			<div className={mainClassName}>
				<div className="documentation-container">
					<h1>Visual application of quantum randomness - Image Coloring</h1>
					{/* <img src="./SVG/1.svg" /> */}
					<button onClick={this.props.handleIsLoaded}>Let's start</button>
				</div>
			</div>
		);
	}
}
export default Documentation;
