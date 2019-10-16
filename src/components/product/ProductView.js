import React, { Component } from "react";
import WishList from "../wishlist/WishList";
import CollectionList from "../collection/CollectionList";

class ProductView extends Component {
	state = {};

	render() {
		return (
			<>
				<WishList />
				<CollectionList />
			</>
		);
	}
}

export default ProductView;
