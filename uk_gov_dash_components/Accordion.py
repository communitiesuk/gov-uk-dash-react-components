# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Accordion(Component):
    """An Accordion component.
Lazy loaded ComponentTemplate

@param {
	id,
 accordionContent,
} [props={}]
@return {*}

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components  in
    callbacks. The ID needs to be unique across all of the  components
    in an app.

- accordionContent (list of dicts; optional):
    Accordion heading and children content object.

    `accordionContent` is a list of dicts with keys:

    - children (list; optional)

    - heading (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'Accordion'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, accordionContent=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'accordionContent']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'accordionContent']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Accordion, self).__init__(**args)
