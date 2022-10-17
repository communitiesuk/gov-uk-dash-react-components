import { append } from 'ramda';
import React, { Component } from 'react';
import "../../dashboard.css"

import { defaultProps, propTypes } from '../components/ComponentTemplate.react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: new Array(this.props.accordionContent.length).fill(true),
      allSectionsOpen: false,
    }
  }

  handleSubMenuVisibility = (index) => {
    let hidden = [...this.state.hidden];
    hidden[index] = !hidden[index];
    this.setState({hidden, allSectionsOpen: hidden.every(element => element === false)});
  }

  showOrHideAllAccordionSections = () => {
    let hidden = new Array(this.state.hidden.length).fill(this.state.allSectionsOpen ? true : false)
    this.setState({ hidden })
    this.state.allSectionsOpen=!this.state.allSectionsOpen
  } 


  render() {
    return (
      <div className="app-example-page js-enabled">
        <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
          <div className='govuk-accordion__controls'>
            <button type='button' className='govuk-accordion__show-all' onClick={this.showOrHideAllAccordionSections}>
            <span className= {this.state.allSectionsOpen ? "govuk-accordion-nav__chevron" : "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"} ></span>
            <span className="govuk-accordion__section-toggle-text"> {this.state.allSectionsOpen ? "Hide all sections" : "Show all sections"} </span>
            </button>
          </div>
          {this.props.accordionContent.map((accordionSection, index) => this.renderAccordionSection(index, accordionSection, this.state.hidden[index]))}
        </div>
      </div>
    )
  }

  renderAccordionSection(index, accordionContent, hidden) {
    const { expandedClass="govuk-accordion__section--expanded", collapsedClass="govuk-accordion__section", ShowString = "Show", HideString = "Hide"} = this.props
      return (
          <div className={hidden ? collapsedClass : collapsedClass + ' ' + expandedClass}>
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <button type="button" aria-controls={`accordion-default-content-${index}`} className="govuk-accordion__section-button" id={`accordion-default-heading-${index}`} aria-expanded={!hidden} onClick={() => this.handleSubMenuVisibility(index)}>
                  <span className="govuk-accordion__section-heading-text" id={`accordion-default-heading-${index}`}>
                    <span className="govuk-accordion__section-heading-text-focus"> {accordionContent.heading} 
                    </span>
                  </span> 
                  <span className="govuk-visually-hidden govuk-accordion__section-heading-divider"></span>
                  <span className="govuk-accordion__section-toggle" data-nosnippet>
                    <span className="govuk-accordion__section-toggle-focus">
                      <span className="moj-side-navigation__item--collapsed">
                      </span>
                    </span>
                    <span className= {hidden ? "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down" : "govuk-accordion-nav__chevron" } ></span>
                    <span className="govuk-accordion__section-toggle-text"> {hidden ? ShowString : HideString} 
                      <span className="govuk-visually-hidden"> this section</span>
                    </span>
                  </span>
                </button>
              </h2>
            </div>
            <div id={`accordion-default-heading-${index}`} className="govuk-accordion__section-content" aria-labelledby={`accordion-default-heading-${index}`}>
                <p className='govuk-body'>{accordionContent.children}</p>
            </div>
          </div> 
        )
    }
  }




Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

export default Accordion