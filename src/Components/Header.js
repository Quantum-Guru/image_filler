import React, { Component } from 'react';
import '../CSS/Header.css';
class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="box">
					<a href="https://www.quantumcomputers.guru/">
						<img src="./Asset/logo.png" alt="Logo" />
					</a>
				</div>
				<div className="box">
					<i className="fas fa-bars handburger open" onClick={this.props.handleIsSideNavOpen} />
					<ul>
						<li>
							<a href="https://www.quantumcomputers.guru/" target="_blank">
								Home
							</a>
						</li>
						<li>
							<a href="https://www.quantumcomputers.guru/news/" target="_blank">
								News
							</a>
						</li>
						<li>
							<a href="https://www.quantumcomputers.guru/learn/" target="_blank">
								Learn
							</a>
						</li>
						<li>
							<a href="https://www.quantumcomputers.guru/research/" target="_blank">
								Research
							</a>
						</li>
						<li>
							<a href="https://www.quantumcomputers.guru/video/" target="_blank">
								Video
							</a>
						</li>
						<li>
							<a href="https://www.quantumcomputers.guru/qc-apps/" target="_blank">
								QC Apps
							</a>
						</li>
						<li onClick={this.props.handleIsLoaded}>
							<a
								href="https://www.quantumcomputers.guru/first-real-world-user-application-of-quantum-randomness-image-coloring/"
								target="_blank"
							>
								<i class="fas fa-question" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header;
