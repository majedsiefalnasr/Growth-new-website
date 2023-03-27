('use strict');

// Utilities
import { SUtility } from '../../../utilities/utility.js';

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
  var container = document.querySelector('[form] [restore]'),
    type = SUtility.attr(container, 'data-restore');

  // Navigator main
  if (type == 'main')
    // Load if required
    import('./navigator.js')
      .then(({ navigator }) => navigator(container))
      .catch((err) => console.log('error:', err));
  else if (type == 'email')
    // Load if required
    import('./navigator_email.js')
      .then(({ navigator_email }) => navigator_email(container))
      .catch((err) => console.log('error:', err));
  else if (type == 'identity questions')
    // Load if required
    import('./navigator_identity_questions.js')
      .then(({ navigator_identity_questions }) => navigator_identity_questions(container))
      .catch((err) => console.log('error:', err));
  else if (type == 'reset password')
    // Load if required
    import('./navigator_reset_password.js')
      .then(({ navigator_reset_password }) => navigator_reset_password(container))
      .catch((err) => console.log('error:', err));

  // Countdown Timer
  // Load script only on needed
  document.querySelector('[countdown-timer]') &&
    import('../../../utilities/countdown_timer.js')
      .then(({ countdown_timer }) =>
        countdown_timer(document.querySelector('[countdown-timer]'), () => {
          // Enable actions
          SUtility.removeAttr(document.querySelector('[data-action="SMS"]'), 'disabled'),
            SUtility.removeAttr(document.querySelector('[data-action="whatsapp"]'), 'disabled');
        })
      )
      .catch((err) => console.log('error:', err));
};
