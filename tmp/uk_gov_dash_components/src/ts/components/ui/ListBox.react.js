import React, { useRef } from 'react';
import { useListBox, useOption } from '@react-aria/listbox';
import PropTypes from 'prop-types';

/**
 * Listbox
 *
 * @param {*} [props={}]
 * @return {*}
 */
function ListBox(props = {}) {
	const ref = useRef();
	const { listBoxRef = ref, state } = props;
	const { listBoxProps } = useListBox(props, state, listBoxRef);

	return (
		<ul
			{...listBoxProps}
			ref={listBoxRef}
			style={{
				margin: 0,
				padding: 0,
				listStyle: 'none',
				maxHeight: '150px',
				overflow: 'auto',
			}}
		>
			{[...state.collection].map((item) => (
				<Option
					key={item.key}
					item={item}
					state={state}
				/>
			))}
		</ul>
	);
}

function Option({ item, state }) {
	let ref = React.useRef();
	let { optionProps, isSelected, isFocused, isDisabled } = useOption(
		{ key: item.key },
		state,
		ref
	);

	let backgroundColor;
	let color = 'black';

	if (isFocused) {
		backgroundColor = '#1d70b8';
		color = 'white'
	} else if (isDisabled) {
		backgroundColor = 'transparent';
		color = 'gray';
	}

	return (
		<li
			{...optionProps}
			ref={ref}
			style={{
				background: backgroundColor,
				color: color,
				padding: '2px 5px',
				outline: 'none',
				cursor: 'pointer'
			}}
		>
			{item.rendered}
		</li>
	);
}
Option.defaultProps = {}
Option.propTypes = {
	/**
	 * The ID used to identify this component in Dash callbacks.
	 */
	id: PropTypes.string,
}

ListBox.defaultProps = {}
ListBox.propTypes = {
	/**
	 * The ID used to identify this component in Dash callbacks.
	 */
	id: PropTypes.string,
}

export {
	ListBox
};