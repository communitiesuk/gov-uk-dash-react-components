# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_expandablemenuitem

"""
    'govuk'_expandablemenuitem(;kwargs...)
    'govuk'_expandablemenuitem(children::Any;kwargs...)
    'govuk'_expandablemenuitem(children_maker::Function;kwargs...)


An ExpandableMenuItem component.
Lazy loaded ExpandableMenuItem

@param {
	id,
 title,
 collapsedByDefault,
 children,
} [props={}]
@return {*}
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): An array of li HTML elements that will displayed on click
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `collapsedByDefault` (Bool; optional): Default behaviour of whether or not the sub-menu is collapsed on load
- `title` (String; optional): The clickable text to display sub-menu
"""
function 'govuk'_expandablemenuitem(; kwargs...)
        available_props = Symbol[:children, :id, :collapsedByDefault, :title]
        wild_props = Symbol[]
        return Component("'govuk'_expandablemenuitem", "ExpandableMenuItem", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

'govuk'_expandablemenuitem(children::Any; kwargs...) = 'govuk'_expandablemenuitem(;kwargs..., children = children)
'govuk'_expandablemenuitem(children_maker::Function; kwargs...) = 'govuk'_expandablemenuitem(children_maker(); kwargs...)

