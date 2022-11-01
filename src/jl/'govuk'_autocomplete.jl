# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_autocomplete

"""
    'govuk'_autocomplete(;kwargs...)

An AutoComplete component.
Lazy loaded Autocomplete

@param {
	id,
	autoselect,
	cssNamespace,
	defaultValue,
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
	style,
 errorMessage,
} [props={}]
@return {*}
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `alwaysDisplayArrow` (Bool; optional): alwaysDisplayArrow
- `ariaLabelledBy` (String; optional): This is the ID for the label field
- `autoselect` (Bool; optional): Should auto select
- `confirmOnBlur` (Bool; optional): No Description
- `cssNamespace` (String; optional): cssNamespace
- `displayMenu` (String; optional): No Description
- `dropdownArrow` (Bool | Real | String | Dict | Array; optional): React component for dropdown arrow
- `errorMessage` (String; optional): Error message to display when invalid input entered in dropdown
- `minLength` (Real; optional): No Description
- `name` (String; optional): No Description
- `placeholder` (String; optional): No Description
- `required` (Bool; optional): No Description
- `selectElement` (Bool | Real | String | Dict | Array; optional): Accessible element
- `showAllValues` (Bool; optional): No Description
- `showNoOptionsFound` (Bool; optional): No Description
- `source` (Bool | Real | String | Dict | Array; optional): No Description
- `style` (Bool | Real | String | Dict | Array; optional): Override the css style of the wrapper
- `tStatusNoResults` (Bool | Real | String | Dict | Array; optional): No Description
- `tStatusResults` (Bool | Real | String | Dict | Array; optional): No Description
- `templates` (Bool | Real | String | Dict | Array; optional): No Description
- `value` (String; optional): The value displayed in the input.
- `wrapperRef` (Bool | Real | String | Dict | Array; optional): wrapperRef
"""
function 'govuk'_autocomplete(; kwargs...)
        available_props = Symbol[:id, :alwaysDisplayArrow, :ariaLabelledBy, :autoselect, :confirmOnBlur, :cssNamespace, :displayMenu, :dropdownArrow, :errorMessage, :minLength, :name, :placeholder, :required, :selectElement, :showAllValues, :showNoOptionsFound, :source, :style, :tStatusNoResults, :tStatusResults, :templates, :value, :wrapperRef]
        wild_props = Symbol[]
        return Component("'govuk'_autocomplete", "AutoComplete", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

