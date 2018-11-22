import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines
} from "react-vis";
import { colorDomain, colorRange, dataCategories } from "../data/chartFakeData";
class Histogram extends Component {
  componentDidMount() {
    const { setSize, size } = this.props;
    setSize(size);
  }

  render() {
    const { size } = this.props;
    const data = dataCategories.map(point => ({
      x: point.x, // Category
      y: point.y, // Amount
      color: point.x // Account color
    }));
    return (
      <XYPlot
        height={size}
        width={size}
        colorType="category"
        colorRange={colorRange}
        colorDomain={colorDomain}
        xType="ordinal"
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          className="vertical-bar-series-example"
          data={data}
        />
      </XYPlot>
    );
  }
}

Histogram.propTypes = {
  size: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired
};

export default Histogram;
