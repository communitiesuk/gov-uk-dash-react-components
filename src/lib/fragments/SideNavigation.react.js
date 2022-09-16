import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/SideNavigation.react';

class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hidden: true
        }
      }

      handleSubMenuVisibility = () => {
        // update the state!
        this.setState({
          hidden: !this.state.hidden
        })
      }

    render() {
        return (
            <div id={this.props.id}>
                {this.props.title}
                <button onClick={this.handleSubMenuVisibility} >
                +
                </button>
                <div hidden = {!this.state.hidden} >
                    <ul>
                        <li>
                        https://github.com/communitiesuk/gov-uk-dash-react-components/blob/master/README.md 
                        </li>
                        <li>
                        https://github.com/communitiesuk
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

SideNavigation.defaultProps = defaultProps;
SideNavigation.propTypes = propTypes;

export default SideNavigation