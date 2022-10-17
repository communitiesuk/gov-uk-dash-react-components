# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'Accordion <- function(id=NULL, accordionContent=NULL) {
    
    props <- list(id=id, accordionContent=accordionContent)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Accordion',
        namespace = 'uk_gov_dash_components',
        propNames = c('id', 'accordionContent'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
