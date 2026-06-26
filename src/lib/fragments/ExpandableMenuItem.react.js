import React, { Component } from 'react';

import {  propTypes } from '../components/ExpandableMenuItem.react';

class ExpandableMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: this.getInitialHidden(props)
    }
  }

  getStorageKey = (props = this.props) => {
    return `expandable-menu-item-${props.id}`
  }

  getInitialHidden = (props) => {
    // If this is the group for the current page, always open it.
    if (props.collapsedByDefault === false) {
      return false
    }

    const storedValue = window.sessionStorage.getItem(this.getStorageKey(props))

    if (storedValue !== null) {
      return storedValue === "true"
    }

    return props.collapsedByDefault
  }

  saveHiddenState = (hidden) => {
    window.sessionStorage.setItem(this.getStorageKey(), String(hidden))
  }

  componentDidMount() {
    // Important: if the group starts open because it contains the current page,
    // save that immediately. Otherwise the first navigation away will close it.
    if (this.props.collapsedByDefault === false) {
      this.saveHiddenState(false)
    }
  }

  componentDidUpdate(prevProps) {
    const becameActiveGroup =
      prevProps.collapsedByDefault === true &&
      this.props.collapsedByDefault === false

    if (becameActiveGroup && this.state.hidden) {
      this.setState(
        { hidden: false },
        () => this.saveHiddenState(false)
      )
    }
  }

  handleSubMenuVisibility = (event) => {
    const expandableControl = event.target.getAttribute('data-expandable-control')

    if (expandableControl) {
      event.preventDefault()

      this.setState(
        (prevState) => ({
          hidden: !prevState.hidden
        }),
        () => this.saveHiddenState(this.state.hidden)
      )
    }
  }

  render() {
    const { id, title, children, expandedClass, collapsedClass, ariaLabel, subMenuClass, titleClass } = this.props

    return (
      <li id={id} aria-label={ariaLabel}
        aria-controls={"expandable-menu-contents-" + id} aria-expanded={!this.state.hidden} className={this.state.hidden ? collapsedClass : expandedClass} onClick={this.handleSubMenuVisibility}>
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

ExpandableMenuItem.propTypes = propTypes;

export default ExpandableMenuItem