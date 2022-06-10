import React, { useRef } from 'react';
import { useListBox, useOption,  } from '@react-aria/listbox';
import { ListProps, ListState, useListState } from "@react-stately/list";
import { ComboBoxState } from '@react-stately/combobox';

/**
 * Listbox
 */
function ListBox(
    props: ListProps<object> & {
        listBoxRef: React.MutableRefObject<undefined>;
        state: ComboBoxState<object>;
    }
) {
    const state = props.state || useListState(props);
    const ref = props.listBoxRef || useRef();
    const { listBoxProps } = useListBox(props, state, ref);

    return (
        <ul
            {...listBoxProps}
            ref={ref}
            style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                maxHeight: "150px",
                overflow: "auto",
            }}
        >
            {[...state.collection].map((item) => (
                <Option key={item.key} item={item} state={state} />
            ))}
        </ul>
    );
}

function Option({
    item,
    state,
}: {
    item: ReturnType<ListState<object>["collection"]["getItem"]>;
    state: ListState<object>;
}) {
    let ref = React.useRef();
    let { optionProps, isFocused, isDisabled } = useOption(
        { key: item.key },
        state,
        ref
    );

    let backgroundColor: string;
    let color = "black";

    if (isFocused) {
        backgroundColor = "#1d70b8";
        color = "white";
    } else if (isDisabled) {
        backgroundColor = "transparent";
        color = "gray";
    }

    return (
        <li
            {...optionProps}
            ref={ref}
            style={{
                background: backgroundColor,
                color: color,
                padding: "2px 5px",
                outline: "none",
                cursor: "pointer",
            }}
        >
            {item.rendered}
        </li>
    );
}
Option.defaultProps = {}
ListBox.defaultProps = {}


export {
	ListBox
};