# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'govuk'AutoComplete <- function(id=NULL, alwaysDisplayArrow=NULL, ariaLabelledBy=NULL, autoselect=NULL, confirmOnBlur=NULL, cssNamespace=NULL, displayMenu=NULL, dropdownArrow=NULL, minLength=NULL, name=NULL, onConfirm=NULL, placeholder=NULL, required=NULL, selectElement=NULL, showAllValues=NULL, showNoOptionsFound=NULL, source=NULL, tAssistiveHint=NULL, tNoResults=NULL, tStatusNoResults=NULL, tStatusQueryTooShort=NULL, tStatusResults=NULL, tStatusSelectedOption=NULL, templates=NULL, value=NULL, wrapperRef=NULL) {
    
    props <- list(id=id, alwaysDisplayArrow=alwaysDisplayArrow, ariaLabelledBy=ariaLabelledBy, autoselect=autoselect, confirmOnBlur=confirmOnBlur, cssNamespace=cssNamespace, displayMenu=displayMenu, dropdownArrow=dropdownArrow, minLength=minLength, name=name, onConfirm=onConfirm, placeholder=placeholder, required=required, selectElement=selectElement, showAllValues=showAllValues, showNoOptionsFound=showNoOptionsFound, source=source, tAssistiveHint=tAssistiveHint, tNoResults=tNoResults, tStatusNoResults=tStatusNoResults, tStatusQueryTooShort=tStatusQueryTooShort, tStatusResults=tStatusResults, tStatusSelectedOption=tStatusSelectedOption, templates=templates, value=value, wrapperRef=wrapperRef)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AutoComplete',
        namespace = 'uk_gov_dash_components',
        propNames = c('id', 'alwaysDisplayArrow', 'ariaLabelledBy', 'autoselect', 'confirmOnBlur', 'cssNamespace', 'displayMenu', 'dropdownArrow', 'minLength', 'name', 'onConfirm', 'placeholder', 'required', 'selectElement', 'showAllValues', 'showNoOptionsFound', 'source', 'tAssistiveHint', 'tNoResults', 'tStatusNoResults', 'tStatusQueryTooShort', 'tStatusResults', 'tStatusSelectedOption', 'templates', 'value', 'wrapperRef'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
