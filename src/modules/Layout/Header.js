import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { header } = this.props;
    return (
      <div>
        <Helmet>
          <title>{header.title}</title>
        </Helmet>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Simple Budget
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/transactions" className="nav-link">
                  Transactions
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/management" className="nav-link">
                  Management
                </Link>
              </li>
            </ul>
            <div>
              <Link to="/log-in" className="btn btn-outline-primary mx-2">
                Log in
              </Link>
              <Link to="/sign-up" className="btn btn-primary mx-2">
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  header: PropTypes.object.isRequired
};

export default Header;
