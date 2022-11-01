# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Dropdown(Component):
    """A Dropdown component.
@param {{
	label: string,
	id,
	autoselect,
	cssNamespace,
	value,
	minLength,
	name,
	placeholder,
	onConfirm,
	confirmOnBlur,
	showNoOptionsFound,
	required,
	tNoResults,
	tAssistiveHint,
	source,
	templates,
	dropdownArrow: dropdownArrowFactory,
	tStatusQueryTooShort,
	tStatusNoResults,
	tStatusSelectedOption,
	tStatusResults,
}} [props={}]

@return {*}

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- autoselect (boolean; optional):
    Should auto select.

- confirmOnBlur (boolean; optional):
    No Description.

- cssNamespace (string; optional):
    cssNamespace.

- dropdownArrow (boolean | number | string | dict | list; optional):
    React component for dropdown arrow.

- label (string; optional):
    Label text.

- minLength (number; optional):
    No Description.

- name (string; optional):
    No Description.

- placeholder (string; optional):
    No Description.

- required (boolean; optional):
    No Description.

- selectElement (boolean | number | string | dict | list; optional):
    Accessible element.

- showNoOptionsFound (boolean; optional):
    No Description.

- source (boolean | number | string | dict | list; optional):
    No Description.

- style (boolean | number | string | dict | list; optional):
    Override the css style of the wrapper.

- tStatusNoResults (boolean | number | string | dict | list; optional):
    No Description.

- tStatusResults (boolean | number | string | dict | list; optional):
    No Description.

- templates (boolean | number | string | dict | list; optional):
    No Description.

- value (string; optional):
    The value displayed in the input.

- wrapperRef (boolean | number | string | dict | list; optional):
    wrapperRef."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'uk_gov_dash_components'
    _type = 'Dropdown'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, label=Component.UNDEFINED, autoselect=Component.UNDEFINED, cssNamespace=Component.UNDEFINED, minLength=Component.UNDEFINED, name=Component.UNDEFINED, placeholder=Component.UNDEFINED, onConfirm=Component.UNDEFINED, confirmOnBlur=Component.UNDEFINED, showNoOptionsFound=Component.UNDEFINED, required=Component.UNDEFINED, tNoResults=Component.UNDEFINED, tAssistiveHint=Component.UNDEFINED, source=Component.UNDEFINED, templates=Component.UNDEFINED, tStatusQueryTooShort=Component.UNDEFINED, tStatusNoResults=Component.UNDEFINED, tStatusSelectedOption=Component.UNDEFINED, tStatusResults=Component.UNDEFINED, dropdownArrow=Component.UNDEFINED, selectElement=Component.UNDEFINED, value=Component.UNDEFINED, wrapperRef=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'autoselect', 'confirmOnBlur', 'cssNamespace', 'dropdownArrow', 'label', 'minLength', 'name', 'placeholder', 'required', 'selectElement', 'showNoOptionsFound', 'source', 'style', 'tStatusNoResults', 'tStatusResults', 'templates', 'value', 'wrapperRef']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'autoselect', 'confirmOnBlur', 'cssNamespace', 'dropdownArrow', 'label', 'minLength', 'name', 'placeholder', 'required', 'selectElement', 'showNoOptionsFound', 'source', 'style', 'tStatusNoResults', 'tStatusResults', 'templates', 'value', 'wrapperRef']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Dropdown, self).__init__(**args)
