# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_currenttime

"""
    'govuk'_currenttime(;kwargs...)

A CurrentTime component.
Lazy loaded ComponentTemplate

@param {
	id,
 value,
} [props={}]
@return {*}
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `value` (Real; optional)
"""
function 'govuk'_currenttime(; kwargs...)
        available_props = Symbol[:id, :value]
        wild_props = Symbol[]
        return Component("'govuk'_currenttime", "CurrentTime", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

