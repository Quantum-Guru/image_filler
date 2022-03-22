import React, { Component } from 'react';
import Header from './Components/Header';
import MainComponent from './Components/MainComponent';
import Footer from './Components/Footer';
import Download from './Components/Download';
import SideNav from './Components/SideNav';
import Documentation from './Components/Documentation';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDownLoading: false,
			isSideNavOpen: false,
			isLoaded: false,
			downloadLink: null
		};
		this.handleisDownLoading = this.handleisDownLoading.bind(this);
		this.handleIsSideNavOpen = this.handleIsSideNavOpen.bind(this);
		this.handleIsLoaded = this.handleIsLoaded.bind(this);
	}
	handleIsSideNavOpen() {
		this.setState((prevstate) => ({
			isSideNavOpen: !prevstate.isSideNavOpen
		}));
	}
	handleIsLoaded() {
		this.setState((prevState) => ({ isLoaded: !prevState.isLoaded }));
	}
	handleisDownLoading(link) {
		if (link !== null) {
			this.setState({
				downloadLink: link
			});
		}
		this.setState((prevstate) => ({
			isDownLoading: !prevstate.isDownLoading
		}));
	}
	render() {
		return (
			<div className="container" style={{ position: 'relative' }}>
				<Documentation isLoaded={this.state.isLoaded} handleIsLoaded={this.handleIsLoaded} />
				<Download
					isDownLoading={this.state.isDownLoading}
					handleisDownLoading={this.handleisDownLoading}
					downloadLink={this.state.downloadLink}
				/>
				<Header handleIsLoaded={this.handleIsLoaded} handleIsSideNavOpen={this.handleIsSideNavOpen} />
				<SideNav
					handleIsLoaded={this.handleIsLoaded}
					isSideNavOpen={this.state.isSideNavOpen}
					handleIsSideNavOpen={this.handleIsSideNavOpen}
				/>
				<MainComponent handleisDownLoading={this.handleisDownLoading} />
				<Footer />
			</div>
		);
	}
}

export default App;
