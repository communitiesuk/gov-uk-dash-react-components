# AUTO GENERATED FILE - DO NOT EDIT

#' @export
govukComboBox <- function(id=NULL, allowsCustomValue=NULL, defaultInputValue=NULL, defaultItems=NULL, items=NULL, label=NULL, menuTrigger=NULL, onInputChange=NULL, onSelectionChange=NULL, selectedKey=NULL) {
    
    props <- list(id=id, allowsCustomValue=allowsCustomValue, defaultInputValue=defaultInputValue, defaultItems=defaultItems, items=items, label=label, menuTrigger=menuTrigger, onInputChange=onInputChange, onSelectionChange=onSelectionChange, selectedKey=selectedKey)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ComboBox',
        namespace = 'uk_gov_dash_components',
        propNames = c('id', 'allowsCustomValue', 'defaultInputValue', 'defaultItems', 'items', 'label', 'menuTrigger', 'onInputChange', 'onSelectionChange', 'selectedKey'),
        package = 'ukGovDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
