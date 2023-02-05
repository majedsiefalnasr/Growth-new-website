('use strict');

// Utilities
import { SUtility } from './utility.js';

//    _____                   _   _      __          __  _         _ _
//   / ____|                 | | | |     \ \        / / | |       (_) |
//  | |  __ _ __ _____      _| |_| |__    \ \  /\  / /__| |__  ___ _| |_ ___
//  | | |_ | '__/ _ \ \ /\ / / __| '_ \    \ \/  \/ / _ \ '_ \/ __| | __/ _ \
//  | |__| | | | (_) \ V  V /| |_| | | |    \  /\  /  __/ |_) \__ \ | ||  __/
//   \_____|_|  \___/ \_/\_/  \__|_| |_|     \/  \/ \___|_.__/|___/_|\__\___|
//
//
// Growth Website
// On document ready
SUtility.onDOMContentLoaded(() => {
  // Console hello message
  console_hello();

  // Lazy load
  lazy_load();

  // Drag scroll
  drag_scroll();

  // Splide
  splide();

  // Animation
  animation();
});

//    ____                      _        _          _ _
//   / ___|___  _ __  ___  ___ | | ___  | |__   ___| | | ___    _ __ ___   ___  ___ ___  __ _  __ _  ___
//  | |   / _ \| '_ \/ __|/ _ \| |/ _ \ | '_ \ / _ \ | |/ _ \  | '_ ` _ \ / _ \/ __/ __|/ _` |/ _` |/ _ \
//  | |__| (_) | | | \__ \ (_) | |  __/ | | | |  __/ | | (_) | | | | | | |  __/\__ \__ \ (_| | (_| |  __/
//   \____\___/|_| |_|___/\___/|_|\___| |_| |_|\___|_|_|\___/  |_| |_| |_|\___||___/___/\__,_|\__, |\___|
//                                                                                            |___/
// Console hello message
function console_hello() {
  const PROVIDER = 'Ultimate Solutions Egypt',
    PROVIDER_INFO =
      'International leader in Enterprise Resource Solutions and Software Development',
    PROVIDER_LINK = 'https://ultimate-eg.net',
    PROJECT = 'Growth - Smart shopping platform',
    PROJECT_INFO =
      'Without technical experience and with ease, you can sell anywhere and anytime with your online store and with your commercial identity',
    VERSION = 'beta';

  // Check if Chrome
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    // Message
    const _log = [
      `\n%c  ${PROVIDER}  %c \n${PROVIDER_INFO} \n${PROVIDER_LINK}  \n\n${PROJECT} - ${VERSION} %c  \n${PROJECT_INFO}`,
      'color: #fff; border: 1px solid #22447B; background: #22447B; padding:5px;',
      'border: none; padding:5px 5px 0;',
      'border: none; padding:0 5px 5px;',
    ];

    // View message in console log
    setTimeout(console.log.bind(console, ..._log));
  } else if (window.console)
    setTimeout(
      console.log.bind(
        console,
        `\n  ${PROVIDER}  \n ${PROVIDER_INFO}  \n ${PROVIDER_LINK} \n ${PROJECT}  \n ${PROJECT_INFO}\n`
      )
    );
}

//   _                      _                 _
//  | |    __ _ _____   _  | | ___   __ _  __| |
//  | |   / _` |_  / | | | | |/ _ \ / _` |/ _` |
//  | |__| (_| |/ /| |_| | | | (_) | (_| | (_| |
//  |_____\__,_/___|\__, | |_|\___/ \__,_|\__,_|
//                  |___/
// Lazy load
function lazy_load() {
  function logElementEvent(eventName, element) {
    console.log(Date.now(), eventName, element.getAttribute('data-src'));
  }

  var callback_error = function (element) {
    logElementEvent('💀 ERROR', element);
    element.src = 'https://via.placeholder.com/440x560/?text=Error+Placeholder';
  };

  window.lazyLoadOptions = {
    threshold: 0,
    // Assign the callbacks defined above
    callback_error: callback_error,
  };

  window.addEventListener(
    'LazyLoad::Initialized',
    function (e) {
      // console.log(e.detail.instance);
    },
    false
  );
}

