import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';

// This component is responsible for slide out menu

class SideNavigation extends Component {

	render() {
		return (
			<Drawer 
				open={this.props.menuToggle}
				docked={false}
				onRequestChange={this.props.openMenuToggle}
			/>
		);
	}

}

export default SideNavigation;