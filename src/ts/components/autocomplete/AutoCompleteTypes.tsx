import React from "react";
import DropdownArrowDown from '../dropdownArrowDown';
import { AutoCompleteOptions, AutoCompleteValue, RealAutoCompleteOptions } from "./types";


export interface AutoCompleteTypes {
    id: string;
    autoselect: boolean;
    cssNamespace: string;
    value: AutoCompleteValue;
    displayMenu: string;
    minLength: number;
    name: string;
    placeholder: string;
    onConfirm: (value: AutoCompleteValue) => void;
    confirmOnBlur: boolean;
    showNoOptionsFound: boolean;
    showAllValues: boolean;
    required: boolean;
    tNoResults: () => string | JSX.Element;
    tAssistiveHint: () => string | JSX.Element;
    source: (
        newQuery: AutoCompleteValue,
        func: (options: AutoCompleteOptions[]) => void
    ) => void | RealAutoCompleteOptions[];
    templates: any;
    dropdownArrow: ({ className: string }) => JSX.Element;
    tStatusQueryTooShort: (minQueryLength: number) => string | JSX.Element;
    tStatusNoResults: () => string | JSX.Element;
    tStatusSelectedOption: (
        selectedOption: string,
        length: number,
        selectedOptionIndex: number
    ) => string;
    tStatusResults: (length: number, contentSelectedOption: string) => string;
    setProps: (props: Partial<Record<keyof this, any>>) => void;
    ariaLabelledBy: string;
    selectElement: HTMLSelectElement;
    alwaysDisplayArrow: boolean;
    style: React.CSSProperties;
}

export const autoCompleteDefaultProps: Partial<AutoCompleteTypes> = {
    autoselect: false,
    cssNamespace: "autocomplete",
    value: "",
    displayMenu: "inline",
    minLength: 0,
    name: "input-autocomplete",
    placeholder: "",
    onConfirm: (value: AutoCompleteValue) => { },
    confirmOnBlur: true,
    showNoOptionsFound: true,
    showAllValues: false,
    required: false,
    tNoResults: () => "No results found",
    tAssistiveHint: () => "When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.",
    dropdownArrow: DropdownArrowDown,
    alwaysDisplayArrow: true
};
