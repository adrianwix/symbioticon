import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// PAGES
import Dashboard from "./modules/Dashboard";
import Transactions from "./modules/Transactions";
import Management from "./modules/Management";
import { applyMiddleware, compose, createStore } from "redux";

const initialState = {};
const middlewares = [thunk];
/**
 * Redux store could not be implemented
 */
const store = createStore(
  state => state,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/buchungen" component={Transactions} exact />
            <Route path="/detailansicht" component={Management} exact />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
