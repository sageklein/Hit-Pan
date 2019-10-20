import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import WishList from "../wish/WishList";
import CollectionList from "../collection/CollectionList";
import SearchList from "../search/SearchList";
import "./dashboard.css";

class Dashboard extends Component {
	render() {
		return (
			<div className="container">
				<div className="text-block">
					<h3>Search Make Up</h3>
					<section className="searchListDash">
						<SearchList {...this.props} />
					</section>
				</div>

				<div className="text-block">
					<h3>View Your Wish List</h3>
					<section className="wishListDash">
						<WishList {...this.props} />
					</section>
				</div>

				<div class="text-block">
					<h3>View Your Collection</h3>
					<section className="collectionListDash">
						<CollectionList {...this.props} />
					</section>
				</div>
			</div>
		);
	}
}

export default withRouter(Dashboard);
