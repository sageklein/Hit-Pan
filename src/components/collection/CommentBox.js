import "react-rater/lib/react-rater.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../collection/collection.css";
import CommentForm from "../collection/CommentForm"
import CommentList from "../collection/CommentList";

class CommentBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};

		this.__loadComments = this.__loadComments.bind(this);
	}

	componentDidMount() {
		this.__loadComments();
		setInterval(this.__loadComments, this.props.longpoll);
	}

	__loadComments() {
		this.setState({ data: [] });
		const comments = this.props.database.child("comments");
		comments.once("value").then(s => {
			s.forEach(c => {
				var author = c.val().author;
				var txt = c.val().txt;
				var key = c.key();
				const newData = {};
				newData.author = author;
				newData.txt = txt;
				newData.key = key;
				console.log(newData);
				console.log(this);

				this.setState({ data: this.state.data.concat(newData) });
			});
		});
	}

	_handleCommentSubmit(comment) {
		this.props.database.child("comments").push({
			author: comment.author,
			txt: comment.txt
		});
		comment.key = Math.random();
		this.setState({ data: this.state.data.concat(comment) });
	}

	render() {
		return (
			<div className="commentBox">
				<CommentForm
					onCommentSubmit={this._handleCommentSubmit.bind(this)}
				></CommentForm>
				<CommentList data={this.state.data}></CommentList>
			</div>
		);
	}
}
export default withRouter(CommentBox);