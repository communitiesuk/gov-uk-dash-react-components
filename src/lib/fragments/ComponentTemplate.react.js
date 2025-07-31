import React, { Component } from 'react';

import { propTypes } from '../components/ComponentTemplate.react';

class ComponentTemplate extends Component {
    render() {
        const { id, setProps } = this.props;
        return (
            <div id={id}>
                I love React.js!
            </div>
        )
    }
}

ComponentTemplate.propTypes = propTypes;

export default ComponentTemplate