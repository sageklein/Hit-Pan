import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
import APIManager from "../../modules/APIManager";

class SearchCard extends Component {
	handleSaveWish = id => {
		APIManager.saveProduct(id).then(() => this.props.getData());
		this.props.history.push("/wishCard");
	};
	handleSaveCollect = () => {
		APIManager.saveProduct().then(() => this.props.getData());
		this.props.history.push("/collectionCard");
	};
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Item{" "}
						<span className="card-searchResults">
							{this.props.product.name}
						</span>
					</h3>
					<img src={this.props.product.image_link} alt="" />
					<div className="populateSearch"></div>
					<Button
						type="button"
						onClick={() =>
							this.handleSaveWish(this.props.productName)
						}
					>
						Save to WishList
					</Button>
					<Button
						type="button"
						onClick={this.handleSaveCollect}
					>
						Save to Collection
					</Button>
				</div>
			</div>
		);
	}
}


export default withRouter(SearchCard);