import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param account Name of the subaccount
 * @param date Date of the operation
 * @param amount Cuantity transfered
 * @param beneficiary Person who receive the money
 * @param category Category of the operation
 * @returns {JSX} Html <tr>
 * @constructor
 */
const TableRow = ({ account, date, amount, beneficiary, category }) => {
  return (
    <React.Fragment>
      <tr>
        <th className="text-success">{account}</th>
        <th>{date}</th>
        <td>{amount + "€"}</td>
        <td>{beneficiary}</td>
        <td>{category}</td>
      </tr>
    </React.Fragment>
  );
};

TableRow.propTypes = {
  date: PropTypes.string,
  amount: PropTypes.number,
  beneficiary: PropTypes.string,
  category: PropTypes.string
};

export default TableRow;
