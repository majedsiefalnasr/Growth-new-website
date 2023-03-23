('use strict');

// Utilities
import { SUtility } from '../utilities/utility.js';

//                  _                 _   _
//      /\         (_)               | | (_)
//     /  \   _ __  _ _ __ ___   __ _| |_ _  ___  _ __
//    / /\ \ | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \
//   / ____ \| | | | | | | | | | (_| | |_| | (_) | | | |
//  /_/    \_\_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_|
//                                   | | |
//    ___  _ __    ___  ___ _ __ ___ | | |
//   / _ \| '_ \  / __|/ __| '__/ _ \| | |
//  | (_) | | | | \__ \ (__| | | (_) | | |
//   \___/|_| |_| |___/\___|_|  \___/|_|_|
//
//
// Animation on scroll
export var animation_on_scroll = function () {
  // Get all AOS elements
  let aos_list = document.querySelectorAll('[data-scrolled-into-view]');

  SUtility.each(aos_list, function (target) {
    // Run once
    animation_on_scroll_run(target);

    // Scroll
    let scrollEvent = document.addEventListener('scroll', (event) => {
      // Run on scroll
      animation_on_scroll_run(target);
    });

    // Resize
    let resizeEvent = document.addEventListener('resize', (event) => {
      // Run on window resize
      animation_on_scroll_run(target);
    });
  });
};

// Run
function animation_on_scroll_run(target) {
  if (
    SUtility.isPartInViewport(target) &&
    SUtility.attr(target, 'data-scrolled-into-view') == 'false'
  )
    SUtility.attr(target, 'data-scrolled-into-view', 'true'),
      SUtility.attr(target, 'data-has-intersected', 'true');

  if (SUtility.attr(target, 'data-scrolled-into-view') == 'false')
    SUtility.attr(target, 'data-has-intersected', 'false');

  if (SUtility.hasAttr(target, 'data-scrolled-past-view'))
    if (window.scrollY > target.offsetTop + target.offsetHeight)
      SUtility.attr(target, 'data-scrolled-past-view', 'true');
    else SUtility.attr(target, 'data-scrolled-past-view', 'false');
}
