import { append } from 'ramda';
import React, { Component } from 'react';
import "../../dashboard.css"

import { defaultProps, propTypes } from '../components/ComponentTemplate.react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: new Array(this.props.accordionContent.length).fill(true) 
    }
  }

  handleSubMenuVisibility = (index) => {
    let hidden = [...this.state.hidden];
    hidden[index] = !hidden[index];
    this.setState({ hidden });
  }

  render() {
    return this.props.accordionContent.map((accordionSection, index) => this.renderAccordionSection(index, accordionSection, this.state.hidden[index]))
  }

  renderAccordionSection(index, accordionContent, hidden) {
    const { expandedClass="govuk-accordion__section--expanded", collapsedClass="govuk-accordion__section", ShowString = "Show", HideString = "Hide"} = this.props
      return (
        <div className="app-example-page js-enabled">
        {/* <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default"> */}
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
        {/* </div>  */}
    </div>
        )
    }
  }




Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

export default Accordion