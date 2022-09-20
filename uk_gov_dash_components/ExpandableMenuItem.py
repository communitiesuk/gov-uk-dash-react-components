# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ExpandableMenuItem(Component):
    """An ExpandableMenuItem component.
Lazy loaded ExpandableMenuItem

@param {
	id,
 title,
 collapsedByDefault,
 children,
} [props={}]
@return {*}

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    An array of li HTML elements that will displayed on click.

- id (string; optional):
    The ID of this component, used to identify dash components  in
    callbacks. The ID needs to be unique across all of the  components
    in an app.

- collapsedByDefault (boolean; default True):
    Default behaviour of whether or not the sub-menu is collapsed on
    load.

- title (string; optional):
    The clickable text to display sub-menu."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'ExpandableMenuItem'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, title=Component.UNDEFINED, collapsedByDefault=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'collapsedByDefault', 'title']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'collapsedByDefault', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ExpandableMenuItem, self).__init__(children=children, **args)