import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";
import { setSize } from "../utils";
import PieChart from "../Charts/PieChart";

class Management extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 300
    };
  }
  setSize = selector => {
    return setSize("div.col-4", this.state.size);
  };
  render() {
    const { size } = this.state;
    const header = {
      title: "Management"
    };
    return (
      <Layout header={header}>
        <div className="container">
          <h1 className="display-3">Management</h1>
          <div className="row d-flex">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center d-flex flex-column justify-content-center">
                  <h6 className="card-subtitle mb-2 font-weight-normal">
                    Balance
                  </h6>
                  <h5 className="card-title display-2 font-weight-bold text-success">
                    3000
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <ul className="list-group h-100">
                  <li
                    style={{ "flex-grow": "1" }}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    Education:
                    <span className="badge badge-primary badge-pill">1000</span>
                  </li>
                  <li
                    style={{ "flex-grow": "1" }}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    House:
                    <span className="badge badge-primary badge-pill">1500</span>
                  </li>
                  <li
                    style={{ "flex-grow": "1" }}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    Food:
                    <span className="badge badge-primary badge-pill">500</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 h-100 balance-chart">
              <PieChart
                size={size}
                setSize={() => this.setSize("div.balance-chart")}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Management.propTypes = {};

export default Management;
