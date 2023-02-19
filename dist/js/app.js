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

  // Blog actions
  blog_actions();
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
    SUtility.css(body, 'overflow-y', 'auto');
  });

  // On page before unload
  window.addEventListener('beforeunload', () => {
    SUtility.css(body, 'overflow-y', 'hidden');
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
  var blog_containers = document.querySelector('#blog-block');

  // Check if target is exist
  if (!blog_containers) return;

  // Change view action
  let change_view_container = blog_containers.querySelector('.change-view'),
    grid = change_view_container.querySelector('[grid]'),
    list = change_view_container.querySelector('[list]'),
    blogs = blog_containers.querySelector('.blog--list');

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
