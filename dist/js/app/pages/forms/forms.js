('use strict');

//   ______
//  |  ____|
//  | |__ ___  _ __ _ __ ___  ___
//  |  __/ _ \| '__| '_ ` _ \/ __|
//  | | | (_) | |  | | | | | \__ \
//  |_|  \___/|_|  |_| |_| |_|___/
//
//
// Forms
export var forms = function () {
  // Sign in
  // Load script only on needed
  document.body.getAttribute('data-form') == 'sign in' &&
    import('./sign-in/sign_in.js')
      .then(({ sign_in }) => sign_in())
      .catch((err) => console.log('error:', err));

  // Sign up
  // Load script only on needed
  document.body.getAttribute('data-form') == 'sign up' &&
    import('./sign-up/sign_up.js')
      .then(({ sign_up }) => sign_up())
      .catch((err) => console.log('error:', err));

  // Restore account
  // Load script only on needed
  document.body.getAttribute('data-form') == 'restore account' &&
    import('./restore-account/restore_account.js')
      .then(({ restore_account }) => restore_account())
      .catch((err) => console.log('error:', err));
};
