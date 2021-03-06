import React from 'react'
import PropTypes from 'prop-types'
export default function BaseInputNumber({ onChange, value, ...props }) {
	const handleChange = e => {
		const value = e.target.value
		if ((/^\d+$/.test(value) || value === '') && onChange) {
			onChange(value)
		}
	}
	return <input type="text" onChange={handleChange} value={value} {...props} />
}
