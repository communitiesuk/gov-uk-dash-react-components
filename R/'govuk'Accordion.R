# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'Accordion <- function(children=NULL, id=NULL, accordionHeadings=NULL) {
    
    props <- list(children=children, id=id, accordionHeadings=accordionHeadings)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Accordion',
        namespace = 'uk_gov_dash_components',
        propNames = c('children', 'id', 'accordionHeadings'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
