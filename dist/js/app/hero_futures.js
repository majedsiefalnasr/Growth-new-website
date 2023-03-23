('use strict');

// Utilities
import { SUtility } from './utilities/utility.js';

//   _    _                   __       _
//  | |  | |                 / _|     | |
//  | |__| | ___ _ __ ___   | |_ _   _| |_ _   _ _ __ ___  ___
//  |  __  |/ _ \ '__/ _ \  |  _| | | | __| | | | '__/ _ \/ __|
//  | |  | |  __/ | | (_) | | | | |_| | |_| |_| | | |  __/\__ \
//  |_|  |_|\___|_|  \___/  |_|  \__,_|\__|\__,_|_|  \___||___/
//
//
// Hero futures
export var hero_futures = function () {
  if (document.querySelector('#hero-block .futures')) {
    SUtility.each(document.querySelectorAll('#hero-block .futures .item'), function (target) {
      SUtility.addEvent(target, 'click', () => {
        if (!SUtility.hasClass(target, 'active')) {
          // Remove active from prev item
          SUtility.removeClass(
            document.querySelector('#hero-block .futures .item.active'),
            'active'
          );

          // Add active to target
          SUtility.addClass(target, 'active');
        }
      });
    });
  }
};
