% Auto-generated: do not edit by hand
\name{'govuk'CheckboxList}

\alias{'govuk'CheckboxList}

\title{CheckboxList component}

\description{
Lazy loaded CheckboxList  @param { 	id, 	options, 	value, } [props={}] @return {*}
}

\usage{
'govuk'CheckboxList(id=NULL, options=NULL, value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{options}{List of character | numeric | logicals | named list | list of lists containing elements 'label', 'value', 'disabled', 'title'.
those elements have the following types:
  - label (a list of or a singular dash component, string or number; required): the option's label
  - value (character | numeric | logical; required): the value of the option. this value
corresponds to the items specified in the
`value` property.
  - disabled (logical; optional): if true, this option is disabled and cannot be selected.
  - title (character; optional): the html 'title' attribute for the option. allows for
information on hover. for more information on this attribute,
see https://developer.mozilla.org/en-us/docs/web/html/global_attributes/titles. An array of options}

\item{value}{List of character | numeric | logicals. The currently selected value}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

