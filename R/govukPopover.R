# AUTO GENERATED FILE - DO NOT EDIT

#' @export
govukPopover <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Popover',
        namespace = 'uk_gov_dash_components',
        propNames = c('id'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
