import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param account Name of the subaccount
 * @param date Date of the operation
 * @param amount Cuantity transfered
 * @param beneficiary Person who receive the money
 * @param category Category of the operation
 * @param color
 * @returns {JSX} Html <tr>
 * @constructor
 */
const TableRow = ({ account, date, amount, color }) => {
  return (
    <React.Fragment>
      <tr>
        <th style={{ color: color }}>{account}</th>
        <th>{date}</th>
        <td>{amount / 100 + "€"}</td>
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
