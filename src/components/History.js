import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import moment from "moment";
//import "moment/locale/lt";

const Balance = styled.div`
  font-weight: 300;
  font-size: 38px;
  overflow-wrap: break-word;
  line-height: 1em;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.25em;
  padding-bottom: 5px;
  text-align: left;
  color: rgb(255, 236, 13);
  margin: 5px 0px 10px;
`;

const history = [
  {
    name: "VIP",
    price: "1.0 EUR",
    date: "2018-10-06 22:10"
  },
  {
    name: "VIP",
    price: "1.0 EUR",
    date: "2018-10-06 22:10"
  },
  {
    name: "VIP",
    price: "1.0 EUR",
    date: "2018-10-06 22:10"
  },
  {
    name: "VIP",
    price: "1.0 EUR",
    date: "2018-10-06 22:10"
  },
  {
    name: "VIP",
    price: "1.0 EUR",
    date: "2018-10-06 22:10"
  },
  {
    name: "VIP",
    price: "1.0 EUR",
    date: "2018-10-06 22:10"
  }
];

class BalanceComponent extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="card text-white bg-primary mb-3 w-100">
        <div className="card-header">History</div>
        <div className="card-body">
          <table className="table table-hover">
            <tbody>
              {history.map(item => {
                return (
                  <tr>
                    <th scope="row">
                      {moment(item.date, "YYYY-MM-DD HHmmss").fromNow()}
                    </th>
                    <td>Purchase: {item.name}</td>
                    <td className="text-right">-{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
export default connect(mapStateToProps)(BalanceComponent);
