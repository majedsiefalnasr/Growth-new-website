('use strict');

// jquery@3.6.4
// Local call (Server-side):               url => '../package/jquery/v3.6.4/jquery.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/jquery@v3.6.4-jYcc4gY1YpZ8Kqd6GK8S/mode=imports,min/optimized/jquery.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/jquery@3.6.4'
import jQuery from '../package/jquery/v3.6.4/jquery.min.js';

// jquery.tocify@1.9.1
// Local call (Server-side):               url => '../package/jquery.tocify/v1.9.1/jquery.tocify.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/jquery.tocify@v1.9.1-BAVV8uWnoEeyUz5SmRHs/mode=imports,min/optimized/jquery.tocify.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/jquery.tocify@1.9.1'
import '../package/jquery.tocify/v1.9.1/jquery.tocify.min.js';

// Utilities
import { SUtility } from './utilities/utility.js';

//   _    _      _          _____           _
//  | |  | |    | |        / ____|         | |
//  | |__| | ___| |_ __   | |     ___ _ __ | |_ ___ _ __
//  |  __  |/ _ \ | '_ \  | |    / _ \ '_ \| __/ _ \ '__|
//  | |  | |  __/ | |_) | | |___|  __/ | | | ||  __/ |
//  |_|  |_|\___|_| .__/   \_____\___|_| |_|\__\___|_|
//                | |
//              _ |_|
//             | | (_)
//    __ _  ___| |_ _  ___  _ __  ___
//   / _` |/ __| __| |/ _ \| '_ \/ __|
//  | (_| | (__| |_| | (_) | | | \__ \
//   \__,_|\___|\__|_|\___/|_| |_|___/
//
//
// Help Center actions
export var help_center_actions = function () {
  // Toggle Topic nav links
  var topic_nav_container = document.querySelector(
    '#help-center-topics-block .side--nav .topic--nav'
  );

  // Check if target is exist
  if (topic_nav_container) {
    // Toggle action
    let toggle_action = topic_nav_container.querySelector('[links-toggler]'),
      toggle_links = topic_nav_container.querySelector('.links');

    SUtility.addEvent(toggle_action, 'click', () => {
      // Toggle action class
      SUtility.toggleClass(toggle_action, 'open');
      SUtility.toggleClass(toggle_links, 'open');
    });
  }

  // TOC (Table of content generator)
  (function ($) {
    // TOC (Table of content generator)
    var toc_container = $('#toc-content');

    // Check if target is exist
    if (toc_container)
      //Calls the tocify method on your HTML div.
      $('#toc').tocify({
        // The container element that holds all of the elements used to generate
        // the table of contents
        context: '#toc-content',
        // The element's used to generate the table of contents. The order is very
        // important since it will determine the table of content's nesting structure.
        selectors: 'h2,h3',
        // Used to hide any of the table of contents nested items.
        hideEffect: 'slideUp',
        // How the URL hash value get's generated.
        hashGenerator: 'pretty',
        // Elements that you do not want to be used to generate the table of contents
        ignoreSelector: '.toc-ignore',
        // The amount of space between the top of page and the selected table of contents
        // item after the page has been scrolled.
        scrollTo: 160,
        // The offset distance in pixels to trigger the next active table of contents item
        highlightOffset: 160,
        // If a user scrolls to the bottom of the page and the page is not tall enough to
        // scroll to the last table of contents item, then the page height is increased
        extendPage: false,
        // Set's the first TOC item as active if no other TOC item is active.
        highlightDefault: true,
        // Adds a hash to the page url to maintain history
        history: false,
      });
  })(jQuery);

  // Feedback
  var feedback_container = document.querySelector('[topic-feedback]');

  // Check if target is exist
  if (feedback_container) {
    let feedback_action_thumbs_up = feedback_container.querySelector('[thumbs-up]'),
      feedback_action_thumbs_down = feedback_container.querySelector('[thumbs-down]'),
      feedback_action_submit = feedback_container.querySelector('#buttonFeedbackVerbatimSubmit'),
      feedback_action_cancel = feedback_container.querySelector('#buttonFeedbackVerbatimCancel');

    // Helpful action
    SUtility.addEvent(feedback_action_thumbs_up, 'click', () => {
      // Scroll to view
      window.scrollTo({
        top: feedback_container.getBoundingClientRect().top + window.pageYOffset - 160,
        behavior: 'smooth',
      });

      // add
      SUtility.addClass(feedback_container, 'helpful');
      SUtility.removeClass(feedback_container, 'not-helpful');

      // Reset checkboxes
      reset_checkboxes();
    });

    // Not helpful action
    SUtility.addEvent(feedback_action_thumbs_down, 'click', () => {
      // Scroll to view
      window.scrollTo({
        top: feedback_container.getBoundingClientRect().top + window.pageYOffset - 160,
        behavior: 'smooth',
      });

      // add
      SUtility.addClass(feedback_container, 'not-helpful');
      SUtility.removeClass(feedback_container, 'helpful');

      // Reset checkboxes
      reset_checkboxes();
    });

    // Submit action
    SUtility.addEvent(feedback_action_submit, 'click', () => {
      //add
      SUtility.addClass(feedback_container, 'thanks');
      SUtility.removeClass(feedback_container, 'not-helpful');
      SUtility.removeClass(feedback_container, 'helpful');

      // Reset checkboxes
      reset_checkboxes();
    });

    // Cancel action
    SUtility.addEvent(feedback_action_cancel, 'click', () => {
      // add
      SUtility.addClass(feedback_container, 'thanks');
      SUtility.removeClass(feedback_container, 'not-helpful');
      SUtility.removeClass(feedback_container, 'helpful');

      // Reset checkboxes
      reset_checkboxes();
    });

    // Get all checkboxes and verbatim feedback
    let checkboxes = feedback_container.querySelectorAll('.experience-option input'),
      verbatimFeedback = feedback_container.querySelector('#verbatimFeedback');

    // Enable submit action
    let submit_action = feedback_container.querySelector('[type="submit"]');
    // Checkboxes
    SUtility.each(checkboxes, (el) => {
      SUtility.addEvent(el, 'change', () => {
        if (el.checked) submit_action.disabled = false;
        else if (check_checkboxes()) submit_action.disabled = false;
        else if (verbatimFeedback.value.length != 0) submit_action.disabled = false;
        else submit_action.disabled = true;
      });
    });
    // Verbatim feedback
    SUtility.addEvent(verbatimFeedback, 'keyup', () => {
      // Set active state
      verbatimFeedback.value.length != 0
        ? SUtility.addClass(verbatimFeedback, 'active')
        : SUtility.removeClass(verbatimFeedback, 'active');

      // Enable submit action
      if (verbatimFeedback.value.length != 0) submit_action.disabled = false;
      else if (check_checkboxes()) submit_action.disabled = false;
      else submit_action.disabled = true;
    });

    // Reset checkboxes
    var reset_checkboxes = function () {
      SUtility.each(checkboxes, (el) => {
        el.checked = false;
      });
    };

    // Check if any checkbox is checked
    var check_checkboxes = function () {
      // Default state
      let checked = false;

      SUtility.each(checkboxes, (el) => {
        if (el.checked) checked = true;
      });

      return checked;
    };
  }

  // AnchorJS
  // Add deep anchor links to Help Center Topics
  // Bookmark action
  var anchors_HCT = document.querySelector('#help-center-topic-block .topic--content');

  // Check if target is exist
  if (anchors_HCT) {
    // Set options
    anchors.options = {
      placement: 'right',
    };

    // Init anchor
    anchors.add('#help-center-topic-block .topic--content h2:not(.no-anchor)');
    anchors.add('#help-center-topic-block .topic--content h3:not(.no-anchor)');
    anchors.add('#help-center-topic-block .topic--content h4:not(.no-anchor)');
  }
};
