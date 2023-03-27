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
    form_input_pass = email_form_container.querySelector('#sign-in-pass'),
    form_input_pass_feedback = document.querySelector('[data-feedback-target="sign-in-pass"]'),
    feedback_empty = form_input_pass_feedback.querySelector('[data-feedback-empty]'),
    feedback_invalid = form_input_pass_feedback.querySelector('[data-feedback-invalid]'),
    state = 'empty';

  // Check if empty
  if (form_input_pass.value == '') {
    // Focus input
    form_input_pass.focus();
    form_input_pass.select();
    // Set validation focus
    SUtility.addClass(form_input_pass, 'is-invalid');

    // Set state
    state = 'empty';

    // Clear password feedback
    SUtility.each(form_input_pass_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
    // View current feedback
    SUtility.addClass(feedback_empty, 'active');
  } else {
    // Check if password is correct
    let pass_correct = false;
    // This an ajax request
    await fetch('../dist/temp/data.json')
      .then((response) => response.json())
      .then((json) => {
        if (json.find((element) => element.password == form_input_pass.value)) pass_correct = true;
      });

    // Password not correct
    if (!pass_correct) {
      // Focus input
      form_input_pass.focus();
      form_input_pass.select();
      // Set validation focus
      SUtility.addClass(form_input_pass, 'is-invalid');

      // Set state
      state = 'inValid';

      // Clear feedback
      SUtility.each(form_input_pass_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
      // View current feedback
      SUtility.addClass(feedback_invalid, 'active');
    } else {
      // Password is correct
      // Create new account and go to password page
      window.location.replace('./signin-account-email.html');

      // Clear state
      state = '';

      // Clear feedback
      SUtility.each(form_input_pass_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
    }
  }

  // Set feedback state
  SUtility.attr(form_input_pass_feedback, 'data-feedback', state);
};
