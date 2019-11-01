import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {
	isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;

	logOut = event => {
		this.props.clearUser();
		this.props.history.push("/login");
	};

	render() {
		return (
			<div className="navLinks">
				<nav className="navbar justify-content-between">
					<Link className="navbar-brand" to="/dashboard">
						Hit Pan
					</Link>
					<form className="form-inline">
						<Button
							className="navbar-logout"
							color="bg-light"
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
