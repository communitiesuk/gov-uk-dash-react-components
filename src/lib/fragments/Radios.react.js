import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/Radioss.react';

class Radios extends Component {
    render() {
        return (
            <div id={this.props.id}>
                I love React.js!
            </div>
        )
    }
}

Radios.defaultProps = defaultProps;
Radios.propTypes = propTypes;

export default Radios