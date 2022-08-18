# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Team2(Component):
    """A Team2 component.
Lazy loaded ComponentTemplate

@param {
	id,
} [props={}]
@return {*}

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components  in
    callbacks. The ID needs to be unique across all of the  components
    in an app.

- clicks (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'Team2'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, clicks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'clicks']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'clicks']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Team2, self).__init__(**args)
