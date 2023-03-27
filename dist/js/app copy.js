('use strict');

// Utilities
import { SUtility } from './app/utilities/utility.js';

// Core
import { core } from './app/core/core.js';

// Utilities
import { utilities } from './app/utilities/utilities.js';

// Pages
import { pages } from './app/pages/pages.js';

// Forms
import { forms } from './app/forms.js';

// Restore account
import { restore_account } from './app/restore_account.js';

//    _____                   _   _
//   / ____|                 | | | |
//  | |  __ _ __ _____      _| |_| |__
//  | | |_ | '__/ _ \ \ /\ / / __| '_ \
//  | |__| | | | (_) \ V  V /| |_| | | |
//  _\_____|_|  \___/ \_/\_/  \__|_| |_|
//  \ \        / / | |       (_) |
//   \ \  /\  / /__| |__  ___ _| |_ ___
//    \ \/  \/ / _ \ '_ \/ __| | __/ _ \
//     \  /\  /  __/ |_) \__ \ | ||  __/
//      \/  \/ \___|_.__/|___/_|\__\___|
//
//
// Growth Website
// On document ready
SUtility.onDOMContentLoaded(() => {
  // Core
  core();

  // Utilities
  utilities();

  // Pages
  pages();

  // Restore account
  restore_account();
});
