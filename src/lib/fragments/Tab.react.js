import React, { Component } from 'react';
import xtype from 'xtypejs';

import { defaultProps, propTypes } from '../components/Tab.react';
// import './accordion.css';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: tabHeadings[0], // should tab selected be the index or the string of the tab
    }
  }

  selectTab = (index) => {
    let tabSelected = [...this.state.tabSelected];
    this.setState(tabSelected = tabHeadings[index]);
  }

//   openOrCloseAccordionSection = (index) => {
//     let sectionsOpen = [...this.state.sectionsOpen];
//     sectionsOpen[index] = !sectionsOpen[index];
//     this.setState({sectionsOpen: sectionsOpen, allSectionsAreOpen: sectionsOpen.every(sectionIsOpen => sectionIsOpen)});
//   }

//   showOrHideAllAccordionSections = () => {
//     let sectionsOpen = new Array(this.state.sectionsOpen.length).fill(this.state.allSectionsAreOpen ? false : true);
//     this.setState({ sectionsOpen: sectionsOpen, allSectionsAreOpen : !this.state.allSectionsAreOpen});
//   }  


  render() {
    let tabContent 
    tabContent = this.renderTab(this.props.children, this.state.tabSelected)
    // if (this.props.children.length === 1 || xtype.type(this.props.children) !== 'array'){                     
    //   accordionContent = this.renderAccordionSection(0, this.props.children, this.state.sectionsOpen[0])
    // }
    // else { 
    //   tabContent = this.props.children.map((accordionSectionContent, index) => this.renderAccordionSection(index, accordionSectionContent, this.state.sectionsOpen[index]))
    // }
    return (
      <div className="app-example-page js-enabled">
        <div className="govuk-tabs" data-module="govuk-tabs" id={this.props.id}>
            <h2 class="govuk-tabs__title"> Contents </h2>
            <ul class="govuk-tabs__list">
                <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
                    <a class="govuk-tabs__tab" href="#past-day">
                        Past day
                    </a>
                </li>
                <li class="govuk-tabs__list-item">
                <a class="govuk-tabs__tab" href="#past-week">
                    Past week
                </a>
                </li>
                <li class="govuk-tabs__list-item">
                <a class="govuk-tabs__tab" href="#past-month">
                    Past month
                </a>
                </li>
                <li class="govuk-tabs__list-item">
                <a class="govuk-tabs__tab" href="#past-year">
                    Past year
                </a>
                </li>
        </ul>


            <button type='button' className='govuk-accordion__show-all' onClick={this.showOrHideAllAccordionSections}>
            <span className= {this.state.allSectionsAreOpen ? "govuk-accordion-nav__chevron" : "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"} ></span>
            <span className="govuk-accordion__section-toggle-text"> {this.state.allSectionsAreOpen ? "Hide all sections" : "Show all sections"} </span>
            </button>
          </div>
          {tabContent}
        </div>
      </div>
    )
  }

  <h2 class="govuk-tabs__title">
    Contents
  </h2>









  renderTab(tabContent, tabIsSelected) {
    const tabSelected = tabIsSelected
      return (
          <div className={sectionIsOpen ? "govuk-accordion__section govuk-accordion__section--expanded" : "govuk-accordion__section"}>
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <button className="accordion-button govuk-accordion__section-button" type="button" aria-controls={`accordion-default-content-${index}`} aria-expanded={sectionIsOpen} onClick={() => this.openOrCloseAccordionSection(index)}>
                  <span className="govuk-accordion__section-heading-text" >
                    <span className="govuk-accordion__section-heading-text-focus"> {accordionHeading} 
                    </span>
                  </span> 
                  <span className="govuk-visually-hidden govuk-accordion__section-heading-divider"></span>
                  <span className="govuk-accordion__section-toggle" data-nosnippet>
                    <span className="govuk-accordion__section-toggle-focus">
                      <span className="moj-side-navigation__item--collapsed">
                      </span>
                    </span>
                    <span className= {sectionIsOpen ?  "govuk-accordion-nav__chevron" : "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"} ></span>
                    <span className="govuk-accordion__section-toggle-focus govuk-accordion__section-toggle-text"> {sectionIsOpen ? "Hide" : "Show"} 
                      <span className="govuk-visually-hidden"> this section</span>
                    </span>
                  </span>
                </button>
              </h2>
            </div>
            <div className="govuk-accordion__section-content" aria-labelledby={`accordion-default-heading-${index}`}>
                <p className='govuk-body'>{accordionSectionContent}</p>
            </div>
          </div> 
        )
    }
  }




Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

export default Accordion