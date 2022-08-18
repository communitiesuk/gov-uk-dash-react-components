import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/ComponentTemplate.react';

class Team2 extends Component {
    render() {
        let date = new Date()
        return (
            <div id={this.props.id}>
                {(date.toLocaleTimeString())}
            </div>
        )
    }
}

Team2.defaultProps = defaultProps;
Team2.propTypes = propTypes;

export default Team2