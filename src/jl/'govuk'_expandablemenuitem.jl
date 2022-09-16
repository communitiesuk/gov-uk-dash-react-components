# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_expandablemenuitem

"""
    'govuk'_expandablemenuitem(;kwargs...)

An ExpandableMenuItem component.
Lazy loaded ExpandableMenuItem

@param {
	id,
 title,
 collapsedByDefault,
 links,
} [props={}]
@return {*}
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `collapsedByDefault` (Bool; optional): Default behaviour of whether or not the sub-menu is collapsed on load
- `links` (Array; optional): An array of li HTML elements that will displayed on click
- `title` (String; optional): The clickable text to display sub-menu
"""
function 'govuk'_expandablemenuitem(; kwargs...)
        available_props = Symbol[:id, :collapsedByDefault, :links, :title]
        wild_props = Symbol[]
        return Component("'govuk'_expandablemenuitem", "ExpandableMenuItem", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

