# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'ComponentTemplate <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ComponentTemplate',
        namespace = 'uk_gov_dash_components',
        propNames = c('id'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
