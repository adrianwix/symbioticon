import React, { Component } from "react";
// import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

class Layout extends Component {
  render() {
    const { children, header } = this.props;
    return (
      <div className="">
        <Header header={header} />
        <div className="temporal-height">{children}</div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {};

export default Layout;
