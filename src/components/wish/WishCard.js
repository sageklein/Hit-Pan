// Author: Sage Klein
// Purpose of the file is to hold add wish list CRUD

import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import "./wishlist.css";

class WishCard extends Component {
	state = {
		wish: "",
		type: "",
		loadingStatus: true,
		imageUrl: "",
		collectionId: "",
		isWishValid: false
	};

	handleDelete = () => {
		//invoke the delete function in APIManager and re-direct to the wish list.
		this.setState({ loadingStatus: true });
		APIManager.delete(this.props.id).then(() =>
			this.props.history.push("/wishs")
		);
	};

	componentDidMount() {
		//get(id) from APIManager and hang on to that data; put it into state
		APIManager.get(this.props.id).then(wish => {
			if (wish.name) {
				let isWishValid = true;
			}
			this.setState({
				name: wish.name,
				id: wish.id,
				collectionId: wish.collectionId,
				loadingStatus: false
			});
		});
	}

	render() {
		if (this.state.loadingStatus) return <p>Loading...</p>;
		if (!this.state.loadingStatus && this.state.isWishValid) {
			return (
				<div className="card">
					<div className="card-content">
						{/* <picture>
            <img src={require(`./Images${this.state.url}`)} alt="My Dog" />
          </picture> */}
						<h3>
							Name:{" "}
							<span style={{ color: "darkslategrey" }}>
								{this.state.name}
							</span>
						</h3>
						<p>Type: {this.state.type}</p>

						<Button
							type="button"
							disabled={this.state.loadingStatus}
							onClick={this.handleDelete}
						>
							Delete
						</Button>
						<Button
							type="button"
							onClick={() => {
								this.props.history.push(
									`/wishs/${this.props.wish.id}/edit`
								);
							}}
						>
							Edit
						</Button>
					</div>
				</div>
			);
		} else {
			return <Redirect to="WishList" />;
		}
	}
}

export default withRouter(WishCard);
