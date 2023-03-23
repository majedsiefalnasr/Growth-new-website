('use strict');

// gsap@v3.10.4
// Local call (Server-side):               url => '../package/gsap/v3.10.4/gsap.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/gsap@v3.10.4-XdyFN99nEgDRHW51sK5I/mode=imports,min/optimized/gsap.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/gsap@v3.10.4'
import TweenLite from '../../package/gsap/v3.10.4/gsap.min.js';

// Utilities
import { SUtility } from './utility.js';

//   _____                _ _
//  |  __ \              | | |
//  | |__) |_ _ _ __ __ _| | | __ ___  __
//  |  ___/ _` | '__/ _` | | |/ _` \ \/ /
//  | |  | (_| | | | (_| | | | (_| |>  <
//  |_|   \__,_|_|  \__,_|_|_|\__,_/_/\_\
//
//
// Parallax
export var parallax = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[data-parallax]'), (elem) => run(elem));
};

// Run
function run(elem) {
  // Get Moving parent
  let parallax_parent = document.querySelector(SUtility.attr(elem, 'data-parallax'));

  // The elements you want to parallax.
  var parallax_items = elem.querySelectorAll('.parallax');

  // Use this value to adjust the amount of parallax in response to mouse movement.
  var fixer = 0.003;

  parallax_parent.addEventListener('mousemove', function (event) {
    // get the mouseX - negative on left, positive on right
    var pageX = event.pageX - elem.getBoundingClientRect().width * 0.5;

    // same here, get the y. use console.log(pageY) to see the values
    var pageY = event.pageY - elem.getBoundingClientRect().height * 0.5;

    for (let i = 0; i < parallax_items.length; i++) {
      var item = parallax_items[i];
      var speedX = item.getAttribute('data-speed-x');
      var speedY = item.getAttribute('data-speed-y');

      // Instead of using 'TweenLite.set' you can use 'TweenLite.to' which results in a smoother initial transition (when the mouse enters) at the cost of some preformance.
      // Change the '+' to '-' if you want to invert the parallax motion in relation to the mouse movement.
      TweenLite.set(item, {
        x: (item.offsetLeft + pageX * speedX) * fixer,
        y: (item.offsetTop + pageY * speedY) * fixer,
      });
    }
  });
}
