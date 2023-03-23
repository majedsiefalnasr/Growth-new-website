('use strict');

// Topic nav
import { topic_nav } from './topic_nav.js';

//   _    _      _          _____           _
//  | |  | |    | |        / ____|         | |
//  | |__| | ___| |_ __   | |     ___ _ __ | |_ ___ _ __
//  |  __  |/ _ \ | '_ \  | |    / _ \ '_ \| __/ _ \ '__|
//  | |  | |  __/ | |_) | | |___|  __/ | | | ||  __/ |
//  |_|  |_|\___|_| .__/   \_____\___|_| |_|\__\___|_|
//                | |
//                |_|
// Help Center
export var help_center = function () {
  // Toggle Topic nav links
  document.querySelector('#help-center-topics-block .side--nav .topic--nav') && topic_nav();

  // Add deep anchor links to help center topic content (h2, h3, h4)
  // Load script only on needed
  document.querySelector('#help-center-topic-block .topic--content') &&
    import('./anchors.js')
      .then(({ anchors }) => anchors())
      .catch((err) => console.log('error:', err));

  // Feedback
  let feedback_container = document.querySelector('[topic-feedback]');

  // Load script only on needed
  feedback_container &&
    import('./feedback.js')
      .then(({ feedback }) => feedback(feedback_container))
      .catch((err) => console.log('error:', err));

  // TOC (Table of content generator)
  // Load script only on needed
  document.querySelector('#toc-content') &&
    import('./table_of_content.js')
      .then(({ table_of_content }) => table_of_content())
      .catch((err) => console.log('error:', err));
};
