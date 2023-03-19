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

  // Scroll RTL fix
  scroll_horizontal_fix();

  // Page loading animation
  page_loading_animation();

  // Bootstrap Tooltip
  bootstrap_tooltip();

  // Cuberto Mouse Followe
  mouse_followe();

  // Magnetic
  magnetic();

  // Share action
  share_action();

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

  // Pricing switcher
  pricing_switcher_actions();

  // Pricing plan mobile switcher
  pricing_plan_switcher_actions();

  // Pricing accordion mobile
  pricing_accordion_mobile();

  // Bookmark actions
  bookmark_actions();

  // Blog actions
  blog_actions();

  // Help Center actions
  help_center_actions();

  // Parallax
  parallax();

  // HC-Sticky
  HC_Sticky();

  // Password input strength checker
  password_strength_checker();

  // Forms
  forms();

  // Restore account
  restore_account();
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

//   ____              _       _                     _______          _ _   _
//  |  _ \            | |     | |                   |__   __|        | | | (_)
//  | |_) | ___   ___ | |_ ___| |_ _ __ __ _ _ __      | | ___   ___ | | |_ _ _ __
//  |  _ < / _ \ / _ \| __/ __| __| '__/ _` | '_ \     | |/ _ \ / _ \| | __| | '_ \
//  | |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) |    | | (_) | (_) | | |_| | |_) |
//  |____/ \___/ \___/ \__|___/\__|_|  \__,_| .__/     |_|\___/ \___/|_|\__|_| .__/
//                                          | |                              | |
//                                          |_|                              |_|
// Bootstrap Tooltip
function bootstrap_tooltip() {
  // Check if view required library
  if (!document.querySelector('[data-bs-toggle="tooltip"]')) return;

  SUtility.each(document.querySelectorAll('[data-bs-toggle="tooltip"]'), function (element) {
    let tooltip = new bootstrap.Tooltip(element, {
      container: document.querySelector('#content-block'),
    });
  });
}

