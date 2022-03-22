import React, { Component } from 'react';

class OutputWindow extends Component {
	render() {
		return (
			<div style={{ width: '100%', height: '100%', position: 'relative' }} className="outputWindow">
				<div className="div" dangerouslySetInnerHTML={{ __html: this.props.img }} />
				<div className="shareOption">
					<div className="inner-share">
						<a
							style={{ cursor: 'pointer' }}
							onClick={() => this.props.handleisDownLoading(this.props.downloadLink)}
						>
							<i className="fas fa-download" />
						</a>
						<a className="share">
							<i className="fas fa-share" onClick={this.props.handleIsSharing} />
							<div className={`share-opt ${this.props.isSharing && 'active'}`}>
								<a href='https://www.facebook.com/'>
									<i className="fab fa-facebook-f" />
								</a>
								<a href='https://twitter.com/'>
									<i className="fab fa-twitter" />
								</a>
								<a href='https://www.linkedin.com/'>
									<i className="fab fa-linkedin-in" />
								</a>
								<a href='https://www.instagram.com/'>
									<i className="fab fa-instagram" />
								</a>
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default OutputWindow;
