# AUTO GENERATED FILE - DO NOT EDIT

export govuk_listbox

"""
    govuk_listbox(;kwargs...)

A ListBox component.
Listbox

@param {*} [props={}]
@return {*}
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
"""
function govuk_listbox(; kwargs...)
        available_props = Symbol[:id]
        wild_props = Symbol[]
        return Component("govuk_listbox", "ListBox", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

