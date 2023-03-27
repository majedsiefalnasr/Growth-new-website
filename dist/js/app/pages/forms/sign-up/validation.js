('use strict');

// Utilities
import { SUtility } from '../../../utilities/utility.js';

// Validation email
import { validation_email } from './validation_email.js';

// Validation password
import { validation_password } from './validation_password.js';

// Validation phone
import { validation_phone } from './validation_phone.js';

// Validation confirm code
import { validation_confirm_code } from './validation_confirm_code.js';

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
//
//
// Check form validation
export var validation = async function (forms_container) {
  SUtility.addEvent(forms_container, 'submit', () => {
    // For test purpose
    // Prevent submit default for test purpose
    event.preventDefault();
    event.stopPropagation();

    // Check validation
    let data_target = SUtility.attr(forms_container, 'data-target');

    // Email
    data_target == 'email' && validation_email(forms_container);

    // Password
    data_target == 'password' && validation_password(forms_container);

    // Phone
    data_target == 'phone' && validation_phone(forms_container);

    // Phone verify code
    data_target == 'confirm-code' && validation_confirm_code(forms_container);
  });
};
