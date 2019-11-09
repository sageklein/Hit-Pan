import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { CardImg } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {

	logOut = () => {
		this.props.clearUser();
		this.props.history.push("/login");
		console.log("logout")
	};

	render() {
		console.log("is Authenticated", this.props.isAuthenticated())
		return (
			<div className="navLinks">
				<nav className="navbar justify-content-between">
					<Link className="logoLink" to="/Dashboard">
						<CardImg
							className="logo"
							alt="Hit Pan"
							src={require("../../images/logo.png")}
						/>
					</Link>
					<form className="form-inline">
						{this.props.isAuthenticated() ? (

								<CardImg
									className="logout"
									alt="Hit Pan"
									src={require("../../images/logout.png")}
									onClick={this.logOut}
								/>
						) : null}
					</form>
				</nav>
			</div>
		);
	}
}

export default withRouter(NavBar);
