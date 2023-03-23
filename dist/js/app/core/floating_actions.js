('use strict');

// Share
import { share } from '../utilities/share.js';

// Back to top
import { back_to_top } from '../utilities/back_to_top.js';

//   ______ _             _   _                            _   _
//  |  ____| |           | | (_)                 /\       | | (_)
//  | |__  | | ___   __ _| |_ _ _ __   __ _     /  \   ___| |_ _  ___  _ __  ___
//  |  __| | |/ _ \ / _` | __| | '_ \ / _` |   / /\ \ / __| __| |/ _ \| '_ \/ __|
//  | |    | | (_) | (_| | |_| | | | | (_| |  / ____ \ (__| |_| | (_) | | | \__ \
//  |_|    |_|\___/ \__,_|\__|_|_| |_|\__, | /_/    \_\___|\__|_|\___/|_| |_|___/
//                                     __/ |
//                                    |___/
// Floating Actions
export var floating_actions = function () {
  // Get floating container
  var container = document.querySelector('#floating-actions');

  var backToTop_target = container.querySelector('.back-to-top'),
    share_target = container.querySelector('.share');

  // Run once for view or hide Floating Actions
  view_hide_action(container);

  // Hide Floating Actions scroll to top ov view
  window.addEventListener('scroll', function () {
    view_hide_action(container);
  });

  // On click share action
  share(share_target);

  // On click back to top action
  back_to_top(backToTop_target);
};

// View or hide Floating Actions
function view_hide_action(target) {
  window.pageYOffset > 100 ? target.classList.add('view') : target.classList.remove('view');
}
