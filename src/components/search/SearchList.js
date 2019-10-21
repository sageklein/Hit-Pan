import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

class SearchList extends Component {
	render() {
		return (
			<div className="form-inline">
				<Input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				></Input>
				<Button
					className="btn btn-outline-success my-2 my-sm-0"
					type="submit"
					onClick={this.toggle}
				>
					Search
				</Button>
			</div>
		);
	}
}

export default withRouter(SearchList);
