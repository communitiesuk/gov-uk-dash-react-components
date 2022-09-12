# AUTO GENERATED FILE - DO NOT EDIT

export govuk_checkboxlist

"""
    govuk_checkboxlist(;kwargs...)

A CheckboxList component.
Lazy loaded CheckboxList

@param {
	id,
	options,
	value,
} [props={}]
@return {*}
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `options` (optional): An array of options. options has the following type: Array of String | Real | Bools | Dict | Array of lists containing elements 'label', 'value', 'disabled', 'title'.
Those elements have the following types:
  - `label` (a list of or a singular dash component, string or number; required): The option's label
  - `value` (String | Real | Bool; required): The value of the option. This value
corresponds to the items specified in the
`value` property.
  - `disabled` (Bool; optional): If true, this option is disabled and cannot be selected.
  - `title` (String; optional): The HTML 'title' attribute for the option. Allows for
information on hover. For more information on this attribute,
see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/titles
- `value` (Array of String | Real | Bools; optional): The currently selected value
"""
function govuk_checkboxlist(; kwargs...)
        available_props = Symbol[:id, :options, :value]
        wild_props = Symbol[]
        return Component("govuk_checkboxlist", "CheckboxList", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

