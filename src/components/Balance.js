import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

const AddMoney = styled.button``;
const PaymentImage = styled.img`
  width: 100px;
`;
const PaymentTypes = styled.div`
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  padding: 1px;
`;

const PaymentsImages = [
  "paypal-logo.png",
  "webmoney.png",
  "swedbank.png",
  //"seb-bankas-logo.png",
  //"seb-bankas-logo.png",
  //"sms.png",
  "paysera.png"
];

class BalanceComponent extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="card text-white bg-primary mb-3 w-100">
        <div className="card-header">Balance</div>
        <div className="card-body">
          <div className="d-flex">
            <Balance>15.0 EUR.</Balance>
          </div>
          <div className="text-muted">Available payment methods</div>
          <PaymentTypes>
            {PaymentsImages.map(imgPath => {
              return <PaymentImage src={`/images/payments/${imgPath}`} />;
            })}
          </PaymentTypes>
          <AddMoney className="btn btn-info float-right">Add Money</AddMoney>
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
