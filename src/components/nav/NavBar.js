import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css'



class NavBar extends Component {

    isAuthenticated = () => sessionStorage.getItem("activeUser") !== null

    logOut = (event) => {
        this.props.clearUser()
        this.props.triggerRender()
        this.props.history.push("/login")
    }


    render() {
        return (
            <nav className="">
        <div className="">
 
        </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);
