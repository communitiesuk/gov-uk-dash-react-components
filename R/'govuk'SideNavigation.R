# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'ExpandableMenuItem <- function(id=NULL, collapsedByDefault=NULL, title=NULL) {
    
    props <- list(id=id, collapsedByDefault=collapsedByDefault, title=title)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ExpandableMenuItem',
        namespace = 'uk_gov_dash_components',
        propNames = c('id', 'collapsedByDefault', 'title'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
