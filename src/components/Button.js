import React from 'react';

import './Button.css';

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = ({ buttonEl, onButtonClick }) => {
	return (
		<div 
			className={`button ${isOperator(buttonEl) ? '' : "operator"}`}
			onClick={() => { onButtonClick(buttonEl) }}>
			{buttonEl}
		</div>
	);
};

export default Button;