import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

class SearchList extends Component {
	//set the initial state
	state = {
		productName: "",
		productId: "",
		allProducts: [],
		products: [],
		loadingStatus: true,
		search: ""
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	newSearch = searchTerm => {
		this.props.getData(searchTerm);
	};

	render() {
		return (
			<div className="searchBtnDiv">
				<Input
					className="form-control mr-sm-2"
					type="search"
					id="search"
					placeholder="Search"
					aria-label="Search"
					onChange={this.handleFieldChange}
				></Input>
				<Button
					className="btn btn-outline-dark my-2 my-sm-0"
					type="submit"
					required
					onClick={() => this.newSearch(this.state.search)}
				>
					Search
				</Button>
			</div>
		);
	}
}

export default withRouter(SearchList);
