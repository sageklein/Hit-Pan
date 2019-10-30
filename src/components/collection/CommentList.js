import "react-rater/lib/react-rater.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../collection/collection.css";
import Comment from "../collection/Comment";



class CommentList extends Component {
	render() {
		const CommentNodes = this.props.data.map(comment => {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.txt}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				<h2>Comments:</h2>
				{CommentNodes}
			</div>
		);
	}
}
export default withRouter(CommentList);
