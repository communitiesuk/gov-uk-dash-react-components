/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';

import { Dropdown } from '../lib';

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
                <Dropdown
                    label="Hello world"
                    style={{minWidth: '50%'}}
                    source={[
                        { label: "Local authorities", value: "Hello LOL" },
                        { label: "Regional", value: "Hello LOL2" },
                        { label: "Local authority type", value: "LOL" },
                    ]}
                    id="autocomplete-default"
                    placeholder="Select Option"
                    value="Hello LOL2"
                    setProps={setPros}
                />
                <span>The output value is { value }</span>
            </div>
        </>
    )
}

export default App;
