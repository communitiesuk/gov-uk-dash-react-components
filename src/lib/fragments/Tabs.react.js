import React, { Component } from 'react';
import xtype from 'xtypejs';

import { defaultProps, propTypes } from '../components/Tabs.react';
import './tab.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: this.props.defaultTab,
    }
  }

  setSelectedTabIndex = (index) => {
    this.setState({ tabSelected: index });
  }

  render() {
    const selectedTabContent = this.props.children[this.state.tabSelected]
    let tabHeaders;
    if (this.props.children.length === 1 || xtype.type(this.props.children) !== 'array') {
      tabHeaders = this.renderTabHeader(0, this.props.tabHeadings[0]);
    }
    else {
      tabHeaders = this.props.tabHeadings.map((tabHeader, index) => this.renderTabHeader(index, tabHeader))
    }
    return (
      <div className="js-enabled">
        <div className="govuk-tabs" data-module="govuk-tabs" id={this.props.id}>
          <h2 className="govuk-tabs__title"> Contents </h2>
          <ul className="govuk-tabs__list" role="tablist"> {tabHeaders} </ul>
          <div className="govuk-tabs__panel">{selectedTabContent} </div>
        </div>
      </div>
    )
  }


  renderTabHeader(index, tabHeader) {
    let tabIsSelected;
    tabIsSelected = (index === this.state.tabSelected) ? true : false
    return (
      <li 
        key={index}
        className={tabIsSelected ? "tab-selected-underline govuk-tabs__list-item govuk-tabs__list-item--selected" : " tab-underline govuk-tabs__list-item"}
        role="presentation"
      >
        <button className={tabIsSelected ? "tab-button-selected govuk-tabs__tab" : "tab-button govuk-tabs__tab"} role="tab" type="button" aria-controls={tabHeader} aria-labelledby={tabHeader} aria-selected={tabIsSelected ? 'true' : 'false'} onClick={() => this.setSelectedTabIndex(index)}> {tabHeader}
        </button>
      </li>
    )
  }
}


Tabs.defaultProps = defaultProps;
Tabs.propTypes = propTypes;

export default Tabs