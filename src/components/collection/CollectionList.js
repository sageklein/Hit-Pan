// Author: Sage Klein
// Purpose of the file to display all make-up owned by user
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CollectionCard from "../collection/CollectionCard";

class CollectionList extends Component {
	//set the initial state
	state = {
		loadingStatus: true
	};

	render() {
		return (
			<div className="collection-block">
				<section className="collectionParent">
					{this.props.products.map(product => (
						<CollectionCard
							user={this.props.user}
							getData={this.getData}
							key={product.id}
							product={product}
							{...this.props}
						/>
					))}
				</section>
			</div>
		);
	}
}

export default withRouter(CollectionList);
