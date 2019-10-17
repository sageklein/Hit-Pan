import React, { Component } from "react";
import WishList from "../wish/WishList";
import CollectionList from "../collection/CollectionList";


class SearchList extends Component {
	render() {
		return (
			<div className="main">
				<section className="searchListDash">
					<SearchList {...this.props} />
				</section>
				<section className="wishListDash">
					<WishList {...this.props} />
				</section>
				<section className="collectionListDash">
					<CollectionList {...this.props} />
				</section>
			</div>
		);
	}
}

export default SearchList;
