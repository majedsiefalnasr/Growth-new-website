('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   _______          _
//  |__   __|        (_)
//     | | ___  _ __  _  ___   _ __   __ ___   __
//     | |/ _ \| '_ \| |/ __| | '_ \ / _` \ \ / /
//     | | (_) | |_) | | (__  | | | | (_| |\ V /
//     |_|\___/| .__/|_|\___| |_| |_|\__,_| \_/
//             | |
//             |_|
// // Toggle Topic nav links
export var topic_nav = function () {
  // Topic nav container
  let topic_nav_container = document.querySelector(
    '#help-center-topics-block .side--nav .topic--nav'
  );

  // Toggle action
  let toggle_action = topic_nav_container.querySelector('[links-toggler]'),
    toggle_links = topic_nav_container.querySelector('.links');

  SUtility.addEvent(toggle_action, 'click', () => {
    // Toggle action class
    SUtility.toggleClass(toggle_action, 'open');
    SUtility.toggleClass(toggle_links, 'open');
  });
};
