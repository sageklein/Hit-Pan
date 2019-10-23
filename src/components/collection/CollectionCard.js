// Author: Sage Klein
// Purpose of the file to display individual make-up items owned by the user

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import APIManager from "../../modules/APIManager";
import "../collection/collection.css";

class CollectionCard extends Component {
	state = {
		modal: false
	};

	getAllCollection = () => {
    //invoke the save function in LocationManger and re-direct to the location list.
    this.setState({ loadingStatus: true });
    APIManager.save(this.props.collectionId).then(() =>
      this.props.history.push("/collections")
    );
  };
	handleDeleteCollect = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({ loadingStatus: true });
    APIManager.delete(this.props.collectionId).then(() =>
      this.props.history.push("/collections")
    );
  };

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Item{" "}
						<div className="card-searchResults">
							{this.props.collection}
						</div>
					</h3>

					<Button
						type="button"
						onClick={() =>
							this.handleDeleteCollect(this.props.collectionId)
						}
					>
						Delete
					</Button>
				</div>
			</div>
		);
	}
}

export default withRouter(CollectionCard);

