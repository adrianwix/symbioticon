import React, { Component } from "react";
import PropTypes from "prop-types";
import { RadialChart } from "react-vis";
import { colorRange, dataCategories } from "./data";
import { groupBy, sumBy } from "lodash";
import pieData from "../data/pieChart.json";

class PieChart extends Component {
  componentDidMount() {
    const { setSize, size } = this.props;
    setSize(size);
  }
  getRandomColor = () => {
    let letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  };
  render() {
    const { size } = this.props;
    const data = pieData.map(point => ({
      name: point._id,
      angle: point.sum
    }));
    const sliceData = data.slice(0, 10);
    console.log(data);
    // const groupData = groupBy(dataCategories, "x");
    // let data = [];
    // for (let key in groupData) {
    //   if (groupData.hasOwnProperty(key)) {
    //     data.push({
    //       x: key,
    //       y: sumBy(groupData[key], "y")
    //     });
    //   }
    // }
    return (
      <RadialChart
        colorType={"category"}
        colorRange={colorRange}
        margin={{ top: 100 }}
        getLabel={d => d.name}
        data={sliceData}
        labelsRadiusMultiplier={1.1}
        labelsStyle={{
          fontSize: 16,
          fill: "#222",
          brackground: "white"
        }}
        showLabels
        style={{ stroke: "#fff", strokeWidth: 2 }}
        width={size}
        height={size}
      />
    );
  }
}

PieChart.propTypes = {};

export default PieChart;
