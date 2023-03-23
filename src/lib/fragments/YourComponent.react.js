import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/YourComponent.react';

class YourComponent extends Component {
    render() {
        return (
            <div id={this.props.id}>
                I love React.js!
            </div>
        )
    }
}

YourComponent.defaultProps = defaultProps;
YourComponent.propTypes = propTypes;

export default YourComponent