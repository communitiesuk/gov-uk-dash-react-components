# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Accordion(Component):
    """An Accordion component.
Lazy loaded ComponentTemplate

@param {
	id,
 accordionHeadings,
 children,
} [props={}]
@return {*}

Keyword arguments:

- children (list of a list of or a singular dash component, string or numbers; optional):
    Array of accordion children.

- id (string; optional):
    The ID of this component, used to identify dash components  in
    callbacks. The ID needs to be unique across all of the  components
    in an app.

- accordionHeadings (list of strings; optional):
    Array of accordion headings."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'Accordion'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, accordionHeadings=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'accordionHeadings']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'accordionHeadings']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Accordion, self).__init__(children=children, **args)
