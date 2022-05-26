/* eslint-disable no-undefined */
import React, {
    useState,
    useEffect,
} from "react";
import { createRoot } from 'react-dom/client';
import { isIOSDevice } from '../helper/isIOS';
import { isPrintableKeyCode, keyCodes } from '../helper/keys';
import { Status } from './status'
import './autocomplete.css';
import DropdownArrowDown from './dropdownArrowDown';

export const autoCompleteDefaultProps = {
    autoselect: false,
    cssNamespace: "autocomplete",
    value: "",
    displayMenu: "inline",
    minLength: 0,
    name: "input-autocomplete",
    placeholder: "",
    onConfirm: (value: AutoCompleteValue) => {},
    confirmOnBlur: true,
    showNoOptionsFound: true,
    showAllValues: false,
    required: false,
    tNoResults: () => "No results found",
    tAssistiveHint: () =>
        "When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.",
    dropdownArrow: DropdownArrowDown,
    alwaysDisplayArrow: true,
};


export type AutoCompleteValue = string | number | Date | bigint | boolean;
export type AutoCompleteOptionsNameObject = {
    name: string;
    value: AutoCompleteValue;
};
export type AutoCompleteOptionsLabelObject = {
    label: string;
    value: AutoCompleteValue;
};
export type AutoCompleteOptionsValueObject = { value: AutoCompleteValue };
export type AutoCompleteOptions =
    | AutoCompleteOptionsNameObject
    | AutoCompleteOptionsLabelObject
    | AutoCompleteOptionsValueObject
    | AutoCompleteValue;
export type RealAutoCompleteOptions =
    | AutoCompleteOptionsValueObject
    | AutoCompleteValue;

function isAutoCompleteOptionsAJustAValue(
    option: AutoCompleteOptions
): option is AutoCompleteValue {
    return ["string","number","Date","bigint","boolean"].includes(
        typeof option
    );
}

function isAutoCompleteOptionsTypeOfObject(
    option: AutoCompleteOptions
): option is
    | AutoCompleteOptionsValueObject
    | AutoCompleteOptionsNameObject
    | AutoCompleteOptionsLabelObject {
    return typeof option === "object";
}

function isAutoCompleteOptionsHasValueObject(
    option: AutoCompleteOptions
): option is AutoCompleteOptionsValueObject {
    return (
        !isAutoCompleteOptionsAJustAValue(option)
        && isAutoCompleteOptionsTypeOfObject(option)
        && option.hasOwnProperty("value")
    );
}

function isAutoCompleteOptionsANameValueObj(
    option: AutoCompleteOptions
): option is AutoCompleteOptionsNameObject {
    return isAutoCompleteOptionsHasValueObject(option)
        && option.hasOwnProperty("name")
}

function isAutoCompleteOptionsALabelValueObj(
    option: AutoCompleteOptions
): option is AutoCompleteOptionsLabelObject {
    return (
        isAutoCompleteOptionsHasValueObject(option) && option.hasOwnProperty("label")
    );
}

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

