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
//        | |
//   _ __ | |__   ___  _ __   ___
//  | '_ \| '_ \ / _ \| '_ \ / _ \
//  | |_) | | | | (_) | | | |  __/
//  | .__/|_| |_|\___/|_| |_|\___|
//  | |
//  |_|
// Check form validation - phone
export var validation_phone = async function (forms_container) {
  let phone_form_container = forms_container.querySelector('[body] > .phone'),
    form_input_phone = phone_form_container.querySelector('#sign-up-phone'),
    form_input_phone_feedback = document.querySelector('[data-feedback-target="sign-up-phone"]'),
    feedback_empty = form_input_phone_feedback.querySelector('[data-feedback-empty]'),
    feedback_invalid = form_input_phone_feedback.querySelector('[data-feedback-invalid]'),
    feedback_used = form_input_phone_feedback.querySelector('[data-feedback-used]'),
    state = 'empty';

  // Get instance of phone input
  var iti = window.intlTelInputGlobals.getInstance(form_input_phone);

  // Check if empty
  if (iti.getNumber() == '') {
    // Focus input
    form_input_phone.focus();
    form_input_phone.select();
    // Set validation focus
    SUtility.addClass(form_input_phone, 'is-invalid');

    // Set state
    state = 'empty';

    // Clear feedback
    SUtility.each(form_input_phone_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
    // View current feedback
    SUtility.addClass(feedback_empty, 'active');
  }
  // Check if valid
  else if (!iti.isValidNumber()) {
    // Focus input
    form_input_phone.focus();
    form_input_phone.select();
    // Set validation focus
    SUtility.addClass(form_input_phone, 'is-invalid');

    // Set state
    state = 'inValid';

    // Clear feedback
    SUtility.each(form_input_phone_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
    // View current feedback
    SUtility.addClass(feedback_invalid, 'active');
  } else {
    // Check if used
    let phone_used = false;
    // This an ajax request
    await fetch('../dist/temp/data.json')
      .then((response) => response.json())
      .then((json) => {
        if (json.find((element) => element.phone == iti.getNumber())) phone_used = true;
      });

    // Phone already used
    if (phone_used) {
      // Focus input
      form_input_phone.focus();
      form_input_phone.select();
      // Set validation focus
      SUtility.addClass(form_input_phone, 'is-invalid');

      // Set state
      state = 'used';

      // Clear feedback
      SUtility.each(form_input_phone_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
      // View current feedback
      SUtility.addClass(feedback_used, 'active');
    } else {
      // Phone not used
      // Create new account and go to check code page
      window.location.replace('./create-account-phone.html');

      // Clear state
      state = '';

      // Clear feedback
      SUtility.each(form_input_phone_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
    }
  }

  // Set feedback state
  SUtility.attr(form_input_phone_feedback, 'data-feedback', state);
};
