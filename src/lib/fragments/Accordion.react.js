import { transduce } from 'ramda';
import React, { Component } from 'react';
import xtype from 'xtypejs';

import { defaultProps, propTypes } from '../components/Accordion.react';
import './accordion.css';

const EventOrigin = {
  SECTION_CONTENT: "section content",
  SECTION_HEADING: "section heading",
  SHOW_ALL_BUTTON: "show all button",
};

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsOpen: new Array(this.props.accordionHeadings.length).fill(false),
      allSectionsAreOpen: false,
    }
  }

  openOrCloseAccordionSection = (index) => {
    let sectionsOpen = [...this.state.sectionsOpen];
    sectionsOpen[index] = !sectionsOpen[index];
    this.setState({sectionsOpen: sectionsOpen, allSectionsAreOpen: sectionsOpen.every(sectionIsOpen => sectionIsOpen)});
  }

  showOrHideAllAccordionSections = () => {
    let sectionsOpen = new Array(this.state.sectionsOpen.length).fill(this.state.allSectionsAreOpen ? false : true);
    this.setState({ sectionsOpen: sectionsOpen, allSectionsAreOpen : !this.state.allSectionsAreOpen});
  } 
  
  // This method handles the Up arrow key event for an accordion component
  // depending on the origin of the event (Show All button, section heading, or section content).
  handleUpArrow = (index, eventOrigin) => {
    const numberSections = this.props.accordionHeadings.length;
    let newIndex = index;

    switch (eventOrigin) {
      case EventOrigin.SHOW_ALL_BUTTON: // go to previous element on page
        const currentElement = document.querySelector('.govuk-accordion__show-all');
        const previousElement = this.findFocusableElement(currentElement, "previous");
        if (previousElement) {
          previousElement.focus();
        }
        return;

      case EventOrigin.SECTION_HEADING: 
        if (index === 0){  // if the index of the section heading is 0 focus the show all button
          const showAllElement = document.querySelector('.govuk-accordion__show-all');
          if (showAllElement) {
            showAllElement.focus();
            return;
          }
        } else if (index > 0) { // focus the content of the previous accordion section if it is open
          const previousIndex = index - 1;
          const previousSectionIsOpen = this.state.sectionsOpen[previousIndex];
          if (previousSectionIsOpen) {
            const contentAtPreviousIndex = document.querySelector(`#accordion-default-content-${previousIndex}`);
            if (contentAtPreviousIndex) {
              contentAtPreviousIndex.focus();
              return;
            }
          } else { // previous section is closed so focus the previous heading
            newIndex = index - 1;
          }
        }
        break;

      case EventOrigin.SECTION_CONTENT: // focus the heading at the same level as the content
        newIndex = index;
        break;

      default:
        break;
    }

    // focus the heading at level newIndex
    const headingToFocus = document.querySelector(`[data-section-index="${newIndex}"] .govuk-accordion__section-heading .govuk-accordion__section-button`);
    if (headingToFocus) {
      headingToFocus.focus();
    }
  }

  // This method handles the Down arrow key event for an accordion component
  // depending on the origin of the event (Show All button, section heading, or section content).
  handleDownArrow = (index, eventOrigin) => {
    const numberSections = this.props.accordionHeadings.length;
    let newIndex = index;
  
    switch (eventOrigin) {
      case EventOrigin.SHOW_ALL_BUTTON:
        newIndex = 0; // go to accordion heading 0
        break;
      case EventOrigin.SECTION_HEADING:
        const sectionIsOpen = this.state.sectionsOpen[index];
        if (sectionIsOpen) {
          const content = document.querySelector(`#accordion-default-content-${index}`);
          if (content) {
            content.focus();
            return;
          }
        } else { // section is closed, go to next heading if there is one
          newIndex = index + 1;
        }
        break;
      case EventOrigin.SECTION_CONTENT:
        newIndex = index + 1; // go to next heading if there is one
        break;
      default:
        break;
    }
  
    if (newIndex >= 0 && newIndex < numberSections) {
      const nextHeading = document.querySelector(
        `[data-section-index="${newIndex}"] .govuk-accordion__section-heading .govuk-accordion__section-button`
      );
      if (nextHeading) {
        nextHeading.focus();
        return;
      }
    } else if (newIndex >= numberSections) {
      const currentHeading = document.querySelector(
        `[data-section-index="${index}"] .govuk-accordion__section-heading .govuk-accordion__section-button`
      );
      const nextElement = this.findFocusableElement(currentHeading, "next");
      if (nextElement) {
        nextElement.focus();
      }
    }
  }  
  
  handleKeyEvent = (event, index) => {
    let eventOrigin;
  
    if (index === -1) {
      eventOrigin = EventOrigin.SHOW_ALL_BUTTON;
    } else if (event.target.className === "govuk-accordion__section-content") {
      eventOrigin = EventOrigin.SECTION_CONTENT;
    } else if (event.target.className === "accordion-button govuk-accordion__section-button") {
      eventOrigin = EventOrigin.SECTION_HEADING;
    } else {
      return;
    }
  
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault(); 
        this.handleDownArrow(index, eventOrigin);
        break;
      case 'ArrowUp':
        event.preventDefault(); 
        this.handleUpArrow(index, eventOrigin);
        break;
      default:
        // handle other keys if needed
        break;
    }
  }
 
  findFocusableElement(element, direction) {
    if (!element){
      return
    }
    const focusableElements = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    const focusable = Array.from(document.querySelectorAll(focusableElements));
    console.log("focusable Array", focusable)
    const currentIndex = focusable.indexOf(element);
    console.log("******", currentIndex)
    if (currentIndex === -1) {
      console.warn("Element not found in the list of focusable elements.");
      return null;
    }
  
    let targetIndex;
  
    if (direction === "next") {
      targetIndex = currentIndex + 1;
    } else if (direction === "previous") {
      targetIndex = currentIndex - 1;
    } else {
      throw new Error("Invalid direction. Must be either 'next' or 'previous'.");
    }
  
    return focusable[targetIndex] || null;
  }
    
  render() {
    let accordionContent 
    if (this.props.children.length === 1 || xtype.type(this.props.children) !== 'array'){                     
      accordionContent = this.renderAccordionSection(0, this.props.children, this.state.sectionsOpen[0])
    }
    else { 
      accordionContent = this.props.children.map((accordionSectionContent, index) => this.renderAccordionSection(index, accordionSectionContent, this.state.sectionsOpen[index]))
    }
    return (
      <div className="js-enabled">
        <div className="govuk-accordion" data-module="govuk-accordion" id={this.props.id}>
          <div className='govuk-accordion__controls'>
            <button
                type='button' 
                className='govuk-accordion__show-all' 
                onClick={this.showOrHideAllAccordionSections} 
                onKeyDown={(event) => this.handleKeyEvent(event,-1)}
                aria-label={`Accordion with ${this.props.accordionHeadings.length} sections, all sections are ${this.state.allSectionsAreOpen ? "open" : "closed"} select to ${this.state.allSectionsAreOpen ? "close" : "open"} all sections`}
            >
            <span className= {this.state.allSectionsAreOpen ? "govuk-accordion-nav__chevron" : "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"} ></span>
            <span className="govuk-accordion__section-toggle-text"> {this.state.allSectionsAreOpen ? "Hide all sections" : "Show all sections"} </span>
            </button>
          </div>
          {accordionContent}
        </div>
      </div>
    )
  }

  renderAccordionSection(index, accordionSectionContent, sectionIsOpen) {
    const accordionHeading = this.props.accordionHeadings[index]
    const contentId = `accordion-default-content-${index}`;
    return (
          <div 
            className={sectionIsOpen ? "govuk-accordion__section govuk-accordion__section--expanded" : "govuk-accordion__section"}
            data-section-index={index}
          >
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <button 
                    className="accordion-button govuk-accordion__section-button" 
                    type="button" 
                    aria-controls={contentId} 
                    // aria-expanded={sectionIsOpen} not needed now we read all the info in the aria-label?
                    aria-label={
                      sectionIsOpen
                        ? `Accordion heading at level ${index} is ${accordionHeading},,,, Section is open, select to close`
                        : `Accordion heading at level ${index} is ${accordionHeading},,,, Section is closed, select to open`
                    }
                    onClick={() => this.openOrCloseAccordionSection(index)}
                    onKeyDown={(event) => this.handleKeyEvent(event,index)}
                >
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
                      {/* <span className="govuk-visually-hidden"> this section</span> */}
                    </span>
                  </span>
                </button>
              </h2>
            </div>
            <div 
                className="govuk-accordion__section-content" 
                id={contentId} 
                onKeyDown={(event) => this.handleKeyEvent(event, index)}
                tabIndex="-1" //set this to make the content focusable for arrow key events
                aria-label={`Accordion at level ${index} content is`}
            >
                <p className='govuk-body'>{accordionSectionContent}</p>
            </div>
          </div> 
        )
    }
  }
  
Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

export default Accordion