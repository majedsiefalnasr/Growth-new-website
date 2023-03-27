('use strict');

// Utilities
import { SUtility } from './utility.js';

//  __      __       _  __               _                                      _
//  \ \    / /      (_)/ _|             | |                                    | |
//   \ \  / /__ _ __ _| |_ _   _   _ __ | |__   ___  _ __   ___    ___ ___   __| | ___
//    \ \/ / _ \ '__| |  _| | | | | '_ \| '_ \ / _ \| '_ \ / _ \  / __/ _ \ / _` |/ _ \
//     \  /  __/ |  | | | | |_| | | |_) | | | | (_) | | | |  __/ | (_| (_) | (_| |  __/
//      \/ \___|_|  |_|_|  \__, | | .__/|_| |_|\___/|_| |_|\___|  \___\___/ \__,_|\___|
//                          __/ | | |
//                         |___/  |_|
// Verify phone code
export var verify_phone_code = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[verify-code]'), (elem) => run(elem));
};

// Run
function run(elem) {
  // Loop all inputs
  let verify_code_list = elem.querySelectorAll('input.code');

  SUtility.each(verify_code_list, (input, index) => {
    // Change focus to first empty input
    input.addEventListener('focusin', () => {
      if (input.value == '')
        if (verify_code_list[index - 1] && verify_code_list[index - 1].value == '')
          verify_code_list[index - 1].focus();
    });

    // Change focus on keydown
    input.addEventListener('keydown', (e) => {
      if (e.key >= 0 && e.key <= 9) {
        input.value = '';
        if (verify_code_list[index + 1])
          setTimeout(() => {
            verify_code_list[index + 1].focus();
          }, 10);
      } else if (e.key === 'Backspace') {
        input.value = '';
        if (verify_code_list[index - 1])
          setTimeout(() => {
            verify_code_list[index - 1].focus();
          }, 10);
      }
    });
  });
}
