('use strict');

// Console hello message
import { console_hello } from './console_hello.js';

// Scroll RTL fix
import { scroll_horizontal_fix } from './scroll_horizontal_fix.js';

// Page loading animation
import { page_loading_animation } from './page_loading_animation.js';

// Bootstrap
import { bootstrap } from './bootstrap/bootstrap.js';

//    _____
//   / ____|
//  | |     ___  _ __ ___
//  | |    / _ \| '__/ _ \
//  | |___| (_) | | |  __/
//   \_____\___/|_|  \___|
//
//
// Core
export var core = async function () {
  // Console hello message
  console_hello();

  // Scroll RTL fix
  scroll_horizontal_fix();

  // Page loading animation
  page_loading_animation();

  // Bootstrap
  bootstrap();

  // Cuberto Mouse Followe
  // Load script only on needed
  document.querySelector('body[data-cursor]') &&
    import('./mouse_followe.js')
      .then(({ mouse_followe }) => mouse_followe())
      .catch((err) => console.log('error:', err));

  // Animation on scroll
  // Load script only on needed
  document.querySelector('[data-scrolled-into-view]') &&
    import('./animation_on_scroll.js')
      .then(({ animation_on_scroll }) => animation_on_scroll())
      .catch((err) => console.log('error:', err));

  // Floating Actions
  // Load script only on needed
  document.querySelector('#floating-actions') &&
    import('./floating_actions.js')
      .then(({ floating_actions }) => floating_actions())
      .catch((err) => console.log('error:', err));

  // Navbar
  // Load script only on needed
  document.querySelector('[navbar]') &&
    import('./navbar.js')
      .then(({ navbar }) => navbar())
      .catch((err) => console.log('error:', err));
};
