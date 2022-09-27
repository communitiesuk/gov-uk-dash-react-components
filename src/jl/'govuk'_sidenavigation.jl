# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_ExpandableMenuItem

"""
    'govuk'_ExpandableMenuItem(;kwargs...)

A ExpandableMenuItem component.
Lazy loaded ExpandableMenuItem

@param {
	id,
 title,
 collapsedByDefault,
} [props={}]
@return {*}
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `collapsedByDefault` (Bool; optional)
- `title` (String; optional)
"""
function 'govuk'_ExpandableMenuItem(; kwargs...)
        available_props = Symbol[:id, :collapsedByDefault, :title]
        wild_props = Symbol[]
        return Component("'govuk'_ExpandableMenuItem", "ExpandableMenuItem", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

