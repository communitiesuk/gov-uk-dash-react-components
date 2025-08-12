/* eslint-disable no-undefined */
import React, { render, useEffect, useRef, useState } from 'react';
import { propTypes } from '../components/AutoComplete.react';
import Status from '../components/status';
import { isIOSDevice } from '../helper/isIOS';
import { isPrintableKeyCode, keyCodes } from '../helper/keys';
import './autocomplete.css';

/**
 * Autocomplete to GOV GDS
 *
 * @param {*} [{
 * 	id,
 * 	autoselect,
 * 	cssNamespace,
 * 	value,
 * 	displayMenu,
 * 	minLength,
 * 	name,
 * 	placeholder,
 * 	onConfirm,
 * 	confirmOnBlur,
 * 	showNoOptionsFound,
 * 	showAllValues,
 * 	required,
 * 	tNoResults,
 * 	tAssistiveHint,
 * 	source,
 * 	templates,
 * 	dropdownArrow: dropdownArrowFactory,
 * 	tStatusQueryTooShort,
 * 	tStatusNoResults,
 * 	tStatusSelectedOption,
 * 	tStatusResults,
 *  errorMessage,
 *  errorMessageWhenEmpty,
 * }=defaultProps]
 * @return {*}
 */
const AutoComplete = (props) => {
	const {
		id,
		autoselect,
		cssNamespace,
		value,
		displayMenu,
		minLength=0, // <-- make sure default is 0 if not passed
		name,
		placeholder,
		onConfirm,
		confirmOnBlur,
		showNoOptionsFound,
		showAllValues,
		required,
		tNoResults,
		tAssistiveHint,
		source,
		templates,
		dropdownArrow: dropdownArrowFactory,
		tStatusQueryTooShort,
		tStatusNoResults,
		tStatusSelectedOption,
		tStatusResults,
		setProps,
		ariaLabelledBy,
		selectElement,
		alwaysDisplayArrow,
		style,
		errorMessage,
		errorMessageWhenEmpty,
		menu_open,
	} = {...props }
	if (!id) { throw new Error('id is not defined') }
	if (!source) { throw new Error('source is not defined') }

	const createSimpleEngine = (values) => (query, syncResults) => {

		if (values.length && typeof values[0] === 'object') {
			syncResults(values.filter(r => (r ? r.label || r.name || r.value || r : r).toLowerCase().indexOf(query.toLowerCase()) !== -1))
		} else {
			syncResults(values.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1))
		}
	}
	const getOptionFromValue = (query, options) => {
		return options.find(opt => (opt.value || opt)?.toLowerCase() === query?.toLowerCase());
	}

	const getValueFromQuery = (query, options) => {
		return options.find(r => (r ? r.label || r.name || r.value || r : r)?.toLowerCase() === query?.toLowerCase());
	}

	const getOptionLabelFromValue = (query, options) => {
		const res = getOptionFromValue(query, options);
		return res?.label || res?.name || res
	}
	const dataSource = Array.isArray(source) ? createSimpleEngine(source) : source;
	const [isFocus, setFocus] = useState(null);
	const [isHover, setHover] = useState(null);
	const [isMenuOpen, setMenuOpen] = useState(false);

	const [validChoiceMade, setValidChoiceMade] = useState(false);
	const [selected, setSelected] = useState(null);
	const [ariaHint, setAriaHint] = useState(true);

	const startValue = Array.isArray(source) ? (getOptionLabelFromValue(value, source) || '') : null
	const [options, setOptions] = useState(startValue !== '' ? source : []);
	const [query, setQuery] = useState(startValue || value || '');

	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const [interaction, setInteraction] = useState('');
	const handleMouseDown = () => {
		setInteraction('click');
	};

	useEffect(() => {
		// If source is an array
		if (Array.isArray(source)) {
			const startValue = getOptionLabelFromValue(value, source) || '';
			setOptions(source);
			setQuery(startValue);
		}
		// If source is a function for fetching data
		else {
			dataSource('', (options) => {
				const startValue = getOptionLabelFromValue(value, options) || '';
				setOptions(options);
				setQuery(startValue);
			});
		}
	}, [source, value]);
	const elementReferences = {};

	const getRealOptions = (options) => {
		return typeof options[0] === 'object' ? options.map(option => option?.value || option) : options;
	}

	// This template is used when converting from a state.options object into a state.query.
	const templateInputValue = (value) => {
		const inputValueTemplate = templates?.inputValue
		return inputValueTemplate ? inputValueTemplate(value) : (value?.value ?? value)
	}

	// This template is used when displaying results / suggestions.
	const templateSuggestion = (value) => {
		const suggestionTemplate = templates?.suggestion
		return suggestionTemplate ? suggestionTemplate(value) : (value ? value.label || value.name || value.value || value : value)
	}

	const isQueryAnOption = (query, options) => {
		return options.some(entry => {
			return (entry.value === getValueFromQuery(query, options).value);
		});
	};

	const handleComponentBlur = (newState, escape) => {
		const focusOnBlur = escape && (selectElement) ? -1 : null
		let newQuery
		if (confirmOnBlur) {
			newQuery = newState.query || query;
			const selectedOption = options[selected];
			onConfirm(selectedOption?.value ?? selectedOption)
		} else {
			newQuery = query
		}
		setFocus(focusOnBlur);
		setMenuOpen(newState.menuOpen || false);
		setQuery(newQuery);
		setSelected(null);

		const validQuery = isQueryAnOption(newQuery, options);
		setValidChoiceMade(validQuery);
		const queryLength = query ? query.trim().length : 0
		if (queryLength !== 0 || errorMessageWhenEmpty === true) {
			setShowErrorMessage(!validQuery);
		}
		if (queryLength === 0 && errorMessageWhenEmpty === false) {
			setShowErrorMessage(false)
		}
	}
	const handleListMouseLeave = () => {
		setHover(null);
	}

	const handleOptionBlur = (event, index) => {
		const focusingOutsideComponent = event.relatedTarget === null
		const focusingInput = event.relatedTarget === elementReferences[-1]
		const focusingAnotherOption = isFocus !== index && isFocus !== -1
		const blurComponent = (!focusingAnotherOption && focusingOutsideComponent) || !(focusingAnotherOption || focusingInput)
		if (blurComponent) {
			const keepMenuOpen = isMenuOpen && isIOSDevice()
			handleComponentBlur({
				menuOpen: keepMenuOpen,
				query: templateInputValue(options[selected])
			})
		}
	}

	const handleInputBlur = (event) => {
		const focusingAnOption = isFocus !== -1
		if (!focusingAnOption || !event?.relatedTarget?.matches('li.autocomplete__option')) {
			const keepMenuOpen = isMenuOpen && isIOSDevice()
			const newQuery = isIOSDevice() ? query : templateInputValue(options[selected])
			handleComponentBlur({
				menuOpen: keepMenuOpen,
				query: newQuery
			})
		}
	}

	const handleInputFocus = (event) => {
		if (interaction === 'click') {
			setInteraction('');
		} else {
			updateMenuForInput(event.target.value);
		}
	}

	const wrapAround = (index) => {
		const selectOptions = selectElement.options
		const queryLength = query ? query.trim().length : 0
		const length = queryLength > minLength ? options.length : selectOptions.length

		if (index < 0) {
			return length - 1
		} else if (index >= length) {
			return 0
		}

		return index
	}

	const handleOptionFocus = (index, select) => {
		// if we're replacing a select element, then we need
		// to allow the user to wrap around the options when pressing
		// up/down arrows
		const useIndex = selectElement ? wrapAround(index) : index;

		setFocus(useIndex);
		setHover(null);
		setSelected(useIndex);

		if (select) {
			const selectedOption = options[useIndex]
			const newQuery = templateInputValue(selectedOption)
			setQuery(newQuery);
			setValidChoiceMade(true);

			if (selectElement) {
				onConfirm(selectedOption)
			}
		}
	}

	const handleOptionMouseEnter = (index) => {
		// iOS Safari prevents click event if mouseenter adds hover background colour
		// See: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW4
		if (!isIOSDevice()) {
			setHover(index)
		}
	}

	const hasAutoselect = () => {
		return isIOSDevice() ? false : autoselect
	}



	const handleOptionClick = (event, index, menuOpen = false) => {
		// Do not remove this, otherwise the input can receive the event and
		// keep the menu open unintentionally
		event.preventDefault()
		event.stopPropagation()

		const selectedOption = options[index]
		if (selectedOption.disabled === true) {
			return
		}
		const newQuery = templateInputValue(selectedOption)
		onConfirm(selectedOption?.value ?? selectedOption)

		setFocus(-1);
		setHover(null);
		setMenuOpen(menuOpen);
		setQuery(newQuery)
		if (confirmOnBlur) {
			setSelected(-1);
		}
		setValidChoiceMade(true);
	}

	const handleOptionMouseDown = (event) => {
		// Safari triggers focusOut before click, but if you
		// preventDefault on mouseDown, you can stop that from happening.
		// If this is removed, clicking on an option in Safari will trigger
		// `handleOptionBlur`, which closes the menu, and the click will
		// trigger on the element underneath instead.
		// See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
		event.preventDefault()
	}

	const handleUpArrow = (event) => {
		event.preventDefault()

		// If we're replacing a select element, we need to provide the interaction
		// where the dropdown is closed, and user presses up.
		// In this case they focus on the option before the selected one (or the last),
		// and also make menu open
		if (selectElement && isMenuOpen === false) {
			dataSource('', (options) => {
				setMenuOpen(true);
				setOptions(options);

				const realOpt = getRealOptions(options);

				let index = query && realOpt.indexOf(query) > 0 ? realOpt.indexOf(query) - 1 : options.length - 1

				if (index < 0) {
					index = options.length - 1
				}

				handleOptionFocus(index, true)
			})
		} else {
			const isNotAtTop = selected !== -1
			const allowMoveUp = isNotAtTop && isMenuOpen

			if (allowMoveUp) {
				const indexOfPreviousValidOption = getIndexOfPreviousValidOption();
				handleOptionFocus(indexOfPreviousValidOption, autoselect);
			} else if (selectElement) {
				handleOptionFocus(selected - 1, autoselect);
			}
		}
	}

	const getIndexOfPreviousValidOption = () => {
		let offsetFromSelected = 1;
		let previousOption = options[selected - offsetFromSelected];
		while (selected - offsetFromSelected !== -1 && previousOption?.disabled === true) {
			offsetFromSelected++;
			previousOption = options[selected - offsetFromSelected];
		}
		return selected - offsetFromSelected;
	}


	const handleDownArrow = (event) => {
		event.preventDefault()
		// If we're replacing a select element, we need to provide the interaction
		// where the dropdown is closed, and user presses down.
		// In this case they focus on the option after the selected one (or the first),
		// and also make menu open
		if (selectElement && !isMenuOpen) {
			dataSource('', (options) => {
				setMenuOpen(true);
				setOptions(options);
				const realOpt = getRealOptions(options);
				let index = query && realOpt.indexOf(query) > -1 ? realOpt.indexOf(query) + 1 : 0

				if (index >= options.length) {
					index = 0
				}

				handleOptionFocus(index, true)
			})
		} else if (showAllValues && !isMenuOpen) {
			event.preventDefault()
			dataSource('', (options) => {
				setMenuOpen(true);
				setOptions(options);
				setSelected(0);
				setFocus(0);
				setHover(null);
			})
		} else if (isMenuOpen) {
			const nextValidOptionIndex = getIndexOfNextValidOption(selected)
			if (nextValidOptionIndex !== null) {
				handleOptionFocus(nextValidOptionIndex, autoselect);
			} else if (selectElement) {
				handleOptionFocus(selected + 1, autoselect);
			}
		}
	}

	const getIndexOfNextValidOption = (selected) => {
		const isAtBottom = selected === options.length - 1;
		if (isAtBottom) return null;

		const subsequentOptions = options.slice(selected + 1);
		const subsequentOptionsIndex = subsequentOptions.findIndex((option) => option.disabled !== true);
		if (subsequentOptionsIndex === -1) return null;

		const offsetOfNextValidOption = subsequentOptionsIndex + 1;

		return selected + offsetOfNextValidOption;
	}

	const handleSpace = (event) => {
		if ((showAllValues && !isMenuOpen) || (showAllValues && !isMenuOpen && query === '')) {
			if (query.trim().length === 0) {
				event.preventDefault()
			}
			dataSource('', (options) => {
				const realOpt = getRealOptions(options);
				const index = query && realOpt.indexOf(query) > -1 ? realOpt.indexOf(query) : 0
				setMenuOpen(true);
				setOptions(options);
				setFocus(index);
				setSelected(index);
			})
			return;
		}
	}

	const handleEnter = (event) => {
		if (isMenuOpen) {
			event.preventDefault()
			const hasSelectedOption = selected >= 0

			if (hasSelectedOption && !options[selected].disabled) {
				handleOptionClick(event, selected, false)
			}
		} else if (selectElement) {
			dataSource('', (options) => {
				setOptions(options)
				const realOpt = getRealOptions(options);
				let index = query && realOpt.indexOf(query) > -1 ? realOpt.indexOf(query) : 0
				let openMenu = true

				if (!selectElement) {
					index = -1
					openMenu = false
				}
				setMenuOpen(openMenu);
				setFocus(index);
				setSelected(index);
			})
		}
	}

	const handlePrintableKey = (event) => {
		const inputElement = elementReferences[-1]
		const eventIsOnInput = event.target === inputElement
		if (!eventIsOnInput) {
			inputElement.focus()
		}
	}


	const handleKeyDown = (event) => {
		switch (keyCodes[event.keyCode]) {
			case 'up':
				handleUpArrow(event)
				break
			case 'down':
				handleDownArrow(event)
				break
			case 'space':
				handleSpace(event)
				break
			case 'enter':
				handleEnter(event)
				break
			case 'escape':
				handleComponentBlur({
					query: query
				}, true)
				break
			default:
				if (isPrintableKeyCode(event.keyCode)) {
					handlePrintableKey(event)
				}
				break
		}
	}
	const handleInputChange = (event) => {
		// Besides the normal input that can be received by the user,
		// we also need to take care of special actions even in the input
		switch (keyCodes[event.keyCode]) {
			case 'up':
				handleUpArrow(event)
				break
			case 'down':
				handleDownArrow(event)
				break
			case 'space':
				handleSpace(event)
				break
			case 'enter':
				handleEnter(event)
				break
			case 'escape':
				handleComponentBlur({
					query: event.target.value
				}, true)

				break
			default: {
				const autoselect = hasAutoselect()
				const newQuery = event.target.value
				const queryChanged = query !== newQuery
				const queryLongEnough = newQuery.length >= minLength

				setQuery(newQuery);
				setAriaHint(newQuery.length === 0)

				const searchForOptions = showAllValues || (newQuery.length && queryChanged && queryLongEnough)
				if (searchForOptions) {
					dataSource(newQuery, (options) => {
						const optionsAvailable = options.length > 0
						setMenuOpen(optionsAvailable);
						setOptions(options);
						setSelected((autoselect && optionsAvailable) ? 0 : -1);
						setValidChoiceMade(false);
						setFocus(selectElement ? (optionsAvailable ? 0 : -1) : -1)
					})
				} else if (!newQuery.length || !queryLongEnough) {
					setMenuOpen(false);
					setOptions([]);
				}
			}
				break
		}
	}

	const handleInputClick = () => {
		if (isMenuOpen) {
			// Menu is open, so close it
			handleComponentBlur({ menuOpen: false }, true);
		} else {
			// Menu is closed, so open it and show all options
			setMenuOpen(true);
			updateMenuForInput('');
		}
		};


	const updateMenuForInput = (newQuery) => {
		dataSource('', (options) => {
			const currentSelectionIndex = options.indexOf(newQuery);
			setOptions(options);
			setMenuOpen(true);
			setFocus(currentSelectionIndex);
			setSelected(currentSelectionIndex);
			setHover(null);
		});
	};

	useEffect(() => {
		if (typeof setProps === 'function') {
			const opt = getOptionFromValue(query, options) || getValueFromQuery(query, options)
			const value = opt?.value || opt;
			if (value) {
				setProps({ value })
			}
		}
		setAriaHint(!query?.length)
	}, [query])

	useEffect(() => {
		// Set query and options when new value passed in
		setOptions(source);
		setShowErrorMessage(false);

		if (!value) {
			setQuery("");
		} else {
			setQuery(value);
		}
	}, [value])

	useEffect(() => {
		if (typeof setProps === 'function') {
			const menu_open = isMenuOpen;
			setProps({ menu_open })
		}
	}, [isMenuOpen])

	const autoselectRend = hasAutoselect()

	const inputFocused = isFocus === -1
	const noOptionsAvailable = options?.length === 0
	const queryNotEmpty = query?.length !== 0
	const queryLongEnough = query?.length >= minLength
	const showNoOptionsFoundRender = showNoOptionsFound &&
		inputFocused && noOptionsAvailable && queryNotEmpty && queryLongEnough

	const wrapperClassName = `${cssNamespace}__wrapper`

	const inputClassName = `${cssNamespace}__input`
	const componentIsFocused = isFocus !== null
	const inputModifierFocused = componentIsFocused ? ` ${inputClassName}--focused` : ''
	const inputModifierType = showAllValues ? ` ${inputClassName}--show-all-values` : ` ${inputClassName}--default`
	const dropdownArrowClassName = `${cssNamespace}__dropdown-arrow-down`
	const optionFocused = isFocus !== -1 && isFocus !== null

	const menuClassName = `${cssNamespace}__menu`
	const menuModifierDisplayMenu = `${menuClassName}--${displayMenu}`
	const menuIsVisible = isMenuOpen || showNoOptionsFoundRender
	const menuModifierVisibility = `${menuClassName}--${(menuIsVisible) ? 'visible' : 'hidden'}`

	const optionClassName = `${cssNamespace}__option`

	const hintClassName = `${cssNamespace}__hint`
	const selectedOptionText = templateInputValue(options?.[selected])
	const optionBeginsWithQuery = selectedOptionText &&
		selectedOptionText.toLowerCase().indexOf(query.toLowerCase()) === 0
	const hintValue = (optionBeginsWithQuery && autoselectRend)
		? query + selectedOptionText.substr(query?.length)
		: ''

	const assistiveHintID = id + '__assistiveHint'
	const ariaDescribedProp = (ariaHint) ? {
		'aria-describedby': assistiveHintID
	} : null



	const selectAllTextInInput = () => {
		const inputElement = elementReferences[-1];
		inputElement.setSelectionRange(0, inputElement.value.length);
	}

	const previousFocus = useRef();

	useEffect(() => {
		const componentLostFocus = isFocus === null;
		const componentGainedFocus = previousFocus.current === null;
		const focusChangedWithinComponent = !componentLostFocus && !componentGainedFocus;

		if (focusChangedWithinComponent) {
			elementReferences[isFocus].focus();
		}
		if (componentGainedFocus) {
			selectAllTextInInput();
		}

		previousFocus.current = isFocus
	}, [isFocus])


	let dropdownArrow

	// we only need a dropdown arrow if showAllValues is set to a truthy value
	if (showAllValues || alwaysDisplayArrow) {
		dropdownArrow = dropdownArrowFactory({ className: dropdownArrowClassName })

		// if the factory returns a string we'll render this as HTML (usage w/o (P)React)
		if (typeof dropdownArrow === 'string') {
			dropdownArrow = <div className={`${cssNamespace}__dropdown-arrow-down-wrapper`} dangerouslySetInnerHTML={{ __html: dropdownArrow }} />
		}
	}

	return (
		<div className={showErrorMessage ? 'govuk-form-group govuk-form-group--error' : ''}>
			{showErrorMessage && (<p className="govuk-error-message"> <span class="govuk-visually-hidden">Error:</span> {errorMessage}</p>)}

			<div className={wrapperClassName} onKeyDown={handleKeyDown} style={style}>

				<Status
					id={id}
					length={options?.length}
					queryLength={query?.length}
					minQueryLength={minLength}
					selectedOption={templateInputValue(options?.[selected])}
					selectedOptionIndex={selected}
					validChoiceMade={validChoiceMade}
					isInFocus={isFocus !== null}
					tQueryTooShort={tStatusQueryTooShort}
					tNoResults={tStatusNoResults}
					tSelectedOption={tStatusSelectedOption}
					tResults={tStatusResults}
				/>
				{hintValue && (
					<span><input className={hintClassName} readonly tabIndex='-1' value={hintValue} /></span>
				)}
				<input
					aria-expanded={isMenuOpen ? 'true' : 'false'}
					{
					...(optionFocused) ? {
						'aria-activedescendant': `${id}__option--${isFocus}`
					} : null
					}
					aria-owns={`${id}__listbox`}
					aria-autocomplete={(hasAutoselect()) ? 'both' : 'list'}
					aria-labelledby={ariaLabelledBy}
					{...ariaDescribedProp}
					autoComplete='off'
					className={`${inputClassName}${inputModifierFocused}${inputModifierType}`}
					id={id}
					onClick={handleInputClick}
					onBlur={handleInputBlur}
					onChange={handleInputChange}
					onFocus={handleInputFocus}
					onMouseDown={handleMouseDown}
					name={name}
					placeholder={placeholder}
					ref={(inputElement) => { elementReferences[-1] = inputElement; }}
					type='text'
					role='combobox'
					required={required}
					value={getOptionLabelFromValue(query, options) ?? query}
				/>
				{dropdownArrow}
				<ul
					className={`${menuClassName} ${menuModifierDisplayMenu} ${menuModifierVisibility}`}
					onMouseLeave={(event) => handleListMouseLeave(event)}
					id={`${id}__listbox`}
					role='listbox'
				>
					{options?.map((option, index) => {
						const showFocused = isFocus === -1 ? selected === index : isFocus === index
						const optionModifierFocused = showFocused && isHover === null ? ` ${optionClassName}--focused` : ''
						const optionModifierOdd = (index % 2) ? ` ${optionClassName}--odd` : ''
						const iosPosinsetHtml = (isIOSDevice())
							? `<span id=${id}__option-suffix--${index} style="border:0;clip:rect(0 0 0 0);height:1px;` +
							'marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;' +
							'whiteSpace:nowrap;width:1px">' + ` ${index + 1} of ${options?.length}</span>`
							: ''

						let optionClass;

						if (option.heading) {
						// Option is a heading
						optionClass = `${optionClassName} ${optionClassName}--heading`;
						} else if (option.disabled) {
						// Option is disabled
						optionClass = `${optionClassName} ${optionClassName}--disabled`;
						} else {
						// Option is enabled and selectable
						optionClass = `${optionClassName}${optionModifierFocused}${optionModifierOdd}`;
						}
						return (
							<li
								aria-selected={isFocus === index ? 'true' : 'false'}
								className={optionClass}
								option-value={option.value}
								dangerouslySetInnerHTML={{ __html: templateSuggestion(option) + iosPosinsetHtml }}
								id={`${id}__option--${index}`}
								key={index}
								onBlur={(event) => handleOptionBlur(event, index)}
								onClick={(event) => handleOptionClick(event, index, false)}
								onMouseDown={handleOptionMouseDown}
								onMouseEnter={() => handleOptionMouseEnter(index)}
								ref={(optionEl) => { elementReferences[index] = optionEl; }}
								role='option'
								tabIndex='-1'
								aria-posinset={index + 1}
								aria-setsize={options.length}
							/>
						)
					})}
					{showNoOptionsFoundRender && (
						<li className={`${optionClassName} ${optionClassName}--disabled`}>{tNoResults()}</li>
					)}
				</ul>

				<span id={assistiveHintID} style={{ display: 'none' }}>{tAssistiveHint()}</span>

			</div>
		</div>
	)
}
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default AutoComplete;

