// Author: Sage Klein
// Purpose of the file to display individual make-up items owned by the user
import Rating from "react-rating";
import { Button } from "reactstrap";
import "react-rater/lib/react-rater.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import APIManager from "../../modules/APIManager";
// import Comment from "./CommentForm";
import "../collection/collection.css";

class CollectionCard extends Component {
	state = {
		modal: false
	};

	getAllCollection = () => {
		//invoke the save function in LocationManger and re-direct to the location list.
		this.setState({ loadingStatus: true });
		APIManager.saveProductToCollection(this.props.product.id)
			.then(() => this.props.getData())
			.then(() => this.props.history.push("/collectionParent"));
	};
	handleDeleteCollect = () => {
		//invoke the delete function in LocationManger and re-direct to the location list.
		this.setState({ loadingStatus: true });
		APIManager.delete("collections", this.props.product.id)
			.then(() => this.props.getData())
			.then(() => this.props.history.push("/collectionParent"));
	};
	setCondition = evt => {
		let collections = {
			rating: evt
		};
		APIManager.patch(
			"collections",
			collections,
			this.props.product.id
		).then(response => response);
	};
	render() {
		return (
			<div className="collectCard">
				<div className="card-content">
					<img
						src={this.props.product.image_link}
						alt=""
						className="prodImg"
					></img>
					<div className="cardProdName">
						<h2 className="name">
							Product Name: {this.props.product.name}
						</h2>
					</div>
					<div className="cardProdPrice">
						<h2 className="price">
							Product Price: ${this.props.product.price}
						</h2>
					</div>
					<div className="rating">
						<h2 className="rate">Rate Product:</h2>
						<Rating
							id="condition"
							initialRating={this.props.product.rating}
							onClick={evt => this.setCondition(evt)}
						/>
					</div>
					{/* <div>
						<h2>Add Notes:</h2>
						<Comment />
					</div> */}
					<div className="btn">
						<Button
							className="button"
							type="button"
							onClick={() =>
								this.handleDeleteCollect(this.state.product)
							}
						>
							Delete
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CollectionCard);

