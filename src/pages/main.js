import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";

import { Store } from "../redux";

import "@styles/style.scss";

class Application extends Component {
  render() {
    return <div />;
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <Application />
  </Provider>,
  document.getElementById("app")
);
