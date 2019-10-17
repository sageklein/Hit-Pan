import React, { Component } from "react";
import WishList from "../wish/WishList";
import CollectionList from "../collection/CollectionList";

class ProductView extends Component {
	state = {};

	render() {
		return (
			<>
				<WishList />
				<CollectionList />
                
			</>
		);
	}
}

export default ProductView;

import React, { Component } from "react";
import WishList from "../wish/WishList";
import CollectionList from "../collection/CollectionList";
import APIManager from "../../modules/APIManager";
import AnimalCard from "../animal/AnimalCard";

class EmployeeWithAnimals extends Component {
  state = {
    employee: {},
    animals: []
  };

  getData = () => {
    EmployeeManager.getWithAnimals(this.props.match.params.employeeId).then(
      APIResult => {
        this.setState({
          employee: APIResult,
          animals: APIResult.animals
        });
      }
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="card">
        <p>Employee: {this.state.employee.name}</p>
        {this.state.animals.map(animal => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            {...this.props}
            getData={this.getData}
          />
        ))}
      </div>
    );
  }
}

export default EmployeeWithAnimals;
