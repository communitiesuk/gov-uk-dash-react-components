import React, { Component } from 'react';
import xtype from 'xtypejs';

import { defaultProps, propTypes } from '../components/Accordion.react';
import './accordion.css';

const EventOrigin = {
  SECTION_CONTENT: "section content",
  SECTION_HEADING: "section heading",
  SHOW_ALL_BUTTON: "show all button",
};

const AccordionContentClassName = "govuk-accordion__section-content";
const AccordionButtonClassName = "accordion-button govuk-accordion__section-button";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsOpen: new Array(this.props.accordionHeadings.length).fill(false),
      allSectionsAreOpen: false,
    }
    this.expandCollapseAllButtonRef = React.createRef();
    this.contentRefs = this.props.children.map(() => React.createRef());
    this.headerRefs = this.props.accordionHeadings.map(() => React.createRef());
  }

  openOrCloseAccordionSection = (index) => {
    let sectionsOpen = [...this.state.sectionsOpen];
    sectionsOpen[index] = !sectionsOpen[index];
    this.setState({ sectionsOpen: sectionsOpen, allSectionsAreOpen: sectionsOpen.every(sectionIsOpen => sectionIsOpen) });
  }

  showOrHideAllAccordionSections = () => {
    let sectionsOpen = new Array(this.state.sectionsOpen.length).fill(this.state.allSectionsAreOpen ? false : true);
    this.setState({ sectionsOpen: sectionsOpen, allSectionsAreOpen: !this.state.allSectionsAreOpen });
  }

  // This method handles the Up arrow key event for an accordion component
  // depending on the origin of the event (Show All button, section heading, or section content).
  handleUpArrow = (index, eventOrigin) => {
    let newIndex = index;

    switch (eventOrigin) {
      case EventOrigin.SHOW_ALL_BUTTON: // go to previous element on page
        const expandCollapseAllButtonElement = this.expandCollapseAllButtonRef.current;
        const previousElement = this.findFocusableElement(expandCollapseAllButtonElement, "previous");
        if (previousElement) {
          previousElement.focus();
        }
        return;
      case EventOrigin.SECTION_HEADING:
        if (index === 0) {  // if the index of the section heading is 0 focus the show all button
          const expandCollapseAllButtonElement = this.expandCollapseAllButtonRef.current;
          if (expandCollapseAllButtonElement) {
            expandCollapseAllButtonElement.focus();
            return;
          }
        } else if (index > 0) { // focus the content of the previous accordion section if it is open
          const previousIndex = index - 1;
          const previousSectionIsOpen = this.state.sectionsOpen[previousIndex];
          if (previousSectionIsOpen) {
            const contentAtPreviousIndex = this.contentRefs[previousIndex].current;
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
    const headingToFocus = this.headerRefs[newIndex].current;
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
          const content = this.contentRefs[index].current;
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
      const nextHeading = this.headerRefs[newIndex].current;
      if (nextHeading) {
        nextHeading.focus();
        return;
      }
    } else if (newIndex >= numberSections) { // focus on the next element on the page
      const currentHeading = this.headerRefs[index].current;

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
    } else if (event.target.className === AccordionContentClassName) {
      eventOrigin = EventOrigin.SECTION_CONTENT;
    } else if (event.target.className === AccordionButtonClassName) {
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
        break;
    }
  }

  findFocusableElement(element, direction) {
    if (!element) {
      return
    }
    const focusableElements = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    const focusable = Array.from(document.querySelectorAll(focusableElements));
    const currentIndex = focusable.indexOf(element);
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
    if (this.props.children.length === 1 || xtype.type(this.props.children) !== 'array') {
      accordionContent = this.renderAccordionSection(0, this.props.children, this.state.sectionsOpen[0])
    }
    else {
      accordionContent = this.props.children.map((accordionSectionContent, index) => this.renderAccordionSection(index, accordionSectionContent, this.state.sectionsOpen[index]))
    }
    return (
      <div className="js-enabled">
        <div
          className="govuk-accordion"
          data-module="govuk-accordion"
          id={this.props.id}
        >
          <div className='govuk-accordion__controls'>
            <button
              type='button'
              className='govuk-accordion__show-all'
              onClick={this.showOrHideAllAccordionSections}
              onKeyDown={(event) => this.handleKeyEvent(event, -1)}
              aria-label={`Toggle ${this.props.accordionHeadings.length} panels, ${this.state.allSectionsAreOpen ? "collapse" : "expand"} all`}
              ref={this.expandCollapseAllButtonRef}
            >
              <span className={this.state.allSectionsAreOpen ? "govuk-accordion-nav__chevron" : "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"} ></span>
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
      >
        <div className="govuk-accordion__section-header">
          <h2 className="govuk-accordion__section-heading">
            <button
              className={AccordionButtonClassName}
              type="button"
              aria-controls={contentId}
              aria-label={
                sectionIsOpen
                  ? `Heading at level ${index} is ${accordionHeading},,,, section is open, select to close`
                  : `Heading at level ${index} is ${accordionHeading},,,, section is closed, select to open`
              }
              onClick={() => this.openOrCloseAccordionSection(index)}
              onKeyDown={(event) => this.handleKeyEvent(event, index)}
              ref={this.headerRefs[index]}
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
                <span className={sectionIsOpen ? "govuk-accordion-nav__chevron" : "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"} ></span>
                <span className="govuk-accordion__section-toggle-focus govuk-accordion__section-toggle-text"> {sectionIsOpen ? "Hide" : "Show"}
                </span>
              </span>
            </button>
          </h2>
        </div>
        <div
          className={AccordionContentClassName}
          id={contentId}
          onKeyDown={(event) => this.handleKeyEvent(event, index)}
          tabIndex="-1" //set this to make the content focusable for arrow key events
          aria-label={`Content at level ${index}`}
          ref={this.contentRefs[index]}
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