('use strict');

// Bootstrap + popper-core
// Local call (Server-side):               url => '../../package/bootstrap/v5.2.3/bootstrap.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/bootstrap@v5.2.3-dD98kLXkWRTekuoxNCW0/mode=imports,min/optimized/bootstrap.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/bootstrap@5.2.3'
import '../../../package/bootstrap/v5.2.3/bootstrap.min.js';

//   ____              _       _
//  |  _ \            | |     | |
//  | |_) | ___   ___ | |_ ___| |_ _ __ __ _ _ __
//  |  _ < / _ \ / _ \| __/ __| __| '__/ _` | '_ \
//  | |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) |
//  |____/ \___/ \___/ \__|___/\__|_|  \__,_| .__/
//                                          | |
//                                          |_|
// Bootstrap
export var bootstrap = async function () {
  // Bootstrap Tooltip
  // Check if view required library
  if (document.querySelector('[data-bs-toggle="tooltip"]')) {
    // Load bootstrap tooltip script only on needed
    let { bootstrap_tooltip } = await import('./bootstrap_tooltip.js');
    bootstrap_tooltip();
  }
};
