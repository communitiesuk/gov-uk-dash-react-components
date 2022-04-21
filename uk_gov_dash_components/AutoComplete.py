# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AutoComplete(Component):
    """An AutoComplete component.
Lazy loaded Autocomplete

@param {
	id,
	autoselect,
	cssNamespace,
	defaultValue,
	displayMenu,
	minLength,
	name,
	placeholder,
	onConfirm,
	confirmOnBlur,
	showNoOptionsFound,
	showAllValues,
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
} [props={}]
@return {*}

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- ariaLabelledBy (string; optional):
    This is the ID for the label field.

- autoselect (boolean; default False):
    Should auto select.

- confirmOnBlur (boolean; default True):
    No Description.

- cssNamespace (string; default 'autocomplete'):
    cssNamespace.

- displayMenu (string; default 'inline'):
    No Description.

- dropdownArrow (boolean | number | string | dict | list; default DropdownArrowDown):
    React component for dropdown arrow.

- element (boolean | number | string | dict | list; optional):
    Accessible element.

- minLength (number; default 0):
    No Description.

- name (string; default 'input-autocomplete'):
    No Description.

- placeholder (string; default ''):
    No Description.

- required (boolean; default False):
    No Description.

- showAllValues (boolean; default False):
    No Description.

- showNoOptionsFound (boolean; default True):
    No Description.

- source (boolean | number | string | dict | list; optional):
    No Description.

- tStatusNoResults (boolean | number | string | dict | list; optional):
    No Description.

- tStatusResults (boolean | number | string | dict | list; optional):
    No Description.

- templates (boolean | number | string | dict | list; optional):
    No Description.

- value (string; default ''):
    The value displayed in the input."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, autoselect=Component.UNDEFINED, cssNamespace=Component.UNDEFINED, displayMenu=Component.UNDEFINED, minLength=Component.UNDEFINED, name=Component.UNDEFINED, placeholder=Component.UNDEFINED, onConfirm=Component.UNDEFINED, confirmOnBlur=Component.UNDEFINED, showNoOptionsFound=Component.UNDEFINED, showAllValues=Component.UNDEFINED, required=Component.UNDEFINED, tNoResults=Component.UNDEFINED, tAssistiveHint=Component.UNDEFINED, source=Component.UNDEFINED, templates=Component.UNDEFINED, tStatusQueryTooShort=Component.UNDEFINED, tStatusNoResults=Component.UNDEFINED, tStatusSelectedOption=Component.UNDEFINED, tStatusResults=Component.UNDEFINED, dropdownArrow=Component.UNDEFINED, element=Component.UNDEFINED, value=Component.UNDEFINED, ariaLabelledBy=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'ariaLabelledBy', 'autoselect', 'confirmOnBlur', 'cssNamespace', 'displayMenu', 'dropdownArrow', 'element', 'minLength', 'name', 'placeholder', 'required', 'showAllValues', 'showNoOptionsFound', 'source', 'tStatusNoResults', 'tStatusResults', 'templates', 'value']
        self._type = 'AutoComplete'
        self._namespace = 'uk_gov_dash_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'ariaLabelledBy', 'autoselect', 'confirmOnBlur', 'cssNamespace', 'displayMenu', 'dropdownArrow', 'element', 'minLength', 'name', 'placeholder', 'required', 'showAllValues', 'showNoOptionsFound', 'source', 'tStatusNoResults', 'tStatusResults', 'templates', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AutoComplete, self).__init__(**args)
