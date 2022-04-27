# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_combobox

"""
    'govuk'_combobox(;kwargs...)

A ComboBox component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `allowsCustomValue` (Bool; optional)
- `defaultInputValue` (String; optional)
- `defaultItems` (Bool | Real | String | Dict | Array; optional)
- `items` (Array | Array; optional)
- `label` (String; optional)
- `menuTrigger` (String; optional)
- `selectedKey` (String | Real; optional)
"""
function 'govuk'_combobox(; kwargs...)
        available_props = Symbol[:id, :allowsCustomValue, :defaultInputValue, :defaultItems, :items, :label, :menuTrigger, :selectedKey]
        wild_props = Symbol[]
        return Component("'govuk'_combobox", "ComboBox", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

