import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {
	isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;

	logOut = event => {
		this.props.clearUser();
		this.props.setUser();
		this.props.history.push("/login");
	};

	render() {
		return (
			<div className="">
				<nav className="navbar navbar-light bg-light justify-content-between">
					<Link class="navbar-brand" to="/dashboard">
						Hit Pan
					</Link>
					<form className="form-inline">
						<Button
							className="navbar-logout"
							type="submit"
							onClick={this.logOut}
						>
							Logout
						</Button>
					</form>
				</nav>
			</div>
		);
	}
}

export default withRouter(NavBar);
