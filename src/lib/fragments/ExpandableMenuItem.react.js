import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/ExpandableMenuItem.react';

class ExpandableMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: props.collapsedByDefault
    }
  }

  handleSubMenuVisibility = (event) => {
    const expandableControl = event.target.getAttribute('data-expandable-control')

    if (expandableControl) {
      this.setState({
        hidden: !this.state.hidden
      })
    }

  }


  render() {
    const { id, title, children, expandedClass, collapsedClass, ariaLabel, subMenuClass, titleClass } = this.props

    return (
      <li id={id} aria-label={ariaLabel}
        aria-controls="expandable-menu-contents" aria-expanded={!this.state.hidden} className={this.state.hidden ? collapsedClass : expandedClass} onClick={this.handleSubMenuVisibility}>
        <a className={titleClass} href="#" data-expandable-control="expandable-link">
          {title}
        </a>
        <div id={"expandable-menu-contents-" + id} hidden={this.state.hidden}>
          {children && <nav className={subMenuClass}>
            {children}
          </nav>}
        </div>
      </li>
    )
  }
}

ExpandableMenuItem.defaultProps = defaultProps;
ExpandableMenuItem.propTypes = propTypes;

export default ExpandableMenuItem