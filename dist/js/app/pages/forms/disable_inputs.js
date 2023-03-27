('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   _____  _           _     _         __
//  |  __ \(_)         | |   | |       / _|
//  | |  | |_ ___  __ _| |__ | | ___  | |_ ___  _ __ _ __ ___
//  | |  | | / __|/ _` | '_ \| |/ _ \ |  _/ _ \| '__| '_ ` _ \
//  | |__| | \__ \ (_| | |_) | |  __/ | || (_) | |  | | | | | |
//  |_____/|_|___/\__,_|_.__/|_|\___| |_| \___/|_|  |_| |_| |_|
//   _                   _
//  (_)                 | |
//   _ _ __  _ __  _   _| |_ ___
//  | | '_ \| '_ \| | | | __/ __|
//  | | | | | |_) | |_| | |_\__ \
//  |_|_| |_| .__/ \__,_|\__|___/
//          | |
//          |_|
// Disable form inputs
export var disable_inputs = function (target) {
  SUtility.each(target.querySelectorAll('.form-control'), (el) =>
    SUtility.attr(el, 'disabled', '')
  );
};
