import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// PAGES
import Dashboard from "./modules/Dashboard";
import Transactions from "./modules/Transactions";
import Management from "./modules/Management";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/transactions" component={Transactions} exact />
          <Route path="/management" component={Management} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
