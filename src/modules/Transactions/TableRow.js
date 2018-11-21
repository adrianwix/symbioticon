import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param date Date of the operation
 * @param amount Cuantity transfered
 * @param beneficiary Person who receive the money
 * @param category Category of the operation
 * @returns {JSX} Html <tr>
 * @constructor
 */
const TableRow = ({ date, amount, beneficiary, category }) => {
  return (
    <React.Fragment>
      <tr>
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
