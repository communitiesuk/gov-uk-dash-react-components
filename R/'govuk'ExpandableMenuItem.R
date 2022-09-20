# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'ExpandableMenuItem <- function(children=NULL, id=NULL, ariaLabel=NULL, collapsedByDefault=NULL, collapsedClass=NULL, expandedClass=NULL, title=NULL) {
    
    props <- list(children=children, id=id, ariaLabel=ariaLabel, collapsedByDefault=collapsedByDefault, collapsedClass=collapsedClass, expandedClass=expandedClass, title=title)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ExpandableMenuItem',
        namespace = 'uk_gov_dash_components',
        propNames = c('children', 'id', 'ariaLabel', 'collapsedByDefault', 'collapsedClass', 'expandedClass', 'title'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
