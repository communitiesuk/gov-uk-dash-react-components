# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'status <- function(id=NULL, isInFocus=NULL, length=NULL, minQueryLength=NULL, queryLength=NULL, selectedOption=NULL, selectedOptionIndex=NULL, tNoResults=NULL, tQueryTooShort=NULL, tResults=NULL, tSelectedOption=NULL, validChoiceMade=NULL) {
    
    props <- list(id=id, isInFocus=isInFocus, length=length, minQueryLength=minQueryLength, queryLength=queryLength, selectedOption=selectedOption, selectedOptionIndex=selectedOptionIndex, tNoResults=tNoResults, tQueryTooShort=tQueryTooShort, tResults=tResults, tSelectedOption=tSelectedOption, validChoiceMade=validChoiceMade)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'status',
        namespace = 'uk_gov_dash_components',
        propNames = c('id', 'isInFocus', 'length', 'minQueryLength', 'queryLength', 'selectedOption', 'selectedOptionIndex', 'tNoResults', 'tQueryTooShort', 'tResults', 'tSelectedOption', 'validChoiceMade'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
