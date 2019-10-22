import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import APIManager from "../../modules/APIManager"

class SearchList extends Component {
	//set the initial state
	state = {
		productName: "",
		productId: "",
		allProducts: [],
		products: [],
		loadingStatus: true
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};
	saveProduct = id => {
		APIManager.save(id).then(() => this.props.getData());
	};
	SaveNewProduct = evt => {
		// evt.preventDefault();
		// if (this.state.productName === "" ) {
		// 	window.alert("Don't Forget to Search Something");
		// } else {
					this.setState({ loadingStatus: true });
					const product = {
						name: this.state.productName
					};

					// Create the product and redirect user to product card
					APIManager.getAllMakeUp(product).then(() =>
						this.props.history.push("/searchCard")
					);
				// }
	};
	render() {
		return (
			<div className="searchBtnDiv">
				<Input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
                    aria-label="Search"
                    onChange={this.handleFieldChange}
				></Input>
				<Button
					className="btn btn-outline-success my-2 my-sm-0"
					type="submit"
					required
                    onClick={this.SaveNewProduct}
				>
					Search
				</Button>
			</div>
		);
	}
}

export default withRouter(SearchList);
