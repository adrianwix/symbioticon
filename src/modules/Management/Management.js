import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";
import { setSize } from "../utils";
import PieChart from "../Charts/PieChart";
import axios from "axios";
import { sumBy } from "lodash/math";
import TableRow from "../Management/TableRow";
import moment from "moment";

class Management extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 300,
      transactions: [],
      budget: [],
      money: 100000,
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
    let balance = this.state.money + expenses;
    this.setState({ transactions: data.data, budget: budget.data, balance });
  }
  setSize = selector => {
    return setSize("div.col-4", this.state.size);
  };
  render() {
    const { size, transactions } = this.state;
    const header = {
      title: "Management"
    };
    let budgetColor = {};
    this.state.budget.forEach(obj => (budgetColor[obj.name] = obj.color));
    let last10 = transactions.slice(0, 10);
    let flowData = last10.map(obj => {
      return {
        account: obj.budget_category,
        date: moment(obj.bookingDate).format("L"),
        amount: obj.amount.value
      };
    });
    return (
      <Layout header={header}>
        <div className="container">
          <h1 className="display-3">Management</h1>
          <div className="row d-flex mb-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center d-flex flex-column justify-content-center">
                  <h3 className="card-subtitle mb-2 font-weight-normal">
                    Balance
                  </h3>
                  <h5 className="card-title display-2 font-weight-bold text-success">
                    {this.state.balance}€
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <h3 className="p-3">Budgets</h3>
                <ul className="list-group h-100">
                  {this.state.budget.map(obj => (
                    <li
                      style={{ "flex-grow": "1" }}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {obj.name}:
                      <span
                        style={{ background: obj.color }}
                        className="badge badge-pill"
                      >
                        {obj.budget}€
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 h-100 balance-chart">
              <h3 className="p-2">Money Distribution</h3>
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
                        <th scope="col">Account</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
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
            <div className="col-md-6" />
          </div>
        </div>
      </Layout>
    );
  }
}

Management.propTypes = {};

export default Management;
