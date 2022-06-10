
export type AutoCompleteValue = string | number | Date | bigint | boolean;
export type AutoCompleteOptionsNameObject = {
    name: string;
    value: AutoCompleteValue;
};
export type AutoCompleteOptionsLabelObject = {
    label: string;
    value: AutoCompleteValue;
};
export type AutoCompleteOptionsValueObject = { value: AutoCompleteValue; };
export type AutoCompleteOptions = AutoCompleteOptionsNameObject |
    AutoCompleteOptionsLabelObject |
    AutoCompleteOptionsValueObject |
    AutoCompleteValue;
export type RealAutoCompleteOptions = AutoCompleteOptionsValueObject |
    AutoCompleteValue;
