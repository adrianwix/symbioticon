import React, { Component } from "react";
// import PropTypes from "prop-types";
import Layout from "../Layout";
import Histogram from "./Histogram";
import PieChart from "../Charts/PieChart";
import BarStackChart from "./BarStackChart";
import { setSize } from "../utils";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 300
    };
  }
  setSize = () => {
    return setSize("div.col-4", this.state.size);
  };
  render() {
    const { size } = this.state;
    const header = {
      title: "Dashboard"
    };
    return (
      <Layout header={header}>
        <div className="container">
          <h1>DASHBOARD</h1>
          <div className="row">
            <div className="col-4">
              <Histogram setSize={this.setSize} size={size} />
            </div>
            <div className="col-4">
              <PieChart setSize={this.setSize} size={size} />
            </div>
            <div className="col-4">
              <BarStackChart setSize={this.setSize} size={size} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
