import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// how are these two groups seperate
// Group imported from outside of third party dependencies 
import App from "./components/App";
import reducers from "./reducers";
// All of my own codes

ReactDom.render(
  // Create an Instance of Provider
  <Provider store={createStore(reducers)}>
    {/* Any components get access to data inside of stores through Provider */}
    <App />
  </Provider>,
  document.querySelector("#root")
);
