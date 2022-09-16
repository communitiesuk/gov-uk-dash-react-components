import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/ExpandableMenuItem.react';

class ExpandableMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hidden: props.collapsedByDefault
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
            <li id={this.props.id} className="moj-side-navigation__item" onClick={this.handleSubMenuVisibility}>
              <a>
                {this.props.title}
              </a>
                <div hidden = {this.state.hidden} >
                    <ul>
                      {this.props.links}
                    </ul>
                </div>
            </li>
        )
    }
}

ExpandableMenuItem.defaultProps = defaultProps;
ExpandableMenuItem.propTypes = propTypes;

export default ExpandableMenuItem