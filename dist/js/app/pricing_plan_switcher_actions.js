('use strict');

// Utilities
import { SUtility } from './utilities/utility.js';

//   _____      _      _                     _
//  |  __ \    (_)    (_)                   | |
//  | |__) | __ _  ___ _ _ __   __ _   _ __ | | __ _ _ __
//  |  ___/ '__| |/ __| | '_ \ / _` | | '_ \| |/ _` | '_ \
//  | |   | |  | | (__| | | | | (_| | | |_) | | (_| | | | |
//  |_|   |_|  |_|\___|_|_|_|_|\__, | | .__/|_|\__,_|_| |_|  _
//                  | |   (_) | __/ | | |         (_) |     | |
//   _ __ ___   ___ | |__  _| ||___/  |_|__      ___| |_ ___| |__   ___ _ __
//  | '_ ` _ \ / _ \| '_ \| | |/ _ \ / __\ \ /\ / / | __/ __| '_ \ / _ \ '__|
//  | | | | | | (_) | |_) | | |  __/ \__ \\ V  V /| | || (__| | | |  __/ |
//  |_| |_| |_|\___/|_.__/|_|_|\___| |___/ \_/\_/ |_|\__\___|_| |_|\___|_|
//
//
// Pricing plan mobile switcher
export var pricing_plan_switcher_actions = function () {
  var container = document.querySelector('.switch-wrapper ~ .plans--table .table--nav');
  // Check if target is exist
  if (!container) return;

  var links = container.querySelectorAll('a[href]');

  // Loop all switcher
  SUtility.each(links, (item) => {
    // Scroll on click
    SUtility.addEvent(item, 'click', () => {
      event.preventDefault();

      // Get target ID
      let element = document.querySelector(SUtility.attr(item, 'href'));
      let headerOffset = 220;
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });

    // Active on scroll to target
    document.addEventListener('scroll', (event) => {
      // Target element
      let target = document.querySelector(SUtility.attr(item, 'href'));

      if (SUtility.isPartInViewport(target)) {
        // Remove active status from old tab
        if (container.querySelector('a[href].active'))
          SUtility.removeClass(container.querySelector('a[href].active'), 'active');

        // Add active status to current tab
        SUtility.addClass(item, 'active');
      }
    });
  });
};
