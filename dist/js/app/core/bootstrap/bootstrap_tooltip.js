('use strict');

// Bootstrap + popper-core
// Local call (Server-side):               url => '../../package/bootstrap/v5.2.3/bootstrap.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/bootstrap@v5.2.3-dD98kLXkWRTekuoxNCW0/mode=imports,min/optimized/bootstrap.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/bootstrap@5.2.3'
// import bootstrap from '../../../package/bootstrap/v5.2.3/bootstrap.min.js';

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   ____              _       _                     _______          _ _   _
//  |  _ \            | |     | |                   |__   __|        | | | (_)
//  | |_) | ___   ___ | |_ ___| |_ _ __ __ _ _ __      | | ___   ___ | | |_ _ _ __
//  |  _ < / _ \ / _ \| __/ __| __| '__/ _` | '_ \     | |/ _ \ / _ \| | __| | '_ \
//  | |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) |    | | (_) | (_) | | |_| | |_) |
//  |____/ \___/ \___/ \__|___/\__|_|  \__,_| .__/     |_|\___/ \___/|_|\__|_| .__/
//                                          | |                              | |
//                                          |_|                              |_|
// Bootstrap Tooltip
export var bootstrap_tooltip = async function () {
  // Check if view required library
  if (!document.querySelector('[data-bs-toggle="tooltip"]')) return;

  // Load bootstrap script only on needed
  let bootstrap = await import('../../../package/bootstrap/v5.2.3/bootstrap.min.js');

  SUtility.each(document.querySelectorAll('[data-bs-toggle="tooltip"]'), function (element) {
    let tooltip = new bootstrap.Tooltip(element, {
      container: document.querySelector('#content-block'),
    });
  });
};
