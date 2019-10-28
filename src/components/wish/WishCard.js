// Author: Sage Klein
// Purpose of the file is to hold add wish list CRUD
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import APIManager from "../../modules/APIManager";
import "../wish/wishlist.css";

class WishCard extends Component {
	state = {
		modal: false
	};

	getAllWishItems = () => {
		//invoke the save function in LocationManger and re-direct to the location list.
		this.setState({ loadingStatus: true });
		APIManager.saveProduct(this.props.product.id)
			.then(() => this.props.getData())
			.then(() => this.props.history.push("/wishParent"));
	};
	handleDeleteWishItem = () => {
		//invoke the delete function in LocationManger and re-direct to the location list.
		this.setState({ loadingStatus: true });
		APIManager.delete("wishLists", this.props.product.id)
			.then(() => this.props.getData())
			.then(() => this.props.history.push("/wishParent"));
	};

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<img
						src={this.props.product.image_link}
						className="prodImg"
						alt=""
					></img>
					<h3>{this.props.product.name}</h3>
					<Button
						className="button"
						type="button"
						onClick={() =>
							this.handleDeleteWishItem(this.props.product)
						}
					>
						Delete
					</Button>
				</div>
			</div>
		);
	}
}

export default withRouter(WishCard);
