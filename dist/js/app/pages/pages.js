('use strict');

//   _____
//  |  __ \
//  | |__) |_ _  __ _  ___  ___
//  |  ___/ _` |/ _` |/ _ \/ __|
//  | |  | (_| | (_| |  __/\__ \
//  |_|   \__,_|\__, |\___||___/
//               __/ |
//              |___/
// Pages
export var pages = async function () {
  // Home page
  // Load script only on needed
  document.body.getAttribute('data-page') == 'home' &&
    import('./home/home.js')
      .then(({ home }) => home())
      .catch((err) => console.log('error:', err));

  // Blog page
  // Load script only on needed
  document.body.getAttribute('data-page') == 'blog' &&
    import('./blog/blog.js')
      .then(({ blog }) => blog())
      .catch((err) => console.log('error:', err));

  // Help Center page
  // Load script only on needed
  document.body.getAttribute('data-page') == 'help center' &&
    import('./help-center/help_center.js')
      .then(({ help_center }) => help_center())
      .catch((err) => console.log('error:', err));

  // Pricing page
  // Load script only on needed
  document.body.getAttribute('data-page') == 'pricing' &&
    import('./pricing/pricing.js')
      .then(({ pricing }) => pricing())
      .catch((err) => console.log('error:', err));

  // Forms pages
  // Load script only on needed
  document.body.getAttribute('data-page') == 'form' &&
    import('./forms/forms.js')
      .then(({ forms }) => forms())
      .catch((err) => console.log('error:', err));
};
