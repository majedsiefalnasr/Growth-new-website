('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   ______            _ _                _
//  |  ____|          | | |              | |
//  | |__ ___  ___  __| | |__   __ _  ___| | __
//  |  __/ _ \/ _ \/ _` | '_ \ / _` |/ __| |/ /
//  | | |  __/  __/ (_| | |_) | (_| | (__|   <
//  |_|  \___|\___|\__,_|_.__/ \__,_|\___|_|\_\
//
//
// Feedback
export var feedback = function (container) {
  let feedback_action_thumbs_up = container.querySelector('[thumbs-up]'),
    feedback_action_thumbs_down = container.querySelector('[thumbs-down]'),
    feedback_action_submit = container.querySelector('#buttonFeedbackVerbatimSubmit'),
    feedback_action_cancel = container.querySelector('#buttonFeedbackVerbatimCancel');

  // Helpful action
  SUtility.addEvent(feedback_action_thumbs_up, 'click', () => {
    // Scroll to view
    window.scrollTo({
      top: container.getBoundingClientRect().top + window.pageYOffset - 160,
      behavior: 'smooth',
    });

    // add
    SUtility.addClass(container, 'helpful');
    SUtility.removeClass(container, 'not-helpful');

    // Reset checkboxes
    reset_checkboxes();
  });

  // Not helpful action
  SUtility.addEvent(feedback_action_thumbs_down, 'click', () => {
    // Scroll to view
    window.scrollTo({
      top: container.getBoundingClientRect().top + window.pageYOffset - 160,
      behavior: 'smooth',
    });

    // add
    SUtility.addClass(container, 'not-helpful');
    SUtility.removeClass(container, 'helpful');

    // Reset checkboxes
    reset_checkboxes();
  });

  // Submit action
  SUtility.addEvent(feedback_action_submit, 'click', () => {
    //add
    SUtility.addClass(container, 'thanks');
    SUtility.removeClass(container, 'not-helpful');
    SUtility.removeClass(container, 'helpful');

    // Reset checkboxes
    reset_checkboxes();
  });

  // Cancel action
  SUtility.addEvent(feedback_action_cancel, 'click', () => {
    // add
    SUtility.addClass(container, 'thanks');
    SUtility.removeClass(container, 'not-helpful');
    SUtility.removeClass(container, 'helpful');

    // Reset checkboxes
    reset_checkboxes();
  });

  // Get all checkboxes and verbatim feedback
  let checkboxes = container.querySelectorAll('.experience-option input'),
    verbatimFeedback = container.querySelector('#verbatimFeedback');

  // Enable submit action
  let submit_action = container.querySelector('[type="submit"]');
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
};
