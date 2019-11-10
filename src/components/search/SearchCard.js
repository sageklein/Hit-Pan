import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
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
			productId: obj.productId,
			note: ""
		};
		APIManager.saveProductToCollection(newObj)
			.then(response => response)
			.then(() => this.props.getData())
			.then(() => this.props.history.push("/collectionParent"));
	};
	render() {
		return (
			<div className="makeup-card">
				<div className="card-searchResults">
					<div className="nameField">{this.props.product.name}</div>
					<div className="descriptionField">
						{this.props.product.description}
					</div>
					<div className="priceField">{this.props.product.price}</div>
				</div>
				<div className="imgSpan">
					<img
						className="apiImage"
						src={this.props.product.image_link}
						alt=""
					/>
				</div>
				<div className="save-btn">
					<Button
						className="wideBtn button"
						type="button"
						onClick={() => this.handleSaveWish(this.props.product)}
					>
						Save to Wish List
					</Button>
					<Button
						className="wideBtn button"
						type="button"
						onClick={() =>
							this.handleSaveCollect(this.props.product)
						}
					>
						Save to Collection
					</Button>
				</div>
			</div>
		);
	}
}

export default withRouter(SearchCard);
