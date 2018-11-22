import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  Hint
} from "react-vis";
import { colorDomain, colorRange, dataCategories } from "../data/chartFakeData";
class Histogram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  componentDidMount() {
    const { setSize, size } = this.props;
    setSize(size);
  }
  onNearestXY = value => this.setState({ value });

  render() {
    const { size, data } = this.props;
    const color = data.map(obj => obj.color);

    return (
      <XYPlot
        height={size}
        width={size}
        colorType="category"
        colorRange={colorRange}
        colorDomain={colorRange}
        xType="ordinal"
        onNearestXY={this.onNearestXY}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          className="vertical-bar-series-example"
          data={data}
        />
        {this.state.value ? <Hint value={this.state.value} /> : null}
      </XYPlot>
    );
  }
}

Histogram.propTypes = {
  size: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired
};

export default Histogram;
