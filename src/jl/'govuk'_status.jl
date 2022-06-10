# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_status

"""
    'govuk'_status(;kwargs...)

A status component.
@description Show the status for Autocomplete
Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `isInFocus` (Bool; optional)
- `length` (Real; optional)
- `minQueryLength` (Real; optional)
- `queryLength` (Real; optional)
- `selectedOption` (String; optional)
- `selectedOptionIndex` (Real; optional)
- `validChoiceMade` (Bool; optional)
"""
function 'govuk'_status(; kwargs...)
        available_props = Symbol[:id, :isInFocus, :length, :minQueryLength, :queryLength, :selectedOption, :selectedOptionIndex, :validChoiceMade]
        wild_props = Symbol[]
        return Component("'govuk'_status", "status", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

