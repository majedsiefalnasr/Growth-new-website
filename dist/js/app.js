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

  // Navbar
  navbar();

  // Hero futures
  hero_futures();

  // Floating Actions
  floating_actions();
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
        breakpoints: {
          1199.98: {
            perPage: 2.5,
            gap: 48,
          },
          991.98: {
            perPage: 1.5,
            gap: 32,
          },
          413.98: {
            perPage: 1.1,
            gap: 16,
          },
        },
        perMove: 1,
        direction: SUtility.getDir(),
        gap: 64,
        speed: 800,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        focus: 0,
        omitEnd: true,
        trimSpace: false,
      };
    } else if (element.hasAttribute('splide-testimonials')) {
      options = {
        perPage: 1.2,
        breakpoints: {
          991.98: {
            focus: 'center',
          },
          767.98: {
            focus: 'center',
            perPage: 1.2,
            gap: 32,
          },
          575.98: {
            focus: 'center',
            perPage: 1.4,
            gap: 16,
          },
          413.98: {
            focus: 'center',
            perPage: 1.2,
            gap: 8,
          },
        },
        perMove: 1,
        direction: SUtility.getDir(),
        gap: 64,
        speed: 800,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        focus: 0,
        omitEnd: true,
        trimSpace: false,
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
}

//   _   _             _
//  | \ | |           | |
//  |  \| | __ ___   _| |__   __ _ _ __
//  | . ` |/ _` \ \ / / '_ \ / _` | '__|
//  | |\  | (_| |\ V /| |_) | (_| | |
//  |_| \_|\__,_| \_/ |_.__/ \__,_|_|
//
//
// Navbar
function navbar() {
  var navbar = document.querySelector('[navbar]'),
    navbarInner = navbar.querySelector('[navbar-main]'),
    toggler = navbar.querySelector('[actions] > .toggler'),
    background = navbar.querySelector('.background'),
    bodyContainer = document.querySelector('body');

  // run once
  scrollAction();

  // Actions on scroll
  document.addEventListener('scroll', (event) => {
    scrollAction();
  });

  // Toggle navbar
  SUtility.addEvent(toggler, 'click', (event) => {
    togglerAction();
  });

  // Toggler navbar after click outside
  SUtility.addEvent(background, 'click', (event) => {
    togglerAction();
  });

  // Scroll actions
  function scrollAction() {
    if (window.scrollY == 0) SUtility.removeClass(navbar, 'is-scrolled');
    else SUtility.addClass(navbar, 'is-scrolled');
  }

  function togglerAction() {
    // Browser local direction
    let browserDir = 'right';
    if (/^(ar|arc|dv|fa|ha|he|khw|ks|ku|ps|ur|yi)\b/.test(navigator.language)) browserDir = 'left';

    if (SUtility.hasClass(navbar, 'open')) {
      SUtility.removeClass(navbar, 'open');

      // Remove style
      bodyContainer.style.cssText = '';
      bodyContainer.querySelector('#content-block').style.cssText = '';
      navbar.style.cssText = '';
    } else {
      SUtility.addClass(navbar, 'open');

      // Get prev width of navbar
      let prevWidth = bodyContainer.offsetWidth;

      // Remove scrollbar from body
      bodyContainer.style.overflowY = 'hidden';

      // Get current width of navbar
      let currentWidth = bodyContainer.offsetWidth;

      // add spacer value to content
      bodyContainer.querySelector('#content-block').style.cssText =
        ` padding-` + browserDir + `: ` + (currentWidth - prevWidth) + `px; `;
      navbar.style.cssText =
        ` padding-` + browserDir + `: ` + (currentWidth - prevWidth + 24) + `px; `;
    }
  }
}

//   _    _                   __       _
//  | |  | |                 / _|     | |
//  | |__| | ___ _ __ ___   | |_ _   _| |_ _   _ _ __ ___  ___
//  |  __  |/ _ \ '__/ _ \  |  _| | | | __| | | | '__/ _ \/ __|
//  | |  | |  __/ | | (_) | | | | |_| | |_| |_| | | |  __/\__ \
//  |_|  |_|\___|_|  \___/  |_|  \__,_|\__|\__,_|_|  \___||___/
//
//
// Hero futures
function hero_futures() {
  if (document.querySelector('#hero-block .futures')) {
    SUtility.each(document.querySelectorAll('#hero-block .futures .item'), function (target) {
      SUtility.addEvent(target, 'click', () => {
        if (!SUtility.hasClass(target, 'active')) {
          // Remove active from prev item
          SUtility.removeClass(
            document.querySelector('#hero-block .futures .item.active'),
            'active'
          );

          // Add active to target
          SUtility.addClass(target, 'active');
        }
      });
    });
  }
}

//   ______ _             _   _                            _   _
//  |  ____| |           | | (_)                 /\       | | (_)
//  | |__  | | ___   __ _| |_ _ _ __   __ _     /  \   ___| |_ _  ___  _ __  ___
//  |  __| | |/ _ \ / _` | __| | '_ \ / _` |   / /\ \ / __| __| |/ _ \| '_ \/ __|
//  | |    | | (_) | (_| | |_| | | | | (_| |  / ____ \ (__| |_| | (_) | | | \__ \
//  |_|    |_|\___/ \__,_|\__|_|_| |_|\__, | /_/    \_\___|\__|_|\___/|_| |_|___/
//                                     __/ |
//                                    |___/
// Floating Actions
function floating_actions() {
  var container = document.querySelector('#floating-actions'),
    backToTop = container.querySelector('.back-to-top'),
    share = container.querySelector('.share');

  // Run once for view or hide Floating Actions
  view_hide_action();

  // Hide Floating Actions scroll to top ov view
  window.addEventListener('scroll', function () {
    view_hide_action();
  });

  // View or hide Floating Actions
  function view_hide_action() {
    if (window.pageYOffset > 100) container.classList.add('view');
    else container.classList.remove('view');
  }

  // On click share action
  SUtility.addEvent(share, 'click', () => {
    var description = `Without technical experience and with ease, you can sell anywhere and anytime 
      with your online store and with your commercial identity`;

    if (document.querySelector('[itemprop=description]'))
      description = document.querySelector('[itemprop=description]').content;
    else if (document.querySelector('[name=description]'))
      description = document.querySelector('[name=description]').content;

    const shareData = {
      title: document.title,
      text: description,
      url: document.URL,
    };

    navigator.share(shareData);
  });

  // On click back to top action
  SUtility.addEvent(backToTop, 'click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
