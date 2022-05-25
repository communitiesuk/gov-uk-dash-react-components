import React, { Component } from 'react'
import PropTypes from 'prop-types';

const debounce = function (func, wait, immediate) {
	var timeout
	return function () {
		var context = this
		var args = arguments
		var later = function () {
			timeout = null
			if (!immediate) {func.apply(context, args)}
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) {func.apply(context, args)}
	}
}
const statusDebounceMillis = 1400

/**
 * Display ststus
 *
 * @export
 * @class Status
 * @extends {Component}
 */
export default class Status extends Component {
	state = {
		bump: false,
		debounced: false
	}

	constructor(props) {
		super(props)
		const that = this
		this.debounceStatusUpdate = debounce(function () {
			if (!that.state.debounced) {
				const shouldSilence = !that.props.isInFocus || that.props.validChoiceMade
				that.setState(({ bump }) => ({ bump: !bump, debounced: true, silenced: shouldSilence }))
			}
		}, statusDebounceMillis)
	}

	UNSAFE_componentWillReceiveProps({ queryLength }) {
		this.setState({ debounced: false })
	}

	render() {
		const {
			id,
			length,
			queryLength,
			minQueryLength,
			selectedOption,
			selectedOptionIndex,
			tQueryTooShort,
			tNoResults,
			tSelectedOption,
			tResults
		} = this.props
		const { bump, debounced, silenced } = this.state

		const queryTooShort = queryLength < minQueryLength
		const noResults = length === 0

		const contentSelectedOption = selectedOption
			? tSelectedOption(selectedOption, length, selectedOptionIndex)
			: ''

		let content = null
		if (queryTooShort) {
			content = tQueryTooShort(minQueryLength)
		} else if (noResults) {
			content = tNoResults()
		} else {
			content = tResults(length, contentSelectedOption)
		}

		this.debounceStatusUpdate()

		return (
			<div
				style={{
					border: '0',
					clip: 'rect(0 0 0 0)',
					height: '1px',
					marginBottom: '-1px',
					marginRight: '-1px',
					overflow: 'hidden',
					padding: '0',
					position: 'absolute',
					whiteSpace: 'nowrap',
					width: '1px'
				}}>
				<div
					id={id + '__status--A'}
					role='status'
					aria-atomic='true'
					aria-live='polite'>
					{(!silenced && debounced && bump) ? content : ''}
				</div>
				<div
					id={id + '__status--B'}
					role='status'
					aria-atomic='true'
					aria-live='polite'>
					{(!silenced && debounced && !bump) ? content : ''}
				</div>
			</div>
		)
	}
}

Status.defaultProps = {
	tQueryTooShort: (minQueryLength) => `Type in ${minQueryLength} or more characters for results`,
	tNoResults: () => 'No search results',
	tSelectedOption: (selectedOption, length, index) => `${selectedOption} ${index + 1} of ${length} is highlighted`,
	tResults: (length, contentSelectedOption) => {
		const words = {
			result: (length === 1) ? 'result' : 'results',
			is: (length === 1) ? 'is' : 'are'
		}

		return `${length} ${words.result} ${words.is} available. ${contentSelectedOption}`
	}
}

Status.propTypes = {
	/**
	 * The ID used to identify this component in Dash callbacks.
	 */
	id: PropTypes.string,

	/**
	 * length
	 */
	length: PropTypes.number,

	/**
	 * min Query Length
	 */
	minQueryLength: PropTypes.number,

	/**
	 * Query Length
	 */
	queryLength: PropTypes.number,

	/**
	 * Selected option
	 */
	selectedOption: PropTypes.any,

	/**
	 * Selected Option Index
	 */
	selectedOptionIndex: PropTypes.number,

	/**
	 * tQueryTooShort
	 */
	tQueryTooShort: PropTypes.func,
	/**
	 * tNoResults
	 */
	tNoResults: PropTypes.func,
	/**
	 * tSelectedOption
	 */
	tSelectedOption: PropTypes.func,
	/**
	 * tResults
	 */
	tResults: PropTypes.func,
}