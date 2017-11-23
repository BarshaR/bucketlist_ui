import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import '../css/topNavigation.css';
import SideMenu from './sideMenu/sideNavigation.js';

//This component is responsible for displayingn the header and menu

class TopNavigation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false
		}
		this.handleLeftIconButtonTouchTap = this.handleLeftIconButtonTouchTap.bind(this);
	}

	// Open and close the menu
	handleLeftIconButtonTouchTap() {
			this.setState(
				prevState => ({
      				isMenuOpen: !prevState.isMenuOpen
      			})
    		);
	}

	render() {
		return (
			<div className="top-navigation-wrapper">
				<AppBar title={this.props.pageTitle} onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap} />
				<SideMenu openMenuToggle={this.handleLeftIconButtonTouchTap} isMenuOpen={this.state.isMenuOpen}/>
			</div>
		);
	}
}

export default TopNavigation;