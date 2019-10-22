import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
import APIManager from "../../modules/APIManager";

class SearchCard extends Component {
  handleSave = id => {
    APIManager.saveProduct(id).then(() => this.props.getData());
  };
  render() {
    return (
		<div className="card">
			<div className="card-content">
				<h3>
					Item{" "}
					<span className="card-searchResults">
						{this.props.productName}
					</span>
				</h3>
                <div className="populateSearch">
                    
                </div>
				<Button
					type="button"
					onClick={() => this.handleSave(this.props.productName)}
				>
					Save
				</Button>

			</div>
		</div>
	);
  }
}


export default withRouter(SearchCard);