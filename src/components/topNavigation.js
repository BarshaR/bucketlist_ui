import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import '../css/topNavigation.css';

class TopNavigation extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<AppBar title={this.props.pageTitle} />
		);
	}
}

export default TopNavigation;