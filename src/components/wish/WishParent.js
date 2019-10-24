import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import WishList from "../wish/WishList";
import APIManager from "../../modules/APIManager";
import "./wishlist.css";

class WishParent extends Component {
	state = {
		products: []
	};
	getData = () => {
		APIManager.getAll("products", sessionStorage.getItem("userId")).then(
			products => {
				this.setState({
					products: products
				});
			}
		);
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<>
				<div className="container">
					<div className="text-block">
						<section className="collectionParent">
							<WishList
								products={this.state.products}
								getData={this.getData}
								{...this.props}
							/>
						</section>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(WishParent);
