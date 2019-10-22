// Author: Sage Klein
// Purpose of the file to provide a link from dashboard to SearchList
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchCard from "../search/SearchCard"
import SearchList from "../search/SearchList"
 
class SearchParent extends Component {
	render() {
		console.log("MAKE UP LIST: Render");

		return (
			<>
				<div className="container-cards">
					<SearchList />
				</div>

				<div className="container-cards">
					<SearchCard />
				</div>
			</>
		);
	}
}

export default withRouter(SearchParent);