//    _____                _ _   _____ _______ _         __ _
//   / ____|              | | | |  __ \__   __| |       / _(_)
//  | (___   ___ _ __ ___ | | | | |__) | | |  | |      | |_ ___  __
//   \___ \ / __| '__/ _ \| | | |  _  /  | |  | |      |  _| \ \/ /
//   ____) | (__| | | (_) | | | | | \ \  | |  | |____  | | | |>  <
//  |_____/ \___|_|  \___/|_|_| |_|  \_\ |_|  |______| |_| |_/_/\_\
//
//
// Scroll RTL fix
function scroll_horizontal_fix() {
  document.dir == 'rtl'
    ? (document.scrollLeft = document.scrollWidth)
    : (document.scrollRight = document.scrollWidth);
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
    } else if (element.hasAttribute('splide-testimonials-small')) {
      options = {
        perPage: 1.2,
        breakpoints: {
          767.98: {
            perPage: 1.2,
            gap: 32,
          },
          575.98: {
            perPage: 1.4,
            gap: 16,
          },
          413.98: {
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
        focus: 'center',
        omitEnd: true,
        trimSpace: false,
      };
    } else if (element.hasAttribute('splide-blog-hero')) {
      options = {
        type: 'slide',
        autoplay: false,
        perPage: 1,
        breakpoints: {
          767.98: {
            gap: 32,
            perPage: 1.2,
          },
        },
        perMove: 1,
        direction: SUtility.getDir(),
        gap: 64,
        speed: 800,
        arrows: true,
        pagination: true,
        lazyLoad: 'nearby',
        focus: 'center',
        omitEnd: true,
        trimSpace: false,
        arrowPath:
          'M24.7264 30.667C24.6229 30.7725 24.4994 30.8562 24.3631 30.9134C24.2269 30.9706 24.0806 31 23.9329 31C23.7851 31 23.6388 30.9706 23.5026 30.9134C23.3664 30.8562 23.2429 30.7725 23.1394 30.667C22.9332 30.4575 22.8177 30.1754 22.8177 29.8815C22.8177 29.5876 22.9332 29.3055 23.1394 29.096L31.1864 21.049L4.63237 21.049C4.01337 21.049 3.50537 20.557 3.50537 19.938C3.50537 19.319 4.01337 18.811 4.63237 18.811L31.1864 18.811L23.1394 10.779C22.7104 10.335 22.7104 9.62004 23.1394 9.19204C23.2429 9.08661 23.3664 9.00286 23.5026 8.94569C23.6388 8.88852 23.7851 8.85908 23.9329 8.85908C24.0806 8.85908 24.2269 8.88852 24.3631 8.94569C24.4994 9.00286 24.6229 9.08661 24.7264 9.19204L34.6784 19.144C34.8845 19.3535 35 19.6356 35 19.9295C35 20.2234 34.8845 20.5055 34.6784 20.715L24.7264 30.667Z',
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

      // Scroll
      let scrollEvent = document.addEventListener('scroll', (event) => {
        // Main script
        actions();
      });

      // Resize
      let resizeEvent = document.addEventListener('resize', (event) => {
        // Main script
        actions();
      });

      // Main script
      function actions() {
        if (
          SUtility.isPartInViewport(target) &&
          SUtility.attr(target, 'data-scrolled-into-view') == 'false'
        )
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
  var navbar = document.querySelector('[navbar]');

  // Check if exist
  if (!navbar) return;

  var navbarInner = navbar.querySelector('[navbar-main]'),
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
      bodyContainer.style.overflowY = 'auto';
      bodyContainer.querySelector('#content-block').style.cssText = '';
      navbarInner.style.cssText = '';
    } else {
      SUtility.addClass(navbar, 'open');

      let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Remove scrollbar from body
      bodyContainer.style.overflowY = 'hidden';

      // add spacer value to content
      bodyContainer.querySelector('#content-block').style.cssText =
        ` padding-` + browserDir + `: ` + scrollbarWidth + `px; `;
      navbarInner.style.cssText = `left : calc(50% - ` + scrollbarWidth / 2 + `px); `;
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
  var container = document.querySelector('#floating-actions');

  // Check if exist
  if (!container) return;

  var backToTop = container.querySelector('.back-to-top'),
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

//   _____      _      _                            _ _       _
//  |  __ \    (_)    (_)                          (_) |     | |
//  | |__) | __ _  ___ _ _ __   __ _   _____      ___| |_ ___| |__   ___ _ __
//  |  ___/ '__| |/ __| | '_ \ / _` | / __\ \ /\ / / | __/ __| '_ \ / _ \ '__|
//  | |   | |  | | (__| | | | | (_| | \__ \\ V  V /| | || (__| | | |  __/ |
//  |_|   |_|  |_|\___|_|_| |_|\__, | |___/ \_/\_/ |_|\__\___|_| |_|\___|_|
//                              __/ |
//                             |___/
// Pricing switcher
function pricing_switcher_actions() {
  var container = document.querySelector('.switch-wrapper');

  // Check if target exist
  if (!container) return;

  var plans = document.querySelector('.switch-wrapper ~ .plans '),
    plans_table = document.querySelector('.switch-wrapper ~ .plans--table'),
    monthly = container.querySelector('#monthly'),
    yearly = container.querySelector('#yearly');

  // Check if monthly is checked
  SUtility.addEvent(monthly, 'change', () => {
    if (monthly.checked) {
      // Remove yearly check
      SUtility.removeClass(plans, 'yearly');
      SUtility.removeClass(plans_table, 'yearly');

      // Add monthly check
      SUtility.addClass(plans, 'monthly');
      SUtility.addClass(plans_table, 'monthly');
    }
  });

  // Check if yearly is checked
  SUtility.addEvent(yearly, 'change', () => {
    if (yearly.checked) {
      // Remove monthly check
      SUtility.removeClass(plans, 'monthly');
      SUtility.removeClass(plans_table, 'monthly');

      // Add yearly check
      SUtility.addClass(plans, 'yearly');
      SUtility.addClass(plans_table, 'yearly');
    }
  });
}

//   _____      _      _                                           _ _                               _     _ _
//  |  __ \    (_)    (_)                                         | (_)                             | |   (_) |
//  | |__) | __ _  ___ _ _ __   __ _    __ _  ___ ___ ___  _ __ __| |_  ___  _ __    _ __ ___   ___ | |__  _| | ___
//  |  ___/ '__| |/ __| | '_ \ / _` |  / _` |/ __/ __/ _ \| '__/ _` | |/ _ \| '_ \  | '_ ` _ \ / _ \| '_ \| | |/ _ \
//  | |   | |  | | (__| | | | | (_| | | (_| | (_| (_| (_) | | | (_| | | (_) | | | | | | | | | | (_) | |_) | | |  __/
//  |_|   |_|  |_|\___|_|_| |_|\__, |  \__,_|\___\___\___/|_|  \__,_|_|\___/|_| |_| |_| |_| |_|\___/|_.__/|_|_|\___|
//                              __/ |
//                             |___/
// Pricing accordion mobile
function pricing_accordion_mobile() {
  var container = document.querySelector('#price-block .plans');
  // Check if target is exist
  if (!container) return;

  var plans = document.querySelectorAll('#price-block .plans .item');

  // Run once
  run();

  SUtility.addEvent(window, 'resize', () => {
    run();
  });

  function run() {
    if (window.innerWidth < 1200) {
      SUtility.each(plans, (plan) => {
        SUtility.addEvent(plan, 'click', () => {
          // Remove active state from prev element
          container.querySelector('.item.active .content').style.height = '0px';
          SUtility.removeClass(container.querySelector('.item.active'), 'active');

          // Add active state to current element
          plan.querySelector('.content').style.height =
            plan.querySelector('.content').scrollHeight + 'px';
          SUtility.addClass(plan, 'active');
        });
      });
    }
  }
}

//   _____      _      _                     _
//  |  __ \    (_)    (_)                   | |
//  | |__) | __ _  ___ _ _ __   __ _   _ __ | | __ _ _ __
//  |  ___/ '__| |/ __| | '_ \ / _` | | '_ \| |/ _` | '_ \
//  | |   | |  | | (__| | | | | (_| | | |_) | | (_| | | | |
//  |_|   |_|  |_|\___|_|_|_|_|\__, | | .__/|_|\__,_|_| |_|  _
//                  | |   (_) | __/ | | |         (_) |     | |
//   _ __ ___   ___ | |__  _| ||___/  |_|__      ___| |_ ___| |__   ___ _ __
//  | '_ ` _ \ / _ \| '_ \| | |/ _ \ / __\ \ /\ / / | __/ __| '_ \ / _ \ '__|
//  | | | | | | (_) | |_) | | |  __/ \__ \\ V  V /| | || (__| | | |  __/ |
//  |_| |_| |_|\___/|_.__/|_|_|\___| |___/ \_/\_/ |_|\__\___|_| |_|\___|_|
//
//
// Pricing plan mobile switcher
function pricing_plan_switcher_actions() {
  var container = document.querySelector('.switch-wrapper ~ .plans--table .table--nav');
  // Check if target is exist
  if (!container) return;

  var links = container.querySelectorAll('a[href]');

  // Loop all switcher
  SUtility.each(links, (item) => {
    // Scroll on click
    SUtility.addEvent(item, 'click', () => {
      event.preventDefault();

      // Get target ID
      let element = document.querySelector(SUtility.attr(item, 'href'));
      let headerOffset = 220;
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });

    // Active on scroll to target
    document.addEventListener('scroll', (event) => {
      // Target element
      let target = document.querySelector(SUtility.attr(item, 'href'));

      if (SUtility.isPartInViewport(target)) {
        // Remove active status from old tab
        if (container.querySelector('a[href].active'))
          SUtility.removeClass(container.querySelector('a[href].active'), 'active');

        // Add active status to current tab
        SUtility.addClass(item, 'active');
      }
    });
  });
}

//   _____                   _                 _ _                           _                 _   _
//  |  __ \                 | |               | (_)                         (_)               | | (_)
//  | |__) |_ _  __ _  ___  | | ___   __ _  __| |_ _ __   __ _    __ _ _ __  _ _ __ ___   __ _| |_ _  ___  _ __
//  |  ___/ _` |/ _` |/ _ \ | |/ _ \ / _` |/ _` | | '_ \ / _` |  / _` | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \
//  | |  | (_| | (_| |  __/ | | (_) | (_| | (_| | | | | | (_| | | (_| | | | | | | | | | | (_| | |_| | (_) | | | |
//  |_|   \__,_|\__, |\___| |_|\___/ \__,_|\__,_|_|_| |_|\__, |  \__,_|_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_|
//               __/ |                                    __/ |
//              |___/                                    |___/
// Page loading animation
function page_loading_animation() {
  var body = document.body;

  // On window load
  window.addEventListener('load', () => {
    SUtility.removeClass(document.body, 'page-loading');
  });

  // On page before unload
  window.addEventListener('beforeunload', () => {
    SUtility.addClass(document.body, 'page-reloading');
  });
}

//    _____ _                                 _   _
//   / ____| |                               | | (_)
//  | (___ | |__   __ _ _ __ ___    __ _  ___| |_ _  ___  _ __
//   \___ \| '_ \ / _` | '__/ _ \  / _` |/ __| __| |/ _ \| '_ \
//   ____) | | | | (_| | | |  __/ | (_| | (__| |_| | (_) | | | |
//  |_____/|_| |_|\__,_|_|  \___|  \__,_|\___|\__|_|\___/|_| |_|
//
//
// Share action
function share_action() {
  var share_containers = document.querySelectorAll('[data-share]');

  // Check if target is exist
  if (!share_containers) return;

  // Loop share actions
  SUtility.each(share_containers, (element) => {
    let share_url = SUtility.attr(element, 'data-share-url'),
      share_title = SUtility.attr(element, 'data-share-title'),
      share_description = SUtility.attr(element, 'data-share-description');

    // On click share action
    SUtility.addEvent(element, 'click', () => {
      // Check if has URL
      if (!share_url) share_url = document.URL;

      // Check if has title
      if (!share_title) share_title = document.title;

      // Check if has description
      if (!share_description) {
        share_description = `Without technical experience and with ease, you can sell anywhere and anytime 
      with your online store and with your commercial identity`;

        if (document.querySelector('[itemprop=description]'))
          share_description = document.querySelector('[itemprop=description]').content;
        else if (document.querySelector('[name=description]'))
          share_description = document.querySelector('[name=description]').content;
      }

      // Open share dialog
      const shareData = {
        title: share_title,
        text: share_description,
        url: share_url,
      };

      navigator.share(shareData);
    });
  });
}

//   ____              _                         _                 _   _
//  |  _ \            | |                       | |               | | (_)
//  | |_) | ___   ___ | | ___ __ ___   __ _ _ __| | __   __ _  ___| |_ _  ___  _ __  ___
//  |  _ < / _ \ / _ \| |/ / '_ ` _ \ / _` | '__| |/ /  / _` |/ __| __| |/ _ \| '_ \/ __|
//  | |_) | (_) | (_) |   <| | | | | | (_| | |  |   <  | (_| | (__| |_| | (_) | | | \__ \
//  |____/ \___/ \___/|_|\_\_| |_| |_|\__,_|_|  |_|\_\  \__,_|\___|\__|_|\___/|_| |_|___/
//
//
// Bookmark actions
function bookmark_actions() {
  // Bookmark action
  var bookmark = document.querySelector('[bookmark]');

  // Check if target is exist
  if (bookmark) {
    // Add to bookmark
    SUtility.addEvent(bookmark, 'click', () => {
      if (window.sidebar && window.sidebar.addPanel) {
        // Firefox <23
        window.sidebar.addPanel(document.title, window.location.href, '');
      } else if (window.external && 'AddFavorite' in window.external) {
        // Internet Explorer
        window.external.AddFavorite(location.href, document.title);
      } else if (
        (window.opera && window.print) ||
        (window.sidebar && !(window.sidebar instanceof Node))
      ) {
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
        return true;
      } else {
        // For the other browsers (mainly WebKit) we use a simple alert to inform users that they can add to bookmarks with ctrl+D/cmd+D

        alert(
          'You can add this page to your bookmarks by pressing ' +
            (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') +
            ' + D on your keyboard.'
        );
      }
      // If you have something in the `href` of your trigger
      return false;
    });
  }
}

//   ____  _                          _   _
//  |  _ \| |                        | | (_)
//  | |_) | | ___   __ _    __ _  ___| |_ _  ___  _ __  ___
//  |  _ <| |/ _ \ / _` |  / _` |/ __| __| |/ _ \| '_ \/ __|
//  | |_) | | (_) | (_| | | (_| | (__| |_| | (_) | | | \__ \
//  |____/|_|\___/ \__, |  \__,_|\___|\__|_|\___/|_| |_|___/
//                  __/ |
//                 |___/
// Blog actions
function blog_actions() {
  // Change view
  var change_view_container = document.querySelector('.change-view');

  // Check if target is exist
  if (change_view_container) {
    // Change view action
    let grid = change_view_container.querySelector('[grid]'),
      list = change_view_container.querySelector('[list]'),
      blogs = document.querySelector('.blog--list');

    // Change view to grid
    SUtility.addEvent(grid, 'click', () => {
      // Check if active
      if (SUtility.hasClass(grid, 'active')) return;

      // Change active status
      SUtility.addClass(grid, 'active');
      SUtility.removeClass(list, 'active');

      // Change view on blogs
      SUtility.removeClass(blogs, 'list--view');
    });

    // Change view to list
    SUtility.addEvent(list, 'click', () => {
      // Check if active
      if (SUtility.hasClass(list, 'active')) return;

      // Change active status
      SUtility.addClass(list, 'active');
      SUtility.removeClass(grid, 'active');

      // Change view on blogs
      SUtility.addClass(blogs, 'list--view');
    });
  }

  // AnchorJS
  // Add deep anchor links to Help Center Topics
  var anchors_HCT = document.querySelector('#blog-block .blog--content');

  // Check if target is exist
  if (anchors_HCT) {
    // Set options
    anchors.options = {
      placement: 'right',
    };

    // Init anchor
    anchors.add('#blog-block .blog--content h2:not(.no-anchor)');
    anchors.add('#blog-block .blog--content h3:not(.no-anchor)');
    anchors.add('#blog-block .blog--content h4:not(.no-anchor)');
  }
}

//   _    _      _          _____           _                         _   _
//  | |  | |    | |        / ____|         | |                       | | (_)
//  | |__| | ___| |_ __   | |     ___ _ __ | |_ ___ _ __    __ _  ___| |_ _  ___  _ __  ___
//  |  __  |/ _ \ | '_ \  | |    / _ \ '_ \| __/ _ \ '__|  / _` |/ __| __| |/ _ \| '_ \/ __|
//  | |  | |  __/ | |_) | | |___|  __/ | | | ||  __/ |    | (_| | (__| |_| | (_) | | | \__ \
//  |_|  |_|\___|_| .__/   \_____\___|_| |_|\__\___|_|     \__,_|\___|\__|_|\___/|_| |_|___/
//                | |
//                |_|
// Help Center actions
function help_center_actions() {
  // Toggle Topic nav links
  var topic_nav_container = document.querySelector(
    '#help-center-topics-block .side--nav .topic--nav'
  );

  // Check if target is exist
  if (topic_nav_container) {
    // Toggle action
    let toggle_action = topic_nav_container.querySelector('[links-toggler]'),
      toggle_links = topic_nav_container.querySelector('.links');

    SUtility.addEvent(toggle_action, 'click', () => {
      // Toggle action class
      SUtility.toggleClass(toggle_action, 'open');
      SUtility.toggleClass(toggle_links, 'open');
    });
  }

  // TOC (Table of content generator)
  (function ($) {
    // TOC (Table of content generator)
    var toc_container = $('#toc-content');

    // Check if target is exist
    if (toc_container)
      //Calls the tocify method on your HTML div.
      $('#toc').tocify({
        // The container element that holds all of the elements used to generate
        // the table of contents
        context: '#toc-content',
        // The element's used to generate the table of contents. The order is very
        // important since it will determine the table of content's nesting structure.
        selectors: 'h2,h3',
        // Used to hide any of the table of contents nested items.
        hideEffect: 'slideUp',
        // How the URL hash value get's generated.
        hashGenerator: 'pretty',
        // Elements that you do not want to be used to generate the table of contents
        ignoreSelector: '.toc-ignore',
        // The amount of space between the top of page and the selected table of contents
        // item after the page has been scrolled.
        scrollTo: 160,
        // The offset distance in pixels to trigger the next active table of contents item
        highlightOffset: 160,
        // If a user scrolls to the bottom of the page and the page is not tall enough to
        // scroll to the last table of contents item, then the page height is increased
        extendPage: false,
        // Set's the first TOC item as active if no other TOC item is active.
        highlightDefault: true,
        // Adds a hash to the page url to maintain history
        history: false,
      });
  })(jQuery);

  // Feedback
  var feedback_container = document.querySelector('[topic-feedback]');

  // Check if target is exist
  if (feedback_container) {
    let feedback_action_thumbs_up = feedback_container.querySelector('[thumbs-up]'),
      feedback_action_thumbs_down = feedback_container.querySelector('[thumbs-down]'),
      feedback_action_submit = feedback_container.querySelector('#buttonFeedbackVerbatimSubmit'),
      feedback_action_cancel = feedback_container.querySelector('#buttonFeedbackVerbatimCancel');

    // Helpful action
    SUtility.addEvent(feedback_action_thumbs_up, 'click', () => {
      // Scroll to view
      window.scrollTo({
        top: feedback_container.getBoundingClientRect().top + window.pageYOffset - 160,
        behavior: 'smooth',
      });

      // add
      SUtility.addClass(feedback_container, 'helpful');
      SUtility.removeClass(feedback_container, 'not-helpful');

      // Reset checkboxes
      reset_checkboxes();
    });

    // Not helpful action
    SUtility.addEvent(feedback_action_thumbs_down, 'click', () => {
      // Scroll to view
      window.scrollTo({
        top: feedback_container.getBoundingClientRect().top + window.pageYOffset - 160,
        behavior: 'smooth',
      });

      // add
      SUtility.addClass(feedback_container, 'not-helpful');
      SUtility.removeClass(feedback_container, 'helpful');

      // Reset checkboxes
      reset_checkboxes();
    });

    // Submit action
    SUtility.addEvent(feedback_action_submit, 'click', () => {
      //add
      SUtility.addClass(feedback_container, 'thanks');
      SUtility.removeClass(feedback_container, 'not-helpful');
      SUtility.removeClass(feedback_container, 'helpful');

      // Reset checkboxes
      reset_checkboxes();
    });

    // Cancel action
    SUtility.addEvent(feedback_action_cancel, 'click', () => {
      // add
      SUtility.addClass(feedback_container, 'thanks');
      SUtility.removeClass(feedback_container, 'not-helpful');
      SUtility.removeClass(feedback_container, 'helpful');

      // Reset checkboxes
      reset_checkboxes();
    });

    // Get all checkboxes and verbatim feedback
    let checkboxes = feedback_container.querySelectorAll('.experience-option input'),
      verbatimFeedback = feedback_container.querySelector('#verbatimFeedback');

    // Enable submit action
    let submit_action = feedback_container.querySelector('[type="submit"]');
    // Checkboxes
    SUtility.each(checkboxes, (el) => {
      SUtility.addEvent(el, 'change', () => {
        if (el.checked) submit_action.disabled = false;
        else if (check_checkboxes()) submit_action.disabled = false;
        else if (verbatimFeedback.value.length != 0) submit_action.disabled = false;
        else submit_action.disabled = true;
      });
    });
    // Verbatim feedback
    SUtility.addEvent(verbatimFeedback, 'keyup', () => {
      // Set active state
      verbatimFeedback.value.length != 0
        ? SUtility.addClass(verbatimFeedback, 'active')
        : SUtility.removeClass(verbatimFeedback, 'active');

      // Enable submit action
      if (verbatimFeedback.value.length != 0) submit_action.disabled = false;
      else if (check_checkboxes()) submit_action.disabled = false;
      else submit_action.disabled = true;
    });

    // Reset checkboxes
    var reset_checkboxes = function () {
      SUtility.each(checkboxes, (el) => {
        el.checked = false;
      });
    };

    // Check if any checkbox is checked
    var check_checkboxes = function () {
      // Default state
      let checked = false;

      SUtility.each(checkboxes, (el) => {
        if (el.checked) checked = true;
      });

      return checked;
    };
  }

  // AnchorJS
  // Add deep anchor links to Help Center Topics
  // Bookmark action
  var anchors_HCT = document.querySelector('#help-center-topic-block .topic--content');

  // Check if target is exist
  if (anchors_HCT) {
    // Set options
    anchors.options = {
      placement: 'right',
    };

    // Init anchor
    anchors.add('#help-center-topic-block .topic--content h2:not(.no-anchor)');
    anchors.add('#help-center-topic-block .topic--content h3:not(.no-anchor)');
    anchors.add('#help-center-topic-block .topic--content h4:not(.no-anchor)');
  }
}

//   __  __                        ______    _ _
//  |  \/  |                      |  ____|  | | |
//  | \  / | ___  _   _ ___  ___  | |__ ___ | | | _____      _____
//  | |\/| |/ _ \| | | / __|/ _ \ |  __/ _ \| | |/ _ \ \ /\ / / _ \
//  | |  | | (_) | |_| \__ \  __/ | | | (_) | | | (_) \ V  V /  __/
//  |_|  |_|\___/ \__,_|___/\___| |_|  \___/|_|_|\___/ \_/\_/ \___|
//
//
// Mouse Followe
function mouse_followe() {
  // Get all magnetic elements
  var mouseFollowe = document.querySelector('body[data-cursor]');

  // Check if target is exist
  if (mouseFollowe) {
    var cursor = null;

    // Run once
    if (!cursor && window.innerWidth >= 992) cursor = init();

    // Attaching the event listener function to window's resize event
    window.addEventListener('resize', () => {
      // Run only on desktop
      if (!cursor && window.innerWidth >= 992) cursor = init();
      else if (window.innerWidth < 992) cursor = destroy(cursor);
    });
  }

  // Init
  function init() {
    const cursor = new MouseFollower({
      el: null,
      container: document.body,
      className: 'g-cursor',
      innerClassName: 'g-cursor-inner',
      textClassName: 'g-cursor-text',
      mediaClassName: 'g-cursor-media',
      mediaBoxClassName: 'g-cursor-media-box',
      iconSvgClassName: 'g-svgsprite',
      iconSvgNamePrefix: '-',
      iconSvgSrc: '',
      dataAttr: 'cursor',
      hiddenState: '-hidden',
      textState: '-text',
      iconState: '-icon',
      activeState: '-active',
      mediaState: '-media',
      stateDetection: {
        '-stick': `
            [data-cursor-stick], 
            .splide__arrows--rtl .splide__arrow, 
            .splide__pagination,
            .categories .item,
            .blog--pagination .pagination .page-link,
            .sm-links > *,
            #floating-actions > *,
            .anchorjs-link,
            [topics] .item .links > *,
            [topics] .item > .btn,
            .topic--nav .links .content > *,
            [more-topics] .links > *`,
        '-stick -magnetic': '[data-cursor-stick][data-magnetic]',
        '-magnify -color-burn': `
            [data-cursor-magnify], 
            [data-cursor-magnify-inner] > *,
            .site-logo`,
        '-magnify-sm -color-burn': `
            [data-cursor-magnify-sm], 
            [data-cursor-magnify-sm-inner] > *, 
            [navbar-main-list] .nav-link,
            .links-list .links .link,
            .topic--category-content > * .links > *,
            #toc .tocify-item a,
            [data-feedback] a`,
        '-magnify-lg -color-burn': `
            [data-cursor-magnify-lg],
            [data-cursor-magnify-lg-inner] > *`,
        '-hidden': `
            iframe, [data-cursor-hidden],
            .form-control, .form-select,
            [verify-code] .code`,
      },
      visible: true,
      visibleOnState: false,
      speed: 0.6,
      ease: 'expo.out',
      overwrite: true,
      skewing: 4,
      skewingText: 2,
      skewingIcon: 3,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 20,
      hideOnLeave: true,
      hideTimeout: 300,
      hideMediaTimeout: 300,
    });

    return cursor;
  }

  // Destroy
  function destroy(cursor) {
    if (cursor) cursor.destroy();
    return null;
  }
}

//   __  __                        _   _
//  |  \/  |                      | | (_)
//  | \  / | __ _  __ _ _ __   ___| |_ _  ___
//  | |\/| |/ _` |/ _` | '_ \ / _ \ __| |/ __|
//  | |  | | (_| | (_| | | | |  __/ |_| | (__
//  |_|  |_|\__,_|\__, |_| |_|\___|\__|_|\___|
//                 __/ |
//                |___/
// Magnetic
function magnetic() {
  // Get all magnetic elements
  var magnetic_elements = document.querySelectorAll('[data-magnetic]');

  // Check if target is exist
  if (magnetic_elements) {
    (function ($) {
      // Loop all magnetic element to add action
      magnetic_elements.forEach(function (elem) {
        $(document).on('mousemove touch', function (e) {
          var elelel = new Magnetic(elem, {});
          // magnetize(elem, e);
        });
      });
    })(jQuery);
  }

  class Magnetic {
    constructor(el, options = {}) {
      this.el = $(el);
      this.options = $.extend(
        true,
        {
          y: 0.2,
          x: 0.2,
          s: 0.15,
          rs: 0.5,
        },
        this.el.data('magnetic') || options
      );

      this.y = 0;
      this.x = 0;
      this.width = 0;
      this.height = 0;

      if (this.el.data('magnetic-init')) return;
      this.el.data('magnetic-init', true);

      this.bind();
    }

    bind() {
      this.el.on('mouseenter', () => {
        this.y = this.el.offset().top - window.pageYOffset;
        this.x = this.el.offset().left - window.pageXOffset;
        this.width = this.el.outerWidth();
        this.height = this.el.outerHeight();
      });

      this.el.on('mousemove', (e) => {
        const y = (e.clientY - this.y - this.height / 2) * this.options.y;
        const x = (e.clientX - this.x - this.width / 2) * this.options.x;

        this.move(x, y, this.options.s);
      });

      this.el.on('mouseleave', (e) => {
        this.move(0, 0, this.options.rs);
      });
    }

    move(x, y, speed) {
      gsap.to(this.el, {
        y: y,
        x: x,
        force3D: true,
        overwrite: true,
        duration: speed,
      });
    }
  }
}

//   _____                _ _
//  |  __ \              | | |
//  | |__) |_ _ _ __ __ _| | | __ ___  __
//  |  ___/ _` | '__/ _` | | |/ _` \ \/ /
//  | |  | (_| | | | (_| | | | (_| |>  <
//  |_|   \__,_|_|  \__,_|_|_|\__,_/_/\_\
//
//
// Parallax
function parallax() {
  // Get parallax container
  var parallax_container = document.querySelector('[data-parallax]');

  // Check if target is exist
  if (parallax_container) {
    (function () {
      // Get Moving parent
      let parallax_parent = document.querySelector(
        SUtility.attr(parallax_container, 'data-parallax')
      );

      // The elements you want to parallax.
      var parallax_items = parallax_container.querySelectorAll('.parallax');

      // Use this value to adjust the amount of parallax in response to mouse movement.
      var fixer = 0.003;

      parallax_parent.addEventListener('mousemove', function (event) {
        // get the mouseX - negative on left, positive on right
        var pageX = event.pageX - parallax_container.getBoundingClientRect().width * 0.5;

        // same here, get the y. use console.log(pageY) to see the values
        var pageY = event.pageY - parallax_container.getBoundingClientRect().height * 0.5;

        for (let i = 0; i < parallax_items.length; i++) {
          var item = parallax_items[i];
          var speedX = item.getAttribute('data-speed-x');
          var speedY = item.getAttribute('data-speed-y');

          // Instead of using 'TweenLite.set' you can use 'TweenLite.to' which results in a smoother initial transition (when the mouse enters) at the cost of some preformance.
          // Change the '+' to '-' if you want to invert the parallax motion in relation to the mouse movement.
          TweenLite.set(item, {
            x: (item.offsetLeft + pageX * speedX) * fixer,
            y: (item.offsetTop + pageY * speedY) * fixer,
          });
        }
      });
    })();
  }
}

//   _    _  _____      _____ _   _      _
//  | |  | |/ ____|    / ____| | (_)    | |
//  | |__| | |   _____| (___ | |_ _  ___| | ___   _
//  |  __  | |  |______\___ \| __| |/ __| |/ / | | |
//  | |  | | |____     ____) | |_| | (__|   <| |_| |
//  |_|  |_|\_____|   |_____/ \__|_|\___|_|\_\\__, |
//                                             __/ |
//                                            |___/
// HC-Sticky
function HC_Sticky() {
  // Get HC-Sticky container
  var HC_Sticky_containers = document.querySelectorAll('[data-HC-Sticky]');

  // Check if target is exist
  if (HC_Sticky_containers) {
    // Loop all HC Sticky
    SUtility.each(HC_Sticky_containers, (container) => {
      let HC_Sticky_top = SUtility.attr(container, 'data-HC-Sticky-top') || 40,
        HC_Sticky_bottom = SUtility.attr(container, 'data-HC-Sticky-bottom') || 40,
        HC_Sticky_innerTop = SUtility.attr(container, 'data-HC-Sticky-innerTop') || 0,
        HC_Sticky_bottomEnd = SUtility.attr(container, 'data-HC-Sticky-bottomEnd') || 0,
        HC_Sticky_disable = SUtility.hasAttr(container, 'data-HC-Sticky-disable') || false,
        HC_Sticky_disable_sm = SUtility.hasAttr(container, 'data-HC-Sticky-disable-sm') || false,
        HC_Sticky_disable_md = SUtility.hasAttr(container, 'data-HC-Sticky-disable-md') || false,
        HC_Sticky_disable_lg = SUtility.hasAttr(container, 'data-HC-Sticky-disable-lg') || false,
        HC_Sticky_disable_xl = SUtility.hasAttr(container, 'data-HC-Sticky-disable-xl') || false,
        HC_Sticky_onStart = SUtility.attr(container, 'data-HC-Sticky-onStart') || null,
        HC_Sticky_onStop = SUtility.attr(container, 'data-HC-Sticky-onStop') || null,
        HC_Sticky_onBeforeResize =
          SUtility.attr(container, 'data-HC-Sticky-onBeforeResize') || null,
        HC_Sticky_onResize = SUtility.attr(container, 'data-HC-Sticky-onResize') || null;

      var Sticky = new hcSticky(container, {
        // The distance from the top
        top: HC_Sticky_top,
        // The distance from the bottom
        bottom: HC_Sticky_bottom,
        // The distance from the bottom of the referring element
        bottomEnd: HC_Sticky_bottomEnd,
        // The distance from the top inside of the sticky content
        innerTop: HC_Sticky_innerTop,
        // Element at which to trigger HC-Sticky instead of top of sticky container.
        // This has higher priority than innerTop option.
        // innerSticker: null,
        // Classname of sticky element
        // stickyClass: 'sticky',
        // Classname of wrapper
        // wrapperClassName: 'wrapper-sticky',
        // Element that represents the reference for height instead of height of the container. recalculate
        // stickTo: container.parentNode,
        // Object containing responsive breakpoints
        responsive: {
          576: {
            disable: HC_Sticky_disable_sm,
          },
          768: {
            disable: HC_Sticky_disable_md,
          },
          992: {
            disable: HC_Sticky_disable_lg,
          },
          1200: {
            disable: HC_Sticky_disable_xl,
          },
        },
        // When set to false, sticky content will not move with the page if it is bigger that Window.
        // followScroll: true,
        // Direction of the responsive queries.
        // mobileFirst: true,
        // Limit the rate at which the HC Sticky can fire on window resize.
        // resizeDebounce: 100,
        // Disable the plugin
        disable: HC_Sticky_disable,
        // Callbacks
        onStart: HC_Sticky_onStart,
        onStop: HC_Sticky_onStop,
        onBeforeResize: HC_Sticky_onBeforeResize,
        onResize: HC_Sticky_onResize,
      });
    });
  }
}

//   ______
//  |  ____|
//  | |__ ___  _ __ _ __ ___  ___
//  |  __/ _ \| '__| '_ ` _ \/ __|
//  | | | (_) | |  | | | | | \__ \
//  |_|  \___/|_|  |_| |_| |_|___/
//
//
// Forms
function forms() {
  // Get parallax container
  var forms_container = document.querySelector('#forms-block [form] form');

  // Check if target is exist
  if (forms_container) {
    // Change form Email/Phone
    switchers_helper(forms_container);

    // Init Phone countries dropdown
    phone_countries_helper(forms_container);

    // Password input toggler
    password_toggler();

    // Verify code helper
    verify_code_helper();

    // Countdown Timer helper
    countdown_timer(document.querySelector('[countdown-timer]'));

    // Sign in/up selected email/phone
    sign_in_up_selected_email_phone(forms_container);

    // Check form validity on form submit
    form_validation_helper(forms_container);
  }

  /////////////////////////////////////////
  // Helpers
  /////////////////////////////////////////
  // Switch between tabs ( Email / Phone number )
  function switchers_helper(forms_container) {
    let form_body = forms_container.querySelector('[body]'),
      email_switcher = forms_container.querySelector('[body]> [data-action] [email]'),
      phone_switcher = forms_container.querySelector('[body] >[data-action] [phone]');

    // Email switcher click
    SUtility.addEvent(email_switcher, 'click', () => {
      // Change form type to email
      SUtility.attr(forms_container, 'data-target', 'email');

      // Disable
      // Form inputs
      disable_form_helper(form_body);

      // Enable
      // Form inputs
      enable_form_helper(forms_container.querySelector('[body] > .email'));

      // Reset validation
      form_validation_helper(forms_container, 'reset');
    });

    // Phone switcher click
    SUtility.addEvent(phone_switcher, 'click', () => {
      // Change form type to email
      SUtility.attr(forms_container, 'data-target', 'phone');

      // Disable
      // Form inputs
      disable_form_helper(form_body);

      // Enable
      // Form inputs
      enable_form_helper(forms_container.querySelector('[body] > .phone'));

      // Reset validation
      form_validation_helper(forms_container, 'reset');
    });
  }

  // Disable form inputs helper
  function disable_form_helper(container) {
    SUtility.each(container.querySelectorAll('.form-control'), (el) => {
      SUtility.attr(el, 'disabled', '');
    });
  }

  // Enable form inputs helper
  function enable_form_helper(container) {
    SUtility.each(container.querySelectorAll('.form-control'), (el) => {
      // Enable input
      SUtility.removeAttr(el, 'disabled');
      // Empty input
      el.value = '';
    });

    // Focus first input
    setTimeout(function () {
      container.querySelector('.form-control').focus();
    }, 1);
  }

  // Init Phone countries dropdown
  function phone_countries_helper(forms_container) {
    // Phone number - Sign up
    var input_signup = forms_container.querySelector('#sign-up-phone');

    // Check if required
    if (input_signup)
      window.intlTelInput(input_signup, {
        autoHideDialCode: false,
        preferredCountries: ['eg', 'sa', 'ae', 'qa', 'ye', 'om', 'bh', 'kw', 'ma'],
        utilsScript:
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js',
      });

    // Phone number - Sign in
    var input_signin = forms_container.querySelector('#sign-in-phone');

    // Check if required
    if (input_signin)
      window.intlTelInput(input_signin, {
        autoHideDialCode: false,
        preferredCountries: ['eg', 'sa', 'ae', 'qa', 'ye', 'om', 'bh', 'kw', 'ma'],
        utilsScript:
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js',
      });
  }

  // Check form validation
  function form_validation_helper(forms_container, action) {
    var feedback_container = forms_container.querySelectorAll('[body] [data-feedback]');

    // Action
    if (!action) {
      // - Set
      SUtility.addEvent(forms_container, 'submit', () => {
        // For test purpose
        // Prevent submit default for test purpose
        event.preventDefault();
        event.stopPropagation();

        ///////////////////////////
        // Check validation
        // Check page / Sign Up
        if (SUtility.attr(forms_container, 'data-validation-page') == 'sign up')
          sign_up_validation(forms_container);
        // Check page / Sign In
        if (SUtility.attr(forms_container, 'data-validation-page') == 'sign in')
          sign_in_validation(forms_container);
      });
    } else if (action == 'reset') {
      // - Reset
      SUtility.each(forms_container.querySelectorAll('.is-invalid'), (invalid) => {
        SUtility.removeClass(invalid, 'is-invalid');
      });

      // Clear feedback validation
      SUtility.each(feedback_container, (el) => {
        SUtility.attr(el, 'data-feedback', '');
        SUtility.each(el.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
      });
    }
  }

  // Sign up validation
  async function sign_up_validation(forms_container) {
    let data_target = SUtility.attr(forms_container, 'data-target');

    // Email
    if (data_target == 'email') {
      let email_form_container = forms_container.querySelector('[body] > .email'),
        form_input_email = email_form_container.querySelector('#sign-up-email'),
        form_input_email_feedback = document.querySelector(
          '[data-feedback-target="sign-up-email"]'
        ),
        feedback_empty = form_input_email_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_email_feedback.querySelector('[data-feedback-invalid]'),
        feedback_used = form_input_email_feedback.querySelector('[data-feedback-used]'),
        state = 'empty';

      // Check if empty
      if (form_input_email.value == '') {
        // Focus input
        form_input_email.focus();
        form_input_email.select();
        // Set validation focus
        SUtility.addClass(form_input_email, 'is-invalid');

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_email_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      }
      // Check if valid
      else if (!form_input_email.checkValidity()) {
        // Focus input
        form_input_email.focus();
        form_input_email.select();
        // Set validation focus
        SUtility.addClass(form_input_email, 'is-invalid');

        // Set state
        state = 'inValid';

        // Clear feedback
        SUtility.each(form_input_email_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_invalid, 'active');
      } else {
        // Check if used
        let email_used = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.email == form_input_email.value)) email_used = true;
          });

        // Email already used
        if (email_used) {
          // Focus input
          form_input_email.focus();
          form_input_email.select();
          // Set validation focus
          SUtility.addClass(form_input_email, 'is-invalid');

          // Set state
          state = 'used';

          // Clear feedback
          SUtility.each(form_input_email_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_used, 'active');
        } else {
          // Email not used
          // Create new account and go to password page
          window.location.replace('./create-account-email.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_email_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_email_feedback, 'data-feedback', state);
    }

    // Email - password
    if (data_target == 'email-password') {
      let email_form_container = forms_container.querySelector('[body] > .email'),
        form_input_pass = email_form_container.querySelector('#sign-up-pass'),
        form_input_pass_feedback = document.querySelector('[data-feedback-target="sign-up-pass"]'),
        pass_feedback_empty = form_input_pass_feedback.querySelector('[data-feedback-empty]'),
        pass_state = 'empty',
        form_input_repass = email_form_container.querySelector('#sign-up-pass-repeat'),
        form_input_repass_feedback = document.querySelector(
          '[data-feedback-target="sign-up-pass-repeat"]'
        ),
        repass_feedback_empty = form_input_repass_feedback.querySelector('[data-feedback-empty]'),
        repass_feedback_invalid =
          form_input_repass_feedback.querySelector('[data-feedback-invalid]'),
        repass_state = 'empty';

      // Check if empty
      if (form_input_pass.value == '') {
        // Focus input
        form_input_pass.focus();
        form_input_pass.select();
        // Set validation focus
        SUtility.addClass(form_input_pass, 'is-invalid');

        // Set state
        pass_state = 'empty';

        // Clear password feedback
        SUtility.each(form_input_pass_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(pass_feedback_empty, 'active');

        // Clear password repeat input
        SUtility.each(form_input_repass_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
      } else {
        // Clear password feedback
        SUtility.each(form_input_pass_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });

        // Set state
        pass_state = '';

        // Check if password repeat is empty
        if (form_input_repass.value == '') {
          // Focus input
          form_input_repass.focus();
          form_input_repass.select();
          // Set validation focus
          SUtility.removeClass(form_input_pass, 'is-invalid');
          SUtility.addClass(form_input_repass, 'is-invalid');

          // Set state
          repass_state = 'empty';

          // Clear password feedback
          SUtility.each(form_input_repass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(repass_feedback_empty, 'active');
        }
        // Check if password and password repeat is equal
        else if (form_input_pass.value != form_input_repass.value) {
          // Focus input
          form_input_repass.focus();
          form_input_repass.select();
          // Set validation focus
          SUtility.removeClass(form_input_pass, 'is-invalid');
          SUtility.addClass(form_input_repass, 'is-invalid');

          // Set state
          repass_state = 'invalid';

          // Clear password feedback
          SUtility.each(form_input_repass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(repass_feedback_invalid, 'active');
        } else {
          // Email not used
          // Create new account and go to password page
          window.location.replace('./create-account-email.html');

          // Clear state
          repass_state = '';

          // Clear password feedback
          SUtility.each(form_input_repass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_pass_feedback, 'data-feedback', pass_state);
      SUtility.attr(form_input_repass_feedback, 'data-feedback', repass_state);
    }

    // Phone
    if (data_target == 'phone') {
      let phone_form_container = forms_container.querySelector('[body] > .phone'),
        form_input_phone = phone_form_container.querySelector('#sign-up-phone'),
        form_input_phone_feedback = document.querySelector(
          '[data-feedback-target="sign-up-phone"]'
        ),
        feedback_empty = form_input_phone_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_phone_feedback.querySelector('[data-feedback-invalid]'),
        feedback_used = form_input_phone_feedback.querySelector('[data-feedback-used]'),
        state = 'empty';

      // Get instance of phone input
      var iti = window.intlTelInputGlobals.getInstance(form_input_phone);

      // Check if empty
      if (iti.getNumber() == '') {
        // Focus input
        form_input_phone.focus();
        form_input_phone.select();
        // Set validation focus
        SUtility.addClass(form_input_phone, 'is-invalid');

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_phone_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      }
      // Check if valid
      else if (!iti.isValidNumber()) {
        // Focus input
        form_input_phone.focus();
        form_input_phone.select();
        // Set validation focus
        SUtility.addClass(form_input_phone, 'is-invalid');

        // Set state
        state = 'inValid';

        // Clear feedback
        SUtility.each(form_input_phone_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_invalid, 'active');
      } else {
        // Check if used
        let phone_used = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.phone == iti.getNumber())) phone_used = true;
          });

        // Phone already used
        if (phone_used) {
          // Focus input
          form_input_phone.focus();
          form_input_phone.select();
          // Set validation focus
          SUtility.addClass(form_input_phone, 'is-invalid');

          // Set state
          state = 'used';

          // Clear feedback
          SUtility.each(form_input_phone_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_used, 'active');
        } else {
          // Phone not used
          // Create new account and go to check code page
          window.location.replace('./create-account-phone.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_phone_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_phone_feedback, 'data-feedback', state);
    }

    // Phone verify code
    if (data_target == 'phone-confirm-code') {
      let phone_form_container = forms_container.querySelector('[body] > .phone'),
        form_input_phone_code_container =
          phone_form_container.querySelector('#sign-up-verify-code'),
        form_input_phone_code = form_input_phone_code_container.querySelectorAll('input.code'),
        form_input_phone_code_feedback = document.querySelector(
          '[data-feedback-target="sign-up-verify-code"]'
        ),
        feedback_empty = form_input_phone_code_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_phone_code_feedback.querySelector('[data-feedback-invalid]'),
        feedback_used = form_input_phone_code_feedback.querySelector('[data-feedback-used]'),
        state = 'empty';

      // Check if any input is empty
      let empty_code = false;
      SUtility.each(form_input_phone_code, (input) => {
        if (input.value == '') empty_code = true;
      });

      // If their is an empty input
      if (empty_code) {
        // Focus input
        form_input_phone_code[form_input_phone_code.length - 1].focus();
        form_input_phone_code[form_input_phone_code.length - 1].select();
        // Set validation focus
        SUtility.each(form_input_phone_code, (input) => {
          SUtility.addClass(input, 'is-invalid');
        });

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_phone_code_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      } else {
        // Get verify code
        let verify_code = '';
        SUtility.each(form_input_phone_code, (input) => {
          verify_code += input.value;
        });

        // Check if correct
        let code_correct = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.verifyCode == verify_code)) code_correct = true;
          });

        if (!code_correct) {
          // Focus input
          form_input_phone_code[0].focus();
          form_input_phone_code[0].select();
          // Set validation focus
          SUtility.each(form_input_phone_code, (input) => {
            SUtility.addClass(input, 'is-invalid');
          });

          // Set state
          state = 'invalid';

          // Clear feedback
          SUtility.each(form_input_phone_code_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_invalid, 'active');
        } else {
          // Verify code is correct
          // Create new account and go to check code page
          window.location.replace('./create-account-phone.html');
          // Clear state
          state = '';
          // Clear feedback
          SUtility.each(form_input_phone_code_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_phone_code_feedback, 'data-feedback', state);
    }
  }

  // Sign in validation
  async function sign_in_validation(forms_container) {
    let data_target = SUtility.attr(forms_container, 'data-target');

    // Email
    if (data_target == 'email') {
      let email_form_container = forms_container.querySelector('[body] > .email'),
        form_input_email = email_form_container.querySelector('#sign-in-email'),
        form_input_email_feedback = document.querySelector(
          '[data-feedback-target="sign-in-email"]'
        ),
        feedback_empty = form_input_email_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_email_feedback.querySelector('[data-feedback-invalid]'),
        feedback_notused = form_input_email_feedback.querySelector('[data-feedback-notused]'),
        state = 'empty';

      // Check if empty
      if (form_input_email.value == '') {
        // Focus input
        form_input_email.focus();
        form_input_email.select();
        // Set validation focus
        SUtility.addClass(form_input_email, 'is-invalid');

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_email_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      }
      // Check if valid
      else if (!form_input_email.checkValidity()) {
        // Focus input
        form_input_email.focus();
        form_input_email.select();
        // Set validation focus
        SUtility.addClass(form_input_email, 'is-invalid');

        // Set state
        state = 'inValid';

        // Clear feedback
        SUtility.each(form_input_email_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_invalid, 'active');
      } else {
        // Check if exist
        let email_used = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.email == form_input_email.value)) email_used = true;
          });

        // Email already used
        if (!email_used) {
          // Focus input
          form_input_email.focus();
          form_input_email.select();
          // Set validation focus
          SUtility.addClass(form_input_email, 'is-invalid');

          // Set state
          state = 'notUsed';

          // Clear feedback
          SUtility.each(form_input_email_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_notused, 'active');
        } else {
          // Email not used
          // Create new account and go to password page
          window.location.replace('./signin-account-email.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_email_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_email_feedback, 'data-feedback', state);
    }

    // Email - password
    if (data_target == 'email-password') {
      let email_form_container = forms_container.querySelector('[body] > .email'),
        form_input_pass = email_form_container.querySelector('#sign-in-pass'),
        form_input_pass_feedback = document.querySelector('[data-feedback-target="sign-in-pass"]'),
        feedback_empty = form_input_pass_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_pass_feedback.querySelector('[data-feedback-invalid]'),
        state = 'empty';

      // Check if empty
      if (form_input_pass.value == '') {
        // Focus input
        form_input_pass.focus();
        form_input_pass.select();
        // Set validation focus
        SUtility.addClass(form_input_pass, 'is-invalid');

        // Set state
        pass_state = 'empty';

        // Clear password feedback
        SUtility.each(form_input_pass_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      } else {
        // Check if password is correct
        let pass_correct = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.password == form_input_pass.value))
              pass_correct = true;
          });

        // Password not correct
        if (!pass_correct) {
          // Focus input
          form_input_pass.focus();
          form_input_pass.select();
          // Set validation focus
          SUtility.addClass(form_input_pass, 'is-invalid');

          // Set state
          state = 'inValid';

          // Clear feedback
          SUtility.each(form_input_pass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_invalid, 'active');
        } else {
          // Password is correct
          // Create new account and go to password page
          window.location.replace('./signin-account-email.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_pass_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_pass_feedback, 'data-feedback', pass_state);
    }

    // Phone
    if (data_target == 'phone') {
      let phone_form_container = forms_container.querySelector('[body] > .phone'),
        form_input_phone = phone_form_container.querySelector('#sign-in-phone'),
        form_input_phone_feedback = document.querySelector(
          '[data-feedback-target="sign-in-phone"]'
        ),
        feedback_empty = form_input_phone_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_phone_feedback.querySelector('[data-feedback-invalid]'),
        feedback_notused = form_input_phone_feedback.querySelector('[data-feedback-notused]'),
        state = 'empty';

      // Get instance of phone input
      var iti = window.intlTelInputGlobals.getInstance(form_input_phone);

      // Check if empty
      if (iti.getNumber() == '') {
        // Focus input
        form_input_phone.focus();
        form_input_phone.select();
        // Set validation focus
        SUtility.addClass(form_input_phone, 'is-invalid');

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_phone_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      }
      // Check if valid
      else if (!iti.isValidNumber()) {
        // Focus input
        form_input_phone.focus();
        form_input_phone.select();
        // Set validation focus
        SUtility.addClass(form_input_phone, 'is-invalid');

        // Set state
        state = 'inValid';

        // Clear feedback
        SUtility.each(form_input_phone_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_invalid, 'active');
      } else {
        // Phone is already used
        let phone_used = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.phone == iti.getNumber())) phone_used = true;
          });

        // Phone already used
        if (!phone_used) {
          // Focus input
          form_input_phone.focus();
          form_input_phone.select();
          // Set validation focus
          SUtility.addClass(form_input_phone, 'is-invalid');

          // Set state
          state = 'notUsed';

          // Clear feedback
          SUtility.each(form_input_phone_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_notused, 'active');
        } else {
          // Phone not used
          // Create new account and go to check code page
          window.location.replace('./signin-account-email.html');

          // Clear state
          state = '';

          // Clear feedback
          SUtility.each(form_input_phone_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_phone_feedback, 'data-feedback', state);
    }

    // Phone verify code
    if (data_target == 'phone-confirm-code') {
      let phone_form_container = forms_container.querySelector('[body] > .phone'),
        form_input_phone_code_container =
          phone_form_container.querySelector('#sign-in-verify-code'),
        form_input_phone_code = form_input_phone_code_container.querySelectorAll('input.code'),
        form_input_phone_code_feedback = document.querySelector(
          '[data-feedback-target="sign-in-verify-code"]'
        ),
        feedback_empty = form_input_phone_code_feedback.querySelector('[data-feedback-empty]'),
        feedback_invalid = form_input_phone_code_feedback.querySelector('[data-feedback-invalid]'),
        state = 'empty';

      // Check if any input is empty
      let empty_code = false;
      SUtility.each(form_input_phone_code, (input) => {
        if (input.value == '') empty_code = true;
      });

      // If their is an empty input
      if (empty_code) {
        // Focus input
        form_input_phone_code[form_input_phone_code.length - 1].focus();
        form_input_phone_code[form_input_phone_code.length - 1].select();
        // Set validation focus
        SUtility.each(form_input_phone_code, (input) => {
          SUtility.addClass(input, 'is-invalid');
        });

        // Set state
        state = 'empty';

        // Clear feedback
        SUtility.each(form_input_phone_code_feedback.children, (child) => {
          SUtility.removeClass(child, 'active');
        });
        // View current feedback
        SUtility.addClass(feedback_empty, 'active');
      } else {
        // Get verify code
        let verify_code = '';
        SUtility.each(form_input_phone_code, (input) => {
          verify_code += input.value;
        });

        // Check if correct
        let code_correct = false;
        // This an ajax request
        await fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            if (json.find((element) => element.verifyCode == verify_code)) code_correct = true;
          });

        if (!code_correct) {
          // Focus input
          form_input_phone_code[0].focus();
          form_input_phone_code[0].select();
          // Set validation focus
          SUtility.each(form_input_phone_code, (input) => {
            SUtility.addClass(input, 'is-invalid');
          });

          // Set state
          state = 'invalid';

          // Clear feedback
          SUtility.each(form_input_phone_code_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
          // View current feedback
          SUtility.addClass(feedback_invalid, 'active');
        } else {
          // Verify code is correct
          // Create new account and go to check code page
          window.location.replace('./create-account-phone.html');
          // Clear state
          state = '';
          // Clear feedback
          SUtility.each(form_input_phone_code_feedback.children, (child) => {
            SUtility.removeClass(child, 'active');
          });
        }
      }

      // Set feedback state
      SUtility.attr(form_input_phone_code_feedback, 'data-feedback', state);
    }
  }

  // Password input toggler
  function password_toggler() {
    // Get all forms
    let password_inputs = document.querySelectorAll('[data-form-pass]');

    // Check if required
    if (!password_inputs) return;

    // Loop all forms
    SUtility.each(password_inputs, (pass_el) => {
      let pass_el_input = pass_el.querySelector('input'),
        pass_el_toggler = pass_el.querySelector('.show-pass em'),
        pass_el_related = document.querySelector(
          '#' + SUtility.attr(pass_el, 'data-form-pass-related') + ''
        ),
        state = false;

      // Toggler action on click
      SUtility.addEvent(pass_el_toggler, 'click', () => {
        // Check if password is shown
        if (state) {
          // Hide password
          pass_el_input.setAttribute('type', 'password');
          SUtility.addClass(pass_el_toggler, 'ph-icon-eye');
          SUtility.removeClass(pass_el_toggler, 'ph-icon-eyeslash');
          state = false;

          // Hide related password if exist
          if (pass_el_related) pass_el_related.setAttribute('type', 'password');
        } else {
          // View password
          pass_el_input.setAttribute('type', 'text');
          SUtility.addClass(pass_el_toggler, 'ph-icon-eyeslash');
          SUtility.removeClass(pass_el_toggler, 'ph-icon-eye');
          state = true;

          // View related password if exist
          if (pass_el_related) pass_el_related.setAttribute('type', 'text');
        }
      });
    });
  }

  // Verify code helper
  function verify_code_helper() {
    let verify_code_container = document.querySelector('[verify-code]');

    // Check if required
    if (!verify_code_container) return;

    // Loop all inputs
    let verify_code_list = verify_code_container.querySelectorAll('input.code');
    SUtility.each(verify_code_list, (input, index) => {
      // Change focus to first empty input
      input.addEventListener('focusin', () => {
        if (input.value == '')
          if (verify_code_list[index - 1] && verify_code_list[index - 1].value == '')
            verify_code_list[index - 1].focus();
      });

      // Change focus on keydown
      input.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
          input.value = '';
          if (verify_code_list[index + 1])
            setTimeout(() => {
              verify_code_list[index + 1].focus();
            }, 10);
        } else if (e.key === 'Backspace') {
          input.value = '';
          if (verify_code_list[index - 1])
            setTimeout(() => {
              verify_code_list[index - 1].focus();
            }, 10);
        }
      });
    });
  }

  // Countdown Timer helper
  function countdown_timer(timer_el) {
    // Check if required
    if (!timer_el) return;

    let timer = 0,
      intervalHandle = void 0,
      secondsRemaining = void 0;

    // Get timer from data attribute if timer is empty
    if (!timer) timer = SUtility.attr(timer_el, 'countdown-timer');

    // Check if timer presented
    if (!timer) return;

    //check to make sure the value is a number
    if (isNaN(timer)) return;
    //how many seconds remaining?
    secondsRemaining = timer * 60;
    //every second, call the "tick" function

    intervalHandle = setInterval(() => {
      //convert seconds into mm:ss
      let min = Math.floor(secondsRemaining / 60),
        sec = secondsRemaining - min * 60;

      //add a leading zero (as a string value) if sec is less than 10
      if (sec < 10) {
        sec = '0' + sec;
      }
      //concatenate min and sec with a colon
      let message = min.toString() + ':' + sec;
      //display the concatenated result
      timer_el.innerHTML = message;

      //stop if down to zero
      if (secondsRemaining === 0) {
        // Clear interval
        clearInterval(intervalHandle);

        // Enable actions
        let SMS = document.querySelector('[data-action="SMS"]'),
          whatsapp = document.querySelector('[data-action="whatsapp"]');

        SUtility.removeAttr(SMS, 'disabled');
        SUtility.removeAttr(whatsapp, 'disabled');
      }
      //subtract one second from secondsRemaining
      return secondsRemaining--;
    }, 1000);
  }

  // Sign in/up selected email/phone
  function sign_in_up_selected_email_phone(forms_container) {
    // Check page / Sign Up
    if (SUtility.attr(forms_container, 'data-validation-page') == 'sign up')
      sign_up_selected_email_phone(forms_container);
    // Check page / Sign In
    if (SUtility.attr(forms_container, 'data-validation-page') == 'sign in')
      sign_in_selected_email_phone(forms_container);
  }

  // Sign in selected email/phone
  function sign_in_selected_email_phone(forms_container) {
    let selected_email_container = forms_container.querySelector('[data-selected-email]'),
      selected_phone_container = forms_container.querySelector('[data-selected-phone]');

    // Check if email selected exist
    if (selected_email_container) {
      let email_container = selected_email_container.querySelector('[data-email]'),
        change_action = selected_email_container.querySelector('[data-action]');

      // Set email
      // Get email from previous step

      // Change email action
      SUtility.addEvent(change_action, 'click', () => {
        // Back to previous step with current email
        window.location.replace('./signin-account.html');
      });
    }

    // Check if phone selected exist
    if (selected_phone_container) {
      let phone_container = selected_phone_container.querySelector('[data-email]'),
        change_action = selected_phone_container.querySelector('[data-action]');

      // Set phone
      // Get phone from previous step

      // Change phone action
      SUtility.addEvent(change_action, 'click', () => {
        // Back to previous step with current email
        window.location.replace('./signin-account.html');
      });
    }
  }

  // Sign up selected email/phone
  function sign_up_selected_email_phone(forms_container) {
    let selected_email_container = forms_container.querySelector('[data-selected-email]'),
      selected_phone_container = forms_container.querySelector('[data-selected-phone]');

    // Check if email selected exist
    if (selected_email_container) {
      let email_container = selected_email_container.querySelector('[data-email]'),
        change_action = selected_email_container.querySelector('[data-action]');

      // Set email
      // Get email from previous step

      // Change email action
      SUtility.addEvent(change_action, 'click', () => {
        // Back to previous step with current email
        window.location.replace('./create-account.html');
      });
    }

    // Check if phone selected exist
    if (selected_phone_container) {
      let phone_container = selected_phone_container.querySelector('[data-email]'),
        change_action = selected_phone_container.querySelector('[data-action]');

      // Set phone
      // Get phone from previous step

      // Change phone action
      SUtility.addEvent(change_action, 'click', () => {
        // Back to previous step with current email
        window.location.replace('./create-account.html');
      });
    }
  }
}

//   _____                                    _       _                        _   _
//  |  __ \                                  | |     | |                      | | | |
//  | |__) |_ _ ___ _____      _____  _ __ __| |  ___| |_ _ __ ___ _ __   __ _| |_| |__
//  |  ___/ _` / __/ __\ \ /\ / / _ \| '__/ _` | / __| __| '__/ _ \ '_ \ / _` | __| '_ \
//  | |  | (_| \__ \__ \\ V  V / (_) | | | (_| | \__ \ |_| | |  __/ | | | (_| | |_| | | |
//  |_|   \__,_|___/___/ \_/\_/ \___/|_|  \__,_| |___/\__|_|  \___|_| |_|\__, |\__|_| |_|
//       | |             | |                                              __/ |
//    ___| |__   ___  ___| | _____ _ __                                  |___/
//   / __| '_ \ / _ \/ __| |/ / _ \ '__|
//  | (__| | | |  __/ (__|   <  __/ |
//   \___|_| |_|\___|\___|_|\_\___|_|
//
//
// Password strength checker
function password_strength_checker() {
  // Get all forms
  let password_inputs = document.querySelectorAll('[data-pass-strength]');

  // Check if required
  if (!password_inputs) return;

  // Loop all forms
  SUtility.each(password_inputs, (pass_el) => {
    let pass_el_id = SUtility.attr(pass_el, 'data-pass-strength'),
      pass_el_input = document.querySelector('input[id="' + pass_el_id + '"]');

    // Check if password strength field has target
    if (!pass_el_input) return;

    let password_progress = pass_el.querySelector('.progress-bar');

    // let password_note = pass_el.querySelector('.notes'),
    //   password_note_estimate = password_note.querySelector('[estimate]'),
    //   password_note_metaphor = password_note.querySelector('[metaphor]'),
    //   password_note_explanation = password_note.querySelector('[explanation]'),
    //   password_note_warning = password_note.querySelector('[warning]'),
    //   password_note_suggestions = password_note.querySelector('[suggestions]');

    pass_el_input.addEventListener('keyup', function () {
      // Ignore if password input is empty
      if (pass_el_input.value == '') {
        // Hide notes
        // SUtility.removeClass(password_note, 'view');

        // Reset score progress
        password_progress.setAttribute('aria-valuenow', '0');
        password_progress.style = '';

        return;
      }

      // Check password strength using ZXCVBN
      let checked = zxcvbn(pass_el_input.value),
        strength = checked.score,
        setScoreProgress_fallback,
        displayEstimate_fallback,
        displayMetaphor_fallback,
        displayWeakExplanation_fallback,
        displayWarning_fallback,
        displaySuggestions_fallback;

      // Sit time to crack password in words
      // displayEstimate_fallback = displayEstimate(
      //   checked.crack_times_seconds.online_no_throttling_10_per_second,
      //   password_note_estimate
      // );

      // Set strength progress
      setScoreProgress_fallback = setScoreProgress(strength, password_progress);

      // Check metaphor
      // displayMetaphor_fallback = displayMetaphor(strength, password_note_metaphor);

      // Check explanation
      // displayWeakExplanation_fallback = displayWeakExplanation(checked.sequence, strength, password_note_explanation);

      // Check warning
      // displayWarning_fallback = displayWarning(checked.feedback.warning, password_note_warning);

      // Check suggestions
      // displaySuggestions_fallback = displaySuggestions(checked.feedback.suggestions, password_note_suggestions);

      // View notes
      // displayEstimate_fallback ||
      // setScoreProgress_fallback ||
      // displayMetaphor_fallback ||
      // displayWeakExplanation_fallback ||
      // displayWarning_fallback ||
      // displaySuggestions_fallback
      //   ? SUtility.addClass(password_note, 'view')
      //   : SUtility.removeClass(password_note, 'view');
    });
  });

  // Helpers
  // Set score progress
  function setScoreProgress(score, container) {
    if (score == 0) {
      container.setAttribute('aria-valuenow', '20');
      container.style = 'width: 20%;';
    } else if (score < 3) {
      container.setAttribute('aria-valuenow', '40');
      container.style = 'width: 40%; background-color: #F6A848';
    } else if (score == 3) {
      container.setAttribute('aria-valuenow', '60');
      container.style = 'width: 60%; background-color: #D7D030';
    } else if (score == 4) {
      container.setAttribute('aria-valuenow', '100');
      container.style = 'width: 100%; background-color: #24AA8E';
    }
  }

  // Convert time to words
  function toWords(number) {
    //is merely seconds, just return rounded number
    if (number < 120) return getNumberWords(number, true) + ' seconds';

    // is minutes
    var hour = 60 * 60;
    if (number < hour) return getNumberWords(number / 60, true) + ' minutes';

    // is hours
    var day = hour * 24;
    if (number < 2 * day) return getNumberWords(number / hour) + ' hours';

    // is days
    var month = day * 30;
    if (number < month) return getNumberWords(number / day) + ' days';

    // is months
    var year = day * 365;
    if (number < year) return getNumberWords(number / month) + ' months';

    // is years
    var century = year * 100;
    if (number < century * 10) return getNumberWords(number / year) + ' years';

    // is centuries
    if (number < century * 100) return getNumberWords(number / century) + ' centuries';

    // more than 100 centuries
    return getNumberWords(number / year) + ' years';
  }

  // Get number words - used to convert time to words on function 'toWords'
  function getNumberWords(number, twoDP) {
    var numberWords = '',
      trillion = Math.pow(10, 12),
      billion = Math.pow(10, 9),
      million = Math.pow(10, 6),
      thousand = Math.pow(10, 4),
      hundred = Math.pow(10, 3),
      decimalPoint;

    while (number / trillion >= 1) {
      numberWords = ' trillion ' + numberWords;
      number = number / trillion;
    }

    while (number / billion >= 1) {
      numberWords = ' billion ' + numberWords;
      number = number / billion;
    }

    while (number / million >= 1) {
      numberWords = ' million ' + numberWords;
      number = number / million;
    }

    while (number / thousand >= 1) {
      numberWords = ' thousand ' + numberWords;
      number = number / thousand;
    }

    while (number / hundred >= 1) {
      numberWords = ' hundred ' + numberWords;
      number = number / hundred;
    }

    twoDP ? (decimalPoint = 100) : (decimalPoint = 1);

    number = Math.round(number * decimalPoint) / decimalPoint;
    numberWords = number + numberWords;

    return numberWords;
  }

  // Display weak password explanation
  function displayEstimate(number, container) {
    // Get time to crack password in words
    var timeInWords = toWords(number);

    // Sit time to crack password in words
    container.innerHTML = '';
    if (timeInWords) container.innerHTML = timeInWords;

    return true;
  }

  // Display weak password explanation
  function displayWeakExplanation(matchSequence, strength, container) {
    var explanation;
    var strengthText = false;

    switch (strength) {
      case 0:
        strengthText = ' very weak ';
        break;
      case 1:
        strengthText = ' weak ';
        break;
      case 2:
        strengthText = ' of medium strength ';
        break;
    }

    if (strengthText) {
      var matchSize = matchSequence.length;
      var pattern = false;
      var dictionary = false;
      var matchType = false;
      var result = new Array();

      for (var i = 0; i < matchSize; i++) {
        pattern = matchSequence[i].pattern;

        let thisType, thisWord;

        switch (pattern) {
          case 'dictionary':
            dictionary = dictionaryType(matchSequence[i]);
            thisType = dictionary['type'];
            thisWord = dictionary['word'];
            if (!result[thisType]) result[thisType] = new Array();

            result[thisType][thisWord] = true;
            break;
          case 'spatial':
            if (matchSequence[i]['graph'] != 'dvorak') {
              if (!result['combination of characters that are close together on the keyboard']) {
                result['combination of characters that are close together on the keyboard'] =
                  new Array();
              }
              thisWord = matchSequence[i]['matched_word'];
              result['combination of characters that are close together on the keyboard'][
                thisWord
              ] = true;
            }
            break;
          case 'sequence':
            if (!result['sequence of characters']) {
              result['sequence of characters'] = new Array();
            }
            thisWord = matchSequence[i]['matched_word'];
            result['sequence of characters'][thisWord] = true;
            break;
        }
      }

      //return;
      var hasWords = false;

      if (matchSize > 0) {
        if (matchSize === 1) explanation = 'Your password is ' + strengthText + ' because it is ';
        else explanation = 'Your password is ' + strengthText + ' because it contains ';

        matchSize = 0;
        for (let h in result) {
          matchSize++;
        }
        var andString = ' ';
        var commaString = ', ';
        var thisCount = 0;
        //gathered all information, now to translate into words
        for (matchType in result) {
          let count = 0;
          for (let h in result[matchType]) {
            count++;
          }
          thisCount++;
          if (thisCount >= matchSize && matchSize != 1) {
            andString = ' and ';
          }
          if (count > 1) {
            explanation += andString + count + ' ' + matchType + 's';
            hasWords = true;
          } else {
            explanation += andString + ' a ' + matchType;
            hasWords = true;
          }
          andString = ', ';
        }
        explanation += '.';
      }
    }

    container.innerHTML = '';
    if (hasWords) container.innerHTML = explanation;

    return true;
  }

  // Display weak password metaphor
  function displayMetaphor(strength, container) {
    var metaphor = '';

    switch (strength) {
      case 0:
        metaphor = '  Oh dear, using that password is like leaving your front door wide open.  ';
        break;
      case 1:
        metaphor = ' Oops, using that password is like leaving your key in the lock.  ';
        break;
      case 2:
        metaphor =
          ' Hmm, using that password is like locking your front door, but leaving the key under the mat.  ';
        break;
      case 3:
        metaphor =
          ' Good, using that password is like locking your front door and keeping the key in a safety deposit box. ';
        break;
      case 4:
        metaphor = ' Fantastic, using that password makes you as secure as Fort Knox. ';
        break;
    }

    container.innerHTML = '<span style="font-weight:bold">Review:</span> ' + metaphor;

    return true;
  }

  // Display weak password warning
  function displayWarning(warning, container) {
    container.innerHTML = warning;

    return true;
  }

  // Display weak password suggestions
  function displaySuggestions(suggestions, container) {
    container.innerHTML = '';

    // Loop suggestions
    SUtility.each(suggestions, (suggestion) => {
      let li = document.createElement('li');
      li.innerHTML = suggestion;

      // Append to view
      container.append(li);
    });

    return true;
  }

  // Get dictionary type
  function dictionaryType(pattern) {
    var word = pattern['matched_word'];
    var dictionary = pattern['dictionary_name'];
    var type = false;
    switch (dictionary) {
      case 'passwords':
        type = 'common password';
        break;
      case 'english':
        type = 'dictionary word';
        break;
      case 'male_names':
        type = 'male name';
        break;
      case 'female_names':
        type = 'female name';
        break;
      case 'surnames':
        type = 'surname';
        break;
    }
    var res = new Array();
    res['word'] = word;
    res['type'] = type;
    return res;
  }
}

//   _____           _                                                   _
//  |  __ \         | |                                                 | |
//  | |__) |___  ___| |_ ___  _ __ ___    __ _  ___ ___ ___  _   _ _ __ | |_
//  |  _  // _ \/ __| __/ _ \| '__/ _ \  / _` |/ __/ __/ _ \| | | | '_ \| __|
//  | | \ \  __/\__ \ || (_) | | |  __/ | (_| | (_| (_| (_) | |_| | | | | |_
//  |_|  \_\___||___/\__\___/|_|  \___|  \__,_|\___\___\___/ \__,_|_| |_|\__|
//
//
// Restore account
function restore_account() {
  // Get parallax container
  var container = document.querySelector('#forms-block [form] [restore]');

  // Check if target is exist
  if (!container) return;

  // Run navigator
  navigator(SUtility.attr(container, 'data-restore'), container);

  /////////////////////////////////////////
  // Helpers
  /////////////////////////////////////////
  // Navigator
  function navigator(type, container) {
    switch (type) {
      case 'main':
        navigator_main(container);
        break;

      case 'email':
        navigator_email(container);
        break;

      case 'identity questions':
        navigator_identity_questions(container);
        break;

      default:
        break;
    }
  }

  // Navigator main
  function navigator_main(container) {
    // Get options
    var restore_options = container.querySelectorAll('[name="restore-main"]');

    // Check options exist
    if (!restore_options) return;

    // Get actions
    let submit_action = container.querySelector('#buttonRestoreSubmit'),
      cancel_action = container.querySelector('#buttonRestoreCancel');

    // Submit action
    SUtility.addEvent(submit_action, 'click', () => {
      // Get active option
      let active_option;
      SUtility.each(restore_options, (option) => {
        if (option.checked) active_option = option;
      });

      // Get restore data option
      let data_restore_option = SUtility.attr(active_option, 'data-restore-option');

      // Check data restore option
      if (data_restore_option == 'email') window.location.href = './restore-account-email.html';
      if (data_restore_option == 'phone')
        window.location.href = './restore-account-identity-questions.html';
    });

    // Cancel action
    SUtility.addEvent(cancel_action, 'click', () => {
      // Navigate to Home page
      // console.log(window.location.origin);
      // console.log(window.location.host);
      // console.log(window.location.pathname);
      // console.log(window.location.pathname.split('/'));
      window.location.href = window.location.origin;
    });
  }

  // Navigator email
  function navigator_email(container) {
    // Get options
    var restore_options = container.querySelectorAll('[name="restore-email"]');

    // Check options exist
    if (!restore_options) return;

    // Get actions
    let submit_action = container.querySelector('#buttonRestoreSubmit'),
      back_action = container.querySelector('#buttonRestoreBack');

    // Submit action
    SUtility.addEvent(submit_action, 'click', () => {
      // Get active option
      let active_option;
      SUtility.each(restore_options, (option) => {
        if (option.checked) active_option = option;
      });

      // Get restore data option
      let data_restore_option = SUtility.attr(active_option, 'data-restore-option');

      // Check data restore option
      if (data_restore_option == 'email-access')
        window.location.href = './restore-account-identity-questions.html';
      if (data_restore_option == 'email-password')
        window.location.href = './restore-account-password.html';
    });

    // Back action
    SUtility.addEvent(back_action, 'click', () => {
      // Navigate to back
      window.location.href = './restore-account.html';
    });
  }

  // Navigator identity questions
  function navigator_identity_questions(container) {
    // Get questions
    var restore_questions = container.querySelectorAll('.restore-questions-list input');

    // Check questions exist
    if (!restore_questions) return;

    // Get actions
    let submit_action = container.querySelector('#buttonRestoreSubmit'),
      back_action = container.querySelector('#buttonRestoreBack');

    // Alert
    let alert_container = container.querySelector('.restore-questions-list .alert'),
      alert_number = container.querySelector('.restore-questions-list .alert [value]'),
      alert_value = 3;

    // Submit action
    SUtility.addEvent(submit_action, 'click', () => {
      // Check if alert enabled
      if (alert_value <= 0) {
        // Disable submit action
        SUtility.attr(submit_action, 'disabled', '');
        alert_number.innerHTML = alert_value;
        return;
      }

      // Get all inputs
      let q1 = container.querySelector('#restore-questions-1'),
        q1_feedback = container.querySelector('[data-feedback-target="restore-questions-1"]'),
        q2 = container.querySelector('#restore-questions-2'),
        q2_feedback = container.querySelector('[data-feedback-target="restore-questions-2"]'),
        q3 = container.querySelector('#restore-questions-3'),
        q3_feedback = container.querySelector('[data-feedback-target="restore-questions-3"]');

      // Check feedback
      // Q1
      if (q1.value == '') {
        SUtility.addClass(q1, 'is-invalid');
        SUtility.attr(q1_feedback, 'data-feedback', 'empty');
      } else {
        SUtility.removeClass(q1, 'is-invalid');
        SUtility.attr(q1_feedback, 'data-feedback', '');
      }
      // Q2
      if (q2.value == '') {
        SUtility.addClass(q2, 'is-invalid');
        SUtility.attr(q2_feedback, 'data-feedback', 'empty');
      } else {
        SUtility.removeClass(q2, 'is-invalid');
        SUtility.attr(q2_feedback, 'data-feedback', '');
      }
      // Q3
      if (q3.value == '') {
        SUtility.addClass(q3, 'is-invalid');
        SUtility.attr(q3_feedback, 'data-feedback', 'empty');
      } else {
        SUtility.removeClass(q3, 'is-invalid');
        SUtility.attr(q3_feedback, 'data-feedback', '');
      }

      // Focus input on error
      if (q1.value == '') q1.focus();
      else if (q2.value == '') q2.focus();
      else if (q3.value == '') q3.focus();

      // Check data restore option
      if (q1.value != '' && q2.value != '' && q3.value != '') {
        // This an ajax request
        fetch('../dist/temp/data.json')
          .then((response) => response.json())
          .then((json) => {
            // Check question values
            if (
              json.find((element) => element.QUESTIONS.Q1 == q1.value) &&
              json.find((element) => element.QUESTIONS.Q2 == q2.value) &&
              json.find((element) => element.QUESTIONS.Q3 == q3.value)
            )
              window.location.href = './restore-account-new-signin.html';
            else {
              // View alert
              SUtility.removeClass(alert_container, 'd-none');
              // Set alert number
              alert_number.innerHTML = alert_value;
              alert_value--;

              // Select first input
              q1.select();

              // Set invalid to inputs
              SUtility.addClass(q1, 'is-invalid');
              SUtility.addClass(q2, 'is-invalid');
              SUtility.addClass(q3, 'is-invalid');
            }
          });
      }
    });

    // Back action
    SUtility.addEvent(back_action, 'click', () => {
      // Navigate to back
      window.location.href = './restore-account-email.html';
    });
  }
}
