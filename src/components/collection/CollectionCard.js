// Author: Sage Klein
// Purpose of the file to display individual make-up items owned by the user
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
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
	onRate(rating, e) {
		this.setState({
			lastRating: rating,
			isRating: false
		});
		const { onRate: callback } = this.props;
		callback && callback({ ...e, rating });
	}

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<img
						src={this.props.product.image_link}
						alt=""
						className="prodImg"
					></img>
					<h3>{this.props.product.name}</h3>
					<h3 className="rating">
						<Rater
							total={5}
							rating={0}
							onRate={this.state.rating}
							onRating={this.state.rating}
						/>
					</h3>
					<Button
						className="deleteButton"
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
