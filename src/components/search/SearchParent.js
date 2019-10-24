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
		products: []
	};
	getData = (searchTerm) => {
		console.log(searchTerm);
		APIManager.getAllMakeUp(searchTerm).then(products => {
			console.log(products);
			this.setState({
				products: products
			});
		});
	};

	render() {
		return (
			<>
				<div className="container">
					<div className="text-block">
						<section className="wishListDash">
							<SearchList
								getData={this.getData}
								{...this.props}
							/>
						</section>
					</div>
					<div className="text-block">
						<section className="wishListDash">
							{this.state.products.map(product => (
								<SearchCard
									getData={this.getData}
									key={product.id}
									product={product}
									{...this.props}
								/>
							))}
						</section>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(SearchParent);
