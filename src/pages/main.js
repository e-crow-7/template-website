import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";

import { Store } from "@redux";
import { Locale } from "@locale";

import "@themes/style.scss";

// Initialize Locale
Locale.init();
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
