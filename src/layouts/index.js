
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'dva';



class MainLayout extends Component {
	render() {
		const {children} = this.props;
		return (

		        <div className="main">{children}</div>



		);
	}
}

MainLayout.propTypes = {
	children: PropTypes.any,
	dispatch: PropTypes.func,
};


export default MainLayout;
