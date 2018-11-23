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
import { colorDomain, colorRange } from "../data/chartFakeData";

class BarStackChart extends Component {
	componentDidMount() {
		const { setSize, size } = this.props;
		setSize(size);
	}

	render() {
		const { size, data } = this.props;
		return (
			<XYPlot
				colorType={"category"}
				colorRange={colorRange}
				colorDomain={colorDomain}
				width={size}
				height={size}
				stackBy="y"
				xType="ordinal"
			>
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis />
				<YAxis />
				<VerticalBarSeries data={data.expended} />
				<VerticalBarSeries color="#ff6e7a" data={data.budget} />
			</XYPlot>
		);
	}
}

BarStackChart.propTypes = {
	size: PropTypes.number.isRequired,
	setSize: PropTypes.func.isRequired
};

export default BarStackChart;
