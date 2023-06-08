/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';

import { Accordion, CheckboxList, ComponentTemplate, Dropdown, ExpandableMenuItem } from '../lib';

import Tabs from '../lib/fragments/Tabs.react';

import './dashboard.css';

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
                    style={{ minWidth: '50%' }}
                    source={[
                        { label: "Local authorities", value: "Hello LOL", disabled: true },
                        { label: "Regional", value: "Hello LOL2", disabled: true },
                        { label: "Local authority type", value: "LOL", disabled: true },

                        { label: "Local authorities2", value: "Hello LOL222", disabled: true },
                        { label: "Regional2", value: "Hello LOL222", disabled: true },
                        { label: "Local authority type2", value: "LOL222", disabled: true },

                        { label: "Local authorities3", value: "Hello LOL3" },
                        { label: "Regional3", value: "Hello LOL3 HATS" },
                        { label: "Local authority type3", value: "LOL3", disabled: true },

                        { label: "Local authorities4", value: "Hello LOLa" },
                        { label: "Regional4", value: "Hello LOL2a" },
                        { label: "Local authority type4", value: "LOa" },

                        { label: "Local authorities5", value: "Hello LOL22a2" },
                        { label: "Regional5", value: "Hello LOL22a2" },
                        { label: "Local authority type5", value: "LOLa222" },

                        { label: "Local authorities6", value: "Hello aLOL3" },
                        { label: "Regional6", value: "Hello LaOL3" },
                        { label: "Local authority type6", value: "LOaL3", disabled: true },
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
                <ExpandableMenuItem id="side-nav-id" setProps={setProps} title="Compare Local Authorities" children={
                    [
                        <li key={0}>
                            <a href="https://github.com/communitiesuk/">
                                Children and Vulnerable People
                            </a>
                        </li>,
                        <li key={1}>
                            <a href="https://github.com/communitiesuk/gov-uk-dash-react-components/blob/master/README.md">
                                Cleaner, Safer Communities
                            </a>
                        </li>
                    ]} />
                <li>
                    <a>
                        Local authority map
                    </a>
                </li>
            </ul>
            <Accordion id="accordion" accordionHeadings={["charts", 'empty', "data!!!!!"]} defaultSectionsOpen={[false, false, true]} children={[<p>I am a child<br /></p>, <p>I am a empty</p>, <p>I am a hat</p>]} bannerSections={[2, null, 0]}></Accordion>
            <Tabs id="tabs" tabHeadings={["Display jitter plots", 'data', "Display time series pl}ots"]} defaultTab={0} children={[<div><p>I am a jitter plot</p></div>, <div><p>I am a jitter plot</p></div>, <div><p>I am a time series plot</p></div>]}></Tabs>
        </>
    )
}

export default App;
