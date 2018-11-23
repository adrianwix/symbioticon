import React, { Component } from "react";
import Layout from "../Layout";
import TableRow from "./TableRow";
import moment from "moment";
import axios from "axios";
import { sumBy } from "lodash/math";
import { groupBy } from "lodash/collection";
import "moment/locale/de";

class Transactions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transactions: [],
			budget: []
		};
	}
	createBudget = () => {
		let dataClear = [];
		const groupData = groupBy(this.state.data, "account");
		for (let key in groupData) {
			if (groupData.hasOwnProperty(key)) {
				dataClear.push({
					name: key,
					balance: sumBy(groupData[key], "amount")
				});
			}
		}
		console.log(dataClear);
	};
	async componentDidMount() {
		let data = await axios.get(
			"http://localhost:5000/api/ahoi/transactionsSimple/all"
		);
		let budget = await axios.get(
			"http://localhost:5000/api/ahoi/getbudgets/all"
		);
		let transactions = data.data.map(obj => {
			moment.locale("de");
			return {
				account: obj.budget_category,
				date: moment(obj.bookingDate).format("L"),
				amount: obj.amount.value,
				beneficiary: obj.creditor,
				category: obj.bookingKey
			};
		});
		this.setState({ transactions, budget: budget.data });
	}
	loadData = () => {
		let newData = [
			{
				account: "Essen",
				amount: -1000,
				beneficiary: "McDonalds",
				category: "Restaurant",
				date: "22.11.2018"
			},
			{
				account: "Essen",
				amount: -1400,
				beneficiary: "Burger King",
				category: "Restaurant",
				date: "22.11.2018"
			}
		];
		this.setState(state => ({
			transactions: [...newData, ...state.transactions]
		}));
	};
	render() {
		const header = {
			title: "Transactions"
		};
		let data = this.state.transactions;
		let budgetColor = {};
		this.state.budget.forEach(obj => (budgetColor[obj.name] = obj.color));
		return (
			<Layout header={header}>
				<div className="container">
					<h1 onClick={this.loadData} className="display-3 my-3">
						Buchungen
					</h1>
					<div className="table-responsive">
						<table className="table table-hover">
							<thead className="thead-dark">
								<tr>
									<th scope="col">Kategorie</th>
									<th scope="col">Datum</th>
									<th scope="col">Betrag</th>
									<th scope="col">Empfänger</th>
									<th scope="col">Unterkategorie</th>
								</tr>
							</thead>
							<tbody>
								{data.map((props, index) => (
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
			</Layout>
		);
	}
}
export default Transactions;
