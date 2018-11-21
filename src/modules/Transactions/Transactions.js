import React, { Component } from "react";
// import PropTypes from "prop-types";
import Layout from "../Layout";
import { dataCategories } from "../Dashboard/data";
import TableRow from "./TableRow";
import allTransaction from "../data/allTransactions.json";
import moment from "moment";

class Transactions extends Component {
  render() {
    const header = {
      title: "Transactions"
    };
    const data2 = allTransaction.map(x => {
      let category = x.additionalInformation.name
        ? x.additionalInformation.name
        : "Unknow";
      return {
        date: moment(x.bookingDate).format("L"),
        amount: x.amount.value,
        beneficiary: x.creditor,
        category
      };
    });
    console.log(data2);
    let initDate = 0;
    const data = dataCategories.map(d => ({
      date: `${initDate++}/01/2018`,
      amount: d.y,
      beneficiary: "John Doe",
      category: d.x
    }));
    return (
      <Layout header={header}>
        <div className="container">
          <h1 className="display-3 my-3">Transactions</h1>
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Beneficiary</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((props, index) => (
                <TableRow key={index} {...props} />
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}

Transactions.propTypes = {};

export default Transactions;
