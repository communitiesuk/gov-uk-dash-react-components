# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'CurrentTime <- function(id=NULL, value=NULL) {
    
    props <- list(id=id, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CurrentTime',
        namespace = 'uk_gov_dash_components',
        propNames = c('id', 'value'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
