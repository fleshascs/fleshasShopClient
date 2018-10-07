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
                    <button className="btn btn-primary w-100 mb-1">
                      Umbrella Swarm x3
                    </button>
                    <button className="btn btn-primary w-100 mb-1">
                      Umbrella Swarm Missions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <XpTable />
        </div>
      </div>
    );
  }
}

export default Admin;

class XpTable extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="text-primary">
            <span className="text-muted">Server:</span> Umbrella Swarm x3
          </span>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>XP</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>75000</td>
                <td>
                  0.5 €
                  <a
                    href="http://fleshas.lt/paypalxp/index.php?server=x3&amp;makro_type=FXP6"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>150000</td>
                <td>
                  0.8 €
                  <a
                    href="http://fleshas.lt/paypalxp/index.php?server=x3&amp;makro_type=FXP7"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>300000</td>
                <td>
                  1.6 €
                  <a
                    href="http://fleshas.lt/paypalxp/index.php?server=x3&amp;makro_type=FXP8"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>450000</td>
                <td>
                  2.4 €
                  <a
                    href="http://fleshas.lt/paypalxp/index.php?server=x3&amp;makro_type=FXP9"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>600000</td>
                <td>
                  3.2 €
                  <a
                    href="http://fleshas.lt/paypalxp/index.php?server=x3&amp;makro_type=FXP10"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>1000000</td>
                <td>
                  4 €
                  <a
                    href="http://fleshas.lt/paypalxp/index.php?server=x3&amp;makro_type=FXP11"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>2000000</td>
                <td>
                  6 €
                  <a
                    href="http://fleshas.lt/paypalxp/index.php?server=x3&amp;makro_type=FXP12"
                    className="btn btn-primary btn-sm float-right"
                  >
                    ORDER
                  </a>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>5000000</td>
                <td>
                  14 €
                  <a
                    href="http://fleshas.lt/paypalxp/index.php?server=x3&amp;makro_type=FXP13"
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
