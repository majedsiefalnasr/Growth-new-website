('use strict');

// Utilities
import { SUtility } from '../../../utilities/utility.js';

//    _____      _              _           _           _
//   / ____|    | |            | |         | |         | |
//  | |  __  ___| |_   ___  ___| | ___  ___| |_ ___  __| |
//  | | |_ |/ _ \ __| / __|/ _ \ |/ _ \/ __| __/ _ \/ _` |
//  | |__| |  __/ |_  \__ \  __/ |  __/ (__| ||  __/ (_| |
//   \_____|\___|\__| |___/\___|_|\___|\___|\__\___|\__,_|
//                       (_) |
//    ___ _ __ ___   __ _ _| |
//   / _ \ '_ ` _ \ / _` | | |
//  |  __/ | | | | | (_| | | |
//   \___|_| |_| |_|\__,_|_|_|
//
//
// Get selected email from prev step
export var selected_email = function (forms_container) {
  let selected_email_container = forms_container.querySelector('[data-selected-email]'),
    email_container = selected_email_container.querySelector('[data-email]'),
    change_action = selected_email_container.querySelector('[data-action]');

  // Set email
  // Get email from previous step

  // Change email action
  SUtility.addEvent(change_action, 'click', () =>
    // Back to previous step with current email
    window.location.replace('./signin-account.html')
  );
};
