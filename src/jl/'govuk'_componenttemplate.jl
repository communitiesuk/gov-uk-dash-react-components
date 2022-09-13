# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_componenttemplate

"""
    'govuk'_componenttemplate(;kwargs...)

A ComponentTemplate component.
Lazy loaded ComponentTemplate

@param {
	id,
} [props={}]
@return {*}
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
"""
function 'govuk'_componenttemplate(; kwargs...)
        available_props = Symbol[:id]
        wild_props = Symbol[]
        return Component("'govuk'_componenttemplate", "ComponentTemplate", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

