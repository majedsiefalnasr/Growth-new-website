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
//                    __ _                                _
//                   / _(_)                              | |
//    ___ ___  _ __ | |_ _ _ __ _ __ ___     ___ ___   __| | ___
//   / __/ _ \| '_ \|  _| | '__| '_ ` _ \   / __/ _ \ / _` |/ _ \
//  | (_| (_) | | | | | | | |  | | | | | | | (_| (_) | (_| |  __/
//   \___\___/|_| |_|_| |_|_|  |_| |_| |_|  \___\___/ \__,_|\___|
//
//
// Check form validation - confirm code
export var validation_confirm_code = async function (forms_container) {
  let phone_form_container = forms_container.querySelector('[body] > .phone'),
    form_input_phone_code_container = phone_form_container.querySelector('#sign-in-verify-code'),
    form_input_phone_code = form_input_phone_code_container.querySelectorAll('input.code'),
    form_input_phone_code_feedback = document.querySelector(
      '[data-feedback-target="sign-in-verify-code"]'
    ),
    feedback_empty = form_input_phone_code_feedback.querySelector('[data-feedback-empty]'),
    feedback_invalid = form_input_phone_code_feedback.querySelector('[data-feedback-invalid]'),
    state = 'empty';

  // Check if any input is empty
  let empty_code = false;
  SUtility.each(form_input_phone_code, (input) => {
    if (input.value == '') empty_code = true;
  });

  // If their is an empty input
  if (empty_code) {
    // Focus input
    form_input_phone_code[form_input_phone_code.length - 1].focus();
    form_input_phone_code[form_input_phone_code.length - 1].select();
    // Set validation focus
    SUtility.each(form_input_phone_code, (input) => {
      SUtility.addClass(input, 'is-invalid');
    });

    // Set state
    state = 'empty';

    // Clear feedback
    SUtility.each(form_input_phone_code_feedback.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
    // View current feedback
    SUtility.addClass(feedback_empty, 'active');
  } else {
    // Get verify code
    let verify_code = '';
    SUtility.each(form_input_phone_code, (input) => {
      verify_code += input.value;
    });

    // Check if correct
    let code_correct = false;
    // This an ajax request
    await fetch('../dist/temp/data.json')
      .then((response) => response.json())
      .then((json) => {
        if (json.find((element) => element.verifyCode == verify_code)) code_correct = true;
      });

    if (!code_correct) {
      // Focus input
      form_input_phone_code[0].focus();
      form_input_phone_code[0].select();
      // Set validation focus
      SUtility.each(form_input_phone_code, (input) => {
        SUtility.addClass(input, 'is-invalid');
      });

      // Set state
      state = 'invalid';

      // Clear feedback
      SUtility.each(form_input_phone_code_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
      // View current feedback
      SUtility.addClass(feedback_invalid, 'active');
    } else {
      // Verify code is correct
      // Create new account and go to check code page
      window.location.replace('./create-account-phone.html');
      // Clear state
      state = '';
      // Clear feedback
      SUtility.each(form_input_phone_code_feedback.children, (child) => {
        SUtility.removeClass(child, 'active');
      });
    }
  }

  // Set feedback state
  SUtility.attr(form_input_phone_code_feedback, 'data-feedback', state);
};
