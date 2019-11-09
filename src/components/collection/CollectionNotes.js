import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import APIManager from "../../modules/APIManager";
import { withRouter } from "react-router-dom";


class CollectionNotes extends Component {
	state = {
		userId: parseInt(sessionStorage.getItem("credentials")),
		note: "",
		id: "",
		loadingStatus: false
	};
	// sets state to value of input field
	handleFieldChange = recordNotes => {
		const stateToChange = {};
		stateToChange[recordNotes.target.id] = recordNotes.target.value;
		this.setState(stateToChange);
	};

	// Make a new note object

	constructNewNote = note => {
		note.preventDefault();
		this.setState({ loadingStatus: true });
		const newNote = {
			id: this.state.id,
			note: this.state.note,
		};
		APIManager.put("collections", newNote, newNote.id).then(() =>
			this.props.history.push("/collectionParent")
		);
	};

	componentDidMount() {
				this.setState({
					note: this.props.product.note,
					id: this.props.product.id,
					loadingStatus: false
				});
			}

	render() {
		return (
			<>
				<Form onSubmit={this.constructNewNote} className="noteForm">
					<FormGroup className="noteFormGroup">
						<Label htmlFor="note"></Label>
						<Input
							type="text"
                            required
                            value={this.state.note}
							className="noteFormInput"
							onChange={this.handleFieldChange}
							id="note"
							placeholder=""
						></Input>
					</FormGroup>
					<Button
						type="submit"
						onClick={this.constructNewNote}
						className="button"
					>
						Submit
					</Button>
				</Form>
			</>
		);
	}
}

export default withRouter(CollectionNotes);
