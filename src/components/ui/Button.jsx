import PropTypes from 'prop-types';
import '../../styles/Button.css'
import React from 'react';
function Button({ children, buttonClass, type, isDisabled, handleClick, isLoading }) {
	return (
		<button type={type} onClick={() => handleClick()} disabled={isDisabled} className={`${buttonClass} ${isLoading ? 'loading': ''}`}>
			{children}
		</button>
	);
}
Button.defaultProps = {
	buttonClass: '',
	type: 'button',
	isDisabled: true,
	handleClick: () => {}
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
	buttonClass: PropTypes.string,
};

export default Button;