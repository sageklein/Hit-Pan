// Author: Sage Klein
// Purpose of the file to display all make-up on wishlist

import React, { Component } from "react";
import WishCard from "./WishCard";
import "./wishlist.css";

class WishList extends Component {
	state = {
		wishs: []
	};

	componentDidMount() {
		APIManager.getAllMakeUp().then(wishs => {
			this.setState({
				wishs: wishs
			});
		});
	}

	render() {
		return (
			<>
				<h2>WISH LIST</h2>
				{this.state.wishs.map(wish => (
					<WishCard
						key={wish.id}
						wish={wish}
						userId={this.props.userId}
						getWish={this.props.getWish}
					/>
				))}
			</>
		);
	}
}
export default WishList;
