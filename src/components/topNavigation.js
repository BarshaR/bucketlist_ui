import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import '../css/topNavigation.css';
import SideNavigation from './sideNavigation.js';

//This component is responsible for displayingn the header and menu

class TopNavigation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			openMenuToggle: false
		}
		this.handleLeftIconButtonTouchTap = this.handleLeftIconButtonTouchTap.bind(this);
	}

	// Open and close the menu
	handleLeftIconButtonTouchTap() {
			this.setState(
				prevState => ({
      				openMenuToggle: !prevState.openMenuToggle
      			})
    		);
	}

	render() {
		return (
			<div className="top-navigation-wrapper">
				<AppBar title={this.props.pageTitle} onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap} />
				<SideNavigation openMenuToggle={this.handleLeftIconButtonTouchTap} menuToggle={this.state.openMenuToggle}/>
			</div>
		);
	}
}

export default TopNavigation;