('use strict');

// Utilities
import { SUtility } from '../../../utilities/utility.js';

// Utilities
import { switch_email_phone_tabs } from '../switch_email_phone_tabs.js';

// Validation
import { validation } from './validation.js';

//    _____ _
//   / ____(_)
//  | (___  _  __ _ _ __    _   _ _ __
//   \___ \| |/ _` | '_ \  | | | | '_ \
//   ____) | | (_| | | | | | |_| | |_) |
//  |_____/|_|\__, |_| |_|  \__,_| .__/
//             __/ |             | |
//            |___/              |_|
// Sign up
export var sign_up = function () {
  // Get parallax container
  var forms_container = document.querySelector('form');

  // Add splide testimonials
  let splide_testimonials_container = document.querySelector('[splide][splide-testimonials-small]');

  // Load script only on needed
  splide_testimonials_container &&
    import('../../../utilities/splide.js')
      .then(({ splide }) =>
        splide(splide_testimonials_container, {
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
        })
      )
      .catch((err) => console.log('error:', err));

  // Change form Email/Phone
  switch_email_phone_tabs(forms_container);

  // Countdown Timer
  // Load script only on needed
  document.querySelector('[countdown-timer]') &&
    import('../../../utilities/countdown_timer.js')
      .then(({ countdown_timer }) =>
        countdown_timer(document.querySelector('[countdown-timer]'), () => {
          // Enable actions
          SUtility.removeAttr(document.querySelector('[data-action="SMS"]'), 'disabled'),
            SUtility.removeAttr(document.querySelector('[data-action="whatsapp"]'), 'disabled');
        })
      )
      .catch((err) => console.log('error:', err));

  // Check form validation
  validation(forms_container);

  // Get selected email from prev step if required
  forms_container.querySelector('[data-selected-email]') &&
    import('./selected_email.js')
      .then(({ selected_email }) => selected_email(forms_container))
      .catch((err) => console.log('error:', err));

  // Get selected phone from prev step if required
  forms_container.querySelector('[data-selected-phone]') &&
    import('./selected_phone.js')
      .then(({ selected_phone }) => selected_phone(forms_container))
      .catch((err) => console.log('error:', err));
};
