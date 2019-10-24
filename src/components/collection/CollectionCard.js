// Author: Sage Klein
// Purpose of the file to display individual make-up items owned by the user

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import APIManager from "../../modules/APIManager";
import "../collection/collection.css";

class CollectionCard extends Component {
	state = {
		modal: false
	};

	getAllCollection = () => {
		//invoke the save function in LocationManger and re-direct to the location list.
		this.setState({ loadingStatus: true });
		APIManager.saveProduct(this.props.product.id).then(
			() => 
			this.props.history.push("/collectionParent")
		);
	};
	handleDeleteCollect = () => {
		//invoke the delete function in LocationManger and re-direct to the location list.
		this.setState({ loadingStatus: true });
		APIManager.delete("products", this.props.product.id).then(
			() => this.props.history.push("/collectionParent")
		);
	};

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						<div className="card-searchResults">
							{this.props.product.name}
						</div>
					</h3>
					<Button
						type="button"
						onClick={() =>
							this.handleDeleteCollect(this.state.product)
						}
					>
						Delete
					</Button>
				</div>
			</div>
		);
	}
}

export default withRouter(CollectionCard);