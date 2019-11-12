// Author: Sage Klein
// Purpose of the file to provide a link from dashboard to SearchList
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CollectionList from "../collection/CollectionList";
import APIManager from "../../modules/APIManager";
import "./collection.css";

class CollectionParent extends Component {
	state = {
		collections: []
	};
	getData = () => {
		APIManager.getAll("collections", sessionStorage.getItem("userId")).then(
			collection => {
				this.setState({
					collections: collection
				});
			}
		);
	};

	componentDidMount() {
		this.getData();
	}
	render() {
		return (
			<>
				<div className="background-collection">

							<section className="collectionParent">
								<CollectionList
									collections={this.state.collections}
									getData={this.getData}
									{...this.props}
								/>
							</section>
						</div>

			</>
		);
	}
}

export default withRouter(CollectionParent);
