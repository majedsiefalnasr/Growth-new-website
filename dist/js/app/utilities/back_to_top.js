('use strict');

// Utilities
import { SUtility } from './utility.js';

//   ____             _      _          _
//  |  _ \           | |    | |        | |
//  | |_) | __ _  ___| | __ | |_ ___   | |_ ___  _ __
//  |  _ < / _` |/ __| |/ / | __/ _ \  | __/ _ \| '_ \
//  | |_) | (_| | (__|   <  | || (_) | | || (_) | |_) |
//  |____/ \__,_|\___|_|\_\  \__\___/   \__\___/| .__/
//                                              | |
//                                              |_|
// Back to top
export var back_to_top = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[data-to-top]'), (elem) => run(elem));
};

// Run
function run(elem) {
  // On click back to top action
  SUtility.addEvent(elem, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
