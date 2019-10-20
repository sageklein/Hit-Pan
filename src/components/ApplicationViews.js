// Authors: Sage Klein
// Purpose of the File: to house the routes/paths to each component

import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login"
import Register from "./auth/Register"
import Dashboard from "./dashboard/Dashboard"
import Home from "./home/Home"



export default class ApplicationViews extends Component {

  render() {
    		console.log('from app js', this.props);
    return (
		<>
			<Route
				exact
				path="/"
				render={props => {
					return <Home />;
				}}
			/>

			<Route
				exact
				path="/"
				render={props => {
					return <Login user={this.props.user} {...props} />;
					// Returns the component which will show the dashboard
				}}
			/>

			<Route
				path="/login"
				render={props => {
					return <Login setUser={this.props.setUser} {...props} />;
				}}
			/>

			<Route
				exact
				path="/register"
				render={props => {
					return <Register {...this.props} props={this.props} />;
				}}
			/>
			<Route
				exact
				path="/dashboard"
				render={props => {
					if (this.props.user) {
						return <Dashboard {...props} />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
		</>
	);
  }
}