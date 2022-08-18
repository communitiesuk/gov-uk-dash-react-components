# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'Team2 <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Team2',
        namespace = 'uk_gov_dash_components',
        propNames = c('id'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
