// Authors: Sage Klein
// Purpose of the File: to house the routes/paths to each component

import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login"
import Register from "./auth/Register"
import Dashboard from "./dashboard/Dashboard"
import Home from "./home/Home"
import SearchList from "../components/search/SearchList"
import SearchCard from "../components/search/SearchCard"
import SearchParent from "../components/search/SearchParent";

export default class ApplicationViews extends Component {

  render() {
    		console.log('from app js', this.props);
    return (
		<>
			<Route
				exact
				path="/"
				render={props => {
					return <Home setUser={this.props.setUser} {...props} />;
				}}
			/>
			<Route
				exact
				path="/searchList"
				render={props => {
					return (
						<SearchList setUser={this.props.setUser} {...props} />
					);
				}}
			/>
			<Route
				exact
				path="/searchCard"
				render={props => {
					return (
						<SearchCard setUser={this.props.setUser} {...props} />
					);
				}}
			/>
			<Route
				exact
				path="/searchParent"
				render={props => {
					return (
						<SearchParent setUser={this.props.setUser} {...props} />
					);
				}}
			/>

			<Route
				exact
				path="/login"
				render={props => {
					return <Login setUser={this.props.setUser} {...props} />;
				}}
			/>
			<Route
				exact
				path="/register"
				render={props => {
					return <Register setUser={this.props.setUser} {...props} />;
				}}
			/>
			<Route
				exact
				path="/dashboard"
				render={props => {
					if (this.props.isAuthenticated()) {
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