('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//    _____ _                                    _
//   / ____| |                                  (_)
//  | |    | |__   __ _ _ __   __ _  ___  __   ___  _____      __
//  | |    | '_ \ / _` | '_ \ / _` |/ _ \ \ \ / / |/ _ \ \ /\ / /
//  | |____| | | | (_| | | | | (_| |  __/  \ V /| |  __/\ V  V /
//   \_____|_| |_|\__,_|_| |_|\__, |\___|   \_/ |_|\___| \_/\_/
//                             __/ |
//                            |___/
// Change view
export var change_view = function (container) {
  // Change view action
  let grid = container.querySelector('[grid]'),
    list = container.querySelector('[list]'),
    blogs = document.querySelector('.blog--list');

  // Change view to grid
  SUtility.addEvent(grid, 'click', () => {
    // Check if active
    if (SUtility.hasClass(grid, 'active')) return;

    // Change active status
    SUtility.addClass(grid, 'active');
    SUtility.removeClass(list, 'active');

    // Change view on blogs
    SUtility.removeClass(blogs, 'list--view');
  });

  // Change view to list
  SUtility.addEvent(list, 'click', () => {
    // Check if active
    if (SUtility.hasClass(list, 'active')) return;

    // Change active status
    SUtility.addClass(list, 'active');
    SUtility.removeClass(grid, 'active');

    // Change view on blogs
    SUtility.addClass(blogs, 'list--view');
  });
};
