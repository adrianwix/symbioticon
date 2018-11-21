import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render() {
		return (
			<footer className="bg-dark d-flex justify-content-between align-content-center p-1">
				<button className="btn btn-success">Back to top</button>
				<p>
					&copy; 2017-2019 Company, Inc. &middot; <Link to="/">Privacy</Link>{' '}
					&middot; <Link to="/">Terms</Link>
				</p>
			</footer>
		);
	}
}

// Footer.propTypes = {};

export default Footer;
