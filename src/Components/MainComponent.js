import React, { Component } from 'react';
import Canvas from './Canvas';
import SideBar from './SideBar';
import '../CSS/MainComponent.css';

class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			svgSource: './SVG/1.svg',
			generateNewImage: false
		};
		this.changeSvgSource = this.changeSvgSource.bind(this);
		this.handleGenerateNewImage = this.handleGenerateNewImage.bind(this);
	}
	changeSvgSource(s) {
		console.log(s);
		this.setState({
			svgSource: s,
			generateNewImage: false
		});
	}
	handleGenerateNewImage() {
		console.log('HI');
		this.setState({
			generateNewImage: true
		});
	}
	render() {
		return (
			<div className="mainComponent">
				<SideBar changeSvgSource={this.changeSvgSource} />
				<Canvas
					handleisDownLoading={this.props.handleisDownLoading}
					image={this.state.svgSource}
					generateNewImage={this.state.generateNewImage}
					handleGenerateNewImage={this.handleGenerateNewImage}
				/>
			</div>
		);
	}
}

export default MainComponent;
