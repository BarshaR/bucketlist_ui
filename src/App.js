import React, { Component } from 'react';
import TopNavigation from './components/topNavigation.js';
import './css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MuiThemeProvider>
    				<TopNavigation pageTitle="Dashboard" />
  				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;
