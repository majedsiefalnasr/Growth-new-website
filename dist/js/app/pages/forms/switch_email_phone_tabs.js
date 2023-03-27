('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

// Enable form inputs
import { enable_inputs } from './enable_inputs.js';

// Disable form inputs
import { disable_inputs } from './disable_inputs.js';

// Form validation reset
import { validation_reset } from './validation_reset.js';

//    _____         _ _       _       _          _
//   / ____|       (_) |     | |     | |        | |
//  | (_____      ___| |_ ___| |__   | |__   ___| |___      _____  ___ _ __
//   \___ \ \ /\ / / | __/ __| '_ \  | '_ \ / _ \ __\ \ /\ / / _ \/ _ \ '_ \
//   ____) \ V  V /| | || (__| | | | | |_) |  __/ |_ \ V  V /  __/  __/ | | |
//  |_____/ \_/\_/ |_|\__\___|_| |_| |_.__/ \___|\__| \_/\_/ \___|\___|_| |_|
//  | |      | |
//  | |_ __ _| |__  ___
//  | __/ _` | '_ \/ __|
//  | || (_| | |_) \__ \
//   \__\__,_|_.__/|___/
//
//
// Switch between tabs ( Email / Phone number )
export var switch_email_phone_tabs = function (forms_container) {
  let form_body = forms_container.querySelector('[body]'),
    email_switcher = forms_container.querySelector('[body] > [data-action] [email]'),
    phone_switcher = forms_container.querySelector('[body] > [data-action] [phone]');

  // Email switcher click
  SUtility.addEvent(email_switcher, 'click', () => {
    // Change form type to email
    SUtility.attr(forms_container, 'data-target', 'email');

    // Disable
    // Form inputs
    disable_inputs(form_body);

    // Enable
    // Form inputs
    enable_inputs(forms_container.querySelector('[body] > .email'));

    // Reset validation
    validation_reset(forms_container);
  });

  // Phone switcher click
  SUtility.addEvent(phone_switcher, 'click', () => {
    // Change form type to email
    SUtility.attr(forms_container, 'data-target', 'phone');

    // Disable
    // Form inputs
    disable_inputs(form_body);

    // Enable
    // Form inputs
    enable_inputs(forms_container.querySelector('[body] > .phone'));

    // Reset validation
    validation_reset(forms_container);
  });
};
