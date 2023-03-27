('use strict');

// Utilities
import { SUtility } from '../../../utilities/utility.js';

//   _   _             _             _
//  | \ | |           (_)           | |
//  |  \| | __ ___   ___  __ _  __ _| |_ ___  _ __
//  | . ` |/ _` \ \ / / |/ _` |/ _` | __/ _ \| '__|
//  | |\  | (_| |\ V /| | (_| | (_| | || (_) | |
//  |_| \_|\__,_| \_/ |_|\__, |\__,_|\__\___/|_|
//                        __/ |
//                       |___/
// Navigator
export var navigator = function (container) {
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
    SUtility.each(restore_options, (option) => option.checked && (active_option = option));

    // Get restore data option
    let data_restore_option = SUtility.attr(active_option, 'data-restore-option');

    // Check data restore option
    data_restore_option == 'email' && (window.location.href = './restore-account-email.html');
    data_restore_option == 'phone' &&
      (window.location.href = './restore-account-identity-questions.html');
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
};
