/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';

import { Dropdown, CheckboxList, CurrentTime } from '../lib';

const App = () => {
    const [value, setValue] = useState('');
    const setProps = (props) => {
        setValue(props.value)
        console.log('props', props);
        console.log('value', value);
    }
    return (
        <>
            <h2>Autocomplete</h2>
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
                    setProps={setProps}
                />
                <span>The output value is {value}</span>
            </div>
            <h2>Checkbox list</h2>
            <div>
                <CheckboxList id="checkboxes" value={["restrict"]} options={["restrict"]} setProps={setProps} />
            </div>
            <h2>CurrentTime</h2>
            <CurrentTime id="a-great-component-id" value={100} setProps={setProps} />
        </>
    )
}

export default App;
