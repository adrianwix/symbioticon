import React, { Component } from "react";
import PropTypes from "prop-types";
import { RadialChart } from "react-vis";
import { colorDomain, colorRange, dataCategories } from "../data/chartFakeData";
// import { groupBy, sumBy } from "lodash";
import pieData from "../data/pieChart.json";
import { groupBy } from "lodash/collection";
import { sumBy } from "lodash/math";

class PieChart extends Component {
  componentDidMount() {
    const { setSize, size } = this.props;
    setSize(size);
  }
  // getRandomColor = () => {
  //   let letters = "0123456789ABCDEF".split("");
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.round(Math.random() * 15)];
  //   }
  //   return color;
  // };
  render() {
    const { size, data } = this.props;
    const pieData = data.map(obj => ({
      name: obj.name,
      angle: obj.budget,
      color: obj.color
    }));
    // const data = pieData.map(point => ({
    //   name: point._id, // Category
    //   angle: point.sum // Amount
    //   // color: #532123
    // }));
    // const sliceData = data.slice(0, 10);
    // const groupData = groupBy(dataCategories, "x");
    // let dataClear = [];
    // for (let key in groupData) {
    //   if (groupData.hasOwnProperty(key)) {
    //     dataClear.push({
    //       name: key,
    //       angle: sumBy(groupData[key], "y")
    //     });
    //   }
    // }
    // console.log(dataClear);
    console.log(pieData.map(x => x.color));
    return (
      <RadialChart
        colorType={"category"}
        colorRange={colorRange}
        colorDomain={colorDomain}
        getLabel={d => d.name}
        data={pieData}
        labelsRadiusMultiplier={1.1}
        labelsStyle={{
          fontSize: 16,
          fill: "#000000"
        }}
        showLabels
        style={{ stroke: "#fff", strokeWidth: 1 }}
        width={size}
        height={size}
      />
    );
  }
}

PieChart.propTypes = {
  size: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired
};

export default PieChart;
