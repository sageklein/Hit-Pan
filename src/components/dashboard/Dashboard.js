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
						<Link className="linkSearch" to="/searchParent">
							Search Make Up
						</Link>
						<div className="imgParent">
							<img
								className="imgSpan"
								src={require("../../images/splashPic.jpeg")}
								alt=""
							/>
						</div>
						<SearchMain {...this.props} />
					</section>
				</div>

				<div className="text-block">
					<section className="wishListDash">
						<Link className="linkWish" to="WishParent">
							View Your Wish List
						</Link>
						<div className="imgParent">
							<img
								className="imgSpan"
								src={require("../../images/splashPic.jpeg")}
								alt=""
							/>
						</div>
						<WishMain {...this.props} />
					</section>
				</div>

				<div className="text-block">
					<section className="collectionListDash">
						<Link className="linkCollection" to="/collectionParent">
							View Your Collection
						</Link>
						<div className="imgParent">
							<img
								className="imgSpan"
								src={require("../../images/splashPic.jpeg")}
								alt=""
							/>
						</div>
						<CollectionMain {...this.props} />
					</section>
				</div>
			</div>
		);
	}
}

export default withRouter(Dashboard);
