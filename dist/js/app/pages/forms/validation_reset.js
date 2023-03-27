('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   ______                                _ _     _       _   _
//  |  ____|                              | (_)   | |     | | (_)
//  | |__ ___  _ __ _ __ ___   __   ____ _| |_  __| | __ _| |_ _  ___  _ __
//  |  __/ _ \| '__| '_ ` _ \  \ \ / / _` | | |/ _` |/ _` | __| |/ _ \| '_ \
//  | | | (_) | |  | | | | | |  \ V / (_| | | | (_| | (_| | |_| | (_) | | | |
//  |_|  \___/|_|  |_| |_| |_|   \_/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|
//                     | |
//   _ __ ___  ___  ___| |_
//  | '__/ _ \/ __|/ _ \ __|
//  | | |  __/\__ \  __/ |_
//  |_|  \___||___/\___|\__|
//
//
// Form validation reset
export var validation_reset = function (forms_container) {
  var feedback_container = forms_container.querySelectorAll('[body] [data-feedback]');

  // - Reset
  SUtility.each(forms_container.querySelectorAll('.is-invalid'), (invalid) => {
    SUtility.removeClass(invalid, 'is-invalid');
  });

  // Clear feedback validation
  SUtility.each(feedback_container, (el) => {
    SUtility.attr(el, 'data-feedback', '');
    SUtility.each(el.children, (child) => {
      SUtility.removeClass(child, 'active');
    });
  });
};
