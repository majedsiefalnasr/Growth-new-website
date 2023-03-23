('use strict');

//    _____                _ _   _____ _______ _         __ _
//   / ____|              | | | |  __ \__   __| |       / _(_)
//  | (___   ___ _ __ ___ | | | | |__) | | |  | |      | |_ ___  __
//   \___ \ / __| '__/ _ \| | | |  _  /  | |  | |      |  _| \ \/ /
//   ____) | (__| | | (_) | | | | | \ \  | |  | |____  | | | |>  <
//  |_____/ \___|_|  \___/|_|_| |_|  \_\ |_|  |______| |_| |_/_/\_\
//
//
// Scroll RTL fix
export var scroll_horizontal_fix = function () {
  document.dir == 'rtl'
    ? (document.scrollLeft = document.scrollWidth)
    : (document.scrollRight = document.scrollWidth);
};
