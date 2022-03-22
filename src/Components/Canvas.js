import React, { Component } from 'react';
import '../CSS/Canvas.css';
import Loader from './Loader';
import OutputWindow from './OutputWindow';

async function getColor(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		let pro = await fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=hex16&size=3');
		let ans = await pro.json();
		arr.push('#' + ans.data[0]);
	}
	return arr;
}

async function getText(file) {
	let res = await fetch(file);
	let text = await res.text();

	return text;
}

function download(text, name, type) {
	var a = document.getElementById('download');
	console.log(a);
	var file = new Blob([ text ], { type: type });
	let link = URL.createObjectURL(file);
	a.href = link;
	a.download = name;

	return link;
}

class Canvas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			outputImage: null,
			clickedOnBtn: false,
			downloadLink: '/',
			isSharing: false
		};
		this.generateImage = this.generateImage.bind(this);
		this.handleIsSharing = this.handleIsSharing.bind(this);
	}
	handleIsSharing() {
		console.log('HEY.....');
		this.setState((prevstate) => ({
			isSharing: !prevstate.isSharing
		}));
	}
	async generateImage() {
		if (this.state.clickedOnBtn === true) return;
		this.props.handleGenerateNewImage();
		if (!this.state.clickedOnBtn) this.setState({ clickedOnBtn: true });
		this.setState({
			outputImage: null
		});
		console.log('Lets start ...');
		let text = await getText(this.props.image);
		let v1 = (text.match(/fill="/g) || []).length;
		let targetText = text;

		//Check for #000000
		let regEx = /fill="#[a-zA-Z0-9]{6}"/g;
		let match = text.match(regEx);
		let v2 = match?.length || 0;

		let matchSet = new Set(match);
		let randomColor = await getColor(matchSet.size);
		match = [];
		matchSet.forEach((x) => match.push(x));
		for (let i = 0; i < matchSet.size; i++) {
			let col = `fill="${randomColor[i]}"`;
			targetText = targetText.replaceAll(match[i], col);
		}

		//Check for #000
		regEx = /fill="#[a-zA-Z0-9]{3}"/g;
		match = text.match(regEx);
		v2 += (match?.length || 0);
		matchSet = new Set(match);
		randomColor = await getColor(matchSet.size);
		match = [];
		matchSet.forEach((x) => match.push(x));
		for (let i = 0; i < matchSet.size; i++) {
			let col = `fill="${randomColor[i]}"`;
			targetText = targetText.replaceAll(match[i], col);
		}
		// console.log(match);

		//Check for #0004
		regEx = /fill="#[a-zA-Z0-9]{4}"/g;
		match = text.match(regEx);
		v2 += (match?.length || 0);
		matchSet = new Set(match);
		randomColor = await getColor(matchSet.size);
		match = [];
		matchSet.forEach((x) => match.push(x));
		for (let i = 0; i < matchSet.size; i++) {
			let col = `fill="${randomColor[i]}"`;
			targetText = targetText.replaceAll(match[i], col);
		}

		let link = download(targetText, 'output.svg', 'image/svg');
		this.setState({
			downloadLink: link
		});
		this.setState({
			outputImage: targetText,
			clickedOnBtn: false
		});

		console.log(v1, v2);
		if (v1 > 2*v2) {
			alert('No of fill tags are not same...');
		}
		// console.log('done');
	}
	render() {
		let img = this.state.outputImage;
		let outputWindow = (
			<OutputWindow
				handleisDownLoading={this.props.handleisDownLoading}
				downloadLink={this.state.downloadLink}
				img={img}
				handleIsSharing={this.handleIsSharing}
				isSharing={this.state.isSharing}
			/>
		);
		return (
			<div className="canvas">
				<div className={`box ${this.props.generateNewImage && 'haveImageToShow'}`}>
					<img src={this.props.image} alt="Selected" />
					<div id="forMobileView">
						{this.state.outputImage != null ? outputWindow : this.props.generateNewImage && <Loader />}
					</div>
					{/* <button id='generate' onClick={this.generateImage}>Generate Image</button> */}
				</div>
				<div className="reload">
					<i className="fas fa-redo" onClick={this.generateImage} />
					<p>Refill Quantum Generated Colors</p>
				</div>
				<div className="box">
					{this.props.generateNewImage && this.state.outputImage != null ? (
						outputWindow
					) : (
						<div>
							{this.props.generateNewImage && <Loader />}
							<a href="/" className="hide" id="download">
								Download
							</a>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Canvas;
