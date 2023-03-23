('use strict');

// anchor-js@5.0.0
// Local call (Server-side):               url => '../../../package/anchor-js/v5.0.0/anchor-js.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/anchor-js@v5.0.0-VZQeJffaUjbur2OF7ZcB/mode=imports,min/optimized/anchor-js.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/anchor-js@5.0.0'
import AnchorJS from '../../../package/anchor-js/v5.0.0/anchor-js.min.js';

//                       _                    _  _____
//      /\              | |                  | |/ ____|
//     /  \   _ __   ___| |__   ___  _ __    | | (___
//    / /\ \ | '_ \ / __| '_ \ / _ \| '__|   | |\___ \
//   / ____ \| | | | (__| | | | (_) | | | |__| |____) |
//  /_/    \_\_| |_|\___|_| |_|\___/|_|  \____/|_____/
//
//
// AnchorJS
export var anchors = function () {
  // Instance
  const anchors = new AnchorJS();

  // Set options
  anchors.options = {
    placement: 'right',
  };

  // Init anchor
  anchors.add('#blog-block .blog--content h2:not(.no-anchor)');
  anchors.add('#blog-block .blog--content h3:not(.no-anchor)');
  anchors.add('#blog-block .blog--content h4:not(.no-anchor)');
};
