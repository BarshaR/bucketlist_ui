import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Label from 'material-ui/svg-icons/action/label';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';

// This component is responsible for slide out menu

class SideNavigation extends Component {

	render() {
		return (
			<Drawer 
				open={this.props.isMenuOpen}
				docked={false}
				onRequestChange={this.props.openMenuToggle}
			>
				<List>
					<Subheader>Recent Lists</Subheader>
					<ListItem primaryText="List 1" leftIcon={<Label />} />
					<ListItem primaryText="List 2" leftIcon={<Label />} />
					<ListItem primaryText="List 3" leftIcon={<Label />} />
					
				</List>
			</Drawer>
		);
	}

}

export default SideNavigation;