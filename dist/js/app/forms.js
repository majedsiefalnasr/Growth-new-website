('use strict');

// Utilities
import { SUtility } from './utilities/utility.js';

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
  // Get parallax container
  var forms_container = document.querySelector('#forms-block [form] form');

  // Check if target is exist
  if (forms_container) {
    // Change form Email/Phone
    switchers_helper(forms_container);

    // Init Phone countries dropdown
    phone_countries_helper(forms_container);

    // Password input toggler
    password_toggler();

    // Verify code helper
    verify_code_helper(forms_container);

    // Countdown Timer helper
    countdown_timer(document.querySelector('[countdown-timer]'));

    // Sign in/up selected email/phone
    sign_in_up_selected_email_phone(forms_container);

    // Check form validity on form submit
    form_validation_helper(forms_container);
  }

  /////////////////////////////////////////
  // Helpers
  /////////////////////////////////////////
  // Switch between tabs ( Email / Phone number )
  function switchers_helper(forms_container) {
    let form_body = forms_container.querySelector('[body]'),
      email_switcher = forms_container.querySelector('[body]> [data-action] [email]'),
      phone_switcher = forms_container.querySelector('[body] >[data-action] [phone]');

    // Email switcher click
    SUtility.addEvent(email_switcher, 'click', () => {
      // Change form type to email
      SUtility.attr(forms_container, 'data-target', 'email');

      // Disable
      // Form inputs
      disable_form_helper(form_body);

      // Enable
      // Form inputs
      enable_form_helper(forms_container.querySelector('[body] > .email'));

      // Reset validation
      form_validation_helper(forms_container, 'reset');
    });

    // Phone switcher click
    SUtility.addEvent(phone_switcher, 'click', () => {
      // Change form type to email
      SUtility.attr(forms_container, 'data-target', 'phone');

      // Disable
      // Form inputs
      disable_form_helper(form_body);

      // Enable
      // Form inputs
      enable_form_helper(forms_container.querySelector('[body] > .phone'));

      // Reset validation
      form_validation_helper(forms_container, 'reset');
    });
  }

  // Disable form inputs helper
  function disable_form_helper(container) {
    SUtility.each(container.querySelectorAll('.form-control'), (el) => {
      SUtility.attr(el, 'disabled', '');
    });
  }

  // Enable form inputs helper
  function enable_form_helper(container) {
    SUtility.each(container.querySelectorAll('.form-control'), (el) => {
      // Enable input
      SUtility.removeAttr(el, 'disabled');
      // Empty input
      el.value = '';
    });

    // Focus first input
    setTimeout(function () {
      container.querySelector('.form-control').focus();
    }, 1);
  }

  // Init Phone countries dropdown
  function phone_countries_helper(forms_container) {
    // Phone number - Sign up
    var input_signup = forms_container.querySelector('#sign-up-phone');

    // Check if required
    if (input_signup)
      window.intlTelInput(input_signup, {
        autoHideDialCode: false,
        preferredCountries: ['eg', 'sa', 'ae', 'qa', 'ye', 'om', 'bh', 'kw', 'ma'],
        utilsScript:
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js',
      });

    // Phone number - Sign in
    var input_signin = forms_container.querySelector('#sign-in-phone');

    // Check if required
    if (input_signin)
      window.intlTelInput(input_signin, {
        autoHideDialCode: false,
        preferredCountries: ['eg', 'sa', 'ae', 'qa', 'ye', 'om', 'bh', 'kw', 'ma'],
        utilsScript:
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js',
      });
  }

  // Check form validation
  function form_validation_helper(forms_container, action) {
    var feedback_container = forms_container.querySelectorAll('[body] [data-feedback]');

    // Action
    if (!action) {
      // - Set
      SUtility.addEvent(forms_container, 'submit', () => {
        // For test purpose
        // Prevent submit default for test purpose
        event.preventDefault();
        event.stopPropagation();

        ///////////////////////////
        // Check validation
        // Check page / Sign Up
        if (SUtility.attr(forms_container, 'data-validation-page') == 'sign up')
          sign_up_validation(forms_container);
        // Check page / Sign In
        if (SUtility.attr(forms_container, 'data-validation-page') == 'sign in')
          sign_in_validation(forms_container);
      });
    } else if (action == 'reset') {
      // - Reset
      SUtility.each(forms_container.querySelectorAll('.is-invalid'), (invalid) => {
        SUtility.removeClass(invalid, 'is-invalid');
      });

      // Clear feedback validation
      SUtility.each(feedback_container, (el) => {
        SUtility.attr(el, 'data-feedback', '');
        SUtility.each(el.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
      });
    }
  }

  // Sign up validation
  async function sign_up_validation(forms_container) {
    let data_target = SUtility.attr(forms_container, 'data-target');

    // Email
    if (data_target == 'email') {
      let email_form_container = forms_container.querySelector('[body] > .email'),
        form_input_email = email_form_container.querySelector('#sign-up-email'),
        form_input_email_feedback = document.querySelector(
          '[data-feedback-target="sign-up-email"]'
        ),
        feedback_empty = form_input_email_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_email_feedback.querySelector('[data-feedback-invalid]'),
        feedback_used = form_input_email_feedback.querySelector('[data-feedback-used]'),
        state = 'empty';

      // Check if empty
      if (form_input_email.value == '') {
        // Focus input
        form_input_email.focus();
        form_input_email.select();
        // Set validation focus
        SUtility.addClass(form_input_email, 'is-invalid');

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_email_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      }
      // Check if valid
      else if (!form_input_email.checkValidity()) {
        // Focus input
        form_input_email.focus();
        form_input_email.select();
        // Set validation focus
        SUtility.addClass(form_input_email, 'is-invalid');

        // Set state
        state = 'inValid';

        // Clear feedback
        SUtility.each(form_input_email_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_invalid, 'active');
      } else {
        // Check if used
        let email_used = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.email == form_input_email.value)) email_used = true;
          });

        // Email already used
        if (email_used) {
          // Focus input
          form_input_email.focus();
          form_input_email.select();
          // Set validation focus
          SUtility.addClass(form_input_email, 'is-invalid');

          // Set state
          state = 'used';

          // Clear feedback
          SUtility.each(form_input_email_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_used, 'active');
        } else {
          // Email not used
          // Create new account and go to password page
          window.location.replace('./create-account-email.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_email_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_email_feedback, 'data-feedback', state);
    }

    // Email - password
    if (data_target == 'email-password') {
      let email_form_container = forms_container.querySelector('[body] > .email'),
        form_input_pass = email_form_container.querySelector('#sign-up-pass'),
        form_input_pass_feedback = document.querySelector('[data-feedback-target="sign-up-pass"]'),
        pass_feedback_empty = form_input_pass_feedback.querySelector('[data-feedback-empty]'),
        pass_state = 'empty',
        form_input_repass = email_form_container.querySelector('#sign-up-pass-repeat'),
        form_input_repass_feedback = document.querySelector(
          '[data-feedback-target="sign-up-pass-repeat"]'
        ),
        repass_feedback_empty = form_input_repass_feedback.querySelector('[data-feedback-empty]'),
        repass_feedback_invalid =
          form_input_repass_feedback.querySelector('[data-feedback-invalid]'),
        repass_state = 'empty';

      // Check if empty
      if (form_input_pass.value == '') {
        // Focus input
        form_input_pass.focus();
        form_input_pass.select();
        // Set validation focus
        SUtility.addClass(form_input_pass, 'is-invalid');

        // Set state
        pass_state = 'empty';

        // Clear password feedback
        SUtility.each(form_input_pass_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(pass_feedback_empty, 'active');

        // Clear password repeat input
        SUtility.each(form_input_repass_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
      } else {
        // Clear password feedback
        SUtility.each(form_input_pass_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });

        // Set state
        pass_state = '';

        // Check if password repeat is empty
        if (form_input_repass.value == '') {
          // Focus input
          form_input_repass.focus();
          form_input_repass.select();
          // Set validation focus
          SUtility.removeClass(form_input_pass, 'is-invalid');
          SUtility.addClass(form_input_repass, 'is-invalid');

          // Set state
          repass_state = 'empty';

          // Clear password feedback
          SUtility.each(form_input_repass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(repass_feedback_empty, 'active');
        }
        // Check if password and password repeat is equal
        else if (form_input_pass.value != form_input_repass.value) {
          // Focus input
          form_input_repass.focus();
          form_input_repass.select();
          // Set validation focus
          SUtility.removeClass(form_input_pass, 'is-invalid');
          SUtility.addClass(form_input_repass, 'is-invalid');

          // Set state
          repass_state = 'invalid';

          // Clear password feedback
          SUtility.each(form_input_repass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(repass_feedback_invalid, 'active');
        } else {
          // Email not used
          // Create new account and go to password page
          window.location.replace('./create-account-email.html');

          // Clear state
          repass_state = '';

          // Clear password feedback
          SUtility.each(form_input_repass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_pass_feedback, 'data-feedback', pass_state);
      SUtility.attr(form_input_repass_feedback, 'data-feedback', repass_state);
    }

    // Phone
    if (data_target == 'phone') {
      let phone_form_container = forms_container.querySelector('[body] > .phone'),
        form_input_phone = phone_form_container.querySelector('#sign-up-phone'),
        form_input_phone_feedback = document.querySelector(
          '[data-feedback-target="sign-up-phone"]'
        ),
        feedback_empty = form_input_phone_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_phone_feedback.querySelector('[data-feedback-invalid]'),
        feedback_used = form_input_phone_feedback.querySelector('[data-feedback-used]'),
        state = 'empty';

      // Get instance of phone input
      var iti = window.intlTelInputGlobals.getInstance(form_input_phone);

      // Check if empty
      if (iti.getNumber() == '') {
        // Focus input
        form_input_phone.focus();
        form_input_phone.select();
        // Set validation focus
        SUtility.addClass(form_input_phone, 'is-invalid');

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_phone_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      }
      // Check if valid
      else if (!iti.isValidNumber()) {
        // Focus input
        form_input_phone.focus();
        form_input_phone.select();
        // Set validation focus
        SUtility.addClass(form_input_phone, 'is-invalid');

        // Set state
        state = 'inValid';

        // Clear feedback
        SUtility.each(form_input_phone_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_invalid, 'active');
      } else {
        // Check if used
        let phone_used = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.phone == iti.getNumber())) phone_used = true;
          });

        // Phone already used
        if (phone_used) {
          // Focus input
          form_input_phone.focus();
          form_input_phone.select();
          // Set validation focus
          SUtility.addClass(form_input_phone, 'is-invalid');

          // Set state
          state = 'used';

          // Clear feedback
          SUtility.each(form_input_phone_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_used, 'active');
        } else {
          // Phone not used
          // Create new account and go to check code page
          window.location.replace('./create-account-phone.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_phone_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_phone_feedback, 'data-feedback', state);
    }

    // Phone verify code
    if (data_target == 'phone-confirm-code') {
      let phone_form_container = forms_container.querySelector('[body] > .phone'),
        form_input_phone_code_container =
          phone_form_container.querySelector('#sign-up-verify-code'),
        form_input_phone_code = form_input_phone_code_container.querySelectorAll('input.code'),
        form_input_phone_code_feedback = document.querySelector(
          '[data-feedback-target="sign-up-verify-code"]'
        ),
        feedback_empty = form_input_phone_code_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_phone_code_feedback.querySelector('[data-feedback-invalid]'),
        feedback_used = form_input_phone_code_feedback.querySelector('[data-feedback-used]'),
        state = 'empty';

      // Check if any input is empty
      let empty_code = false;
      SUtility.each(form_input_phone_code, (input) => {
        if (input.value == '') empty_code = true;
      });

      // If their is an empty input
      if (empty_code) {
        // Focus input
        form_input_phone_code[form_input_phone_code.length - 1].focus();
        form_input_phone_code[form_input_phone_code.length - 1].select();
        // Set validation focus
        SUtility.each(form_input_phone_code, (input) => {
          SUtility.addClass(input, 'is-invalid');
        });

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_phone_code_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      } else {
        // Get verify code
        let verify_code = '';
        SUtility.each(form_input_phone_code, (input) => {
          verify_code += input.value;
        });

        // Check if correct
        let code_correct = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.verifyCode == verify_code)) code_correct = true;
          });

        if (!code_correct) {
          // Focus input
          form_input_phone_code[0].focus();
          form_input_phone_code[0].select();
          // Set validation focus
          SUtility.each(form_input_phone_code, (input) => {
            SUtility.addClass(input, 'is-invalid');
          });

          // Set state
          state = 'invalid';

          // Clear feedback
          SUtility.each(form_input_phone_code_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_invalid, 'active');
        } else {
          // Verify code is correct
          // Create new account and go to check code page
          window.location.replace('./create-account-phone.html');
          // Clear state
          state = '';
          // Clear feedback
          SUtility.each(form_input_phone_code_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_phone_code_feedback, 'data-feedback', state);
    }
  }

  // Sign in validation
  async function sign_in_validation(forms_container) {
    let data_target = SUtility.attr(forms_container, 'data-target');

    // Email
    if (data_target == 'email') {
      let email_form_container = forms_container.querySelector('[body] > .email'),
        form_input_email = email_form_container.querySelector('#sign-in-email'),
        form_input_email_feedback = document.querySelector(
          '[data-feedback-target="sign-in-email"]'
        ),
        feedback_empty = form_input_email_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_email_feedback.querySelector('[data-feedback-invalid]'),
        feedback_notused = form_input_email_feedback.querySelector('[data-feedback-notused]'),
        state = 'empty';

      // Check if empty
      if (form_input_email.value == '') {
        // Focus input
        form_input_email.focus();
        form_input_email.select();
        // Set validation focus
        SUtility.addClass(form_input_email, 'is-invalid');

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_email_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      }
      // Check if valid
      else if (!form_input_email.checkValidity()) {
        // Focus input
        form_input_email.focus();
        form_input_email.select();
        // Set validation focus
        SUtility.addClass(form_input_email, 'is-invalid');

        // Set state
        state = 'inValid';

        // Clear feedback
        SUtility.each(form_input_email_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_invalid, 'active');
      } else {
        // Check if exist
        let email_used = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.email == form_input_email.value)) email_used = true;
          });

        // Email already used
        if (!email_used) {
          // Focus input
          form_input_email.focus();
          form_input_email.select();
          // Set validation focus
          SUtility.addClass(form_input_email, 'is-invalid');

          // Set state
          state = 'notUsed';

          // Clear feedback
          SUtility.each(form_input_email_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_notused, 'active');
        } else {
          // Email not used
          // Create new account and go to password page
          window.location.replace('./signin-account-email.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_email_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_email_feedback, 'data-feedback', state);
    }

    // Email - password
    if (data_target == 'email-password') {
      let email_form_container = forms_container.querySelector('[body] > .email'),
        form_input_pass = email_form_container.querySelector('#sign-in-pass'),
        form_input_pass_feedback = document.querySelector('[data-feedback-target="sign-in-pass"]'),
        feedback_empty = form_input_pass_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_pass_feedback.querySelector('[data-feedback-invalid]'),
        state = 'empty';

      // Check if empty
      if (form_input_pass.value == '') {
        // Focus input
        form_input_pass.focus();
        form_input_pass.select();
        // Set validation focus
        SUtility.addClass(form_input_pass, 'is-invalid');

        // Set state
        pass_state = 'empty';

        // Clear password feedback
        SUtility.each(form_input_pass_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      } else {
        // Check if password is correct
        let pass_correct = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.password == form_input_pass.value))
              pass_correct = true;
          });

        // Password not correct
        if (!pass_correct) {
          // Focus input
          form_input_pass.focus();
          form_input_pass.select();
          // Set validation focus
          SUtility.addClass(form_input_pass, 'is-invalid');

          // Set state
          state = 'inValid';

          // Clear feedback
          SUtility.each(form_input_pass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_invalid, 'active');
        } else {
          // Password is correct
          // Create new account and go to password page
          window.location.replace('./signin-account-email.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_pass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_pass_feedback, 'data-feedback', pass_state);
    }

    // Phone
    if (data_target == 'phone') {
      let phone_form_container = forms_container.querySelector('[body] > .phone'),
        form_input_phone = phone_form_container.querySelector('#sign-in-phone'),
        form_input_phone_feedback = document.querySelector(
          '[data-feedback-target="sign-in-phone"]'
        ),
        feedback_empty = form_input_phone_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_phone_feedback.querySelector('[data-feedback-invalid]'),
        feedback_notused = form_input_phone_feedback.querySelector('[data-feedback-notused]'),
        state = 'empty';

      // Get instance of phone input
      var iti = window.intlTelInputGlobals.getInstance(form_input_phone);

      // Check if empty
      if (iti.getNumber() == '') {
        // Focus input
        form_input_phone.focus();
        form_input_phone.select();
        // Set validation focus
        SUtility.addClass(form_input_phone, 'is-invalid');

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_phone_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      }
      // Check if valid
      else if (!iti.isValidNumber()) {
        // Focus input
        form_input_phone.focus();
        form_input_phone.select();
        // Set validation focus
        SUtility.addClass(form_input_phone, 'is-invalid');

        // Set state
        state = 'inValid';

        // Clear feedback
        SUtility.each(form_input_phone_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_invalid, 'active');
      } else {
        // Phone is already used
        let phone_used = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.phone == iti.getNumber())) phone_used = true;
          });

        // Phone already used
        if (!phone_used) {
          // Focus input
          form_input_phone.focus();
          form_input_phone.select();
          // Set validation focus
          SUtility.addClass(form_input_phone, 'is-invalid');

          // Set state
          state = 'notUsed';

          // Clear feedback
          SUtility.each(form_input_phone_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_notused, 'active');
        } else {
          // Phone not used
          // Create new account and go to check code page
          window.location.replace('./signin-account-email.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_phone_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_phone_feedback, 'data-feedback', state);
    }

    // Phone verify code
    if (data_target == 'phone-confirm-code') {
      let phone_form_container = forms_container.querySelector('[body] > .phone'),
        form_input_phone_code_container =
          phone_form_container.querySelector('#sign-in-verify-code'),
        form_input_phone_code = form_input_phone_code_container.querySelectorAll('input.code'),
        form_input_phone_code_feedback = document.querySelector(
          '[data-feedback-target="sign-in-verify-code"]'
        ),
        feedback_empty = form_input_phone_code_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_phone_code_feedback.querySelector('[data-feedback-invalid]'),
        state = 'empty';

      // Check if any input is empty
      let empty_code = false;
      SUtility.each(form_input_phone_code, (input) => {
        if (input.value == '') empty_code = true;
      });

      // If their is an empty input
      if (empty_code) {
        // Focus input
        form_input_phone_code[form_input_phone_code.length - 1].focus();
        form_input_phone_code[form_input_phone_code.length - 1].select();
        // Set validation focus
        SUtility.each(form_input_phone_code, (input) => {
          SUtility.addClass(input, 'is-invalid');
        });

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_phone_code_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      } else {
        // Get verify code
        let verify_code = '';
        SUtility.each(form_input_phone_code, (input) => {
          verify_code += input.value;
        });

        // Check if correct
        let code_correct = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.verifyCode == verify_code)) code_correct = true;
          });

        if (!code_correct) {
          // Focus input
          form_input_phone_code[0].focus();
          form_input_phone_code[0].select();
          // Set validation focus
          SUtility.each(form_input_phone_code, (input) => {
            SUtility.addClass(input, 'is-invalid');
          });

          // Set state
          state = 'invalid';

          // Clear feedback
          SUtility.each(form_input_phone_code_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_invalid, 'active');
        } else {
          // Verify code is correct
          // Create new account and go to check code page
          window.location.replace('./create-account-phone.html');
          // Clear state
          state = '';
          // Clear feedback
          SUtility.each(form_input_phone_code_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_phone_code_feedback, 'data-feedback', state);
    }
  }

  // Password input toggler
  function password_toggler() {
    // Get all forms
    let password_inputs = document.querySelectorAll('[data-form-pass]');

    // Check if required
    if (!password_inputs) return;

    // Loop all forms
    SUtility.each(password_inputs, (pass_el) => {
      let pass_el_input = pass_el.querySelector('input'),
        pass_el_toggler = pass_el.querySelector('.show-pass em'),
        pass_el_related = document.querySelector(
          '#' + SUtility.attr(pass_el, 'data-form-pass-related') + ''
        ),
        state = false;

      // Toggler action on click
      SUtility.addEvent(pass_el_toggler, 'click', () => {
        // Check if password is shown
        if (state) {
          // Hide password
          pass_el_input.setAttribute('type', 'password');
          SUtility.addClass(pass_el_toggler, 'ph-icon-eye');
          SUtility.removeClass(pass_el_toggler, 'ph-icon-eyeslash');
          state = false;

          // Hide related password if exist
          if (pass_el_related) pass_el_related.setAttribute('type', 'password');
        } else {
          // View password
          pass_el_input.setAttribute('type', 'text');
          SUtility.addClass(pass_el_toggler, 'ph-icon-eyeslash');
          SUtility.removeClass(pass_el_toggler, 'ph-icon-eye');
          state = true;

          // View related password if exist
          if (pass_el_related) pass_el_related.setAttribute('type', 'text');
        }
      });
    });
  }

  // Sign in/up selected email/phone
  function sign_in_up_selected_email_phone(forms_container) {
    // Check page / Sign Up
    if (SUtility.attr(forms_container, 'data-validation-page') == 'sign up')
      sign_up_selected_email_phone(forms_container);
    // Check page / Sign In
    if (SUtility.attr(forms_container, 'data-validation-page') == 'sign in')
      sign_in_selected_email_phone(forms_container);
  }

  // Sign in selected email/phone
  function sign_in_selected_email_phone(forms_container) {
    let selected_email_container = forms_container.querySelector('[data-selected-email]'),
      selected_phone_container = forms_container.querySelector('[data-selected-phone]');

    // Check if email selected exist
    if (selected_email_container) {
      let email_container = selected_email_container.querySelector('[data-email]'),
        change_action = selected_email_container.querySelector('[data-action]');

      // Set email
      // Get email from previous step

      // Change email action
      SUtility.addEvent(change_action, 'click', () => {
        // Back to previous step with current email
        window.location.replace('./signin-account.html');
      });
    }

    // Check if phone selected exist
    if (selected_phone_container) {
      let phone_container = selected_phone_container.querySelector('[data-email]'),
        change_action = selected_phone_container.querySelector('[data-action]');

      // Set phone
      // Get phone from previous step

      // Change phone action
      SUtility.addEvent(change_action, 'click', () => {
        // Back to previous step with current email
        window.location.replace('./signin-account.html');
      });
    }
  }

  // Sign up selected email/phone
  function sign_up_selected_email_phone(forms_container) {
    let selected_email_container = forms_container.querySelector('[data-selected-email]'),
      selected_phone_container = forms_container.querySelector('[data-selected-phone]');

    // Check if email selected exist
    if (selected_email_container) {
      let email_container = selected_email_container.querySelector('[data-email]'),
        change_action = selected_email_container.querySelector('[data-action]');

      // Set email
      // Get email from previous step

      // Change email action
      SUtility.addEvent(change_action, 'click', () => {
        // Back to previous step with current email
        window.location.replace('./create-account.html');
      });
    }

    // Check if phone selected exist
    if (selected_phone_container) {
      let phone_container = selected_phone_container.querySelector('[data-email]'),
        change_action = selected_phone_container.querySelector('[data-action]');

      // Set phone
      // Get phone from previous step

      // Change phone action
      SUtility.addEvent(change_action, 'click', () => {
        // Back to previous step with current email
        window.location.replace('./create-account.html');
      });
    }
  }
};
