('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   _    _
//  | |  | |
//  | |__| | ___  _ __ ___   ___
//  |  __  |/ _ \| '_ ` _ \ / _ \
//  | |  | | (_) | | | | | |  __/
//  |_|  |_|\___/|_| |_| |_|\___|
//
//
// Home
export var home = function () {
  // Add hero futures
  // Load script only on needed
  document.querySelector('#hero-block .futures') &&
    import('../home/hero_futures.js')
      .then(({ hero_futures }) => hero_futures())
      .catch((err) => console.log('error:', err));

  // Add splide testimonials
  let splide_testimonials_container = document.querySelectorAll('[splide][splide-testimonials]');

  // Load script only on needed
  splide_testimonials_container &&
    import('../../utilities/splide.js')
      .then(({ splide }) =>
        SUtility.each(splide_testimonials_container, (splide_elem) =>
          splide(splide_elem, {
            perPage: 1.2,
            breakpoints: {
              991.98: {
                focus: 'center',
              },
              767.98: {
                focus: 'center',
                perPage: 1.2,
                gap: 32,
              },
              575.98: {
                focus: 'center',
                perPage: 1.4,
                gap: 16,
              },
              413.98: {
                focus: 'center',
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
            focus: 0,
            omitEnd: true,
            trimSpace: false,
          })
        )
      )
      .catch((err) => console.log('error:', err));

  // Add splide futures
  let splide_futures_container = document.querySelectorAll('[splide][splide-futures]');

  // Load script only on needed
  splide_futures_container &&
    import('../../utilities/splide.js')
      .then(({ splide }) =>
        SUtility.each(splide_futures_container, (splide_elem) =>
          splide(splide_elem, {
            perPage: 2.5,
            breakpoints: {
              1199.98: {
                perPage: 2.5,
                gap: 48,
              },
              991.98: {
                perPage: 1.5,
                gap: 32,
              },
              413.98: {
                perPage: 1.1,
                gap: 16,
              },
            },
            perMove: 1,
            direction: SUtility.getDir(),
            gap: 64,
            speed: 800,
            arrows: false,
            pagination: false,
            lazyLoad: 'nearby',
            focus: 0,
            omitEnd: true,
            trimSpace: false,
          })
        )
      )
      .catch((err) => console.log('error:', err));
};
