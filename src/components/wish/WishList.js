// Author: Sage Klein
// Purpose of the file to display all make-up on wishlist

import React, { Component } from "react";
import WishCard from "./WishCard";
import "./wishlist.css";


class WishList extends Component {
	handleDelete = id => {
		APIManager.delete(id).then(() => this.props.getData());
	};
	render() {
		return (
			<div className="card">
				<div className="card-content">
					{/* <picture>
						<img src={require(")} alt="" />
					</picture> */}
					<h3>
						Name:{" "}
						<span className="card-wish">
							{firstLetterCase(this.props.wish.name)}
						</span>
					</h3>
					<p>Type: {this.props.wish.type}</p>
					<Link to={`/wishs/${this.props.wish.id}`}>
						<Button>Details</Button>
					</Link>
					<Button
						type="button"
						onClick={() => this.handleDelete(this.props.wish.id)}
					>
						Discharge
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
	}
}
export default withRouter(WishList);
