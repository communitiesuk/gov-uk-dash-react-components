import React, { Component } from 'react';
import xtype from 'xtypejs';

import { defaultProps, propTypes } from '../components/Accordion.react';
import './accordion.css';

const EventOrigin = {
  SECTION_CONTENT: "section content",
  SECTION_HEADING: "section heading",
  SHOW_ALL_BUTTON: "show all button",
};

const AccordionContentClassName = "govuk-accordion__section-content accordion-padding";
const AccordionButtonClassName = "accordion-button govuk-accordion__section-button";

class Accordion extends Component {
  constructor(props) {
    super(props);
     // Check if sectionsOpenDefault prop exists and is an array, otherwise generate a default array
     const defaultSectionsOpen = Array.isArray(this.props.defaultSectionsOpen)
     ? this.props.defaultSectionsOpen
     : Array.from({ length: this.props.accordionHeadings.length }, () => true);

   this.state = {
     sectionsOpen: defaultSectionsOpen
   }

    this.initializeContentRefs(); 
    this.headerRefs = this.props.accordionHeadings.map(() => React.createRef());
  }

  initializeContentRefs = () => {
    this.contentRefs = React.Children.map(this.props.children, () => React.createRef());
  }

  componentDidUpdate(prevProps) {
    // check if number of children has changed
    if (React.Children.count(prevProps.children) !== React.Children.count(this.props.children)) {
      this.initializeContentRefs();
      //  reset the open state of sections
      this.setState({
        sectionsOpen: Array.from({ length: React.Children.count(this.props.children) }, () => false)
      });
    }
  }


  openOrCloseAccordionSection = (index) => {
    this.setState(prevState => {
      const newSectionsOpen = prevState.sectionsOpen.map((isOpen, i) => 
        i === index ? !isOpen : isOpen
      );

      if (this.contentRefs[index] && this.contentRefs[index].current) {
        this.contentRefs[index].current.style.display = newSectionsOpen[index] ? 'block' : 'none';
      }

      return { sectionsOpen: newSectionsOpen };
    });
  }

setInitialDisplayStyles = () => {
  this.contentRefs.forEach((ref, index) => {
      if (ref.current) {
          ref.current.style.display = this.state.sectionsOpen[index] ? 'block' : 'none';
      }
  });
}

componentDidMount() {
  this.setInitialDisplayStyles();
}

  // This method handles the Up arrow key event for an accordion component
  // depending on the origin of the event (Show All button, section heading, or section content).
  handleUpArrow = (index, eventOrigin) => {
    let newIndex = index;

    switch (eventOrigin) {
      case EventOrigin.SECTION_HEADING:
        if (index === 0) {  // if the index of the section heading is 0 focus the show all button
          const expandCollapseAllButtonElement = this.contentRefs[0].current;
          const previousElement = this.findFocusableElement(expandCollapseAllButtonElement, "previous", 2);
          if (previousElement) {
            previousElement.focus();
            return;
          }
        } else { // previous section is closed so focus the previous heading
          newIndex = index - 1;
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
      case EventOrigin.SECTION_HEADING:
        newIndex = index + 1;
        break;
    }

    if (newIndex >= 0 && newIndex < numberSections) {
      const nextHeading = this.headerRefs[newIndex].current;
      if (nextHeading) {
        nextHeading.focus();
        return;
      }
    } else if (newIndex >= numberSections) { // focus on the next element on the page
      let currentElement = this.contentRefs[index].current;
      const nextElement = this.findFocusableElement(currentElement, "next");
      if (nextElement) {
        nextElement.focus();
      }
    }
  }

  handleKeyEvent = (event, index) => {
    let eventOrigin;

    if (event.target.className === AccordionContentClassName) {
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

  jumpToAccordionContentSection(index) {
    if (this.contentRefs[index]) {
      this.setState({
        sectionsOpen: this.state.sectionsOpen.map((item, i) => (i === index ? true : item)),
      }, () => {
        // The callback function will be called after state is updated
        this.contentRefs[index].current.focus();
        this.contentRefs[index].current.scrollIntoView(true);
      });

    }
  }

  findFocusableElement(element, direction, distance = 1) { 
    // distance is how many elements away the element you want to focus on is. 
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
      targetIndex = currentIndex + distance;
    } else if (direction === "previous") {
      targetIndex = currentIndex - distance;
    } else {
      throw new Error("Invalid direction. Must be either 'next' or 'previous'.");
    }
    return focusable[targetIndex] || null;
  }

  render() {
    const accordionContent = React.Children.map(this.props.children, (accordionSectionContent, index) => {
      return this.renderAccordionSection(
        index, 
        accordionSectionContent, 
        this.state.sectionsOpen[index], 
        this.props.bannerSections ? this.props.bannerSections[index] : null,
        `accordion-section-${index}`
      );
    });

    return (
      <div className="js-enabled">
        <div
          className="govuk-accordion"
          data-module="govuk-accordion"
          id={this.props.id}
        >
          {accordionContent}
        </div>
      </div>
    )
  }

  renderAccordionSection(index, accordionSectionContent, sectionIsOpen, bannerSection) {
    const accordionHeading = this.props.accordionHeadings[index]
    const bannerSectionHeading = this.props.accordionHeadings[bannerSection]
    const contentId = `${this.props.id}-default-content-${index}`;
    let toggleText;
    if (this.props.showToggleText) {
      toggleText = sectionIsOpen ? `Hide ${accordionHeading}` : `Show ${accordionHeading}`;
    }
    else {
      toggleText = accordionHeading;
    }

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
                  ? `Heading at level ${index} is ${accordionHeading}, section is open, select to close`
                  : `Heading at level ${index} is ${accordionHeading}, section is closed, select to open`
              }
              onClick={() => this.openOrCloseAccordionSection(index)}
              onKeyDown={(event) => this.handleKeyEvent(event, index)}
              ref={this.headerRefs[index]}
            >
              <span className="govuk-visually-hidden govuk-accordion__section-heading-divider"></span>
              <span className="govuk-accordion__section-toggle" data-nosnippet>
                <span className="govuk-accordion__section-toggle-focus">
                  <span className="moj-side-navigation__item--collapsed">
                  </span>
                </span>
                <span className={sectionIsOpen ? "govuk-accordion-nav__chevron" : "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"} ></span>
                <span className="govuk-accordion__section-toggle-focus govuk-accordion__section-toggle-text"> {toggleText}
                </span>
              </span>
            </button>
          </h2>
        </div>
        <div
          className={AccordionContentClassName}
          id={contentId}
          tabIndex="0" //set this to make the content focusable for default tab key navigation events
          aria-label={`Content at level ${index}`}
          ref={this.contentRefs[index]}
        >  {bannerSection != null ? <div className="change-log-banner govuk-!-margin-bottom-2" onClick={() => this.jumpToAccordionContentSection(bannerSection)} tabIndex={0}>
              <div className="govuk-body-s govuk-!-font-weight-bold govuk-!-margin-bottom-0">
                <button id='accordion-jump-to-button' role="button" className="govuk-button govuk-button--secondary"
                >
                  Jump to {bannerSectionHeading}
                </button>
                {/* alt text here if wanted */}
              </div>
            </div> : null}
          <div className='govuk-body' tabIndex={0}>{accordionSectionContent}
          </div>
        </div>
      </div>
    )
  }
}

Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

export default Accordion