/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';

import { AutoComplete } from '../lib';

const App = () => {
    const [value, setValue] = useState('');
    const setPros = (props) => {
        setValue(props.value)
        console.log('props', props);
        console.log('value', value);
    }
    return (
        <>
            <h1>Autocomplete</h1>
            <div>
                <label htmlFor="autocomplete-default">Country</label>
                <AutoComplete
                    source={[
                        { label: "Local authorities", value: "Hello LOL" },
                        { label: "Regional", value: "Hello LOL2" },
                        { label: "Local authority type", value: "LOL" },
                    ]}
                    id="autocomplete-default"
                    showAllValues={true}
                    displayMenu="overlay"
                    placeholder="Select Option"
                    alwaysDisplayArrow={true}
                    value="Hello LOL2"
                    setProps={setPros}
                />
                <span>The output value is { value }</span>
            </div>
        </>
    )
}

export default App;
