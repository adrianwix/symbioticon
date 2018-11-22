import React, { Component } from "react";
import PropTypes from "prop-types";
import pieData from "../data/pieChart";
import { RadialChart } from "react-vis/es";
import { colorRange, dataCategories } from "../data/chartFakeData";
import { groupBy } from "lodash/collection";
import { sumBy } from "lodash/math";

class ArcChart extends Component {
  render() {
    const { size } = this.props;
    const groupData = groupBy(dataCategories, "x");
    let data = [];
    for (let key in groupData) {
      if (groupData.hasOwnProperty(key)) {
        data.push({
          name: key,
          angle: sumBy(groupData[key], "y")
        });
      }
    }
    return (
      <RadialChart
        colorType={"category"}
        colorRange={colorRange}
        getLabel={d => d.name}
        data={data}
        labelsRadiusMultiplier={1.1}
        labelsStyle={{
          fontSize: 16,
          fill: "#222"
        }}
        showLabels
        style={{ stroke: "#fff", strokeWidth: 1 }}
        width={size}
        height={size}
      />
    );
  }
}

ArcChart.propTypes = {};

export default ArcChart;
