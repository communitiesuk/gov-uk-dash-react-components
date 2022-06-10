# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class status(Component):
    """A status component.
@description Show the status for Autocomplete

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- isInFocus (boolean; optional)

- length (number; optional)

- minQueryLength (number; optional)

- queryLength (number; optional)

- selectedOption (string; optional)

- selectedOptionIndex (number; optional)

- validChoiceMade (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'status'
    @_explicitize_args
    def __init__(self, isInFocus=Component.UNDEFINED, validChoiceMade=Component.UNDEFINED, length=Component.UNDEFINED, queryLength=Component.UNDEFINED, minQueryLength=Component.UNDEFINED, selectedOption=Component.UNDEFINED, selectedOptionIndex=Component.UNDEFINED, tQueryTooShort=Component.UNDEFINED, tNoResults=Component.REQUIRED, tSelectedOption=Component.UNDEFINED, tResults=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'isInFocus', 'length', 'minQueryLength', 'queryLength', 'selectedOption', 'selectedOptionIndex', 'validChoiceMade']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'isInFocus', 'length', 'minQueryLength', 'queryLength', 'selectedOption', 'selectedOptionIndex', 'validChoiceMade']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(status, self).__init__(**args)
