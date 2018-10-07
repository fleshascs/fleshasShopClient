import React, { Component } from "react";
import { Balance, History, Login, Register } from "../../components";

class Home extends Component {
  render() {
    console.log(this.props.match.params.name);
    return (
      <div className="container " style={{ paddingTop: "10px" }}>
        <div className="row">
          <div className="col">
            <Login />
          </div>
          <div className="col">
            <Register />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Balance />
          </div>
          <div className="col-sm-8">
            <History />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
