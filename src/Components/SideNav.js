import React, { Component } from 'react';
import '../CSS/SideNav.css';

class SideNav extends Component {
	render() {
		let divClassName = this.props.isSideNavOpen ? 'sidenav active' : 'sidenav';
		return (
			<div className={divClassName}>
				<i onClick={this.props.handleIsSideNavOpen} className="fas fa-angle-double-right" />
				<div className="box">
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
							<a href="https://www.quantumcomputers.guru/first-real-world-user-application-of-quantum-randomness-image-coloring/">
								<i class="fas fa-question" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SideNav;
