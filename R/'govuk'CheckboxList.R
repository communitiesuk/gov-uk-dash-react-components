# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'CheckboxList <- function(id=NULL, options=NULL, value=NULL) {
    
    props <- list(id=id, options=options, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CheckboxList',
        namespace = 'uk_gov_dash_components',
        propNames = c('id', 'options', 'value'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
