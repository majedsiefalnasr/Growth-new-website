('use strict');

// Cuberto Mouse Followe
// Local call (Server-side):               url => '../package/mouse-follower/v1.1.2/mouse-follower.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/mouse-follower@v1.1.2-DKn8hmZQKQBGgI5vBAfb/mode=imports,min/optimized/mouse-follower.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/mouse-follower@v1.1.2'
import MouseFollower from '../../package/mouse-follower/v1.1.2/mouse-follower.min.js';

// gsap
// Local call (Server-side):               url => '../package/gsap/v3.10.4/gsap.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/gsap@v3.10.4-XdyFN99nEgDRHW51sK5I/mode=imports,min/optimized/gsap.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/gsap@v3.10.4'
import gsap from '../../package/gsap/v3.10.4/gsap.min.js';

//    _____      _               _
//   / ____|    | |             | |
//  | |    _   _| |__   ___ _ __| |_ ___
//  | |   | | | | '_ \ / _ \ '__| __/ _ \
//  | |___| |_| | |_) |  __/ |  | || (_) |
//   \_____\__,_|_.__/ \___|_|   \__\___/    _ _
//  |  \/  |                      |  ____|  | | |
//  | \  / | ___  _   _ ___  ___  | |__ ___ | | | _____      _____
//  | |\/| |/ _ \| | | / __|/ _ \ |  __/ _ \| | |/ _ \ \ /\ / / _ \
//  | |  | | (_) | |_| \__ \  __/ | | | (_) | | | (_) \ V  V /  __/
//  |_|  |_|\___/ \__,_|___/\___| |_|  \___/|_|_|\___/ \_/\_/ \___|
//
//
// Cuberto Mouse Followe
export var mouse_followe = function () {
  // Empty instance
  var cursor = null;

  // Run once
  if (!cursor && window.innerWidth >= 992) cursor = init();

  // Attaching the event listener function to window's resize event
  window.addEventListener('resize', () => {
    // Run only on desktop
    if (!cursor && window.innerWidth >= 992) cursor = init();
    else if (window.innerWidth < 992) cursor = destroy(cursor);
  });
};

// Init
async function init() {
  MouseFollower.registerGSAP(gsap);
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
