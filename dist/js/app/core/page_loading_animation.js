('use strict');

// Utilities
import { SUtility } from '../utilities/utility.js';

//   _____                   _                 _ _
//  |  __ \                 | |               | (_)
//  | |__) |_ _  __ _  ___  | | ___   __ _  __| |_ _ __   __ _
//  |  ___/ _` |/ _` |/ _ \ | |/ _ \ / _` |/ _` | | '_ \ / _` |
//  | |  | (_| | (_| |  __/ | | (_) | (_| | (_| | | | | | (_| |
//  |_|   \__,_|\__, |\___| |_|\___/ \__,_|\__,_|_|_| |_|\__, |
//               __/ |                                    __/ |
//              |___/              _   _                 |___/
//              (_)               | | (_)
//    __ _ _ __  _ _ __ ___   __ _| |_ _  ___  _ __
//   / _` | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \
//  | (_| | | | | | | | | | | (_| | |_| | (_) | | | |
//   \__,_|_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_|
//
//
// Page loading animation
export var page_loading_animation = function () {
  // On window load
  window.addEventListener('load', () => {
    SUtility.removeClass(document.body, 'page-loading');
  });

  // On page before unload
  window.addEventListener('beforeunload', () => {
    SUtility.addClass(document.body, 'page-reloading');
  });
};
