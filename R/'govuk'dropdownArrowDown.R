# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'dropdownArrowDown <- function(className=NULL) {
    
    props <- list(className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'dropdownArrowDown',
        namespace = 'uk_gov_dash_components',
        propNames = c('className'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
