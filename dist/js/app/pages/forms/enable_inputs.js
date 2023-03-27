('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   ______             _     _         __
//  |  ____|           | |   | |       / _|
//  | |__   _ __   __ _| |__ | | ___  | |_ ___  _ __ _ __ ___
//  |  __| | '_ \ / _` | '_ \| |/ _ \ |  _/ _ \| '__| '_ ` _ \
//  | |____| | | | (_| | |_) | |  __/ | || (_) | |  | | | | | |
//  |______|_| |_|\__,_|_.__/|_|\___| |_| \___/|_|  |_| |_| |_|
//   _                   _
//  (_)                 | |
//   _ _ __  _ __  _   _| |_ ___
//  | | '_ \| '_ \| | | | __/ __|
//  | | | | | |_) | |_| | |_\__ \
//  |_|_| |_| .__/ \__,_|\__|___/
//          | |
//          |_|
// Enable form inputs
export var enable_inputs = function (target) {
  SUtility.each(target.querySelectorAll('.form-control'), (el) => {
    // Enable input
    SUtility.removeAttr(el, 'disabled');
    // Empty input
    el.value = '';
  });

  // Focus first input
  setTimeout(target.querySelector('.form-control').focus(), 1);
};
