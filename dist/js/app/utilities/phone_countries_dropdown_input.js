('use strict');

// gsap@v3.10.4
// Local call (Server-side):               url => '../package/gsap/v3.10.4/gsap.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/intl-tel-input@v17.0.21-lOkEK29No4v06EsAYUYU/mode=imports,min/optimized/intl-tel-input.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/intl-tel-input@17.0.21'
import intlTelInput from '../../package/intl-tel-input/v17.0.21/intl-tel-input.min.js';

// Utilities
import { SUtility } from './utility.js';

//   _____  _                                              _        _
//  |  __ \| |                                            | |      (_)
//  | |__) | |__   ___  _ __   ___    ___ ___  _   _ _ __ | |_ _ __ _  ___  ___
//  |  ___/| '_ \ / _ \| '_ \ / _ \  / __/ _ \| | | | '_ \| __| '__| |/ _ \/ __|
//  | |    | | | | (_) | | | |  __/ | (_| (_) | |_| | | | | |_| |  | |  __/\__ \
//  |_|  _ |_| |_|\___/|_| |_|\___|  \___\___/ \__,_|_|_|_|\__|_|  |_|\___||___/
//      | |                   | |                     (_)                 | |
//    __| |_ __ ___  _ __   __| | _____      ___ __    _ _ __  _ __  _   _| |_
//   / _` | '__/ _ \| '_ \ / _` |/ _ \ \ /\ / / '_ \  | | '_ \| '_ \| | | | __|
//  | (_| | | | (_) | |_) | (_| | (_) \ V  V /| | | | | | | | | |_) | |_| | |_
//   \__,_|_|  \___/| .__/ \__,_|\___/ \_/\_/ |_| |_| |_|_| |_| .__/ \__,_|\__|
//                  | |                                       | |
//                  |_|                                       |_|
// Phone countries dropdown input
export var phone_countries_dropdown_input = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[data-form-phone]'), (elem) => run(elem));
};

// Run
function run(elem) {
  intlTelInput(elem, {
    autoHideDialCode: false,
    preferredCountries: ['eg', 'sa', 'ae', 'qa', 'ye', 'om', 'bh', 'kw', 'ma'],
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js',
  });
}
