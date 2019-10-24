import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import WishMain from "../wish/WishMain";
import CollectionMain from "../collection/CollectionMain";
import SearchMain from "../search/SearchMain";
import "./dashboard.css";

class Dashboard extends Component {
    render() {
		return (
			<div className="container">
				<div className="text-block">
					<section className="searchListDash">
						<Link to="/searchParent">
							Search Make Up
						</Link>
						<SearchMain {...this.props} />
					</section>
				</div>

				<div className="text-block">
					<section className="wishListDash">
						<Link to="WishParent">
							View Your Wish List
						</Link>
						<WishMain {...this.props} />
					</section>
				</div>

				<div className="text-block">
					<section className="collectionListDash">
						<Link to="/collectionParent">
							View Your Collection
						</Link>
						<CollectionMain {...this.props} />
					</section>
				</div>
			</div>
		);
	}
}

export default withRouter(Dashboard);
