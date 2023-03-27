('use strict');

// Utilities
import { SUtility } from '../../../utilities/utility.js';

//    _____ _               _       __
//   / ____| |             | |     / _|
//  | |    | |__   ___  ___| | __ | |_ ___  _ __ _ __ ___
//  | |    | '_ \ / _ \/ __| |/ / |  _/ _ \| '__| '_ ` _ \
//  | |____| | | |  __/ (__|   <  | || (_) | |  | | | | | |
//   \_____|_| |_|\___|\___|_|\_\ |_| \___/|_|  |_| |_| |_|
//             | (_)   | |     | | (_)
//  __   ____ _| |_  __| | __ _| |_ _  ___  _ __
//  \ \ / / _` | | |/ _` |/ _` | __| |/ _ \| '_ \
//   \ V / (_| | | | (_| | (_| | |_| | (_) | | | |
//    \_/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|
//                       (_) |
//    ___ _ __ ___   __ _ _| |
//   / _ \ '_ ` _ \ / _` | | |
//  |  __/ | | | | | (_| | | |
//   \___|_| |_| |_|\__,_|_|_|
//
//
// Check form validation - email
export var validation_email = async function (forms_container) {
  let email_form_container = forms_container.querySelector('[body] > .email'),
    form_input_email = email_form_container.querySelector('#sign-up-email'),
    form_input_email_feedback = document.querySelector('[data-feedback-target="sign-up-email"]'),
    feedback_empty = form_input_email_feedback.querySelector('[data-feedback-empty]'),
    feedback_invalid = form_input_email_feedback.querySelector('[data-feedback-invalid]'),
    feedback_used = form_input_email_feedback.querySelector('[data-feedback-used]'),
    state = 'empty';

  // Check if empty
  if (form_input_email.value == '') {
    // Focus input
    form_input_email.focus();
    form_input_email.select();
    // Set validation focus
    SUtility.addClass(form_input_email, 'is-invalid');

    // Set state
    state = 'empty';

    // Clear feedback
    SUtility.each(form_input_email_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
    // View current feedback
    SUtility.addClass(feedback_empty, 'active');
  }
  // Check if valid
  else if (!form_input_email.checkValidity()) {
    // Focus input
    form_input_email.focus();
    form_input_email.select();
    // Set validation focus
    SUtility.addClass(form_input_email, 'is-invalid');

    // Set state
    state = 'inValid';

    // Clear feedback
    SUtility.each(form_input_email_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
    // View current feedback
    SUtility.addClass(feedback_invalid, 'active');
  } else {
    // Check if used
    let email_used = false;
    // This an ajax request
    await fetch('../dist/temp/data.json')
      .then((response) => response.json())
      .then((json) => {
        if (json.find((element) => element.email == form_input_email.value)) email_used = true;
      });

    // Email already used
    if (email_used) {
      // Focus input
      form_input_email.focus();
      form_input_email.select();
      // Set validation focus
      SUtility.addClass(form_input_email, 'is-invalid');

      // Set state
      state = 'used';

      // Clear feedback
      SUtility.each(form_input_email_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
      // View current feedback
      SUtility.addClass(feedback_used, 'active');
    } else {
      // Email not used
      // Create new account and go to password page
      window.location.replace('./create-account-email.html');

      // Clear state
      state = '';

      // Clear feedback
      SUtility.each(form_input_email_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
    }
  }

  // Set feedback state
  SUtility.attr(form_input_email_feedback, 'data-feedback', state);
};
