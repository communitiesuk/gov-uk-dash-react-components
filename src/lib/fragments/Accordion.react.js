import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/ComponentTemplate.react';

class Accordion extends Component {
    render() {
        return (
            <div id={this.props.id}>
                I love React.js!
            </div>
        )
    }
}

Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

export default Accordion