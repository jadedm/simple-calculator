import React from 'react';
import { connect } from 'react-redux';

import './Screen.css';

export const Screen = ({ value, error }) => {
	return (
		<React.Fragment>
			{ error && <p className="error">{ error.toUpperCase() }</p> }
			<div className='calc-screen'>{value}</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		value: state.calculator.value,
		error: state.calculator.error
	}
}

export default connect(mapStateToProps)(Screen);