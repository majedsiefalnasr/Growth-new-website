('use strict');

// Utilities
import { SUtility } from '../utility.js';

//  __      __       _  __                       _
//  \ \    / /      (_)/ _|                     | |
//   \ \  / /__ _ __ _| |_ _   _    ___ ___   __| | ___
//    \ \/ / _ \ '__| |  _| | | |  / __/ _ \ / _` |/ _ \
//     \  /  __/ |  | | | | |_| | | (_| (_) | (_| |  __/
//   _  \/ \___|_|  |_|_|  \__, |  \___\___/ \__,_|\___|
//  | |        | |          __/ |
//  | |__   ___| |_ __   __|___/_
//  | '_ \ / _ \ | '_ \ / _ \ '__|
//  | | | |  __/ | |_) |  __/ |
//  |_| |_|\___|_| .__/ \___|_|
//               | |
//               |_|
// Verify code helper
export var verify_code_helper = function (container) {
  let verify_code_container = container.querySelector('[verify-code]');

  // Check if required
  if (!verify_code_container) return;

  // Loop all inputs
  let verify_code_list = verify_code_container.querySelectorAll('input.code');
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
};
