import React, { Component } from "react";
// import PropTypes from "prop-types";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines
} from "react-vis";
import { colorDomain, colorRange, dataCategories } from "./data";
class Histogram extends Component {
  componentDidMount() {
    const { setSize, size } = this.props;
    setSize(size);
  }

  render() {
    const { size } = this.props;
    const data = dataCategories.map(point => ({
      x: point.x,
      y: point.y,
      color: point.x
    }));
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

Histogram.propTypes = {};

export default Histogram;
