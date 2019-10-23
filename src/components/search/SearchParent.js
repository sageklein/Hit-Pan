// Author: Sage Klein
// Purpose of the file to provide a link from dashboard to SearchList
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchCard from "../search/SearchCard"
import SearchList from "../search/SearchList"
import APIManager from "../../modules/APIManager";
import "./search.css";

class SearchParent extends Component {
    state= {
        products: []
    }
	getData = () => {
		APIManager.getAllMakeUp()
			.then(products => {
				this.setState({
                    products: products
                });
                console.log("makeUp Arrayray", this.state.products)
			});
    };
    
	render() {
		return (
			<>
				<div className="text-block">
					<section className="wishListDash">
						<SearchList getData={this.getData} {...this.props}/>
					</section>
				</div>
				<div className="text-block">
					<section className="wishListDash">
                        {this.state.products.map(product =>(
                        <SearchCard 
                        key={product.id}
                        product={product}
                        {...this.props}/> 
                        
                        )) 
                        }
					</section>
				</div>
			</>
		);
	}
}

export default withRouter(SearchParent);
