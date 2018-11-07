import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import Logout from "./Logout";
// import Login from "./LoginForm";

// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
        <div className="fixed-bottom">
          {this.props.user ? (
            <Logout />
          ) : (
            <div>
              <Link to="/login" className="btn btn-info m-2 float-left">
                Login
              </Link>
              <Link to="/signup" className="btn btn-success m-2 float-left">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

{
}

const mapStateToProps = state => {
  return {
    user: state.rootAuth.user
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
