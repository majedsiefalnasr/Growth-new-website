('use strict');

// splide@v3.6.12
// Local call (Server-side):               url => '../package/splidejs/v3.6.12/splide.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/@splidejs/splide@v3.6.12-K2cEQAjNYQEJI7agyAm3/mode=imports,min/optimized/@splidejs/splide.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/@splidejs/splide@v3.6.12'
import Splide from '../package/splidejs/v3.6.12/splide.min.js';

// Utilities
import { SUtility } from './utilities/utility.js';

//    _____       _ _     _
//   / ____|     | (_)   | |
//  | (___  _ __ | |_  __| | ___
//   \___ \| '_ \| | |/ _` |/ _ \
//   ____) | |_) | | | (_| |  __/
//  |_____/| .__/|_|_|\__,_|\___|
//         | |
//         |_|
// Splide
export var splide = function () {
  SUtility.each(document.querySelectorAll('[splide]'), function (element) {
    // Get id
    let id = element.getAttribute('id');

    let options;
    if (element.hasAttribute('splide-testimonials-small')) {
      options = {
        perPage: 1.2,
        breakpoints: {
          767.98: {
            perPage: 1.2,
            gap: 32,
          },
          575.98: {
            perPage: 1.4,
            gap: 16,
          },
          413.98: {
            perPage: 1.2,
            gap: 8,
          },
        },
        perMove: 1,
        direction: SUtility.getDir(),
        gap: 64,
        speed: 800,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        focus: 'center',
        omitEnd: true,
        trimSpace: false,
      };
    } else if (element.hasAttribute('splide-blog-hero')) {
      options = {
        type: 'slide',
        autoplay: false,
        perPage: 1,
        breakpoints: {
          767.98: {
            gap: 32,
            perPage: 1.2,
          },
        },
        perMove: 1,
        direction: SUtility.getDir(),
        gap: 64,
        speed: 800,
        arrows: true,
        pagination: true,
        lazyLoad: 'nearby',
        focus: 'center',
        omitEnd: true,
        trimSpace: false,
        arrowPath:
          'M24.7264 30.667C24.6229 30.7725 24.4994 30.8562 24.3631 30.9134C24.2269 30.9706 24.0806 31 23.9329 31C23.7851 31 23.6388 30.9706 23.5026 30.9134C23.3664 30.8562 23.2429 30.7725 23.1394 30.667C22.9332 30.4575 22.8177 30.1754 22.8177 29.8815C22.8177 29.5876 22.9332 29.3055 23.1394 29.096L31.1864 21.049L4.63237 21.049C4.01337 21.049 3.50537 20.557 3.50537 19.938C3.50537 19.319 4.01337 18.811 4.63237 18.811L31.1864 18.811L23.1394 10.779C22.7104 10.335 22.7104 9.62004 23.1394 9.19204C23.2429 9.08661 23.3664 9.00286 23.5026 8.94569C23.6388 8.88852 23.7851 8.85908 23.9329 8.85908C24.0806 8.85908 24.2269 8.88852 24.3631 8.94569C24.4994 9.00286 24.6229 9.08661 24.7264 9.19204L34.6784 19.144C34.8845 19.3535 35 19.6356 35 19.9295C35 20.2234 34.8845 20.5055 34.6784 20.715L24.7264 30.667Z',
      };
    }

    // var splide = new Splide(element, options);
    // splide.mount();
  });
};
