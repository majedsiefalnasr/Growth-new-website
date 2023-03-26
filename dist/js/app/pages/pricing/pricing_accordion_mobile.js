('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   _____      _      _                                           _ _
//  |  __ \    (_)    (_)                                         | (_)
//  | |__) | __ _  ___ _ _ __   __ _    __ _  ___ ___ ___  _ __ __| |_  ___  _ __
//  |  ___/ '__| |/ __| | '_ \ / _` |  / _` |/ __/ __/ _ \| '__/ _` | |/ _ \| '_ \
//  | |   | |  | | (__| | | | | (_| | | (_| | (_| (_| (_) | | | (_| | | (_) | | | |
//  |_|   |_|  |_|\___|_|_|_|_|\__, |  \__,_|\___\___\___/|_|  \__,_|_|\___/|_| |_|
//                  | |   (_) | __/ |
//   _ __ ___   ___ | |__  _| ||___/
//  | '_ ` _ \ / _ \| '_ \| | |/ _ \
//  | | | | | | (_) | |_) | | |  __/
//  |_| |_| |_|\___/|_.__/|_|_|\___|
//
//
// Pricing accordion mobile
export var pricing_accordion_mobile = function () {
  // Run once
  run();

  SUtility.addEvent(window, 'resize', run());
};

// Run
function run() {
  var container = document.querySelector('#price-block .plans'),
    plans = document.querySelectorAll('#price-block .plans .item');

  window.innerWidth < 1200 &&
    SUtility.each(plans, (plan) => {
      SUtility.addEvent(plan, 'click', () => {
        // Remove active state from prev element
        container.querySelector('.item.active .content').style.height = '0px';
        SUtility.removeClass(container.querySelector('.item.active'), 'active');

        // Add active state to current element
        plan.querySelector('.content').style.height =
          plan.querySelector('.content').scrollHeight + 'px';
        SUtility.addClass(plan, 'active');
      });
    });
}
