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
        const {id, title, children, expandedClass, collapsedClass, ariaLabel} = this.props
        
        return (
            <li id={id} aria-label={ariaLabel} aria-controls="expandable-menu-contents" aria-expanded={!this.state.hidden} className={this.state.hidden ? collapsedClass : expandedClass} onClick={this.handleSubMenuVisibility}>
              <a>
                {title}
              </a>
                <div id="expandable-menu-contents" hidden = {this.state.hidden}>
                  {children && <ul>
                      {children}
                    </ul>}                    
                </div>
            </li>
        )
    }
}

ExpandableMenuItem.defaultProps = defaultProps;
ExpandableMenuItem.propTypes = propTypes;

export default ExpandableMenuItem