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
		collections: [],
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
			<div className="searchBtnDiv">
				<section className="wishListDash">
					{this.state.products.map(product => (
						<CollectionCard
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
