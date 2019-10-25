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
			<div className="card">
				<span className="card-searchResults">
					<h3 className="nameField">{this.props.product.name}
					</h3>
					<h2 className="descriptionField">
						{this.props.product.description}
					</h2>
				</span>
				<span className="imgSpan">
					<img src={this.props.product.image_link} alt="" />
				</span>
				<div className="btn">
					<Button
						type="button"
						onClick={() => this.handleSaveWish(this.props.product)}
					>
						Save to Wish List
					</Button>
					<Button
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