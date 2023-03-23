('use strict');

// HC_Sticky
// Local call (Server-side):               url => '../package/hc-sticky/v2.2.7/hc-sticky.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/hc-sticky@v2.2.7-Y37aJxkOArCqYFM6jzrT/mode=imports,min/optimized/hc-sticky.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/hc-sticky@2.2.7'
import hcSticky from '../../package/hc-sticky/v2.2.7/hc-sticky.min.js';

// Utilities
import { SUtility } from './utility.js';

//   _    _  _____      _____ _   _      _
//  | |  | |/ ____|    / ____| | (_)    | |
//  | |__| | |   _____| (___ | |_ _  ___| | ___   _
//  |  __  | |  |______\___ \| __| |/ __| |/ / | | |
//  | |  | | |____     ____) | |_| | (__|   <| |_| |
//  |_|  |_|\_____|   |_____/ \__|_|\___|_|\_\\__, |
//                                             __/ |
//                                            |___/
// HC-Sticky
export var HC_Sticky = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[data-HC-Sticky]'), (elem) => run(elem));
};

// Run
function run(elem) {
  let HC_Sticky_top = SUtility.attr(elem, 'data-HC-Sticky-top') || 40,
    HC_Sticky_bottom = SUtility.attr(elem, 'data-HC-Sticky-bottom') || 40,
    HC_Sticky_innerTop = SUtility.attr(elem, 'data-HC-Sticky-innerTop') || 0,
    HC_Sticky_bottomEnd = SUtility.attr(elem, 'data-HC-Sticky-bottomEnd') || 0,
    HC_Sticky_disable = SUtility.hasAttr(elem, 'data-HC-Sticky-disable') || false,
    HC_Sticky_disable_sm = SUtility.hasAttr(elem, 'data-HC-Sticky-disable-sm') || false,
    HC_Sticky_disable_md = SUtility.hasAttr(elem, 'data-HC-Sticky-disable-md') || false,
    HC_Sticky_disable_lg = SUtility.hasAttr(elem, 'data-HC-Sticky-disable-lg') || false,
    HC_Sticky_disable_xl = SUtility.hasAttr(elem, 'data-HC-Sticky-disable-xl') || false,
    HC_Sticky_onStart = SUtility.attr(elem, 'data-HC-Sticky-onStart') || null,
    HC_Sticky_onStop = SUtility.attr(elem, 'data-HC-Sticky-onStop') || null,
    HC_Sticky_onBeforeResize = SUtility.attr(elem, 'data-HC-Sticky-onBeforeResize') || null,
    HC_Sticky_onResize = SUtility.attr(elem, 'data-HC-Sticky-onResize') || null;

  var Sticky = new hcSticky(elem, {
    // The distance from the top
    top: HC_Sticky_top,
    // The distance from the bottom
    bottom: HC_Sticky_bottom,
    // The distance from the bottom of the referring element
    bottomEnd: HC_Sticky_bottomEnd,
    // The distance from the top inside of the sticky content
    innerTop: HC_Sticky_innerTop,
    // Element at which to trigger HC-Sticky instead of top of sticky container.
    // This has higher priority than innerTop option.
    // innerSticker: null,
    // Classname of sticky element
    // stickyClass: 'sticky',
    // Classname of wrapper
    // wrapperClassName: 'wrapper-sticky',
    // Element that represents the reference for height instead of height of the container. recalculate
    // stickTo: container.parentNode,
    // Object containing responsive breakpoints
    responsive: {
      576: {
        disable: HC_Sticky_disable_sm,
      },
      768: {
        disable: HC_Sticky_disable_md,
      },
      992: {
        disable: HC_Sticky_disable_lg,
      },
      1200: {
        disable: HC_Sticky_disable_xl,
      },
    },
    // When set to false, sticky content will not move with the page if it is bigger that Window.
    // followScroll: true,
    // Direction of the responsive queries.
    // mobileFirst: true,
    // Limit the rate at which the HC Sticky can fire on window resize.
    // resizeDebounce: 100,
    // Disable the plugin
    disable: HC_Sticky_disable,
    // Callbacks
    onStart: HC_Sticky_onStart,
    onStop: HC_Sticky_onStop,
    onBeforeResize: HC_Sticky_onBeforeResize,
    onResize: HC_Sticky_onResize,
  });
}
