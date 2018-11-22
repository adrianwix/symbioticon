import React, { Component } from "react";
// import PropTypes from "prop-types";
import Layout from "../Layout";
import { dataCategories } from "../data/chartFakeData";
import TableRow from "./TableRow";
import allTransaction from "../data/allTransactions.json";
import moment from "moment";
import axios from "axios";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/ahoi/transactionsSimple/all")
      .then(res => this.setState({ transactions: res.data }));
  }
  render() {
    const header = {
      title: "Transactions"
    };
    const data = this.state.transactions.map(obj => {
      return {
        account: obj.budget_category,
        date: moment(obj.bookingDate).format("L"),
        amount: obj.amount.value,
        beneficiary: obj.creditor,
        category: obj.bookingKey
      };
    });
    console.log(data);
    return (
      <Layout header={header}>
        <div className="container">
          <h1 className="display-3 my-3">Transactions</h1>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Account</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Beneficiary</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                {data.map((props, index) => (
                  <TableRow key={index} {...props} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}

Transactions.propTypes = {};

export default Transactions;
