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
      const { expandedClass="govuk-accordion__section--expanded", collapsedClass="govuk-accordion__section",ShowString = "Show", HideString = "Hide"} = this.props
        return (
          <body class="govuk-template__body app-example-page js-enabled">
          <div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  <div class={this.state.hidden ? collapsedClass : collapsedClass + ' ' + expandedClass}>
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <button type="button" aria-controls="accordion-default-content-1" class="govuk-accordion__section-button" id="accordion-default-heading-1" aria-expanded={!this.state.hidden} onClick={this.handleSubMenuVisibility}>
          <span class="govuk-accordion__section-heading-text" id="accordion-default-heading-1">
            <span class="govuk-accordion__section-heading-text-focus"> Writing well for the web 
            </span>
          </span> 
          <span class="govuk-visually-hidden govuk-accordion__section-heading-divider"></span>
          <span class="govuk-accordion__section-toggle" data-nosnippet>
            <span class="govuk-accordion__section-toggle-focus">
              <span class="moj-side-navigation__item--collapsed">
              </span>
            </span>
            <span class= {this.state.hidden ? "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down" : "govuk-accordion-nav__chevron" } ></span>
            <span class="govuk-accordion__section-toggle-text"> {this.state.hidden ? ShowString : HideString} 
              <span class="govuk-visually-hidden"> this section</span>
            </span>
          </span>
        </button>
      </h2>
    </div>
    <div id="accordion-default-content-1" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
      <p class='govuk-body'>This is the content for Writing well for the web.</p>
    </div>
  </div>   
  </div> 
  </body>
        )
    }
  }

  //   render() {
  //     const { expandedClass="govuk-accordion__section--expanded", collapsedClass="govuk-accordion__section-content"} = this.props
  //       return (
  //         <div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  //  <div class={this.state.hidden ? collapsedClass : expandedClass}>
  //    <div class="govuk-accordion__section-header">
  //      <h2 class="govuk-accordion__section-heading">
  //        <span class="govuk-accordion__section-button" id="accordion-default-heading-1" aria-controls="expandable-menu-contents" aria-expanded={!this.state.hidden} onClick={this.handleSubMenuVisibility}>
  //          Writing well for the web
  //                   </span>
  //      </h2>
  //    </div>
  //    <div id="accordion-default-content-1" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
  //      <p class='govuk-body'>This is the content for Writing well for the web.</p>
  //    </div>
  //  </div>   
  //  </div> 
  //       )
  //   }
  // }











    //         <div id={this.props.id} aria-controls="expandable-menu-contents" aria-expanded={!this.state.hidden} onClick={this.handleSubMenuVisibility}>
    //             I love React.js!
    //             <div className={this.state.hidden ? collapsedClass : expandedClass}>
    //               Test!
    //             </div>
    //         </div>
    //     )
    // }
// }

Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

export default Accordion