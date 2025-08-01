import { useButton } from '@react-aria/button';
import { useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-aria/combobox';
import { useFilter } from '@react-aria/i18n';
import { propTypes } from '../components/ui/ComboBox.react';

import './combobox.css';

import React, { useRef } from 'react';

// Reuse the ListBox and Popover from your component library.See below for details.
import { ListBox } from '../components/ui/ListBox.react';
import { Popover } from '../components/ui/Popover.react';

function ComboBox(props) {
	// Setup filter function and state.
	const { contains } = useFilter({ sensitivity: 'base' });
	const state = useComboBoxState({ ...props, defaultFilter: contains });

	// Setup refs and get props for child elements.
	const buttonRef = useRef(null);
	const inputRef =  useRef(null);
	const listBoxRef = useRef(null);
	const popoverRef = useRef(null);

	const { buttonProps: triggerProps, inputProps, listBoxProps, labelProps } =
		useComboBox(
			{
				...props,
				inputRef,
				buttonRef,
				listBoxRef,
				popoverRef
			},
			state
		);

	// Call useButton to get props for the button element. Alternatively, you can
	// pass the triggerProps to a separate Button component using useButton
	// that you might already have in your component library.
	const { buttonProps } = useButton(triggerProps, buttonRef);

	return (
		<div style={{ display: 'inline-flex', flexDirection: 'column' }}>
			<label className="govuk-label" {...labelProps}>{props.label}</label>
			<div style={{ position: 'relative', display: 'inline-block' }}>
				<input
					{...buttonProps}
					{...inputProps}
					ref={inputRef}
					className="dluhc-combobox"

				/>
				<button
					{...buttonProps}
					ref={buttonRef}
					style={{
						height: 24,
						marginLeft: 0,
						background: "transparent",
						border: "transparent",
						right: 0,
						position: "absolute",
						top: "8px",
					}}
				>
					<span
						aria-hidden="true"
						style={{ padding: '0 2px' }}
					>
						▼
					</span>
				</button>
				{state.isOpen &&
					(
						<Popover
							popoverRef={popoverRef}
							isOpen={state.isOpen}
							onClose={state.close}
						>
							<ListBox
								{...listBoxProps}
								listBoxRef={listBoxRef}
								state={state}
							/>
						</Popover>
					)}
			</div>
		</div>
	);
}
ComboBox.propTypes = propTypes;

export default ComboBox;
