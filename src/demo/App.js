/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';

import { Dropdown, CheckboxList, ComponentTemplate, ExpandableMenuItem, Accordion } from '../lib';

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
            <h2>ComponentTemplate</h2>
            <ComponentTemplate id="a-great-component-id" setProps={setProps} />
            <h2>ExpandableMenuItem</h2>
            <ul>
                <li>
                    <a>
                        About
                    </a>
                </li>
                <li>
                    <a>
                        Core income time series
                    </a>
                </li>
                <ExpandableMenuItem id="side-nav-id" setProps={setProps} title = "Compare Local Authorities" children = {
                    [
                        <li key={0}>
                            <a href = "https://github.com/communitiesuk/">
                                Children and Vulnerable People
                            </a>
                        </li>,
                        <li key={1}>
                            <a href = "https://github.com/communitiesuk/gov-uk-dash-react-components/blob/master/README.md">
                                Cleaner, Safer Communities
                            </a>
                        </li>
                    ]}/>
                <li>
                    <a>
                        Local authority map
                    </a>
                </li>
            </ul>
            <Accordion id="accordion" heading="TEST!"><h1>I am a child</h1></Accordion>
            <Accordion id="accordion2" heading="PART 2">child2</Accordion>
        </>
    )
}

export default App;
