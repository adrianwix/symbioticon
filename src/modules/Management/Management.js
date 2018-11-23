import React, { Component } from "react";
import Layout from "../Layout";
import { setSize } from "../utils";
import PieChart from "../Charts/PieChart";
import axios from "axios";
import { round, sumBy } from "lodash/math";
import TableRow from "../Management/TableRow";
import moment from "moment";
import BarStackChart from "../Charts/BarStackChart";

class Management extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 300,
			transactions: [],
			budget: [],
			money: 1000,
			balance: 0
		};
	}
	async componentDidMount() {
		let data = await axios.get(
			"http://localhost:5000/api/ahoi/transactionsSimple/all"
		);
		let budget = await axios.get(
			"http://localhost:5000/api/ahoi/getbudgets/all"
		);
		let expenses = sumBy(budget.data, "expended");
		let balance = this.state.money + expenses / 100;
		this.setState({ transactions: data.data, budget: budget.data, balance });
	}
	setSize = selector => {
		return setSize("div.col-4", this.state.size);
	};
	loadData = () => {
		let newData = [
			{
				budget_category: "Essen",
				amount: {
					value: -1000
				},
				date: "22.11.2018"
			},
			{
				budget_category: "Essen",
				amount: {
					value: -1400
				},
				date: "22.11.2018"
			}
		];
		const index = this.state.budget.map(item => item.name).indexOf("Essen");
		let copyBudget = [...this.state.budget];
		copyBudget[index] = {
			budget: 9000,
			color: "#F15C17",
			expended: -5911, //8311
			name: "Essen",
			__v: 0,
			_id: "5bf65e54d8012b6d20291cd9"
		};
		this.setState(state => ({
			transactions: [...newData, ...state.transactions],
			balance: state.balance - 24,
			budget: copyBudget
		}));
	};
	render() {
		const { size, transactions, budget } = this.state;
		console.log(budget);
		const header = {
			title: "Management"
		};
		let budgetColor = {};
		this.state.budget.forEach(obj => (budgetColor[obj.name] = obj.color));
		// Add 2 transactions to transactions.....
		let last10 = transactions.slice(0, 10);
		let flowData = last10.map(obj => {
			return {
				account: obj.budget_category,
				date: moment(obj.bookingDate).format("L"),
				amount: obj.amount.value
			};
		});
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
		return (
			<Layout header={header}>
				<div className="container">
					<h1 onClick={this.loadData} className="display-3">
						Detailansicht
					</h1>
					<div className="row d-flex mb-4">
						<div className="col-md-4">
							<div className="card h-100">
								<div className="card-body text-center d-flex flex-column justify-content-center">
									<h3 className="card-subtitle mb-2 font-weight-normal">
										Kontostand
									</h3>
									<h5 className="card-title display-2 font-weight-bold text-success">
										{round(this.state.balance, 2)}€
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100">
								<h3 className="p-3">Budgets</h3>
								<ul className="list-group h-100">
									{this.state.budget.map((obj, index) => (
										<li
											key={index}
											style={{ flexGrow: "1" }}
											className="list-group-item d-flex justify-content-between align-items-center"
										>
											{obj.name}:
											<span
												style={{ background: obj.color, color: "#fff" }}
												className="badge badge-pill"
											>
												{obj.budget / 100}€
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-md-4 h-100 balance-chart">
							<h3 className="p-2">Verteilung</h3>
							<PieChart
								data={this.state.budget}
								size={size}
								setSize={() => this.setSize("div.balance-chart")}
							/>
						</div>
					</div>
					<div className="row mb-4">
						<div className="col-md-6">
							<div className="card h-100">
								<div className="card-body p-0">
									<h3 className="p-2">Cash Flow</h3>
									<table className="table table-hover">
										<thead className="thead-dark">
											<tr>
												<th scope="col">Kategorie</th>
												<th scope="col">Datum</th>
												<th scope="col">Betrag</th>
											</tr>
										</thead>
										<tbody>
											{flowData.map((props, index) => (
												<TableRow
													key={index}
													{...props}
													color={budgetColor[props.account]}
												/>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<h3>Budgetauslastung</h3>
							<BarStackChart
								data={{ expended: StackedData, budget: MaxStackedData }}
								setSize={this.setSize}
								size={500}
							/>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

Management.propTypes = {};

export default Management;
