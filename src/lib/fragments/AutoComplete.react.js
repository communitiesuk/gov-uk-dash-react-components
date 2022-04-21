/* eslint-disable no-undefined */
import React, { useState, useEffect, render } from 'react';
import { useInterval } from 'usehooks-ts'
import { defaultProps, propTypes } from '../components/AutoComplete.react';
import { isIOSDevice } from '../helper/isIOS';
import { isPrintableKeyCode, keyCodes } from '../helper/keys';
import Status from '../components/status'
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
		minLength,
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
		ariaLabelledBy
	} = { ...defaultProps, ...props }
	if (!id) { throw new Error('id is not defined') }
	if (!source) { throw new Error('source is not defined') }
	// if (configurationOptions.preserveNullOptions === undefined) configurationOptions.preserveNullOptions = true
	// if (configurationOptions.autoselect === undefined) configurationOptions.autoselect = true
	// if (configurationOptions.showAllValues === undefined) configurationOptions.showAllValues = true
	// if (configurationOptions.confirmOnBlur === undefined) configurationOptions.confirmOnBlur = true
	// if (configurationOptions.alwaysDisplayArrow === undefined) configurationOptions.alwaysDisplayArrow = true

	const createSimpleEngine = (values) => (query, syncResults) => {
		var matches = values.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
		syncResults(matches)
	}
	const dataSource = Array.isArray(source) ? createSimpleEngine(source) : source;
	const [ isFocus, setFocus ] = useState(null);
	const [ isHover, setHover ] = useState(null);
	const [ isMenuOpen, setMenuOpen ] = useState(false);
	const [options, setOptions] = useState(value ? [value] : []);
	const [query, setQuery] = useState(value);
	const [ validChoiceMade, setValidChoiceMade ] = useState(false);
	const [ selected, setSelected ] = useState(null);
	const [ ariaHint, setAriaHint ] = useState(true);

	const elementReferences = {};


	// This template is used when converting from a state.options object into a state.query.
	const templateInputValue = (value) => {
		const inputValueTemplate = templates?.inputValue
		return inputValueTemplate ? inputValueTemplate(value) : value
	}

	// This template is used when displaying results / suggestions.
	const templateSuggestion = (value) => {
		const suggestionTemplate = templates?.suggestion
		return suggestionTemplate ? suggestionTemplate(value) : value
	}

	const isQueryAnOption = (query, options) => {
		return options.map(entry => templateInputValue(entry).toLowerCase()).indexOf(query.toLowerCase()) !== -1
	}

	const handleComponentBlur = (newState) => {
		let newQuery
		if (confirmOnBlur) {
			newQuery = newState.query || query
			onConfirm(options[selected])
		} else {
			newQuery = query
		}
		setFocus(null);
		setMenuOpen(newState.menuOpen || false);
		setQuery(newQuery);
		setSelected(null);
		setValidChoiceMade(isQueryAnOption(newQuery, options))
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

	const handleInputBlur = () => {
		const focusingAnOption = isFocus !== -1
		if (!focusingAnOption) {
			const keepMenuOpen = isMenuOpen && isIOSDevice()
			const newQuery = isIOSDevice() ? query : templateInputValue(options[selected])
			handleComponentBlur({
				menuOpen: keepMenuOpen,
				query: newQuery
			})
		}
	}

	const handleInputFocus = () => {
		const shouldReopenMenu = !validChoiceMade && query.length >= minLength && options.length > 0
		setFocus(-1);
		if (shouldReopenMenu) {
			setMenuOpen(shouldReopenMenu || isMenuOpen);
			setSelected(-1)
		}
	}

	const handleOptionFocus = (index) => {
		setFocus(index);
		setHover(null);
		setSelected(index);
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


	const handleInputChange = (event) => {
		const autoselect = hasAutoselect()
		const newQuery = event.target.value
		const queryChanged = query !== newQuery
		const queryLongEnough = newQuery.length >= minLength

		setQuery(newQuery)
		setAriaHint()
		const searchForOptions = showAllValues || (newQuery.length && queryChanged && queryLongEnough)
		if (searchForOptions) {
			dataSource(newQuery, (options) => {
				const optionsAvailable = options.length > 0
				setMenuOpen(optionsAvailable);
				setOptions(options);
				setSelected((autoselect && optionsAvailable) ? 0 : -1);
				setValidChoiceMade(false);
			})
		} else if (!newQuery.length || !queryLongEnough) {
			setMenuOpen(false);
			setOptions([]);
		}
	}

	const handleOptionClick = (event, index) => {
		const selectedOption = options[index]
		const newQuery = templateInputValue(selectedOption)
		onConfirm(selectedOption)
		setFocus(-1);
		setHover(null);
		setMenuOpen(false);
		setQuery(newQuery)
		setSelected(-1);
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
		const allowMoveUp = selected !== -1 && isMenuOpen
		if (allowMoveUp) {
			handleOptionFocus(selected - 1)
		}
	}

	const handleDownArrow = (event) => {
		event.preventDefault()
		// if not open, open
		if (showAllValues && isMenuOpen === false) {
			event.preventDefault()
			dataSource('', (options) => {
				setMenuOpen(true);
				setOptions(options);
				setSelected(0);
				setFocus(0);
				setHover(null);
			})
		} else if (isMenuOpen) {
			const isNotAtBottom = selected !== options.length - 1
			const allowMoveDown = isNotAtBottom && isMenuOpen
			if (allowMoveDown) {
				handleOptionFocus(selected + 1)
			}
		}
	}

	const handleSpace = (event) => {
		// if not open, open
		if (showAllValues && isMenuOpen === false && query === '') {
			event.preventDefault()
			dataSource('', (options) => {
				setMenuOpen(true);
				setOptions(options);
			})
		}
		const focusIsOnOption = isFocus !== -1
		if (focusIsOnOption) {
			event.preventDefault()
			handleOptionClick(event, isFocus)
		}
	}

	const handleEnter = (event) => {
		if (isMenuOpen) {
			event.preventDefault()
			const hasSelectedOption = selected >= 0
			if (hasSelectedOption) {
				handleOptionClick(event, selected)
			}
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
				})
				break
			default:
				if (isPrintableKeyCode(event.keyCode)) {
					handlePrintableKey(event)
				}
				break
		}
	}

	useEffect(() => {
		if (typeof setProps === 'function' ) {
			setProps({ value: query})
		}
		setAriaHint(!query?.length)
	}, [query])

	useInterval(() => {
		const inputReference = elementReferences[-1]
		const queryHasChanged = inputReference?.value !== query
		if (queryHasChanged) {
			handleInputChange({ target: { value: inputReference.value } })
		}
	}, 100)

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

	let dropdownArrow

	// we only need a dropdown arrow if showAllValues is set to a truthy value
	if (showAllValues) {
		dropdownArrow = dropdownArrowFactory({ className: dropdownArrowClassName })

		// if the factory returns a string we'll render this as HTML (usage w/o (P)React)
		if (typeof dropdownArrow === 'string') {
			dropdownArrow = <div className={`${cssNamespace}__dropdown-arrow-down-wrapper`} dangerouslySetInnerHTML={{ __html: dropdownArrow }} />
		}
	}


	return (
		<div className={wrapperClassName} onKeyDown={handleKeyDown}>
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
				onClick={(event) => handleInputChange(event)}
				onBlur={handleInputBlur}
				onChange={handleInputChange}
				onFocus={handleInputFocus}
				name={name}
				placeholder={placeholder}
				ref={(inputElement) => { elementReferences[-1] = inputElement; }}
				type='text'
				role='combobox'
				required={required}
				value={query}
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

					return (
						<li
							aria-selected={isFocus === index ? 'true' : 'false'}
							className={`${optionClassName}${optionModifierFocused}${optionModifierOdd}`}
							dangerouslySetInnerHTML={{ __html: templateSuggestion(option) + iosPosinsetHtml }}
							id={`${id}__option--${index}`}
							key={index}
							onBlur={(event) => handleOptionBlur(event, index)}
							onClick={(event) => handleOptionClick(event, index)}
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
					<li className={`${optionClassName} ${optionClassName}--no-results`}>{tNoResults()}</li>
				)}
			</ul>

			<span id={assistiveHintID} style={{ display: 'none' }}>{tAssistiveHint()}</span>

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
		const event = new Event('change', { bubbles: true, cancelable: false})
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

AutoComplete.defaultProps = defaultProps;
AutoComplete.propTypes = propTypes;