AutoComplete.enhanceSelectElement = (configurationOptions) => {
	if (!configurationOptions.selectElement) { throw new Error('selectElement is not defined') }

	// Set defaults.
	if (!configurationOptions.source) {
		const availableOptions = [].filter.call(configurationOptions.selectElement.options, option => (option.value || configurationOptions.preserveNullOptions))
		configurationOptions.source = availableOptions.map(option => option.textContent || option.innerText)
	}
	configurationOptions.onConfirm = configurationOptions.onConfirm || (query => {
		const requestedOption = [].filter.call(configurationOptions.selectElement.options, option => (option.textContent || option.innerText) === query)[0]
		if (requestedOption) { requestedOption.selected = true }
		// trigger change event on original select element
		const event = new Event('change', { bubbles: true, cancelable: false })
		configurationOptions.selectElement.dispatchEvent(event)
	})

	if (configurationOptions.selectElement.value || configurationOptions.value === undefined) {
		const option = configurationOptions.selectElement.options[configurationOptions.selectElement.options.selectedIndex]
		configurationOptions.value = option.textContent || option.innerText
	}

	if (configurationOptions.name === undefined) { configurationOptions.name = '' }
	if (configurationOptions.id === undefined) {
		if (configurationOptions.selectElement.id === undefined) {
			configurationOptions.id = ''
		} else {
			configurationOptions.id = configurationOptions.selectElement.id
		}
	}
	if (configurationOptions.autoselect === undefined) { configurationOptions.autoselect = true }

	const element = document.createElement('div')

	configurationOptions.selectElement.parentNode.insertBefore(element, configurationOptions.selectElement)

	// eslint-disable-next-line new-cap
	render(AutoComplete({
		...configurationOptions,
	}), element)

	configurationOptions.selectElement.style.display = 'none'
	configurationOptions.selectElement.id = configurationOptions.selectElement.id + '-select'
}

AutoComplete.propTypes = propTypes;