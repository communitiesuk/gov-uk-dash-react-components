import { AutoCompleteOptions, AutoCompleteValue, AutoCompleteOptionsValueObject, AutoCompleteOptionsNameObject, AutoCompleteOptionsLabelObject } from "./types";

export function isAutoCompleteOptionsAJustAValue(
    option: AutoCompleteOptions): option is AutoCompleteValue {
    return ["string", "number", "Date", "bigint", "boolean"].includes(
        typeof option
    );
}
function isAutoCompleteOptionsTypeOfObject(
    option: AutoCompleteOptions
): option is AutoCompleteOptionsValueObject |
AutoCompleteOptionsNameObject |
AutoCompleteOptionsLabelObject {
    return typeof option === "object";
}
export function isAutoCompleteOptionsHasValueObject(
    option: AutoCompleteOptions): option is AutoCompleteOptionsValueObject {
    return (
        !isAutoCompleteOptionsAJustAValue(option)
        && isAutoCompleteOptionsTypeOfObject(option)
        && option.hasOwnProperty("value")
    );
}
export function isAutoCompleteOptionsANameValueObj(
    option: AutoCompleteOptions): option is AutoCompleteOptionsNameObject {
    return isAutoCompleteOptionsHasValueObject(option)
        && option.hasOwnProperty("name");
}
export function isAutoCompleteOptionsALabelValueObj(
    option: AutoCompleteOptions): option is AutoCompleteOptionsLabelObject {
    return (
        isAutoCompleteOptionsHasValueObject(option) && option.hasOwnProperty("label")
    );
}
