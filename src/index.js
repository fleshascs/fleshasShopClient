import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./_helpers";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root-wrapper")
);
registerServiceWorker();