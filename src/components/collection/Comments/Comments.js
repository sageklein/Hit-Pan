// Author: Sage Klein
// Purpose of the file to display individual make-up items owned by the user
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../collection/collection.css";
import React from "react";
import commentBox from "commentbox.io";

class Comments extends Component {

    componentDidMount() {
        this.removeCommentBox = commentBox('my-project-id');
    }

    componentWillUnmount() {
        this.removeCommentBox();
    }

    render() {
        return (
            <div className="commentBox" />
        );
    }
}
export default withRouter(Comments);
