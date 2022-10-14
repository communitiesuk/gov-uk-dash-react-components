import React, { Component } from 'react';
import "../../dashboard.css"

import { defaultProps, propTypes } from '../components/ComponentTemplate.react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: props.collapsedByDefault
    }
  }

  handleSubMenuVisibility = (event) => {
      this.setState({
        hidden: !this.state.hidden
      })
    

  }

    render() {
      const { expandedClass="govuk-accordion__section--expanded", collapsedClass="govuk-accordion__section",ShowString = "Show", HideString = "Hide", heading, children} = this.props
        return (
          <body className="govuk-template__body app-example-page js-enabled">
          {/* <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default"> */}
  <div className={this.state.hidden ? collapsedClass : collapsedClass + ' ' + expandedClass}>
    <div className="govuk-accordion__section-header">
      <h2 className="govuk-accordion__section-heading">
        <button type="button" aria-controls="accordion-default-content-1" className="govuk-accordion__section-button" id="accordion-default-heading-1" aria-expanded={!this.state.hidden} onClick={this.handleSubMenuVisibility}>
          <span className="govuk-accordion__section-heading-text" id="accordion-default-heading-1">
            <span className="govuk-accordion__section-heading-text-focus"> {heading} 
            </span>
          </span> 
          <span className="govuk-visually-hidden govuk-accordion__section-heading-divider"></span>
          <span className="govuk-accordion__section-toggle" data-nosnippet>
            <span className="govuk-accordion__section-toggle-focus">
              <span className="moj-side-navigation__item--collapsed">
              </span>
            </span>
            <span className= {this.state.hidden ? "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down" : "govuk-accordion-nav__chevron" } ></span>
            <span className="govuk-accordion__section-toggle-text"> {this.state.hidden ? ShowString : HideString} 
              <span className="govuk-visually-hidden"> this section</span>
            </span>
          </span>
        </button>
      </h2>
    </div>
    <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
      <p className='govuk-body'>{children}</p>
    </div>
  </div> 
  {/* </div>  */}
  </body>
        )
    }
  }




Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

export default Accordion