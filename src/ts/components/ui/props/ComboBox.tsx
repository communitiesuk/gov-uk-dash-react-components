import React from 'react';
import PropTypes from 'prop-types';
import { ComboBox as RealComponent } from '../../LazyLoader';

const ComboBox = (props = {}) => {
	return (
		<RealComponent {...props} />
	);
}
ComboBox.defaultProps = {}
ComboBox.propTypes = {
	/**
	 * The ID used to identify this component in Dash callbacks.
	 */
	id: PropTypes.string,
	label: PropTypes.string,
	defaultInputValue: PropTypes.string,
	defaultItems: PropTypes.any,
	items: PropTypes.oneOfType([
		PropTypes.arrayOf({
			key: PropTypes.String,
			name: PropTypes.string,
		}),
		PropTypes.arrayOf({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			name: PropTypes.string,
		}),
	]),
	onSelectionChange: PropTypes.func,
	allowsCustomValue: PropTypes.bool,
	onInputChange: PropTypes.func,
	selectedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	menuTrigger: PropTypes.string,
}

export default ComboBox;
export const propTypes = ComboBox.propTypes;