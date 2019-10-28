import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

class SearchList extends Component {
	//set the initial state
	state = {
		productName: "",
		productType: "",
		productId: "",
		allProducts: [],
		products: [],
		brand: "",
		loadingStatus: true,
		search: ""
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};


	newSearch = (brand, productType) => {
		this.props.getData(brand, productType);
		console.log(brand, productType);
	};


	// search = () => {
	// 	let brand = document.getElementById("brand");
	// 	let productType = document.getElementById("productType");
	// 	let brandValue = brand.value
	// 	let productValue = productType.value
	// 	console.log(brandValue, productValue)
	// 	this.props.getData(brandValue, productValue)

	// }

	render() {
		return (
			<div className="searchBtnDiv">
				<select
					value={this.state.brand}
					className="form-control"
					type="select"
					id="brand"
					placeholder="Search Brand"
					aria-label="Search"
					onChange={this.handleFieldChange}
				>
					<option>Choose Brand</option>
					<option value="Alva">Alva</option>
					<option value="W3ll People">W3ll People</option>
					<option value="Pure Anand">Pure Anand</option>
					<option value="Penny Lane Organics">
						Penny Lane Organics
					</option>
				</select>
				<Input
					className="form-control"
					type="search"
					id="productType"
					placeholder="Search Product"
					aria-label="Search"
					onChange={this.handleFieldChange}
				></Input>
				<Button
					className="button"
					type="submit"
					required
					onClick={this.search}
					
				>
					Search
				</Button>
			</div>
		);
	}
}

export default withRouter(SearchList);
