// Author: Sage Klein
// Purpose of the file is to hold add wish list CRUD

import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import "./wishlist.css";

class WishCard extends Component {
	state = {
		modal: false
	};

	toggle = () => {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	};

	activeUserId = parseInt(sessionStorage.getItem("userId"));

	handleDelete = id => {
		APIManager.delete("wishId").then(() => {
			this.props.getData();
		});
	};
	render() {
		return <h1>Wish Card</h1>;
	}
}

export default WishCard;
