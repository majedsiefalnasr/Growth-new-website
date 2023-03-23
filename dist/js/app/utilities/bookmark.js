('use strict');

// Utilities
import { SUtility } from './utility.js';

//   ____              _                         _
//  |  _ \            | |                       | |
//  | |_) | ___   ___ | | ___ __ ___   __ _ _ __| | __
//  |  _ < / _ \ / _ \| |/ / '_ ` _ \ / _` | '__| |/ /
//  | |_) | (_) | (_) |   <| | | | | | (_| | |  |   <
//  |____/ \___/ \___/|_|\_\_| |_| |_|\__,_|_|  |_|\_\
//
//
// Bookmark
export var bookmark = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[data-bookmark]'), (elem) => run(elem));
};

// Run
function run(elem) {
  SUtility.addEvent(elem, 'click', () => {
    if (window.sidebar && window.sidebar.addPanel)
      // Firefox <23
      window.sidebar.addPanel(document.title, window.location.href, '');
    else if (window.external && 'AddFavorite' in window.external)
      // Internet Explorer
      window.external.AddFavorite(location.href, document.title);
    else if (
      (window.opera && window.print) ||
      (window.sidebar && !(window.sidebar instanceof Node))
    )
      // Opera <15 and Firefox >23
      /**
       * For Firefox <23 and Opera <15, no need for JS to add to bookmarks
       * The only thing needed is a `title` and a `rel="sidebar"`
       * To ensure that the bookmarked URL doesn't have a complementary `#` from our trigger's href
       * we force the current URL
       */
      triggerBookmark
        .attr('rel', 'sidebar')
        .attr('title', document.title)
        .attr('href', window.location.href);
    // For the other browsers (mainly WebKit) we use a simple alert to inform users that they can add to bookmarks with ctrl+D/cmd+D
    else
      alert(
        'You can add this page to your bookmarks by pressing ' +
          (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') +
          ' + D on your keyboard.'
      );
  });
}
