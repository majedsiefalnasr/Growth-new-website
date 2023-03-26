('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   _____      _      _
//  |  __ \    (_)    (_)
//  | |__) | __ _  ___ _ _ __   __ _
//  |  ___/ '__| |/ __| | '_ \ / _` |
//  | |   | |  | | (__| | | | | (_| |
//  |_|   |_|  |_|\___|_|_| |_|\__, |
//                              __/ |
//                             |___/
// Pricing
export var pricing = function () {
  // Pricing switcher
  // Load script only on needed
  document.querySelector('#price-block .switch-wrapper') &&
    import('./pricing_switcher_actions.js')
      .then(({ pricing_switcher_actions }) => pricing_switcher_actions())
      .catch((err) => console.log('error:', err));

  // Pricing plan mobile switcher
  // Load script only on needed
  document.querySelector('#price-block .switch-wrapper ~ .plans--table .table--nav') &&
    import('./pricing_plan_switcher_actions.js')
      .then(({ pricing_plan_switcher_actions }) => pricing_plan_switcher_actions())
      .catch((err) => console.log('error:', err));

  // Pricing accordion mobile
  // Load script only on needed
  document.querySelector('#price-block .plans') &&
    import('./pricing_accordion_mobile.js')
      .then(({ pricing_accordion_mobile }) => pricing_accordion_mobile())
      .catch((err) => console.log('error:', err));

  // Add splide testimonials
  let splide_testimonials_container = document.querySelector('[splide][splide-testimonials]');

  // Load script only on needed
  splide_testimonials_container &&
    import('../../utilities/splide.js')
      .then(({ splide }) =>
        splide(splide_testimonials_container, {
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
      .catch((err) => console.log('error:', err));
};
