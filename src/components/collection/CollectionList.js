// Author: Sage Klein
// Purpose of the file to display all make-up owned by user

import React, { Component } from "react";
import CollectionCard from "../collection/CollectionCard";
import "../collection/collection.css";

class CollectionList extends Component {
	render() {
		return (
			<>
				<h2>Collection List</h2>
				<CollectionCard />
			</>
		);
	}
}

export default CollectionList;
