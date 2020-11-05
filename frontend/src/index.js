import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./reducers";
import { CookiesProvider } from "react-cookie";
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);
