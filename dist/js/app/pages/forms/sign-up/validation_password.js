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
//                                            | |
//   _ __   __ _ ___ _____      _____  _ __ __| |
//  | '_ \ / _` / __/ __\ \ /\ / / _ \| '__/ _` |
//  | |_) | (_| \__ \__ \\ V  V / (_) | | | (_| |
//  | .__/ \__,_|___/___/ \_/\_/ \___/|_|  \__,_|
//  | |
//  |_|
// Check form validation - password
export var validation_password = async function (forms_container) {
  let email_form_container = forms_container.querySelector('[body] > .email'),
    form_input_pass = email_form_container.querySelector('#sign-up-pass'),
    form_input_pass_feedback = document.querySelector('[data-feedback-target="sign-up-pass"]'),
    pass_feedback_empty = form_input_pass_feedback.querySelector('[data-feedback-empty]'),
    pass_state = 'empty',
    form_input_repass = email_form_container.querySelector('#sign-up-pass-repeat'),
    form_input_repass_feedback = document.querySelector(
      '[data-feedback-target="sign-up-pass-repeat"]'
    ),
    repass_feedback_empty = form_input_repass_feedback.querySelector('[data-feedback-empty]'),
    repass_feedback_invalid = form_input_repass_feedback.querySelector('[data-feedback-invalid]'),
    repass_state = 'empty';

  // Check if empty
  if (form_input_pass.value == '') {
    // Focus input
    form_input_pass.focus();
    form_input_pass.select();
    // Set validation focus
    SUtility.addClass(form_input_pass, 'is-invalid');

    // Set state
    pass_state = 'empty';

    // Clear password feedback
    SUtility.each(form_input_pass_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
    // View current feedback
    SUtility.addClass(pass_feedback_empty, 'active');

    // Clear password repeat input
    SUtility.each(form_input_repass_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
  } else {
    // Clear password feedback
    SUtility.each(form_input_pass_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });

    // Set state
    pass_state = '';

    // Check if password repeat is empty
    if (form_input_repass.value == '') {
      // Focus input
      form_input_repass.focus();
      form_input_repass.select();
      // Set validation focus
      SUtility.removeClass(form_input_pass, 'is-invalid');
      SUtility.addClass(form_input_repass, 'is-invalid');

      // Set state
      repass_state = 'empty';

      // Clear password feedback
      SUtility.each(form_input_repass_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
      // View current feedback
      SUtility.addClass(repass_feedback_empty, 'active');
    }
    // Check if password and password repeat is equal
    else if (form_input_pass.value != form_input_repass.value) {
      // Focus input
      form_input_repass.focus();
      form_input_repass.select();
      // Set validation focus
      SUtility.removeClass(form_input_pass, 'is-invalid');
      SUtility.addClass(form_input_repass, 'is-invalid');

      // Set state
      repass_state = 'invalid';

      // Clear password feedback
      SUtility.each(form_input_repass_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
      // View current feedback
      SUtility.addClass(repass_feedback_invalid, 'active');
    } else {
      // Email not used
      // Create new account and go to password page
      window.location.replace('./create-account-email.html');

      // Clear state
      repass_state = '';

      // Clear password feedback
      SUtility.each(form_input_repass_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
    }
  }

  // Set feedback state
  SUtility.attr(form_input_pass_feedback, 'data-feedback', pass_state);
  SUtility.attr(form_input_repass_feedback, 'data-feedback', repass_state);
};
