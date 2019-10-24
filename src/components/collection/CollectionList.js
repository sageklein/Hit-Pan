// Author: Sage Klein
// Purpose of the file to display all make-up owned by user
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CollectionCard from "../collection/CollectionCard";

class CollectionList extends Component {
	//set the initial state
	state = {
		collectionName: "",
		collectionId: "",
		allCollection: [],
		loadingStatus: true
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	newCollection = () => {
		this.props.getData();
	};

	render() {
		return (
			<div className="text-block">
				<section className="collectionParent">
					{this.state.collections.map(product => (
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
