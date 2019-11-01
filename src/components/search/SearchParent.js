// Author: Sage Klein
// Purpose of the file to provide a link from dashboard to SearchList
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchCard from "../search/SearchCard";
import SearchList from "../search/SearchList";
import APIManager from "../../modules/APIManager";
import "./search.css";

class SearchParent extends Component {
	state = {
		products: [],
		hasSearched: false
	};
	getData = (brand, productType) => {
		APIManager.getAllMakeUp(brand, productType).then(products => {
			this.setState({
				products: products,
				hasSearched: true
			});
		});
	};

	render() {
		console.log(this.state.products);
		let results = <span>No Results Found</span>;
		if (this.state.products.length > 0 || !this.state.hasSearched) {
			results = this.state.products.map(product => (
				<SearchCard
					getData={this.getData}
					key={product.id}
					product={product}
					{...this.props}
				/>
			));
		}
		return (
			<>
				<div className="container">
					<div className="text-block">
						<section className="searchListDash">
							<SearchList
								getData={this.getData}
								{...this.props}
							/>
						</section>
					</div>
					<div className="text-block">
						<section className="apiDash">
							{results}
						</section>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(SearchParent);
