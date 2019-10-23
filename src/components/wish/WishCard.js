// Author: Sage Klein
// Purpose of the file is to hold add wish list CRUD

import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

import "./wishlist.css";

class WishCard extends Component {
  state = {

  }

  handleClick = () => {
    const newOrderObj = {
      userId: this.props.userId,
      wishId: this.props.wish.id
    }
    APIManager.save(addToCollection)
    .then(() => {
      this.props.getWishs();
		this.props.history.push("/collectionCard");
    })
  }

  render() {

    return (
      <>
      <h2>{this.props.wish.name}</h2>
      <Button type="button" onClick={this.handleClick}>Delete</Button>
      </>
    )
  }

}

export default WishCard;
