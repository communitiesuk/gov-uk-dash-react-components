# AUTO GENERATED FILE - DO NOT EDIT

export govuk_popover

"""
    govuk_popover(;kwargs...)

A Popover component.
Propover

@export
@param {*} props
@return {*}
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
"""
function govuk_popover(; kwargs...)
        available_props = Symbol[:id]
        wild_props = Symbol[]
        return Component("govuk_popover", "Popover", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