const AutoComplete = (props: AutoCompleteTypes) => {
    const {
        id,
        autoselect,
        cssNamespace,
        value,
        displayMenu,
        minLength,
        name,
        placeholder,
        onConfirm,
        confirmOnBlur,
        showNoOptionsFound,
        showAllValues,
        required,
        tNoResults,
        tAssistiveHint,
        source,
        templates,
        dropdownArrow: dropdownArrowFactory,
        tStatusQueryTooShort,
        tStatusNoResults,
        tStatusSelectedOption,
        tStatusResults,
        setProps,
        ariaLabelledBy,
        selectElement,
        alwaysDisplayArrow,
        style,
    } = { ...autoCompleteDefaultProps, ...props };
    if (!id) {
        throw new Error("id is not defined");
    }
    if (!source) {
        throw new Error("source is not defined");
    }

    const getQueryAsString = (query: AutoCompleteValue) => {
        return typeof query === "string" ? query : query?.toLocaleString();
    };

    const createSimpleEngine =
        (values: AutoCompleteOptions[]) =>
        (query: AutoCompleteValue, syncResults: (arg0: any) => void) => {
            if (values.length) {
                syncResults(
                    values.filter((v) => {
                        if (isAutoCompleteOptionsAJustAValue(v)) {
                            if (
                                typeof v === "string" &&
                                typeof query === "string"
                            ) {
                                return (
                                    v
                                        .toLowerCase()
                                        .indexOf(query.toLowerCase()) !== -1
                                );
                            } else {
                                return v == query;
                            }
                        } else if (
                            typeof query === "string" &&
                            isAutoCompleteOptionsALabelValueObj(v)
                        ) {
                            return (
                                v.label
                                    .toLowerCase()
                                    .indexOf(query.toLowerCase()) !== -1
                            );
                        } else if (
                            typeof query === "string" &&
                            isAutoCompleteOptionsANameValueObj(v)
                        ) {
                            return (
                                v.name
                                    .toLowerCase()
                                    .indexOf(query.toLowerCase()) !== -1
                            );
                        } else if (isAutoCompleteOptionsHasValueObject(v)) {
                            if (
                                typeof v.value === "string" &&
                                typeof query === "string"
                            ) {
                                return (
                                    v.value
                                        .toLowerCase()
                                        .indexOf(query.toLowerCase()) !== -1
                                );
                            } else {
                                return v.value === query;
                            }
                        }
                    })
                );
            }
        };
    const getOptionFromValue = (
        query: AutoCompleteValue,
        options: Array<AutoCompleteOptionsValueObject | AutoCompleteValue>
    ) => {
        return options.find((opt) => {
            if (typeof query === "string") {
                if (typeof opt === "string") {
                    opt.toLowerCase() === query.toLowerCase();
                } else if (
                    isAutoCompleteOptionsHasValueObject(opt) &&
                    typeof opt.value === "string"
                ) {
                    return opt.value.toLowerCase() === query.toLowerCase();
                }
            } else {
                if (isAutoCompleteOptionsAJustAValue(opt)) {
                    return opt === query;
                } else if (isAutoCompleteOptionsHasValueObject(opt)) {
                    return opt.value === query;
                }
            }
        });
    };

    const getOptionLabelFromValue = (
        query: AutoCompleteValue,
        options: Array<AutoCompleteOptionsValueObject | AutoCompleteValue>
    ): AutoCompleteValue => {
        const res = getOptionFromValue(query, options);
        if (typeof res === undefined) {
            return undefined;
        } else if (isAutoCompleteOptionsAJustAValue(res)) {
            return res;
        } else if (isAutoCompleteOptionsALabelValueObj(res)) {
            return res.label;
        } else if (isAutoCompleteOptionsANameValueObj(res)) {
            res.name;
        } else if (isAutoCompleteOptionsHasValueObject(res)) {
            return res.value;
        }
    };

    const dataSource = Array.isArray(source)
        ? createSimpleEngine(source)
        : source;
    const [isFocus, setFocus] = useState<number | null>(null);
    const [isHover, setHover] = useState<number | null>(null);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const [validChoiceMade, setValidChoiceMade] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const [ariaHint, setAriaHint] = useState(true);

    const startValue: AutoCompleteValue = Array.isArray(source)
        ? getOptionLabelFromValue(value, source) || ""
        : null;
    const [options, setOptions] = useState<Array<RealAutoCompleteOptions>>(
        startValue ? [startValue] : []
    );
    const [query, setQuery] = useState<AutoCompleteValue>(
        startValue || value || ""
    );

    const getValueFromQuery = (query: AutoCompleteValue) => {
        return options.find((opt) => {
            if (isAutoCompleteOptionsAJustAValue(opt)) {
                if (typeof opt === "string" && typeof query === "string") {
                    return opt.toLowerCase() === query.toLowerCase();
                } else {
                    return opt == query;
                }
            } else if (
                typeof query === "string" &&
                isAutoCompleteOptionsALabelValueObj(opt)
            ) {
                return opt.label.toLowerCase() === query.toLowerCase();
            } else if (
                typeof query === "string" &&
                isAutoCompleteOptionsANameValueObj(opt)
            ) {
                return opt.name.toLowerCase() === query.toLowerCase();
            } else if (isAutoCompleteOptionsHasValueObject(opt)) {
                if (
                    typeof opt.value === "string" &&
                    typeof query === "string"
                ) {
                    return opt.value.toLowerCase() === query.toLowerCase();
                } else {
                    return opt.value === query;
                }
            }
        });
    };

    if (!Array.isArray(source)) {
        dataSource("", (options: any) => {
            const startValue = Array.isArray(source)
                ? getOptionLabelFromValue(value, options) || ""
                : "";
            setOptions(options);
            setQuery(startValue);
        });
    }

    const elementReferences = {};

    const getRealOptions = (options: RealAutoCompleteOptions[]) => {
        return options.map((opt) => {
            return isAutoCompleteOptionsHasValueObject(opt) ? opt.value : opt;
        });
    };

    // This template is used when converting from a state.options object into a state.query.
    const templateInputValue = (opt: RealAutoCompleteOptions): string => {
        const inputValueTemplate: (opt: RealAutoCompleteOptions) => string =
            templates?.inputValue;

        if (inputValueTemplate) {
            return inputValueTemplate(opt);
        } else if (isAutoCompleteOptionsHasValueObject(opt)) {
            return typeof opt.value === "string"
                ? opt.value
                : opt.value.toLocaleString();
        }
        return typeof opt === "string" ? opt : opt.toLocaleString();
    };

    // This template is used when displaying results / suggestions.
    const templateSuggestion = (opt: AutoCompleteOptions): string => {
        const suggestionTemplate: (opt: AutoCompleteOptions) => string =
            templates?.suggestion;
        if (suggestionTemplate) {
            return suggestionTemplate(opt);
        } else if (isAutoCompleteOptionsALabelValueObj(opt)) {
            return opt.label;
        } else if (isAutoCompleteOptionsANameValueObj(opt)) {
            return opt.name;
        } else if (isAutoCompleteOptionsHasValueObject(opt)) {
            if (typeof opt.value === "string") {
                return opt.value;
            }
            return opt.value.toLocaleString();
        }
        if (typeof opt === "string") {
            return opt;
        } else {
            return opt.toLocaleString();
        }
    };

    const isQueryAnOption = (
        query: AutoCompleteValue,
        options: AutoCompleteOptions[]
    ) => {
        const queryValueString = getQueryAsString(query);
        return (
            options
                .map((entry: AutoCompleteOptions) =>
                    templateInputValue(entry).toLowerCase()
                )
                .indexOf(queryValueString.toLowerCase()) !== -1
        );
    };

    const handleComponentBlur = (
        newState: { query?: AutoCompleteValue; menuOpen?: boolean },
        escape: boolean = false
    ) => {
        const focusOnBlur = escape && selectElement ? -1 : null;
        let newQuery: any;
        if (confirmOnBlur) {
            newQuery = newState.query || query;
            const selectedOption = options[selected];
            if (isAutoCompleteOptionsHasValueObject(selectedOption)) {
                onConfirm(selectedOption.value);
            } else {
                onConfirm(selectedOption);
            }
        } else {
            newQuery = query;
        }
        setFocus(focusOnBlur);
        setMenuOpen(newState.menuOpen || false);
        setQuery(newQuery);
        setSelected(null);
        setValidChoiceMade(isQueryAnOption(newQuery, options));
    };

    const handleListMouseLeave = (
        event: React.MouseEvent<HTMLUListElement, MouseEvent>
    ) => {
        setHover(null);
    };

    const handleOptionBlur = (
        event: React.FocusEvent<HTMLElement, Element>,
        index: number
    ) => {
        const focusingOutsideComponent = event.relatedTarget === null;
        const focusingInput = event.relatedTarget === elementReferences[-1];
        const focusingAnotherOption = isFocus !== index && isFocus !== -1;
        const blurComponent =
            (!focusingAnotherOption && focusingOutsideComponent) ||
            !(focusingAnotherOption || focusingInput);
        if (blurComponent) {
            const keepMenuOpen = isMenuOpen && isIOSDevice();
            handleComponentBlur({
                menuOpen: keepMenuOpen,
                query: templateInputValue(options[selected]),
            });
        }
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLElement, Element>) => {
        const focusingAnOption = isFocus !== -1;
        if (
            !focusingAnOption ||
            !event?.relatedTarget?.matches("li.autocomplete__option")
        ) {
            const keepMenuOpen = isMenuOpen && isIOSDevice();
            const newQuery = isIOSDevice()
                ? query
                : templateInputValue(options[selected]);
            handleComponentBlur({
                menuOpen: keepMenuOpen,
                query: newQuery,
            });
        }
    };

    const handleInputFocus = () => {
        if (selectElement || showAllValues) {
            return;
        }
        const queryAsString = getQueryAsString(query);
        const shouldReopenMenu =
            !validChoiceMade &&
            queryAsString?.length >= minLength &&
            options?.length > 0;
        setFocus(-1);
        if (shouldReopenMenu) {
            setMenuOpen(shouldReopenMenu || isMenuOpen);
            setSelected(-1);
        }
    };

    const wrapAround = (index: number) => {
        const selectOptions = selectElement.options;
        const queryAsString = getQueryAsString(query);
        const queryLength = queryAsString ? queryAsString.trim().length : 0;
        const length =
            queryLength > minLength ? options.length : selectOptions.length;

        if (index < 0) {
            return length - 1;
        } else if (index >= length) {
            return 0;
        }

        return index;
    };

    const handleOptionFocus = (index: number, select: boolean) => {
        // if we're replacing a select element, then we need
        // to allow the user to wrap around the options when pressing
        // up/down arrows
        const useIndex = selectElement ? wrapAround(index) : index;

        setFocus(useIndex);
        setHover(null);
        setSelected(useIndex);

        if (select) {
            const selectedOption = options[useIndex];
            const newQuery = templateInputValue(selectedOption);
            setQuery(newQuery);
            setValidChoiceMade(true);

            if (selectElement) {
                onConfirm(selectedOption);
            }
        }
    };

    const handleOptionMouseEnter = (index: any) => {
        // iOS Safari prevents click event if mouseenter adds hover background colour
        // See: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW4
        if (!isIOSDevice()) {
            setHover(index);
        }
    };

    const hasAutoselect = (): boolean => {
        return isIOSDevice() ? false : autoselect;
    };

    const handleOptionClick = (
        event:
            | React.MouseEvent<HTMLElement, MouseEvent>
            | React.KeyboardEvent<HTMLDivElement>,
        index: string | number,
        menuOpen = false
    ) => {
        const selectedOption = options[index];
        const newQuery = templateInputValue(selectedOption);
        onConfirm(selectedOption?.value ?? selectedOption);

        // Do not remove this, otherwise the input can receive the event and
        // keep the menu open unintentionally
        event.preventDefault();
        event.stopPropagation();

        setFocus(-1);
        setHover(null);
        setMenuOpen(menuOpen);
        setQuery(newQuery);
        if (confirmOnBlur) {
            setSelected(-1);
        }
        setValidChoiceMade(true);
    };

    const handleOptionMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        // Safari triggers focusOut before click, but if you
        // preventDefault on mouseDown, you can stop that from happening.
        // If this is removed, clicking on an option in Safari will trigger
        // `handleOptionBlur`, which closes the menu, and the click will
        // trigger on the element underneath instead.
        // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
        event.preventDefault();
    };

    const handleUpArrow = (event: React.KeyboardEvent<HTMLDivElement>) => {
        event.preventDefault();

        // If we're replacing a select element, we need to provide the interaction
        // where the dropdown is closed, and user presses up.
        // In this case they focus on the option before the selected one (or the last),
        // and also make menu open
        if (selectElement && isMenuOpen === false) {
            dataSource("", (options: RealAutoCompleteOptions[]) => {
                setMenuOpen(true);
                setOptions(options);

                const realOpt = getRealOptions(options);

                let index =
                    query && realOpt.indexOf(query) > 0
                        ? realOpt.indexOf(query) - 1
                        : options.length - 1;

                if (index < 0) {
                    index = options.length - 1;
                }

                handleOptionFocus(index, true);
            });
        } else {
            const isNotAtTop = selected !== -1;
            const allowMoveUp = isNotAtTop && isMenuOpen;

            if (allowMoveUp || selectElement) {
                handleOptionFocus(selected - 1, autoselect);
            }
        }
    };

    const handleDownArrow = (event: React.KeyboardEvent<HTMLDivElement>) => {
        event.preventDefault();
        // If we're replacing a select element, we need to provide the interaction
        // where the dropdown is closed, and user presses down.
        // In this case they focus on the option after the selected one (or the first),
        // and also make menu open
        if (selectElement && !isMenuOpen) {
            dataSource("", (options: RealAutoCompleteOptions[]) => {
                setMenuOpen(true);
                setOptions(options);
                const realOpt = getRealOptions(options);
                let index =
                    query && realOpt.indexOf(query) > -1
                        ? realOpt.indexOf(query) + 1
                        : 0;

                if (index >= options.length) {
                    index = 0;
                }

                handleOptionFocus(index, true);
            });
        } else if (showAllValues && !isMenuOpen) {
            event.preventDefault();
            dataSource("", (options: any) => {
                setMenuOpen(true);
                setOptions(options);
                setSelected(0);
                setFocus(0);
                setHover(null);
            });
        } else if (isMenuOpen) {
            const isNotAtBottom = selected !== options.length - 1;
            if (isNotAtBottom || selectElement) {
                handleOptionFocus(selected + 1, autoselect);
            }
        }
    };

    const handleSpace = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (
            (showAllValues && !isMenuOpen) ||
            (showAllValues && !isMenuOpen && query === "")
        ) {
            const queryAsString = getQueryAsString(query);
            if (queryAsString.trim().length === 0) {
                event.preventDefault();
            }
            dataSource("", (options: any) => {
                const realOpt = getRealOptions(options);
                const index =
                    query && realOpt.indexOf(query) > -1
                        ? realOpt.indexOf(query)
                        : 0;
                setMenuOpen(true);
                setOptions(options);
                setFocus(index);
                setSelected(index);
            });
            return;
        }
    };

    const handleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (isMenuOpen) {
            event.preventDefault();
            const hasSelectedOption = selected >= 0;
            if (hasSelectedOption) {
                handleOptionClick(event, selected, false);
            }
        } else if (selectElement) {
            dataSource("", (options: any) => {
                setOptions(options);
                const realOpt = getRealOptions(options);
                let index =
                    query && realOpt.indexOf(query) > -1
                        ? realOpt.indexOf(query)
                        : 0;
                let openMenu = true;

                if (!selectElement) {
                    index = -1;
                    openMenu = false;
                }
                setMenuOpen(openMenu);
                setFocus(index);
                setSelected(index);
            });
        }
    };

    const handlePrintableKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const inputElement = elementReferences[-1];
        const eventIsOnInput = event.target === inputElement;
        if (!eventIsOnInput) {
            inputElement.focus();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (keyCodes[event.keyCode]) {
            case "up":
                handleUpArrow(event);
                break;
            case "down":
                handleDownArrow(event);
                break;
            case "space":
                handleSpace(event);
                break;
            case "enter":
                handleEnter(event);
                break;
            case "escape":
                handleComponentBlur(
                    {
                        query: query,
                    },
                    true
                );
                break;
            default:
                if (isPrintableKeyCode(event.keyCode)) {
                    handlePrintableKey(event);
                }
                break;
        }
    };
    const handleInputChange = (
        event:
            | React.KeyboardEvent<HTMLInputElement>
            | React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        function isKeyboardEvent(
            event: React.SyntheticEvent
        ): event is React.KeyboardEvent<HTMLElement> {
            return event.hasOwnProperty("keyCode");
        }

        const noKeyboardNavigation = () => {
            const autoselect = hasAutoselect();
            const newQuery = event.currentTarget.value;
            const queryChanged = query !== newQuery;
            const queryLongEnough = newQuery.length >= minLength;

            setQuery(newQuery);
            setAriaHint(newQuery.length === 0);

            const searchForOptions =
                showAllValues ||
                (newQuery.length && queryChanged && queryLongEnough);
            if (searchForOptions) {
                dataSource(newQuery, (options: AutoCompleteOptions[]) => {
                    const optionsAvailable = options.length > 0;
                    setMenuOpen(optionsAvailable);
                    setOptions(options);
                    setSelected(autoselect && optionsAvailable ? 0 : -1);
                    setValidChoiceMade(false);
                    setFocus(
                        selectElement ? (optionsAvailable ? 0 : -1) : isFocus
                    );
                });
            } else if (!newQuery.length || !queryLongEnough) {
                setMenuOpen(false);
                setOptions([]);
            }
        };

        if (isKeyboardEvent(event)) {
            // Besides the normal input that can be received by the user,
            // we also need to take care of special actions even in the input
            switch (keyCodes[event.keyCode]) {
                case "up":
                    handleUpArrow(event);
                    break;
                case "down":
                    handleDownArrow(event);
                    break;
                case "space":
                    handleSpace(event);
                    break;
                case "enter":
                    handleEnter(event);
                    break;
                case "escape":
                    handleComponentBlur(
                        {
                            query: event.currentTarget.value,
                        },
                        true
                    );

                    break;
                default:
                    noKeyboardNavigation();
                    break;
            }
        } else {
            noKeyboardNavigation();
        }
    };

    const handleInputClick = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        if ((selectElement || showAllValues) && isMenuOpen === false) {
            const newQuery = event.currentTarget.value;
            dataSource("", (options: RealAutoCompleteOptions[]) => {
                const currentSelectionIndex = options.indexOf(newQuery);
                setMenuOpen(true);
                setOptions(options);
                setFocus(currentSelectionIndex);
                setSelected(currentSelectionIndex);
                setHover(null);
            });
        } else if (selectElement || showAllValues) {
            handleComponentBlur(
                {
                    menuOpen: false,
                },
                true
            );
        } else {
            handleInputChange(event);
        }
    };

    useEffect(() => {
        if (typeof setProps === "function") {
            const opt =
                getOptionFromValue(query, options) || getValueFromQuery(query);
            const value = isAutoCompleteOptionsHasValueObject(opt)
                ? opt.value
                : opt;
            if (value) {
                setProps({ value });
            }
        }
        setAriaHint(!getQueryAsString(query)?.length);
    }, [query]);

    const autoselectRend = hasAutoselect();
    const queryAsString = getQueryAsString(query);
    const inputFocused = isFocus === -1;
    const noOptionsAvailable = options?.length === 0;

    // todo: queryAsString should do length different if it's not a length
    const queryNotEmpty = queryAsString?.length !== 0;
    const queryLongEnough = queryAsString?.length >= minLength;

    const showNoOptionsFoundRender =
        showNoOptionsFound &&
        inputFocused &&
        noOptionsAvailable &&
        queryNotEmpty &&
        queryLongEnough;

    const wrapperClassName = `${cssNamespace}__wrapper`;

    const inputClassName = `${cssNamespace}__input`;
    const componentIsFocused = isFocus !== null;
    const inputModifierFocused = componentIsFocused
        ? ` ${inputClassName}--focused`
        : "";
    const inputModifierType = showAllValues
        ? ` ${inputClassName}--show-all-values`
        : ` ${inputClassName}--default`;
    const dropdownArrowClassName = `${cssNamespace}__dropdown-arrow-down`;
    const optionFocused = isFocus !== -1 && isFocus !== null;

    const menuClassName = `${cssNamespace}__menu`;
    const menuModifierDisplayMenu = `${menuClassName}--${displayMenu}`;
    const menuIsVisible = isMenuOpen || showNoOptionsFoundRender;
    const menuModifierVisibility = `${menuClassName}--${
        menuIsVisible ? "visible" : "hidden"
    }`;

    const optionClassName = `${cssNamespace}__option`;

    const hintClassName = `${cssNamespace}__hint`;
    const selectedOptionText = templateInputValue(options?.[selected]);
    const optionBeginsWithQuery =
        selectedOptionText &&
        selectedOptionText
            .toLowerCase()
            .indexOf(queryAsString.toLowerCase()) === 0;
    const hintValue =
        optionBeginsWithQuery && autoselectRend
            ? query + selectedOptionText.substring(queryAsString?.length)
            : "";

    const assistiveHintID = id + "__assistiveHint";
    const ariaDescribedProp = ariaHint
        ? {
              "aria-describedby": assistiveHintID,
          }
        : null;

    let dropdownArrow: {};

    // we only need a dropdown arrow if showAllValues is set to a truthy value
    if (showAllValues || alwaysDisplayArrow) {
        dropdownArrow = dropdownArrowFactory({
            className: dropdownArrowClassName,
        });

        // if the factory returns a string we'll render this as HTML (usage w/o (P)React)
        if (typeof dropdownArrow === "string") {
            dropdownArrow = (
                <div
                    className={`${cssNamespace}__dropdown-arrow-down-wrapper`}
                    dangerouslySetInnerHTML={{ __html: dropdownArrow }}
                />
            );
        }
    }

    return (
        <div
            className={wrapperClassName}
            onKeyDown={handleKeyDown}
            style={style}
        >
            <Status
                id={id}
                length={options?.length}
                // todo: queryLength not really needed if value not a string
                queryLength={queryAsString?.length}
                minQueryLength={minLength}
                selectedOption={templateInputValue(options?.[selected])}
                selectedOptionIndex={selected}
                validChoiceMade={validChoiceMade}
                isInFocus={isFocus !== null}
                tQueryTooShort={tStatusQueryTooShort}
                tNoResults={tStatusNoResults}
                tSelectedOption={tStatusSelectedOption}
                tResults={tStatusResults}
                setProps={() => {}}
            />

            {hintValue && (
                <span>
                    <input
                        className={hintClassName}
                        readOnly
                        tabIndex={-1}
                        value={hintValue}
                    />
                </span>
            )}

            <input
                aria-expanded={isMenuOpen ? "true" : "false"}
                {...(optionFocused
                    ? {
                          "aria-activedescendant": `${id}__option--${isFocus}`,
                      }
                    : null)}
                aria-owns={`${id}__listbox`}
                aria-autocomplete={hasAutoselect() ? "both" : "list"}
                aria-labelledby={ariaLabelledBy}
                {...ariaDescribedProp}
                autoComplete="off"
                className={`${inputClassName}${inputModifierFocused}${inputModifierType}`}
                id={id}
                onClick={handleInputClick}
                onBlur={handleInputBlur}
                onKeyUp={handleInputChange}
                onFocus={handleInputFocus}
                name={name}
                placeholder={placeholder}
                ref={(inputElement) => {
                    elementReferences[-1] = inputElement;
                }}
                type="text"
                role="combobox"
                required={required}
                value={getQueryAsString(
                    getOptionLabelFromValue(query, options) ?? query
                )}
            />
            {dropdownArrow}
            <ul
                className={`${menuClassName} ${menuModifierDisplayMenu} ${menuModifierVisibility}`}
                onMouseLeave={(event) => handleListMouseLeave(event)}
                id={`${id}__listbox`}
                role="listbox"
            >
                {options?.map((option: any, index: number) => {
                    const showFocused =
                        isFocus === -1 ? selected === index : isFocus === index;
                    const optionModifierFocused =
                        showFocused && isHover === null
                            ? ` ${optionClassName}--focused`
                            : "";
                    const optionModifierOdd =
                        index % 2 ? ` ${optionClassName}--odd` : "";
                    const iosPosinsetHtml = isIOSDevice()
                        ? `<span id=${id}__option-suffix--${index} style="border:0;clip:rect(0 0 0 0);height:1px;` +
                          "marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;" +
                          'whiteSpace:nowrap;width:1px">' +
                          ` ${index + 1} of ${options?.length}</span>`
                        : "";

                    return (
                        <li
                            aria-selected={isFocus === index ? "true" : "false"}
                            className={`${optionClassName}${optionModifierFocused}${optionModifierOdd}`}
                            dangerouslySetInnerHTML={{
                                __html:
                                    templateSuggestion(option) +
                                    iosPosinsetHtml,
                            }}
                            id={`${id}__option--${index}`}
                            key={index}
                            onBlur={(event) => handleOptionBlur(event, index)}
                            onClick={(event) =>
                                handleOptionClick(event, index, false)
                            }
                            onMouseDown={handleOptionMouseDown}
                            onMouseEnter={() => handleOptionMouseEnter(index)}
                            ref={(optionEl) => {
                                elementReferences[index] = optionEl;
                            }}
                            role="option"
                            tabIndex={-1}
                            aria-posinset={index + 1}
                            aria-setsize={options.length}
                        />
                    );
                })}
                {showNoOptionsFoundRender && (
                    <li
                        className={`${optionClassName} ${optionClassName}--no-results`}
                    >
                        {tNoResults()}
                    </li>
                )}
            </ul>

            <span id={assistiveHintID} style={{ display: "none" }}>
                {tAssistiveHint()}
            </span>
        </div>
    );
};
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default AutoComplete;

