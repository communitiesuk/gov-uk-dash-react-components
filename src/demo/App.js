/* eslint no-magic-numbers: 0 */
import React from 'react';

import { AutoComplete, Dropdown } from '../lib';

const App = () => {

    return (
        <>
            <h1>Autocomplete</h1>
            <div>
                <label htmlFor="autocomplete-default">Country</label>
                <AutoComplete
                    source={[
                        "Local authorities",
                        "Regional",
                        "Local authority type",
                    ]}
                    id="autocomplete-default"
                    showAllValues={true}
                    displayMenu="overlay"
                    placeholder="Select Option"
                    alwaysDisplayArrow={true}
                    value={null}
                />
            </div>

            <Dropdown
                id="example"
                label="Example Label"
                source={[
                    "Local authorities",
                    "Regional",
                    "Local authority type",
                ]}
                showAllValues={true}
                displayMenu="overlay"
                alwaysDisplayArrow={true}
                placeholder="Select Option"
                value={null}
            />
        </>
    )
}

export default App;
