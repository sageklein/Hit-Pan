import React, { Component } from "react";
import { withRouter, Link, } from "react-router-dom";
import WishMain from "../wish/WishMain";
import CollectionMain from "../collection/CollectionMain";
import SearchMain from "../search/SearchMain";
import "./dashboard.css";



class Dashboard extends Component {

    render() {
		return (
			<div className="background">
				<div className="container">
					<div className="text-block">
						<section className="searchListDash">
							<Link className="linkSearch" to="/searchParent">
								<div className="textContainer">
									<h3>
										{" "}
										<span>Search</span>
									</h3>
								</div>
								{/* Search Make Up */}
							</Link>
							<SearchMain {...this.props} />
						</section>
					</div>

					<div className="text-block">
						<section className="wishListDash img:hover">
							<Link className="linkSearch" to="WishParent">
								<h3>
									<span>View Your Wish List</span>
								</h3>
							</Link>
							<WishMain {...this.props} />
						</section>
					</div>

					<div className="text-block">
						<section className="collectionListDash">
							<Link className="linkSearch" to="/collectionParent">
								<h3>
									<span>View Your Collection</span>
								</h3>
							</Link>
							<CollectionMain {...this.props} />
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Dashboard);
