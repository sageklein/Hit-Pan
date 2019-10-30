import "react-rater/lib/react-rater.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../collection/collection.css";



class Comment extends Component {
	//Workaround from React protection from XRR attack.
	rawMarkup() {
		var rawMarkup = marked(this.props.children.toString(), {
			sanitize: true
		});
		return { __html: rawMarkup };
	}

	render() {
		return (
			<div className="comment">
				<h3 className="commentAuthor">{this.props.author}</h3>

				<span
					dangerouslySetInnerHTML={this.rawMarkup()}
					className="commentBody"
				/>
			</div>
		);
	}
}
export default withRouter(Comment);
