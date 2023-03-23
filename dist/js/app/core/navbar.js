('use strict');

// Utilities
import { SUtility } from '../utilities/utility.js';

//   _   _             _
//  | \ | |           | |
//  |  \| | __ ___   _| |__   __ _ _ __
//  | . ` |/ _` \ \ / / '_ \ / _` | '__|
//  | |\  | (_| |\ V /| |_) | (_| | |
//  |_| \_|\__,_| \_/ |_.__/ \__,_|_|
//
//
// Navbar
export var navbar = function () {
  // Get navbar container
  var navbar = document.querySelector('[navbar]');

  var toggler = navbar.querySelector('[actions] > .toggler'),
    background = navbar.querySelector('.background');

  // Check if navbar is scrolled - run once
  isScrolled(navbar);

  // Check if navbar is scrolled on scroll
  document.addEventListener('scroll', (event) => {
    isScrolled(navbar);
  });

  // Toggle navbar
  SUtility.addEvent(toggler, 'click', (event) => {
    isOpened(navbar);
  });

  // Toggler navbar after click outside
  SUtility.addEvent(background, 'click', (event) => {
    isOpened(navbar);
  });
};

// Is scrolled
function isScrolled(target) {
  window.scrollY == 0
    ? SUtility.removeClass(target, 'is-scrolled')
    : SUtility.addClass(target, 'is-scrolled');
}

// Is opened
function isOpened(target) {
  // Browser local direction
  let browserDir = 'right';
  if (/^(ar|arc|dv|fa|ha|he|khw|ks|ku|ps|ur|yi)\b/.test(navigator.language)) browserDir = 'left';

  let navbarInner = target.querySelector('[navbar-main]');

  if (SUtility.hasClass(target, 'open')) {
    SUtility.removeClass(target, 'open');

    // Remove style
    document.body.style.overflowY = 'auto';
    document.body.querySelector('#content-block').style.cssText = '';
    navbarInner.style.cssText = '';
  } else {
    SUtility.addClass(target, 'open');

    // Get scrollbar width
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Remove scrollbar from body
    document.body.style.overflowY = 'hidden';

    // add spacer value to content
    document.body.querySelector('#content-block').style.cssText =
      ` padding-` + browserDir + `: ` + scrollbarWidth + `px; `;
    navbarInner.style.cssText = `left : calc(50% - ` + scrollbarWidth / 2 + `px); `;
  }
}
