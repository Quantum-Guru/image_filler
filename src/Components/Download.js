import React, { Component } from 'react';
import '../CSS/Download.css';

class Download extends Component {
	constructor(props) {
		super(props);
		let a = new Date().toDateString().split(' ');
		this.state = {
			name: '',
			mail: '',
			time: a[0] + ', ' + a[1] + ' ' + a[2] + ' ' + a[3]
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleMailChange = this.handleMailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleNameChange(e) {
		this.setState({
			name: e.target.value
		});
	}
	handleMailChange(e) {
		this.setState({
			mail: e.target.value
		});
	}
	handleSubmit(e) {
		// e.preventDefault();
		console.log('Try to submit the form');
		document.querySelector('#download\\ show').click();
	}
	render() {
		let classNameMain = this.props.isDownLoading ? 'download active' : 'download';
		return (
			<div className={classNameMain}>
				<form
					action="https://docs.google.com/forms/d/e/1FAIpQLSeqA35OPVYwl-_dPl7olrAGuuEan9SaiL8EP6BMh7CKk6C27Q/formResponse"
					encType="text/plain"
					target="hidden_iframe"
					className="container"
					onSubmit={this.handleSubmit}
					onLoad={this.handleSubmit}
				>
					<div className="input">
						<input
							name="entry.804397340"
							type="text"
							onChange={this.handleNameChange}
							value={this.state.name}
							placeholder="Name"
							required
						/>
						{/* <input className="checkbox" type="checkbox" name="subscribe" /> */}
					</div>
					<div className="input">
						<input
							name="entry.1219021070"
							type="email"
							onChange={this.handleMailChange}
							value={this.state.mail}
							placeholder="Email"
						/>
						{/* <input className="checkbox" type="checkbox" name="subscribe" /> */}
					</div>
					<p>{this.state.time}</p>
					<div className="innerDiv div1" style={{ marginTop: '8px' }}>
						<input type="checkbox" name="subscribe" />
						<p>Include Name and Date</p>
					</div>
					<div className="innerDiv div1" style={{ marginBottom: '8px' }}>
						<input type="checkbox" name="subscribe" />
						<p>Subscribe Newsletter</p>
					</div>
					<div className="innerDiv">
						<a onClick={this.props.handleisDownLoading}>
							<i class="fas fa-times" />
						</a>
						<button type="submit" style={{ border: 'none', marginRight: '20px' }}>
							<a href={this.props.downloadLink} download="Filled_Image.svg" type="image/svg" id="download show">
								<i className="fas fa-check" />
							</a>
						</button>
					</div>
				</form>
				<iframe id="hidden_iframe" name="hidden_iframe" style={{ display: 'none' }} />
			</div>
		);
	}
}
export default Download;
