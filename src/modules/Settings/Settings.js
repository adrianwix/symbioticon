import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';

class Settings extends Component {
	render() {
		const header = {
			title: 'Settings'
		};
		return (
			<Layout header={header}>
				<h1>SETTINGS</h1>
			</Layout>
		);
	}
}

Settings.propTypes = {};

export default Settings;