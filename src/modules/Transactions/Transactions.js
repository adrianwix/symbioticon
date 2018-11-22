import React, { Component } from "react";
// import PropTypes from "prop-types";
import Layout from "../Layout";
import TableRow from "./TableRow";
import moment from "moment";
import axios from "axios";
import { sumBy } from "lodash/math";
import { groupBy } from "lodash/collection";
import { dataCategories } from "../data/chartFakeData";
import { random } from "lodash/number";
import { colors } from "../data/accounts";

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
      return {
        account: obj.budget_category,
        date: moment(obj.bookingDate).format("L"),
        amount: obj.amount.value,
        beneficiary: obj.creditor,
        category: obj.bookingKey
      };
    });

    // const budget = groupBy(transactions, "account");
    // let dataClear = [];
    // for (let key in budget) {
    //   if (budget.hasOwnProperty(key)) {
    //     dataClear.push({
    //       name: key,
    //       expended: sumBy(budget[key], "amount")
    //     });
    //   }
    // }
    // dataClear = dataClear.map((obj, index) =>
    //   Object.assign(obj, {
    //     budget: obj.expended * -1 + random(1000, 3000),
    //     color: colors[index]
    //   })
    // );
    // axios.post("http://localhost:5000/api/ahoi/createbudgets/all", {
    //   budget: dataClear
    // });
    this.setState({ transactions, budget: budget.data });
  }
  render() {
    const header = {
      title: "Transactions"
    };
    let data = this.state.transactions;
    console.log(data);
    console.log(this.state.budget);
    let budgetColor = {};
    this.state.budget.forEach(obj => (budgetColor[obj.name] = obj.color));
    console.log(budgetColor);
    return (
      <Layout header={header}>
        <div className="container">
          <h1 className="display-3 my-3">Transactions</h1>
          <button onClick={this.createBudget}>Budget</button>
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

Transactions.propTypes = {};

export default Transactions;
