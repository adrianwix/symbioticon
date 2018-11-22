import React, { Component } from "react";
// import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <footer
        style={{ height: "50px" }}
        className="bg-dark d-flex justify-content-between align-content-center p-1"
      >
        <button className="btn btn-success">Back to top</button>
      </footer>
    );
  }
}

// Footer.propTypes = {};

export default Footer;
