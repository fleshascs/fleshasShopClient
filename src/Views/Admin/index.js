import React, { Component } from "react";
import { Balance, History } from "../../components";

class Admin extends Component {
  render() {
    console.log(this.props.match.params.name);
    return (
      <div className="container " style={{ paddingTop: "10px" }}>
        <div className="row">
          <div className="col">
            <Balance />
          </div>
          <div className="col-sm-8">
            <div className="card text-white bg-primary mb-3 w-100">
              <div className="card-header">Privilegies type</div>
              <div className="card-body ">
                <div className="d-flex">
                  <div className="col-sm-6">
                    <button className="btn btn-primary w-100 mb-1">VIP</button>
                    <button className="btn btn-primary w-100 mb-1">
                      ADMIN
                    </button>
                    <button className="btn btn-primary w-100 mb-1">
                      SUPER ASMIN
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button className="btn btn-primary w-100 mb-1">
                      UNBAN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PricingTable />
        </div>
      </div>
    );
  }
}

class PricingTable extends Component {
  render() {
    return (
      <div className="card text-white bg-primary mb-3 w-100">
        <div className="card-header">
          <span className="text-primary">
            <span className="text-muted">Privilegies type:</span> VIP
          </span>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th> Lenght </th> <th> Price </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>35 Days</td>
                <td>
                  1 EUR.
                  <a
                    href="http://www.fleshas.lt/paypal/index.php?makro_type=31"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>180 Days</td>
                <td>
                  3 EUR.
                  <a
                    href="http://www.fleshas.lt/paypal/index.php?makro_type=30"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>360 Days</td>
                <td>
                  4.2 EUR.
                  <a
                    href="http://www.fleshas.lt/paypal/index.php?makro_type=27"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Admin;
