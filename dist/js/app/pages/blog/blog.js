('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   ____  _
//  |  _ \| |
//  | |_) | | ___   __ _
//  |  _ <| |/ _ \ / _` |
//  | |_) | | (_) | (_| |
//  |____/|_|\___/ \__, |
//                  __/ |
//                 |___/
// Blog
export var blog = function () {
  // Blog container
  let blog_container = document.querySelector('#blog-block');

  // Change view
  let change_view_container = blog_container.querySelector('.change-view');

  // Load script only on needed
  change_view_container &&
    import('./change_view.js')
      .then(({ change_view }) => change_view(change_view_container))
      .catch((err) => console.log('error:', err));

  // Load category content from DB on selected tab
  // Load script only on needed
  blog_container.querySelector('.header .categories') &&
    import('./load_category_content.js')
      .then(({ load_category_content }) => load_category_content())
      .catch((err) => console.log('error:', err));

  // Add deep anchor links to blog content (h2, h3, h4)
  // Load script only on needed
  blog_container.querySelector('.blog--content') &&
    import('./anchors.js')
      .then(({ anchors }) => anchors())
      .catch((err) => console.log('error:', err));

  // Add bookmark
  let bookmark_container = blog_container.querySelector('[bookmark]');

  // Load script only on needed
  bookmark_container &&
    import('../../utilities/bookmark.js')
      .then(({ bookmark }) => bookmark(bookmark_container))
      .catch((err) => console.log('error:', err));

  // Add splide hero
  let splide_hero_container = blog_container.querySelector('[splide][splide-blog-hero]');

  // Load script only on needed
  splide_hero_container &&
    import('../../utilities/splide.js')
      .then(({ splide }) =>
        splide(splide_hero_container, {
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
        })
      )
      .catch((err) => console.log('error:', err));

  // Add splide testimonials
  let splide_blog_container = document.querySelector('[splide][splide-blog-hero]');

  // Load script only on needed
  splide_blog_container &&
    import('../../utilities/splide.js')
      .then(({ splide }) =>
        splide(splide_blog_container, {
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
        })
      )
      .catch((err) => console.log('error:', err));
};
