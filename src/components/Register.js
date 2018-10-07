import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="card text-white bg-primary mb-3 w-100">
        <div className="card-header">Register</div>
        <div className="card-body">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success float-right">Register</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
}
export default connect(mapStateToProps)(Header);
