// Author: Sage Klein
// Purpose of the file to display all make-up on wishlist

import React, { Component } from "react";
import WishCard from "./WishCard";
import "./wishlist.css";

class WishList extends Component {
	render() {
        return(
            <>
			<h2>Wish List</h2>
			<WishCard />
            </>
         )
	}
}

export default WishList;
