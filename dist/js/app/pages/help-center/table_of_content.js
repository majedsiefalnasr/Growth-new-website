('use strict');

// jquery@3.6.4
// Local call (Server-side):               url => '../../../package/jquery/v3.6.4/jquery.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/jquery@v3.6.4-jYcc4gY1YpZ8Kqd6GK8S/mode=imports,min/optimized/jquery.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/jquery@3.6.4'
import jQuery from '../../../package/jquery/v3.6.4/jquery.min.js';

// jquery.tocify@1.9.1
// Local call (Server-side):               url => '../../../package/jquery.tocify/v1.9.1/jquery.tocify.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/jquery.tocify@v1.9.1-BAVV8uWnoEeyUz5SmRHs/mode=imports,min/optimized/jquery.tocify.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/jquery.tocify@1.9.1'
import '../../../package/jquery.tocify/v1.9.1/jquery.tocify.min.js';

//   _______ ____   _____
//  |__   __/ __ \ / ____|
//     | | | |  | | |
//     | | | |  | | |
//     | | | |__| | |____
//     |_|  \____/ \_____|
//
//
// TOC (Table of content generator)
export var table_of_content = function () {
  (function ($) {
    //Calls the tocify method on your HTML div.
    $('#toc').tocify({
      // The container element that holds all of the elements used to generate
      // the table of contents
      context: '#toc-content',
      // The element's used to generate the table of contents. The order is very
      // important since it will determine the table of content's nesting structure.
      selectors: 'h2,h3',
      // Used to hide any of the table of contents nested items.
      hideEffect: 'slideUp',
      // How the URL hash value get's generated.
      hashGenerator: 'pretty',
      // Elements that you do not want to be used to generate the table of contents
      ignoreSelector: '.toc-ignore',
      // The amount of space between the top of page and the selected table of contents
      // item after the page has been scrolled.
      scrollTo: 160,
      // The offset distance in pixels to trigger the next active table of contents item
      highlightOffset: 160,
      // If a user scrolls to the bottom of the page and the page is not tall enough to
      // scroll to the last table of contents item, then the page height is increased
      extendPage: false,
      // Set's the first TOC item as active if no other TOC item is active.
      highlightDefault: true,
      // Adds a hash to the page url to maintain history
      history: false,
    });
  })(jQuery);
};
