import React, { Component } from "react";
import { Balance, History } from "../../components";
import styled from "styled-components";

const BlackListedTag = styled.span`
  padding: 6px;
  background: rgba(0, 0, 0, 0.4);
  margin-right: 5px;
  border-radius: 3px;
  color: red;
`;

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
        <div className="card mt-3">
          <div className="card-header">
            <span className="text-primary">Black listed TAGS</span>
          </div>
          <div className="card-body ">
            <BlackListedTag>[OWNER]</BlackListedTag>
            <BlackListedTag>[Savininkas]</BlackListedTag>
            <BlackListedTag>[Priz]</BlackListedTag>
            <BlackListedTag>[Priziuretojas]</BlackListedTag>
            <BlackListedTag>
              And other Tags with the meaning of owner or super visor...
            </BlackListedTag>
          </div>
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
        <div className="card-body d-flex">
          <div className="col-sm-4" />
          <div className="col">
            <form class="form-horizontal" method="post">
              <fieldset>
                <div class="form-group d-flex">
                  <label class="col-sm-4 control-label">IP/SteamID/Nick</label>
                  <div class="col-sm-8">
                    <input
                      name="nickname"
                      class="form-control"
                      placeholder="Your IP/SteamID/Nick"
                      value="5.20.217.35"
                      type="text"
                      required=""
                    />
                  </div>
                </div>
                <div class="form-group d-flex">
                  <label class="col-sm-4 control-label">TAG</label>
                  <div class="col-sm-8">
                    <input
                      name="prefix"
                      class="form-control"
                      placeholder="Your Tag.. for example: [SSJ]"
                      type="text"
                      required=""
                    />
                  </div>
                </div>
                <div class="form-group col">
                  <button
                    name="sms_continue"
                    type="submit"
                    class="btn btn-primary float-right"
                  >
                    Activate
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
