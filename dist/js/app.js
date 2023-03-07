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

  // Forms
  forms();
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
            #toc .tocify-item a`,
        '-magnify-lg -color-burn': `
            [data-cursor-magnify-lg],
            [data-cursor-magnify-lg-inner] > *`,
        '-hidden': 'iframe, [data-cursor-hidden], .form-control, .form-select',
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
    let form_body = forms_container.querySelector('[body]'),
      email_switcher = forms_container.querySelector('[body] [actions] [email]'),
      phone_switcher = forms_container.querySelector('[body] [actions] [phone]');

    // Email switcher click
    SUtility.addEvent(email_switcher, 'click', () => {
      // Add email state to form body
      SUtility.attr(form_body, 'email', '');
      // Enable form inputs helper
      enable_form_helper(forms_container.querySelector('[body] > .email'));

      // Remove phone state from form body
      SUtility.removeAttr(form_body, 'phone');
      // Disable form inputs helper
      disable_form_helper(forms_container.querySelector('[body] > .phone'));
    });

    // Email switcher click
    SUtility.addEvent(phone_switcher, 'click', () => {
      // Add phone state to form body
      SUtility.attr(form_body, 'phone', '');
      // Enable form inputs helper
      enable_form_helper(forms_container.querySelector('[body] > .phone'));

      // Remove email state from form body
      SUtility.removeAttr(form_body, 'email');
      // Disable form inputs helper
      disable_form_helper(forms_container.querySelector('[body] > .email'));
    });

    // Disable form inputs helper
    let disable_form_helper = (container) => {
      SUtility.each(container.querySelectorAll('.form-control'), (el) => {
        SUtility.attr(el, 'disabled', '');
      });
    };
    // Enable form inputs helper
    let enable_form_helper = (container) => {
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
    };

    // Check form validity on form submit
    forms_container.addEventListener(
      'submit',
      function (event) {
        if (!forms_container.checkValidity()) {
          // Prevent submit default for test purpose
          event.preventDefault();
          event.stopPropagation();
        }

        // Add validation class to form
        if (!forms_container.checkValidity()) {
          // Add validation class to form
          forms_container.classList.add('was-validated');

          // Add validation class to form inputs
          SUtility.each(forms_container.querySelectorAll('.form-control'), (el) => {
            // Check empty
            el.value == '' ? el.classList.add('is-empty') : el.classList.remove('is-empty');

            // Check validation
            !el.checkValidity()
              ? el.classList.add('is-invalid')
              : el.classList.remove('is-invalid');
          });
        }
        // Remove validation class to form
        else forms_container.classList.remove('was-validated');
      },
      false
    );
  }
}
