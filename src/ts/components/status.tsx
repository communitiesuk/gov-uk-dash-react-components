import React, { useState } from 'react'
import { DashComponentProps } from '../props'

const debounce = (func: () => void, wait: number, immediate: boolean = false) => {
	var timeout: NodeJS.Timeout
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
const STATUS_DEBOUNCE_Millis = 1400

/**
 * @description Show the status for Autocomplete
 */
const Status = (
    props: {
        isInFocus?: boolean;
        validChoiceMade?: boolean;
        length?: number;
        queryLength?: number;
        minQueryLength?: number;
        selectedOption?: string;
        selectedOptionIndex?: number;
        tQueryTooShort?: (minQueryLength: number) => string | JSX.Element;
        tNoResults: () => string | JSX.Element;
        tSelectedOption?: (
            selectedOption: string,
            length: number,
            selectedOptionIndex: number
        ) => string;
        tResults?: (length: number, contentSelectedOption: string) => string;
    } & DashComponentProps
) => {
    const [bump, setBump] = useState(false);
    const [debounced, setDebounced] = useState(false);
    const [silenced, setSilenced] = useState(false);

    const debounceStatusUpdate = debounce(function () {
        if (!debounced) {
            const shouldSilence = !props.isInFocus || props.validChoiceMade;
            setBump(!bump);
            setDebounced(true);
            setSilenced(shouldSilence);
        }
    }, STATUS_DEBOUNCE_Millis);

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
        tResults,
    } = props;

    const queryTooShort = queryLength < minQueryLength;
    const noResults = length === 0;

    const contentSelectedOption = selectedOption
        ? tSelectedOption(selectedOption, length, selectedOptionIndex)
        : "";

    let content = null;
    if (queryTooShort) {
        content = tQueryTooShort(minQueryLength);
    } else if (noResults) {
        content = tNoResults();
    } else {
        content = tResults(length, contentSelectedOption);
    }

    debounceStatusUpdate();

    return (
        <div
            style={{
                border: "0",
                clip: "rect(0 0 0 0)",
                height: "1px",
                marginBottom: "-1px",
                marginRight: "-1px",
                overflow: "hidden",
                padding: "0",
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px",
            }}
        >
            <div
                id={id + "__status--A"}
                role="status"
                aria-atomic="true"
                aria-live="polite"
            >
                {!silenced && debounced && bump ? content : ""}
            </div>
            <div
                id={id + "__status--B"}
                role="status"
                aria-atomic="true"
                aria-live="polite"
            >
                {!silenced && debounced && !bump ? content : ""}
            </div>
        </div>
    );
};
// Status.defaultProps = {
// 	tQueryTooShort: (minQueryLength: any) => `Type in ${minQueryLength} or more characters for results`,
// 	tNoResults: () => 'No search results',
// 	tSelectedOption: (selectedOption: string, length: number, index: number) => `${selectedOption} ${index + 1} of ${length} is highlighted`,
// 	tResults: (length: number, contentSelectedOption: any) => {
// 		const words = {
// 			result: (length === 1) ? 'result' : 'results',
// 			is: (length === 1) ? 'is' : 'are'
// 		}

// 		return `${length} ${words.result} ${words.is} available. ${contentSelectedOption}`
// 	}
// }

export default Status