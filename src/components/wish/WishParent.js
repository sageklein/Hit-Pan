import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import WishCard from "..wish/WishCard";
import WishList from "../wish/wishList";
import APIManager from "../../modules/APIManager";
import "./search.css";

class WishParent extends Component {

  //define what this component needs to render
  state = {
    wishs: []
  };
  deleteWish = id => {
    APIManager.delete(id).then(() => {
      APIManager.getAll().then(newWishs => {
        this.setState({
          wishs: newWishs
        });
      });
    });
  };

  getData = () => APIManager.getAll();

  componentDidMount() {
    console.log("WISH LIST: ComponentDidMount");
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll().then(wishs => {
      this.setState({
        wishs: wishs
      });
    });
  }

  render() {

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/wishs/new");
            }}
          >
            Save Wish
          </button>
        </section>

        <div className="container-cards">
          {this.state.wishs.map(wish => (
            <WishList
              key={wish.id}
              wish={wish}
              deleteWish={this.deleteWish}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default withRouter(WishParent);
