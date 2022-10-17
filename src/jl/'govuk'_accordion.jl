# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_accordion

"""
    'govuk'_accordion(;kwargs...)

An Accordion component.
Lazy loaded ComponentTemplate

@param {
	id,
 accordionContent,
} [props={}]
@return {*}
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `accordionContent` (optional): Accordion heading and children content object.. accordionContent has the following type: Array of lists containing elements 'heading', 'children'.
Those elements have the following types:
  - `heading` (String; optional)
  - `children` (Array; optional)s
"""
function 'govuk'_accordion(; kwargs...)
        available_props = Symbol[:id, :accordionContent]
        wild_props = Symbol[]
        return Component("'govuk'_accordion", "Accordion", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

