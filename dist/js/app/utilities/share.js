('use strict');

// Utilities
import { SUtility } from './utility.js';

//    _____ _
//   / ____| |
//  | (___ | |__   __ _ _ __ ___
//   \___ \| '_ \ / _` | '__/ _ \
//   ____) | | | | (_| | | |  __/
//  |_____/|_| |_|\__,_|_|  \___|
//
//
// Share
export var share = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[data-share]'), (elem) => run(elem));
};

// Run
function run(elem) {
  let share_url = SUtility.attr(elem, 'data-share-url'),
    share_title = SUtility.attr(elem, 'data-share-title'),
    share_description = SUtility.attr(elem, 'data-share-description');

  // On click share action
  SUtility.addEvent(elem, 'click', () => {
    // Check if has URL
    if (!share_url) share_url = document.URL;

    // Check if has title
    if (!share_title) share_title = document.title;

    // Check if has description
    if (!share_description) {
      share_description = `Without technical experience and with ease, you can sell anywhere and anytime 
      with your online store and with your commercial identity`;

      if (document.querySelector('[itemprop=description]'))
        share_description = document.querySelector('[itemprop=description]').content;
      else if (document.querySelector('[name=description]'))
        share_description = document.querySelector('[name=description]').content;
    }

    // Open share dialog
    const shareData = {
      title: share_title,
      text: share_description,
      url: share_url,
    };

    navigator.share(shareData);
  });
}
