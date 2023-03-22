import React, { Component } from 'react';
import xtype from 'xtypejs';

import { defaultProps, propTypes } from '../components/Tabs.react';
import './tab.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tabSelected: 0,
    //   sectionsOpen: new Array(this.props.accordionHeadings.length).fill(false),
    //   allSectionsAreOpen: false,
    }
  }

setSelectedTabIndex = (index) => {
    this.setState({ tabSelected: index });
  } 

render() {
    let tabsContent 
    if (this.props.children.length === 1 || xtype.type(this.props.children) !== 'array'){                     
      tabsContent = this.renderTab(0, this.props.children)
    }
    else { 
      tabsContent = this.props.children.map((individualTabContent, index) => this.renderIndividualTab(index, individualTabContent))
    }
    return (
      <div className="app-example-page js-enabled">
        <div className="govuk-tabs" data-module="govuk-tabs" id={this.props.id}>
            <h2 class="govuk-tabs__title"> Contents </h2>
            <ul class="govuk-tabs__list"> {tabsContent} </ul>            
        </div>
      </div>
    )
  }

  renderIndividualTab(index, individualTabContent) {
    let tabHeading;
    tabHeading = this.props.tabHeadings[index]
    let tabIsSelected;
    tabIsSelected = (index === this.state.tabSelected) ? true: false
    console.log("index", index)
    console.log("tabIsSelected", tabIsSelected)
      return (   
          <div className={tabIsSelected ? "govuk-tabs__list-item govuk-tabs__list-item--selected" : "govuk-tabs__list-item"}>
            <button className="accordion-button govuk-accordion__section-button" type="button" onClick={() => this.setSelectedTabIndex(index)}>
            <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
                <a className={tabIsSelected ? "tab-link govuk-tabs__tab" : "govuk-tabs__tab"}>
                    {tabHeading}

                    
                </a>
            </li>
            </button>

                {/* {individualTabContent} */}
            </div>
        )
    }
  }




Tabs.defaultProps = defaultProps;
Tabs.propTypes = propTypes;

export default Tabs