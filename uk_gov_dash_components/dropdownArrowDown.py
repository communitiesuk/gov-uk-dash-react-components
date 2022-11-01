# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class dropdownArrowDown(Component):
    """A dropdownArrowDown component.
Default dropdown arrow

@param {string} { className }

Keyword arguments:

- className (string; optional):
    Class name to add to SVG."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'dropdownArrowDown'
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['className']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['className']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(dropdownArrowDown, self).__init__(**args)
