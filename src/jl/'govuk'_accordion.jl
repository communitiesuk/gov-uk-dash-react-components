# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_accordion

"""
    'govuk'_accordion(;kwargs...)
    'govuk'_accordion(children::Any;kwargs...)
    'govuk'_accordion(children_maker::Function;kwargs...)


An Accordion component.
Lazy loaded ComponentTemplate

@param {
	id,
 accordionHeadings,
 children,
} [props={}]
@return {*}
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers; optional): Array of accordion children.
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `accordionHeadings` (Array of Strings; optional): Array of accordion headings.
"""
function 'govuk'_accordion(; kwargs...)
        available_props = Symbol[:children, :id, :accordionHeadings]
        wild_props = Symbol[]
        return Component("'govuk'_accordion", "Accordion", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

'govuk'_accordion(children::Any; kwargs...) = 'govuk'_accordion(;kwargs..., children = children)
'govuk'_accordion(children_maker::Function; kwargs...) = 'govuk'_accordion(children_maker(); kwargs...)

