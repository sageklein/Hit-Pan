// Authors: Sage Klein
// Purpose of the File: to house the routes/paths to each component

import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login"
import Register from "./auth/Register"



export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <Login user={this.props.user} {...props} />
            // Returns the component which will show the dashboard
          }}
        />

        <Route exact path="/login" render={props => {
          return <Login triggerRender={this.props.triggerRender} setUser={this.props.setUser} {...props} />
        }} />

        <Route exact path="/register" render={props => {
          return <Register triggerRender={this.props.triggerRender} setUser={this.props.setUser} {...props} />
        }} />

      </React.Fragment>
    );
  }
}
