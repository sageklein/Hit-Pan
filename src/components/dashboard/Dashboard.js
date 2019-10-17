import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import WishList from "../wish/WishList";
import CollectionList from "../collection/CollectionList";
import SearchList from "../search/SearchList";


class Dashboard extends Component {
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

export default withRouter(Dashboard);
