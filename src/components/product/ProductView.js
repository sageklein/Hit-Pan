import React, { Component } from "react";
import WishList from "../wish/WishList";
import CollectionList from "../collection/CollectionList";
import APIManager from "../../modules/APIManager";
import WishCard from "../wish/WishCard";

class WishWithCollections extends Component {
  state = {
    wishs: {},
    collections: []
  };

  getData = () => {
    APIManager.getWithCollections(this.props.match.params.collectionId).then(
      APIResult => {
        this.setState({
          collection: APIResult,
          wishs: APIResult.wishs
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
        <p>Wish List: {this.state.wish.name}</p>
        {this.state.wishs.map(wish => (
          <WishCard
            key={wish.id}
            wish={wish}
            {...this.props}
            getData={this.getData}
          />
        ))}
      </div>
      
    );
  }
}

export default WishWithCollections;
