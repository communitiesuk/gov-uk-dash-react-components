import React from 'react';
import PropTypes from 'prop-types';

/**
 *Default dropdown arrow
 *
 * @param {string} { className }
 */
const DropdownArrowDown = ({ className }) => (
	<svg version='1.1' xmlns='http://www.w3.org/2000/svg' className={className} focusable='false'>
		<g stroke='none' fill='none' fillRule='evenodd'>
			<polygon fill='#000000' points='0 0 22 0 11 17' />
		</g>
	</svg>
)

export default DropdownArrowDown;

DropdownArrowDown.propTypes = {
	/**
	 * Class name to add to SVG
	 */
	className: PropTypes.string,
};