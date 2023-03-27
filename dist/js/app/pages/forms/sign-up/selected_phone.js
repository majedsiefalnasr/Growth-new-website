('use strict');

// Utilities
import { SUtility } from '../../../utilities/utility.js';

//    _____      _              _           _           _
//   / ____|    | |            | |         | |         | |
//  | |  __  ___| |_   ___  ___| | ___  ___| |_ ___  __| |
//  | | |_ |/ _ \ __| / __|/ _ \ |/ _ \/ __| __/ _ \/ _` |
//  | |__| |  __/ |_  \__ \  __/ |  __/ (__| ||  __/ (_| |
//   \_____|\___|\__| |___/\___|_|\___|\___|\__\___|\__,_|
//        | |
//   _ __ | |__   ___  _ __   ___
//  | '_ \| '_ \ / _ \| '_ \ / _ \
//  | |_) | | | | (_) | | | |  __/
//  | .__/|_| |_|\___/|_| |_|\___|
//  | |
//  |_|
// Get selected phone from prev step
export var selected_phone = function (forms_container) {
  let selected_phone_container = forms_container.querySelector('[data-selected-phone]'),
    phone_container = selected_phone_container.querySelector('[data-email]'),
    change_action = selected_phone_container.querySelector('[data-action]');

  // Set phone
  // Get phone from previous step

  // Change phone action
  SUtility.addEvent(change_action, 'click', () =>
    // Back to previous step with current email
    window.location.replace('./create-account.html')
  );
};
