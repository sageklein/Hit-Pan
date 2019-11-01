import { withRouter } from "react-router-dom";
import React, { Component } from "react";
// import { Button } from "reactstrap";
import APIManager from "../../modules/APIManager";

class SearchCard extends Component {
	state = {
		allProducts: [],
		products: [],
		loadingStatus: true
	};
	handleSaveWish = obj => {
		const newObj = {
			userId: parseInt(sessionStorage.getItem("userId")),
			name: obj.name,
			description: obj.description,
			brand: obj.brand,
			price: obj.price,
			image_link: obj.image_link
		};
		APIManager.saveProductToWish(newObj)
			.then(response => response)
			.then(() => this.props.getData())
			.then(() => this.props.history.push("/wishParent"));
	};
	handleSaveCollect = obj => {
		const newObj = {
			userId: parseInt(sessionStorage.getItem("userId")),
			name: obj.name,
			description: obj.description,
			brand: obj.brand,
			price: obj.price,
			image_link: obj.image_link,
			productId: obj.productId
		};
		APIManager.saveProductToCollection(newObj)
			.then(response => response)
			.then(() => this.props.getData())
			.then(() => this.props.history.push("/collectionParent"));
	};
	render() {
		console.log(this.props.product);
		return (
			<div>
				<div className="card-searchResults">
					<h3 className="nameField">{this.props.product.name}</h3>
					<h2 className="descriptionField">
						{this.props.product.description}
					</h2>
					<h1 className="descriptionField">
						{this.props.product.price}
					</h1>
				</div>
				<div className="imgSpan">
					<img
						className="apiImage"
						src={this.props.product.image_link}
						alt=""
					/>
				</div>
				<div className="save-btn">
					<button
						className="button"
						type="button"
						onClick={() => this.handleSaveWish(this.props.product)}
					>
						Save to Wish List
					</button>
					<button
						className="button"
						type="button"
						onClick={() =>
							this.handleSaveCollect(this.props.product)
						}
					>
						Save to Collection
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(SearchCard);
