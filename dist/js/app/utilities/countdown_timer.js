('use strict');

// Utilities
import { SUtility } from './utility.js';

//    _____                  _      _
//   / ____|                | |    | |
//  | |     ___  _   _ _ __ | |_ __| | _____      ___ __
//  | |    / _ \| | | | '_ \| __/ _` |/ _ \ \ /\ / / '_ \
//  | |___| (_) | |_| | | | | || (_| | (_) \ V  V /| | | |
//   \_____\___/ \__,_|_| |_|\__\__,_|\___/ \_/\_/ |_| |_|
//  |__   __(_)                     | |        | |
//     | |   _ _ __ ___   ___ _ __  | |__   ___| |_ __   ___ _ __
//     | |  | | '_ ` _ \ / _ \ '__| | '_ \ / _ \ | '_ \ / _ \ '__|
//     | |  | | | | | | |  __/ |    | | | |  __/ | |_) |  __/ |
//     |_|  |_|_| |_| |_|\___|_|    |_| |_|\___|_| .__/ \___|_|
//                                               | |
//                                               |_|
// Countdown Timer helper
export var countdown_timer = function (target, callback) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target, callback)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[countdown-timer]'), (elem) => run(elem, callback));
};

// Run
function run(elem, callback) {
  let timer = 0,
    intervalHandle = void 0,
    secondsRemaining = void 0;

  // Get timer from data attribute if timer is empty
  timer || (timer = SUtility.attr(elem, 'countdown-timer'));

  // Check if timer presented
  if (!timer) return;

  //check to make sure the value is a number
  if (isNaN(timer)) return;

  //how many seconds remaining?
  secondsRemaining = timer * 60;

  //every second, call the "tick" function
  intervalHandle = setInterval(() => {
    //convert seconds into mm:ss
    let min = Math.floor(secondsRemaining / 60),
      sec = secondsRemaining - min * 60;

    //add a leading zero (as a string value) if sec is less than 10
    sec < 10 && (sec = '0' + sec);

    //concatenate min and sec with a colon
    let message = min.toString() + ':' + sec;

    //display the concatenated result
    elem.innerHTML = message;

    //stop if down to zero
    if (secondsRemaining === 0) {
      // Clear interval
      clearInterval(intervalHandle);

      // Enable actions
      callback();
    }
    //subtract one second from secondsRemaining
    return secondsRemaining--;
  }, 1000);
}
