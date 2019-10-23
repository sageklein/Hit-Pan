// Author: Sage Klein
// Purpose of the file to provide a link from dashboard to SearchList
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CollectionCard from "..collection/CollectionCard";
import CollectionList from "../search/CollectionList";
import APIManager from "../../modules/APIManager";
import "./search.css";

class CollectionParent extends Component {
	state = {
		collections: []
	};
	getData = () => {
		APIManager.getAllCollection("").then(collections => {
			this.setState({
				collections: collections
			});
			console.log("makeUp Arrayray", this.state.collections);
		});
	};

	render() {
		return (
			<>
				<div className="container">
					<div className="text-block">
						<section className="collectionParent">
							<CollectionList
								getData={this.getData}
								{...this.props}
							/>
						</section>
					</div>
					<div className="text-block">
						<section className="collectionParent">
							{this.state.collections.map(collection => (
								<CollectionCard
									key={collection.id}
									collection={collection}
									{...this.props}
								/>
							))}
						</section>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(CollectionParent);
