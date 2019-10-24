// Author: Sage Klein
// Purpose of the file to provide a link from dashboard to SearchList
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CollectionList from "../collection/CollectionList";
import APIManager from "../../modules/APIManager";
import "./collection.css";

class CollectionParent extends Component {
	state = {
		collections: []
	};
	getData = () => {
        console.log(sessionStorage.getItem("userId"))
		APIManager.getAllCollection(sessionStorage.getItem("userId")).then(collections => {
            console.log(collections) 
			this.setState({
				collections: collections
			});
			console.log("makeUp Arrayray", this.state.collections);
		});
    };
    
    componentDidMount(){
       this.getData() 
    }

	render() {
		return (
			<>
				<div className="container">
					<div className="text-block">
						<section className="collectionParent">
							<CollectionList
                            collections={this.state.collections}
								getData={this.getData}
								{...this.props}
							/>
						</section>
					</div>

				</div>
			</>
		);
	}
}

export default withRouter(CollectionParent);