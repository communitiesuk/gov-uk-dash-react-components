import DropdownArrowDown from "../components/dropdownArrowDown.react";
/**
 * Lazy loaded Autocomplete
 *
@param {
 * 	id,
 * 	autoselect,
 * 	cssNamespace,
 * 	defaultValue,
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
 * 	style,
 *  errorMessage,
 *  errorMessageWhenEmpty,
 *  menu_open, 
 *  showOptionHeadings
 * } [props={}]
 * @return {*}
 */
export const AUTO_COMPLETE_DEFAULTS = {
    autoselect: false,
    cssNamespace: 'autocomplete',
    value: '',
    displayMenu: 'inline',
    minLength: 0,
    name: 'input-autocomplete',
    placeholder: '',
    onConfirm: () => { },
    confirmOnBlur: true,
    showNoOptionsFound: true,
    showAllValues: false,
    required: false,
    tNoResults: () => 'No results found',
    tAssistiveHint: () => 'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.',
    dropdownArrow: DropdownArrowDown,
    alwaysDisplayArrow: true,
    errorMessage: 'Invalid value entered',
    errorMessageWhenEmpty: false,
    menu_open: false,
    showOptionHeadings: false
};