('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   _____      _      _                            _ _       _
//  |  __ \    (_)    (_)                          (_) |     | |
//  | |__) | __ _  ___ _ _ __   __ _   _____      ___| |_ ___| |__   ___ _ __
//  |  ___/ '__| |/ __| | '_ \ / _` | / __\ \ /\ / / | __/ __| '_ \ / _ \ '__|
//  | |   | |  | | (__| | | | | (_| | \__ \\ V  V /| | || (__| | | |  __/ |
//  |_|   |_|  |_|\___|_|_| |_|\__, | |___/ \_/\_/ |_|\__\___|_| |_|\___|_|
//                              __/ |
//                             |___/
// Pricing switcher
export var pricing_switcher_actions = function () {
  var container = document.querySelector('#price-block .switch-wrapper'),
    plans = document.querySelector('.switch-wrapper ~ .plans '),
    plans_table = document.querySelector('.switch-wrapper ~ .plans--table'),
    monthly = container.querySelector('#monthly'),
    yearly = container.querySelector('#yearly');

  // Check if monthly is checked
  SUtility.addEvent(monthly, 'change', () => {
    if (monthly.checked) {
      // Remove yearly check
      SUtility.removeClass(plans, 'yearly');
      SUtility.removeClass(plans_table, 'yearly');

      // Add monthly check
      SUtility.addClass(plans, 'monthly');
      SUtility.addClass(plans_table, 'monthly');
    }
  });

  // Check if yearly is checked
  SUtility.addEvent(yearly, 'change', () => {
    if (yearly.checked) {
      // Remove monthly check
      SUtility.removeClass(plans, 'monthly');
      SUtility.removeClass(plans_table, 'monthly');

      // Add yearly check
      SUtility.addClass(plans, 'yearly');
      SUtility.addClass(plans_table, 'yearly');
    }
  });
};
