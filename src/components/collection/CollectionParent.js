// Author: Sage Klein
// Purpose of the file to provide a link from dashboard to SearchList
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CollectionList from "../collection/CollectionList";
import APIManager from "../../modules/APIManager";
import "./collection.css";

class CollectionParent extends Component {
	state = {
		products: []
	};
	getData = () => {
		console.log(sessionStorage.getItem("userId"));
		APIManager.getAll("collections", sessionStorage.getItem("userId")).then(
			products => {
				this.setState({
					products: products
				});
			}
		);
	};

	componentDidMount() {
		this.getData();
	}

	newCollection = () => {
		this.props.getData();
	};

	render() {
		return (
			<>
				<div className="container">
					<div className="text-block">
						<section className="collectionParent">
							<CollectionList
								products={this.state.products}
								getData={this.getData}
								{...this.props}
							/>
						</section>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(CollectionParent);