//   ____                                       _ _
//  |  _ \ _ __ __ _  __ _   ___  ___ _ __ ___ | | |
//  | | | | '__/ _` |/ _` | / __|/ __| '__/ _ \| | |
//  | |_| | | | (_| | (_| | \__ \ (__| | | (_) | | |
//  |____/|_|  \__,_|\__, | |___/\___|_|  \___/|_|_|
//                   |___/
// Drag scroll
function drag_scroll() {
  // Check if view required library
  if (!document.querySelector('[drag-scroll]')) return;

  SUtility.each(document.querySelectorAll('[drag-scroll]'), function (element) {
    // Rester
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
      pos = {
        // The current scroll
        left: element.scrollLeft,
        top: element.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      // Change the cursor and prevent user from selecting the text
      element.style.cursor = 'grabbing';
      element.style.userSelect = 'none';

      element.addEventListener('mousemove', mouseMoveHandler);
      element.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      element.scrollTop = pos.top - dy;
      element.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      element.removeEventListener('mousemove', mouseMoveHandler);
      element.removeEventListener('mouseup', mouseUpHandler);

      element.style.cursor = 'grab';
      element.style.removeProperty('user-select');
    };

    // Attach the handler
    element.addEventListener('mousedown', mouseDownHandler);
  });
}

//    _____       _ _     _
//   / ____|     | (_)   | |
//  | (___  _ __ | |_  __| | ___
//   \___ \| '_ \| | |/ _` |/ _ \
//   ____) | |_) | | | (_| |  __/
//  |_____/| .__/|_|_|\__,_|\___|
//         | |
//         |_|
// Splide
function splide() {
  // Check if view required library
  if (!document.querySelector('[splide]')) return;

  SUtility.each(document.querySelectorAll('[splide]'), function (element) {
    // Get id
    let id = element.getAttribute('id');

    let options;

    if (element.hasAttribute('splide-futures')) {
      options = {
        perPage: 2.5,
        perMove: 1,
        direction: SUtility.getDir(),
        gap: 64,
        speed: 800,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        focus: 0,
        omitEnd: true,
      };
    } else if (element.hasAttribute('splide-testimonials')) {
      options = {
        perPage: 1,
        perMove: 1,
        direction: SUtility.getDir(),
        gap: 64,
        speed: 800,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        focus: 0,
        omitEnd: true,
      };
    }

    var splide = new Splide('#' + id, options);
    splide.mount();
  });
}

//                  _                 _   _
//      /\         (_)               | | (_)
//     /  \   _ __  _ _ __ ___   __ _| |_ _  ___  _ __
//    / /\ \ | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \
//   / ____ \| | | | | | | | | | (_| | |_| | (_) | | | |
//  /_/    \_\_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_|
//
//
// Animation
function animation() {
  // Check if view required library
  if (document.querySelector('[data-scrolled-into-view]')) {
    SUtility.each(document.querySelectorAll('[data-scrolled-into-view]'), function (target) {
      actions();

      document.addEventListener('scroll', (event) => {
        // Main script
        actions();
      });

      // Main script
      function actions() {
        if (SUtility.isPartInViewport(target))
          SUtility.attr(target, 'data-scrolled-into-view', 'true'),
            SUtility.attr(target, 'data-has-intersected', 'true');

        if (SUtility.attr(target, 'data-scrolled-into-view') == 'false')
          SUtility.attr(target, 'data-has-intersected', 'false');

        if (SUtility.hasAttr(target, 'data-scrolled-past-view'))
          if (window.scrollY > target.offsetTop + target.offsetHeight)
            SUtility.attr(target, 'data-scrolled-past-view', 'true');
          else SUtility.attr(target, 'data-scrolled-past-view', 'false');
      }
    });
  }

  // Distinguish Brand
  let distinguishBrandSection = document.getElementById('distinguish-brand-block'),
    targets = distinguishBrandSection.querySelectorAll('.list .content .item');

  if (targets) {
    // Scroll Differences
    let diffLength = targets.length,
      diffSize = 0.1,
      diffCurrent = diffLength;

    // Loop
    SUtility.each(targets, function (target) {
      // Get target offset top
      let oldTargetTop = target.offsetTop + target.offsetHeight - 80,
        scale = 1 - (diffSize / diffLength) * diffCurrent;

      // For each target
      document.addEventListener('scroll', (event) => {
        // set default style on scrolled to view
        if (SUtility.isPartInViewport(target)) {
          // set default style
          target.style.cssText = ` 
            will-change: transform;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            transform-style: preserve-3d;
          `;
        }

        if (window.scrollY >= oldTargetTop) {
          // set scrolled style
          target.style.cssText =
            ` 
            will-change: transform;
            transform: translate3d(0px, 0px, 0px) scale3d(` +
            scale +
            `, ` +
            scale +
            `, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            transform-style: preserve-3d;
          `;
        }
      });

      // Current target set
      diffCurrent--;
    });
  }
}
