import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  VerticalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis
} from "react-vis";
import { groupBy, sumBy } from "lodash";
import { random } from "mathjs";
import { dataCategories } from "../data/chartFakeData";

class BarStackChart extends Component {
  componentDidMount() {
    const { setSize, size } = this.props;
    setSize(size);
  }

  render() {
    const { size } = this.props;
    const groupData = groupBy(dataCategories, "x");
    let data = [];
    for (let key in groupData) {
      if (groupData.hasOwnProperty(key)) {
        data.push({
          x: key,
          y: sumBy(groupData[key], "y")
        });
      }
    }
    const dataMax = data.map(obj =>
      Object.assign({}, obj, {
        y: obj.y + random(300)
      })
    );
    /**
     * @description For Stacked we get bucket data2 Y = data.bucket - data.amount
     * @type {*[]}
     */
    const data2 = [
      { x: "food", y: 319 },
      { x: "leisure", y: 199 },
      { x: "transport", y: 176 },
      { x: "household", y: 312 },
      { x: "living", y: 378 }
    ];
    console.log(data);
    console.log(dataMax);
    console.log(size);
    return (
      <XYPlot width={size} height={size} stackBy="y" xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} />
        <VerticalBarSeries data={data2} />
      </XYPlot>
    );
  }
}

BarStackChart.propTypes = {
  size: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired
};

export default BarStackChart;
