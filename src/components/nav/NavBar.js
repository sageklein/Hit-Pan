import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import Home from "../home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {
	isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;

	logOut = event => {
		this.props.clearUser();
		this.props.triggerRender();
		this.props.history.push("/login");
	};

	render() {
		return (
			<div className="">
				<nav className="navbar navbar-light bg-light justify-content-between">
					<Button
						className="navbar-home"
						type="submit"
						onClick={Home}
					>
						Hit Pan
					</Button>
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