AutoComplete.enhanceSelectElement = (configurationOptions) => {
	if (!configurationOptions.selectElement) { throw new Error('selectElement is not defined') }

	// Set defaults.
	if (!configurationOptions.source) {
		const availableOptions = [].filter.call(configurationOptions.selectElement.options, (option) => (option.value || configurationOptions.preserveNullOptions))
		configurationOptions.source = availableOptions.map((option) => option.textContent || option.innerText)
	}
	configurationOptions.onConfirm = configurationOptions.onConfirm || ((query) => {
		const requestedOption = [].filter.call(configurationOptions.selectElement.options, (option) => (option.textContent || option.innerText) === query)[0]
		if (requestedOption) { requestedOption.selected = true }
		// trigger change event on original select element
		const event = new Event('change', { bubbles: true, cancelable: false})
		configurationOptions.selectElement.dispatchEvent(event)
	})

	if (configurationOptions.selectElement.value || configurationOptions.value === undefined) {
		const option = configurationOptions.selectElement.options[configurationOptions.selectElement.options.selectedIndex]
		configurationOptions.value = option.textContent || option.innerText
	}

	if (configurationOptions.name === undefined) { configurationOptions.name = '' }
	if (configurationOptions.id === undefined) {
		if (configurationOptions.selectElement.id === undefined) {
			configurationOptions.id = ''
		} else {
			configurationOptions.id = configurationOptions.selectElement.id
		}
	}
	if (configurationOptions.autoselect === undefined) { configurationOptions.autoselect = true }

	const element = document.createElement('div')

	configurationOptions.selectElement.parentNode.insertBefore(element, configurationOptions.selectElement)

	// eslint-disable-next-line new-cap
    // todo: render onto existing select
	// createRoot(AutoComplete({
	// 	...configurationOptions,
	// }), element)

	configurationOptions.selectElement.style.display = 'none'
	configurationOptions.selectElement.id = configurationOptions.selectElement.id + '-select'
}

AutoComplete.defaultProps = autoCompleteDefaultProps;