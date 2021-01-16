import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// how are these two groups seperate
// Group above imported from outside of third party dependencies
import App from "./components/App";
import reducers from "./reducers";
// All of my own codes

ReactDom.render(
  // Create an Instance of Provider
  <Provider store={createStore(reducers)}>
    {/* Any components get access to data inside of stores through Provider */}
    {/* react-redux에서 제공하는 Provider 컴포넌트 사용 시 store를 props로 전달해야함 */}
    <App />
  </Provider>,
  document.querySelector("#root")
);

//스토어를 만들고 리액트 어플리케이션에 리덕스 적용하는 작업은 src 디렉토리의 index.js에서 이루어진다
