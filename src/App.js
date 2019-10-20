// Authors: Sage Klein
// Purpose of the File: to hold functionality for sessionStorage for login, renders the <Navbar> and <ApplicationViews.js>

//<Dashboard.js> renders the <NavBar> and <ApplicationViews> 
import React, { Component } from 'react'
import ApplicationViews from './components/ApplicationViews'
import NavBar from './components/nav/NavBar'
import './components/wish/wishlist.css'
import '../src/index.css'
// import Dashboard from './components/dashboard/Dashboard'

//Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

class Storage extends Component {
	//On startup, there is no user (user: false)
	state = {
		user: sessionStorage.getItem("userId") !== null
	};

	// Check if userId are in session storage
	//returns true/false
	isAuthenticated = () => sessionStorage.getItem("userId") !== null;

	setUser = authObj => {
		sessionStorage.setItem("userId", JSON.stringify(authObj));
	};
	triggerRender = () => {
		this.setState({
			user: this.isAuthenticated()
		});
	};

	clearUser = () => {
		sessionStorage.clear();
	};

	render() {
		return (
			<>
				<NavBar
					user={this.state.user}
					triggerRender={this.triggerRender}
					clearUser={this.clearUser}
				/>

				<ApplicationViews
					user={this.state.user}
					setUser={this.setUser}
					triggerRender={this.triggerRender}
				/>
			</>
		);
	}
}

export default Storage;
