// Author: Sage Klein
// Purpose of the file to display all make-up on wishlist
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import WishCard from "./WishCard";
import "./wishlist.css";


class WishList extends Component {
	//set the initial state
	state = {
		loadingStatus: true
	};

	render() {
		return (
				<div className="wish-block">
					<section className="wishParent">
					{this.props.products.map(product => (
						<WishCard
							user={this.props.user}
							getData={this.getData}
							key={product.id}
							product={product}
							{...this.props}
						/>
					))}
					</section>
				</div>
		);
	}
}

export default withRouter(WishList);