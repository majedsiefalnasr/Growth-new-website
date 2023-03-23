('use strict');

// jquery@3.6.4
// Local call (Server-side):               url => '../package/jquery/v3.6.4/jquery.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/jquery@v3.6.4-jYcc4gY1YpZ8Kqd6GK8S/mode=imports,min/optimized/jquery.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/jquery@3.6.4'
import jQuery from '../../package/jquery/v3.6.4/jquery.min.js';

// Utilities
import { SUtility } from './utility.js';

//   __  __                        _   _
//  |  \/  |                      | | (_)
//  | \  / | __ _  __ _ _ __   ___| |_ _  ___
//  | |\/| |/ _` |/ _` | '_ \ / _ \ __| |/ __|
//  | |  | | (_| | (_| | | | |  __/ |_| | (__
//  |_|  |_|\__,_|\__, |_| |_|\___|\__|_|\___|
//                 __/ |
//                |___/
// Magnetic
export var magnetic = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[data-magnetic]'), (elem) => run(elem));
};

// Run
function run(elem) {
  (function ($) {
    $(document).on('mousemove touch', function (e) {
      var el = new Magnetic(elem, {});
      // magnetize(elem, e);
    });
  })(jQuery);
}

// Magnetic - class
class Magnetic {
  constructor(el, options = {}) {
    this.el = $(el);
    this.options = $.extend(
      true,
      {
        y: 0.2,
        x: 0.2,
        s: 0.15,
        rs: 0.5,
      },
      this.el.data('magnetic') || options
    );

    this.y = 0;
    this.x = 0;
    this.width = 0;
    this.height = 0;

    if (this.el.data('magnetic-init')) return;
    this.el.data('magnetic-init', true);

    this.bind();
  }

  bind() {
    this.el.on('mouseenter', () => {
      this.y = this.el.offset().top - window.pageYOffset;
      this.x = this.el.offset().left - window.pageXOffset;
      this.width = this.el.outerWidth();
      this.height = this.el.outerHeight();
    });

    this.el.on('mousemove', (e) => {
      const y = (e.clientY - this.y - this.height / 2) * this.options.y;
      const x = (e.clientX - this.x - this.width / 2) * this.options.x;

      this.move(x, y, this.options.s);
    });

    this.el.on('mouseleave', (e) => {
      this.move(0, 0, this.options.rs);
    });
  }

  move(x, y, speed) {
    gsap.to(this.el, {
      y: y,
      x: x,
      force3D: true,
      overwrite: true,
      duration: speed,
    });
  }
}
