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
 expandedClass,
 collapsedClass,
 ariaLabel,
} [props={}]
@return {*}
Keyword arguments:
- `children` (Array; optional): An array of li HTML elements that will displayed on click
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `ariaLabel` (String; optional): Accessible text to describe the expandable menu element, attached to Li element that wraps the children
- `collapsedByDefault` (Bool; optional): Default behaviour of whether or not the sub-menu is collapsed on load
- `collapsedClass` (String; optional): CSS class that will be applied when the menu is collapsed
- `expandedClass` (String; optional): CSS class that will be applied when the menu is expanded
- `title` (String; optional): The clickable text to display sub-menu
"""
function 'govuk'_expandablemenuitem(; kwargs...)
        available_props = Symbol[:children, :id, :ariaLabel, :collapsedByDefault, :collapsedClass, :expandedClass, :title]
        wild_props = Symbol[]
        return Component("'govuk'_expandablemenuitem", "ExpandableMenuItem", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

'govuk'_expandablemenuitem(children::Any; kwargs...) = 'govuk'_expandablemenuitem(;kwargs..., children = children)
'govuk'_expandablemenuitem(children_maker::Function; kwargs...) = 'govuk'_expandablemenuitem(children_maker(); kwargs...)

