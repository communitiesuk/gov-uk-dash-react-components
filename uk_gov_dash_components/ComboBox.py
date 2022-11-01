# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ComboBox(Component):
    """A ComboBox component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- allowsCustomValue (boolean; optional)

- defaultInputValue (string; optional)

- defaultItems (boolean | number | string | dict | list; optional)

- items (list | list; optional)

- label (string; optional)

- menuTrigger (string; optional)

- selectedKey (string | number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'ComboBox'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, label=Component.UNDEFINED, defaultInputValue=Component.UNDEFINED, defaultItems=Component.UNDEFINED, items=Component.UNDEFINED, onSelectionChange=Component.UNDEFINED, allowsCustomValue=Component.UNDEFINED, onInputChange=Component.UNDEFINED, selectedKey=Component.UNDEFINED, menuTrigger=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowsCustomValue', 'defaultInputValue', 'defaultItems', 'items', 'label', 'menuTrigger', 'selectedKey']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowsCustomValue', 'defaultInputValue', 'defaultItems', 'items', 'label', 'menuTrigger', 'selectedKey']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(ComboBox, self).__init__(**args)
