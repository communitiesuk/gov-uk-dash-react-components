# AUTO GENERATED FILE - DO NOT EDIT

export 'govuk'_status

"""
    'govuk'_status(;kwargs...)

A status component.
Display ststus

@export
@class Status
@extends {Component}
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `length` (Real; optional): length
- `minQueryLength` (Real; optional): min Query Length
- `queryLength` (Real; optional): Query Length
- `selectedOption` (Bool | Real | String | Dict | Array; optional): Selected option
- `selectedOptionIndex` (Real; optional): Selected Option Index
"""
function 'govuk'_status(; kwargs...)
        available_props = Symbol[:id, :length, :minQueryLength, :queryLength, :selectedOption, :selectedOptionIndex]
        wild_props = Symbol[]
        return Component("'govuk'_status", "status", "uk_gov_dash_components", available_props, wild_props; kwargs...)
end

