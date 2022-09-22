import React from 'react'
import '../../styles/Input.css'
import PropTypes from 'prop-types';

function Input({ attributes, handleBlur, handleChange }) {
    const {
		placeholder,
		value,
		name,
		inputClass,
		id,
		disabled,
		type,
		required
	} = attributes;
  return (
      <>
         <input
				placeholder={placeholder}
				className={`${inputClass}`}
				type={type}
				disabled={disabled}
				onBlur={(e) => handleBlur(e)}
				onChange={(e) => handleChange(e)}
				value={value}
				id={id}
				name={name}
				required={required}
			/>
      
      </>
  )
}

Input.defaultProps = {
	attributes: {
		placeholder: 'Enter value',
		inputClass: '',
		disabled: false,
		id: '',
		value: '',
		name: '',
		required: false
	},
	handleChange: () => {},
	handleBlur: () => { },
	type: 'text'
};

Input.propTypes = {
	attributes: PropTypes.object,
	handleBlur: PropTypes.func,
	handleChange: PropTypes.func
};

export default Input