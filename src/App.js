import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// PAGES
import Dashboard from "./modules/Dashboard/Dashboard";
import Transactions from "./modules/Transactions/Transactions";
import Settings from "./modules/Settings/Settings";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/transactions" component={Transactions} exact />
          <Route path="/settings" component={Settings} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
