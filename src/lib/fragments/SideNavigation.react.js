import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/SideNavigation.react';

class SideNavigation extends Component {
    render() {
        return (
            <div id={this.props.id}>
                I love React.js!
            </div>
        )
    }
}

SideNavigation.defaultProps = defaultProps;
SideNavigation.propTypes = propTypes;

export default SideNavigation