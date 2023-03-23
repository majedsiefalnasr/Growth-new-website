('use strict');

//   _    _ _   _ _ _ _   _
//  | |  | | | (_) (_) | (_)
//  | |  | | |_ _| |_| |_ _  ___  ___
//  | |  | | __| | | | __| |/ _ \/ __|
//  | |__| | |_| | | | |_| |  __/\__ \
//   \____/ \__|_|_|_|\__|_|\___||___/
//
//
// Utilities
export var utilities = async function () {
  // Bookmark
  // Load script only on needed
  document.querySelector('[data-bookmark]') &&
    import('./bookmark.js')
      .then(({ bookmark }) => bookmark())
      .catch((err) => console.log('error:', err));

  // Share
  // Load script only on needed
  document.querySelector('[data-share]') &&
    import('./share.js')
      .then(({ share }) => share())
      .catch((err) => console.log('error:', err));

  // Drag scroll
  // Load script only on needed
  document.querySelector('[drag-scroll]') &&
    import('./drag_scroll.js')
      .then(({ drag_scroll }) => drag_scroll())
      .catch((err) => console.log('error:', err));

  // Magnetic
  // Load script only on needed
  document.querySelector('[data-magnetic]') &&
    import('./magnetic.js')
      .then(({ magnetic }) => magnetic())
      .catch((err) => console.log('error:', err));

  // Back to top
  // Load script only on needed
  document.querySelector('[data-to-top]') &&
    import('./back_to_top.js')
      .then(({ back_to_top }) => back_to_top())
      .catch((err) => console.log('error:', err));

  // Parallax
  // Load script only on needed
  document.querySelector('[data-parallax]') &&
    import('./parallax.js')
      .then(({ parallax }) => parallax())
      .catch((err) => console.log('error:', err));

  // HC-Sticky
  // Load script only on needed
  document.querySelector('[data-HC-Sticky]') &&
    import('./HC_Sticky.js')
      .then(({ HC_Sticky }) => HC_Sticky())
      .catch((err) => console.log('error:', err));

  // Password strength checker
  // Load script only on needed
  document.querySelector('[data-pass-strength]') &&
    import('./password_strength_checker.js')
      .then(({ password_strength_checker }) => password_strength_checker())
      .catch((err) => console.log('error:', err));
};
