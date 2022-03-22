import React, { Component } from 'react';
import '../CSS/Loader.css';

class Loader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	componentDidMount() {
		let v = setInterval(() => {
			if (this.state.count === 100) {
				clearInterval(v);
				return;
			}
			this.setState((preState) => ({
				count: preState.count + 1
			}));
		}, 600);
	}
	render() {
		return (
			<div className="circular">
				<div className="inner" />
				<div className="outer" />
				<div className="numb">{this.state.count} %</div>
				<div className="circle">
					<div className="dot">
						<span />
					</div>
					<div className="bar left">
						<div className="progress" />
					</div>
					<div className="bar right">
						<div className="progress" />
					</div>
				</div>
			</div>
		);
	}
}
export default Loader;
