import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/ComponentTemplate.react';

class ComponentTemplate extends Component {
    render() {
        return (
            <div id={this.props.id}>
                I love React.js!
            </div>
        )
    }
}

ComponentTemplate.defaultProps = defaultProps;
ComponentTemplate.propTypes = propTypes;

export default ComponentTemplate