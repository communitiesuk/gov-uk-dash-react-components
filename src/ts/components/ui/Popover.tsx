import React, { useRef } from 'react';

import { useOverlay, DismissButton, OverlayProps } from '@react-aria/overlays';
import { FocusScope } from '@react-aria/focus';

/**
 * Popover
 */
export function Popover(
    props: OverlayProps & {
        popoverRef?: React.MutableRefObject<undefined>;
        children: any;
    }
) {
    const ref = useRef();
    const { popoverRef = ref, isOpen, onClose, children } = props;

    // Handle events that should cause the popup to close,
    // e.g. blur, clicking outside, or pressing the escape key.
    const { overlayProps } = useOverlay(
        {
            isOpen,
            onClose,
            shouldCloseOnBlur: true,
            isDismissable: true,
        },
        popoverRef
    );

    // Add a hidden <DismissButton> component at the end of the popover
    // to allow screen reader users to dismiss the popup easily.
    return (
        <FocusScope restoreFocus>
            <div
                {...overlayProps}
                ref={popoverRef}
                style={{
                    position: "absolute",
                    width: "100%",
                    border: "1px solid gray",
                    background: "white",
                    marginTop: 4,
                }}
            >
                {children}
                <DismissButton onDismiss={onClose} />
            </div>
        </FocusScope>
    );
}

Popover.defaultProps = {}
