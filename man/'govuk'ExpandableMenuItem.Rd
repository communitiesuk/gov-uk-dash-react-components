% Auto-generated: do not edit by hand
\name{'govuk'ExpandableMenuItem}

\alias{'govuk'ExpandableMenuItem}

\title{ExpandableMenuItem component}

\description{
Lazy loaded ExpandableMenuItem  @param { 	id,  title,  collapsedByDefault,  children,  expandedClass,  collapsedClass,  ariaLabel, } [props={}] @return {*}
}

\usage{
'govuk'ExpandableMenuItem(children=NULL, id=NULL, ariaLabel=NULL,
collapsedByDefault=NULL, collapsedClass=NULL,
expandedClass=NULL, title=NULL)
}

\arguments{
\item{children}{Unnamed list. An array of li HTML elements that will displayed on click}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{ariaLabel}{Character. Accessible text to describe the expandable menu element, attached to Li element that wraps the children}

\item{collapsedByDefault}{Logical. Default behaviour of whether or not the sub-menu is collapsed on load}

\item{collapsedClass}{Character. CSS class that will be applied when the menu is collapsed}

\item{expandedClass}{Character. CSS class that will be applied when the menu is expanded}

\item{title}{Character. The clickable text to display sub-menu}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

