# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'AutoComplete <- function(id=NULL, ariaLabelledBy=NULL, autoselect=NULL, confirmOnBlur=NULL, cssNamespace=NULL, displayMenu=NULL, dropdownArrow=NULL, element=NULL, minLength=NULL, name=NULL, onConfirm=NULL, placeholder=NULL, required=NULL, showAllValues=NULL, showNoOptionsFound=NULL, source=NULL, tAssistiveHint=NULL, tNoResults=NULL, tStatusNoResults=NULL, tStatusQueryTooShort=NULL, tStatusResults=NULL, tStatusSelectedOption=NULL, templates=NULL, value=NULL) {
    
    props <- list(id=id, ariaLabelledBy=ariaLabelledBy, autoselect=autoselect, confirmOnBlur=confirmOnBlur, cssNamespace=cssNamespace, displayMenu=displayMenu, dropdownArrow=dropdownArrow, element=element, minLength=minLength, name=name, onConfirm=onConfirm, placeholder=placeholder, required=required, showAllValues=showAllValues, showNoOptionsFound=showNoOptionsFound, source=source, tAssistiveHint=tAssistiveHint, tNoResults=tNoResults, tStatusNoResults=tStatusNoResults, tStatusQueryTooShort=tStatusQueryTooShort, tStatusResults=tStatusResults, tStatusSelectedOption=tStatusSelectedOption, templates=templates, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AutoComplete',
        namespace = 'uk_gov_dash_components',
        propNames = c('id', 'ariaLabelledBy', 'autoselect', 'confirmOnBlur', 'cssNamespace', 'displayMenu', 'dropdownArrow', 'element', 'minLength', 'name', 'onConfirm', 'placeholder', 'required', 'showAllValues', 'showNoOptionsFound', 'source', 'tAssistiveHint', 'tNoResults', 'tStatusNoResults', 'tStatusQueryTooShort', 'tStatusResults', 'tStatusSelectedOption', 'templates', 'value'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
