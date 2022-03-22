import React, { Component } from 'react';
import fileName from '../Assets/SVGFileLoc';
import '../CSS/SideBar.css';

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectState: 'cat',
			marginLeft: 0
		};

		this.handleSlider = this.handleSlider.bind(this);
		this.handleChangeSelect = this.handleChangeSelect.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleImageUpload = this.handleImageUpload.bind(this);
		this.handleImageChanger = this.handleImageChanger.bind(this);
	}
	handleChangeSelect(e) {
		this.setState({
			selectState: e.target.value
		});
		this.props.changeSvgSource(`./SVG/${e.target.value}.svg`);
	}
	handleImageChange(v) {
		this.setState({
			selectState: v
		});
		this.props.changeSvgSource(`./SVG/${v}.svg`);
	}
	handleSlider(val) {
		if (this.state.marginLeft + val > 0) return;
		this.setState((state) => ({
			marginLeft: state.marginLeft + val
		}));
	}
	handleImageChanger(e) {
		this.props.changeSvgSource(e.target.result);
	}
	handleImageUpload() {
		let input = document.querySelector('#image-upload-input');
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			let v = null;
			reader.onload = this.handleImageChanger;

			reader.readAsDataURL(input.files[0]);
		}
	}
	render() {
		return (
			<div className="sideBar">
				<div className="imageSelecter">
					<div className="image-upload">
						<input
							id="image-upload-input"
							type="file"
							name="abc"
							accept=".svg"
							onChange={this.handleImageUpload}
						/>
						<i className="fas fa-upload" />
						<div className="para">
							<p>Select Image</p>
							<p>(.svg only)</p>
						</div>
					</div>
					<div className="div-wrapper">
						<div className="innerDiv" style={{ marginLeft: this.state.marginLeft }}>
							{fileName.map((fl) => (
								<img
									key={fl.title}
									src={fl.fileName}
									alt={fl.title}
									onClick={() => {
										this.handleImageChange(fl.value);
									}}
								/>
							))}
						</div>
					</div>
				</div>
				{/* <p id="uploadImg">
					
				</p> */}
			</div>
		);
	}
}

export default SideBar;
