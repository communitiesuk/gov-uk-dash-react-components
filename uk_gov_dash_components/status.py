# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class status(Component):
    """A status component.
Display ststus

@export
@class Status
@extends {Component}

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- length (number; optional):
    length.

- minQueryLength (number; optional):
    min Query Length.

- queryLength (number; optional):
    Query Length.

- selectedOption (boolean | number | string | dict | list; optional):
    Selected option.

- selectedOptionIndex (number; optional):
    Selected Option Index."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'status'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, length=Component.UNDEFINED, minQueryLength=Component.UNDEFINED, queryLength=Component.UNDEFINED, selectedOption=Component.UNDEFINED, selectedOptionIndex=Component.UNDEFINED, tQueryTooShort=Component.UNDEFINED, tNoResults=Component.UNDEFINED, tSelectedOption=Component.UNDEFINED, tResults=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'length', 'minQueryLength', 'queryLength', 'selectedOption', 'selectedOptionIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'length', 'minQueryLength', 'queryLength', 'selectedOption', 'selectedOptionIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(status, self).__init__(**args)
