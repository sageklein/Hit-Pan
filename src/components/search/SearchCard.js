import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
import APIManager from "../../modules/APIManager";

class SearchCard extends Component {
	state = {
		productName: "",
		productId: "",
		allProducts: [],
		products: [],
		loadingStatus: true
	};
	handleSaveWish = obj => {
		const newObj = {
			userId: parseInt(sessionStorage.getItem("userId")),
			name: obj.name,
			brand: obj.brand,
			price: obj.price,
			img_link: obj.img_img
		};
		APIManager.saveProduct(newObj)
			.then(response => response)
			.then(() => this.props.getData());
		this.props.history.push("/wishParent");
	};
	handleSaveCollect = obj => {
		const newObj = {
			userId: parseInt(sessionStorage.getItem("userId")),
			name: obj.name,
			brand: obj.brand,
			price: obj.price,
			img_link: obj.img_img,
			productId: obj.productId
		};
		APIManager.saveProduct(newObj)
			.then(response => response)
			.then(() => this.props.getData());
		this.props.history.push("/collectionParent");
	};
	render() {
		console.log(this.props.product);
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						<span className="card-searchResults">
							{this.props.product.name}
						</span>
					</h3>
					<img src={this.props.product.image_link} alt="" />
					<div className="populateSearch"></div>
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