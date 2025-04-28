('use strict');

// splide@v3.6.12
// Local call (Server-side):               url => '../package/splidejs/v3.6.12/splide.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/@splidejs/splide@v3.6.12-K2cEQAjNYQEJI7agyAm3/mode=imports,min/optimized/@splidejs/splide.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/@splidejs/splide@v3.6.12'
import Splide from '../../package/splidejs/v3.6.12/splide.min.js';

//    _____       _ _     _
//   / ____|     | (_)   | |
//  | (___  _ __ | |_  __| | ___
//   \___ \| '_ \| | |/ _` |/ _ \
//   ____) | |_) | | | (_| |  __/
//  |_____/| .__/|_|_|\__,_|\___|
//         | |
//         |_|
// Splide
export var splide = function (target, options) {
  // Style
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
  document.head.appendChild(link);

  // Check if run for target
  target && options ? new Splide(target, options).mount() : new Splide(target).mount();
};
