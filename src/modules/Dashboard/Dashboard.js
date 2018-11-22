import React, { Component } from "react";
// import PropTypes from "prop-types";
import Layout from "../Layout";
import Histogram from "./Histogram";
import PieChart from "../Charts/PieChart";
import BarStackChart from "../Charts/BarStackChart";
import { setSize } from "../utils";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 300,
      budget: []
    };
  }
  async componentDidMount() {
    let data = await axios.get("http://localhost:5000/api/ahoi/getbudgets/all");
    // console.log(data);
    this.setState({ budget: data.data });
  }
  setSize = () => {
    return setSize("div.col-4", this.state.size);
  };
  render() {
    const { size, budget } = this.state;
    const header = {
      title: "Dashboard"
    };
    const HistogramData = budget.map(obj => ({
      x: obj.name,
      y: (obj.expended * -1) / 100,
      color: obj.color
    }));
    const StackedData = budget.map(obj => ({
      x: obj.name,
      y: (obj.expended * -1) / 100,
      color: obj.color
    }));
    const MaxStackedData = budget.map(obj => ({
      x: obj.name,
      y: (obj.budget + obj.expended) / 100,
      color: "#ff6e7a"
    }));
    console.log(budget);
    console.log(StackedData);
    console.log(MaxStackedData);
    return (
      <Layout header={header}>
        <div className="container">
          <h1>DASHBOARD</h1>
          <div className="row">
            <div className="col-4">
              <h2>Expended</h2>
              <Histogram
                data={HistogramData}
                setSize={this.setSize}
                size={size}
              />
            </div>
            <div className="col-4">
              <PieChart data={budget} setSize={this.setSize} size={size} />
            </div>
            <div className="col-4">
              <h3>Max Budget</h3>
              <BarStackChart
                data={{ expended: StackedData, budget: MaxStackedData }}
                setSize={this.setSize}
                size={size}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
