// Author: Sage Klein
// Purpose of the file to display individual make-up items owned by the user

import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import CollectionList from "../collection/CollectionList";
import "../collection/collection.css";

class CollectionCard extends Component {
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
		APIManager.delete("collectionId").then(() => {
			this.props.getData();
		});
	};
	render() {
		return <h1>Collection Card</h1>;
	}
}

export default CollectionCard;

