import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components";

import { connect } from "react-redux";
import { alertActions } from "./_actions";
import { history } from "./_helpers";

import Home from "./Views/Home";
import Admin from "./Views/Admin";
import Xp from "./Views/Xp";
import Tags from "./Views/Tags";

const theme = {
  PRIMARY_COLOR: "#2b3e50",
  AVATAR_HOWER_SHADOW_COLOR: "#fff",
  CHAT_HEADER_COLOR: "rgb(249, 249, 249)",
  CHAT_MY_MESSAGE_COLOR: "#27488a",
  FORUMS_CATEGORY_HEADER_TEXT_COLOR: "#1a47a5",
  HEADER_TOP_COLOR: "#5b6977",
  UNREAD_MESSAGES_COUNTER_BG_COLOR: "#e24040"
};

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/vip-admin-unban" component={Admin} />
            <Route path="/xp" component={Xp} />
            <Route path="/tags" component={Tags} />
            {/* <Route exact path="/forum" component={Forum} />
            <Route path="/forum/:number" component={Topics} />
            <Route path="/register" component={Register} />
            <Route path="/settings" component={Settings} />
            <Route path="/shoutbox" component={ShoutBox} /> */}

            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
          </Layout>
        </Router>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
