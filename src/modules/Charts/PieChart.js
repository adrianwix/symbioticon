import React, { Component } from "react";
import PropTypes from "prop-types";
import { RadialChart } from "react-vis";
import { colorDomain, colorRange } from "../data/chartFakeData";

class PieChart extends Component {
	componentDidMount() {
		const { setSize, size } = this.props;
		setSize(size);
	}
	render() {
		const { size, data } = this.props;
		const pieData = data.map(obj => ({
			name: obj.name,
			angle: obj.budget,
			color: obj.color
		}));
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
