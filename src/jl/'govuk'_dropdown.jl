# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_dropdown

"""
    'govuk'_dropdown(;kwargs...)

A Dropdown component.
@param {{
	label: string,
	id,
	autoselect,
	cssNamespace,
	value,
	minLength,
	name,
	placeholder,
	onConfirm,
	confirmOnBlur,
	showNoOptionsFound,
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
 errorMessage,
}} [props={}]

@return {*}
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `autoselect` (Bool; optional): Should auto select
- `confirmOnBlur` (Bool; optional): No Description
- `cssNamespace` (String; optional): cssNamespace
- `dropdownArrow` (Bool | Real | String | Dict | Array; optional): React component for dropdown arrow
- `errorMessage` (String; optional): Error message to display when invalid input entered in dropdown
- `label` (String; optional): Label text
- `minLength` (Real; optional): No Description
- `name` (String; optional): No Description
- `placeholder` (String; optional): No Description
- `required` (Bool; optional): No Description
- `selectElement` (Bool | Real | String | Dict | Array; optional): Accessible element
- `showNoOptionsFound` (Bool; optional): No Description
- `source` (Bool | Real | String | Dict | Array; optional): No Description
- `style` (Bool | Real | String | Dict | Array; optional): Override the css style of the wrapper
- `tStatusNoResults` (Bool | Real | String | Dict | Array; optional): No Description
- `tStatusResults` (Bool | Real | String | Dict | Array; optional): No Description
- `templates` (Bool | Real | String | Dict | Array; optional): No Description
- `value` (String; optional): The value displayed in the input.
- `wrapperRef` (Bool | Real | String | Dict | Array; optional): wrapperRef
"""
function 'govuk'_dropdown(; kwargs...)
        available_props = Symbol[:id, :autoselect, :confirmOnBlur, :cssNamespace, :dropdownArrow, :errorMessage, :label, :minLength, :name, :placeholder, :required, :selectElement, :showNoOptionsFound, :source, :style, :tStatusNoResults, :tStatusResults, :templates, :value, :wrapperRef]
        wild_props = Symbol[]
        return Component("'govuk'_dropdown", "Dropdown", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

