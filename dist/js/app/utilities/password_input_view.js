('use strict');

// Utilities
import { SUtility } from './utility.js';

//   _____                                    _   _                   _
//  |  __ \                                  | | (_)                 | |
//  | |__) |_ _ ___ _____      _____  _ __ __| |  _ _ __  _ __  _   _| |_
//  |  ___/ _` / __/ __\ \ /\ / / _ \| '__/ _` | | | '_ \| '_ \| | | | __|
//  | |  | (_| \__ \__ \\ V  V / (_) | | | (_| | | | | | | |_) | |_| | |_
//  |_|   \__,_|___/___/ \_/\_/ \___/|_|  \__,_| |_|_| |_| .__/ \__,_|\__|
//        (_)                                            | |
//  __   ___  _____      __                              |_|
//  \ \ / / |/ _ \ \ /\ / /
//   \ V /| |  __/\ V  V /
//    \_/ |_|\___| \_/\_/
//
//
// Password input view
export var password_input_view = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[data-form-pass]'), (elem) => run(elem));
};

// Run
function run(elem) {
  let pass_el_input = elem.querySelector('input'),
    pass_el_toggler = elem.querySelector('.show-pass em'),
    pass_el_related = document.querySelector(
      '#' + SUtility.attr(elem, 'data-form-pass-related') + ''
    ),
    state = false;

  // Toggler action on click
  SUtility.addEvent(pass_el_toggler, 'click', () => {
    // Check if password is shown
    if (state) {
      // Hide password
      pass_el_input.setAttribute('type', 'password');
      SUtility.addClass(pass_el_toggler, 'ph-icon-eye');
      SUtility.removeClass(pass_el_toggler, 'ph-icon-eyeslash');
      state = false;

      // Hide related password if exist
      if (pass_el_related) pass_el_related.setAttribute('type', 'password');
    } else {
      // View password
      pass_el_input.setAttribute('type', 'text');
      SUtility.addClass(pass_el_toggler, 'ph-icon-eyeslash');
      SUtility.removeClass(pass_el_toggler, 'ph-icon-eye');
      state = true;

      // View related password if exist
      pass_el_related && pass_el_related.setAttribute('type', 'text');
    }
  });
}
