('use strict');

// Utilities
import { SUtility } from './utilities/utility.js';

//   _____           _                                                   _
//  |  __ \         | |                                                 | |
//  | |__) |___  ___| |_ ___  _ __ ___    __ _  ___ ___ ___  _   _ _ __ | |_
//  |  _  // _ \/ __| __/ _ \| '__/ _ \  / _` |/ __/ __/ _ \| | | | '_ \| __|
//  | | \ \  __/\__ \ || (_) | | |  __/ | (_| | (_| (_| (_) | |_| | | | | |_
//  |_|  \_\___||___/\__\___/|_|  \___|  \__,_|\___\___\___/ \__,_|_| |_|\__|
//
//
// Restore account
export var restore_account = function () {
  // Get parallax container
  var container = document.querySelector('#forms-block [form] [restore]');

  // Check if target is exist
  if (!container) return;

  // Run navigator
  navigator(SUtility.attr(container, 'data-restore'), container);

  /////////////////////////////////////////
  // Helpers
  /////////////////////////////////////////
  // Navigator
  function navigator(type, container) {
    switch (type) {
      case 'main':
        navigator_main(container);
        break;

      case 'email':
        navigator_email(container);
        break;

      case 'identity questions':
        navigator_identity_questions(container);
        break;

      case 'reset password':
        navigator_reset_password(container);
        break;

      default:
        break;
    }
  }

  // Navigator main
  function navigator_main(container) {
    // Get options
    var restore_options = container.querySelectorAll('[name="restore-main"]');

    // Check options exist
    if (!restore_options) return;

    // Get actions
    let submit_action = container.querySelector('#buttonRestoreSubmit'),
      cancel_action = container.querySelector('#buttonRestoreCancel');

    // Submit action
    SUtility.addEvent(submit_action, 'click', () => {
      // Get active option
      let active_option;
      SUtility.each(restore_options, (option) => {
        if (option.checked) active_option = option;
      });

      // Get restore data option
      let data_restore_option = SUtility.attr(active_option, 'data-restore-option');

      // Check data restore option
      if (data_restore_option == 'email') window.location.href = './restore-account-email.html';
      if (data_restore_option == 'phone')
        window.location.href = './restore-account-identity-questions.html';
    });

    // Cancel action
    SUtility.addEvent(cancel_action, 'click', () => {
      // Navigate to Home page
      // console.log(window.location.origin);
      // console.log(window.location.host);
      // console.log(window.location.pathname);
      // console.log(window.location.pathname.split('/'));
      window.location.href = window.location.origin;
    });
  }

  // Navigator email
  function navigator_email(container) {
    // Get options
    var restore_options = container.querySelectorAll('[name="restore-email"]');

    // Check options exist
    if (!restore_options) return;

    // Get actions
    let submit_action = container.querySelector('#buttonRestoreSubmit'),
      back_action = container.querySelector('#buttonRestoreBack');

    // Submit action
    SUtility.addEvent(submit_action, 'click', () => {
      // Get active option
      let active_option;
      SUtility.each(restore_options, (option) => {
        if (option.checked) active_option = option;
      });

      // Get restore data option
      let data_restore_option = SUtility.attr(active_option, 'data-restore-option');

      // Check data restore option
      if (data_restore_option == 'email-access')
        window.location.href = './restore-account-identity-questions.html';
      if (data_restore_option == 'email-password')
        window.location.href = './restore-account-password.html';
    });

    // Back action
    SUtility.addEvent(back_action, 'click', () => {
      // Navigate to back
      window.location.href = './restore-account.html';
    });
  }

  // Navigator identity questions
  function navigator_identity_questions(container) {
    // Get questions
    var restore_questions = container.querySelectorAll('.restore-questions-list input');

    // Check questions exist
    if (!restore_questions) return;

    // Get actions
    let submit_action = container.querySelector('#buttonRestoreSubmit'),
      back_action = container.querySelector('#buttonRestoreBack');

    // Alert
    let alert_container = container.querySelector('.restore-questions-list .alert'),
      alert_number = container.querySelector('.restore-questions-list .alert [value]'),
      alert_value = 3;

    // Submit action
    SUtility.addEvent(submit_action, 'click', () => {
      // Check if alert enabled
      if (alert_value <= 0) {
        // Disable submit action
        SUtility.attr(submit_action, 'disabled', '');
        alert_number.innerHTML = alert_value;
        return;
      }

      // Get all inputs
      let q1 = container.querySelector('#restore-questions-1'),
        q1_feedback = container.querySelector('[data-feedback-target="restore-questions-1"]'),
        q2 = container.querySelector('#restore-questions-2'),
        q2_feedback = container.querySelector('[data-feedback-target="restore-questions-2"]'),
        q3 = container.querySelector('#restore-questions-3'),
        q3_feedback = container.querySelector('[data-feedback-target="restore-questions-3"]');

      // Check feedback
      // Q1
      if (q1.value == '') {
        SUtility.addClass(q1, 'is-invalid');
        SUtility.attr(q1_feedback, 'data-feedback', 'empty');
      } else {
        SUtility.removeClass(q1, 'is-invalid');
        SUtility.attr(q1_feedback, 'data-feedback', '');
      }
      // Q2
      if (q2.value == '') {
        SUtility.addClass(q2, 'is-invalid');
        SUtility.attr(q2_feedback, 'data-feedback', 'empty');
      } else {
        SUtility.removeClass(q2, 'is-invalid');
        SUtility.attr(q2_feedback, 'data-feedback', '');
      }
      // Q3
      if (q3.value == '') {
        SUtility.addClass(q3, 'is-invalid');
        SUtility.attr(q3_feedback, 'data-feedback', 'empty');
      } else {
        SUtility.removeClass(q3, 'is-invalid');
        SUtility.attr(q3_feedback, 'data-feedback', '');
      }

      // Focus input on error
      if (q1.value == '') q1.focus();
      else if (q2.value == '') q2.focus();
      else if (q3.value == '') q3.focus();

      // Check data restore option
      if (q1.value != '' && q2.value != '' && q3.value != '') {
        // This an ajax request
        fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            // Check question values
            if (
              json.find((element) => element.QUESTIONS.Q1 == q1.value) &&
              json.find((element) => element.QUESTIONS.Q2 == q2.value) &&
              json.find((element) => element.QUESTIONS.Q3 == q3.value)
            )
              window.location.href = './restore-account-new-signin.html';
            else {
              // View alert
              SUtility.removeClass(alert_container, 'd-none');
              // Set alert number
              alert_number.innerHTML = alert_value;
              alert_value--;

              // Select first input
              q1.select();

              // Set invalid to inputs
              SUtility.addClass(q1, 'is-invalid');
              SUtility.addClass(q2, 'is-invalid');
              SUtility.addClass(q3, 'is-invalid');
            }
          });
      }
    });

    // Back action
    SUtility.addEvent(back_action, 'click', () => {
      // Navigate to back
      window.location.href = './restore-account-email.html';
    });
  }

  // Navigator reset password
  function navigator_reset_password(container) {
    // Get questions
    var restore_reset_password = container.querySelector('.restore-pass-code');

    // Check questions exist
    if (!restore_reset_password) return;

    // Get actions
    let submit_action = container.querySelector('#buttonRestoreSubmit'),
      back_action = container.querySelector('#buttonRestoreBack');

    // Countdown Timer helper
    countdown_timer(container.querySelector('[countdown-timer]'));

    // Verify code helper
    verify_code_helper(container);

    // Submit action
    SUtility.addEvent(submit_action, 'click', () => {
      let restore_account_pass_code_container = container.querySelector(
          '#restore-account-pass-verify-code'
        ),
        restore_account_pass_code =
          restore_account_pass_code_container.querySelectorAll('input.code'),
        restore_account_pass_code_feedback = document.querySelector(
          '[data-feedback-target="restore-account-pass-verify-code"]'
        ),
        feedback_empty = restore_account_pass_code_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid =
          restore_account_pass_code_feedback.querySelector('[data-feedback-invalid]'),
        state = 'empty';

      // Check if any input is empty
      let empty_code = false;
      SUtility.each(restore_account_pass_code, (input) => {
        if (input.value == '') empty_code = true;
      });

      // If their is an empty input
      if (empty_code) {
        // Focus input
        restore_account_pass_code[restore_account_pass_code.length - 1].focus();
        restore_account_pass_code[restore_account_pass_code.length - 1].select();
        // Set validation focus
        SUtility.each(restore_account_pass_code, (input) => {
          SUtility.addClass(input, 'is-invalid');
        });

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(restore_account_pass_code_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      } else {
        // Get verify code
        let verify_code = '';
        SUtility.each(restore_account_pass_code, (input) => {
          verify_code += input.value;
        });

        // Check if correct
        let code_correct = false;
        // This an ajax request
        fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.verifyCode == verify_code)) code_correct = true;

            console.log(code_correct);

            if (!code_correct) {
              console.log(code_correct);

              // Focus input
              restore_account_pass_code[0].focus();
              restore_account_pass_code[0].select();
              // Set validation focus
              SUtility.each(restore_account_pass_code, (input) => {
                SUtility.addClass(input, 'is-invalid');
              });

              // Set state
              state = 'invalid';

              // Clear feedback
              SUtility.each(restore_account_pass_code_feedback.children, (child) => {
                SUtility.removeClass(child, 'active');
              });
              // View current feedback
              SUtility.addClass(feedback_invalid, 'active');
            } else {
              // Verify code is correct
              // Create new account and go to check code page
              window.location.replace('./restore-account-password-set.html');
              // Clear state
              state = '';
              // Clear feedback
              SUtility.each(restore_account_pass_code_feedback.children, (child) => {
                SUtility.removeClass(child, 'active');
              });
            }
          });
      }

      // Set feedback state
      SUtility.attr(restore_account_pass_code_feedback, 'data-feedback', state);
    });

    // Back action
    SUtility.addEvent(back_action, 'click', () => {
      // Navigate to back
      window.location.href = './restore-account-email.html';
    });
  }
};
