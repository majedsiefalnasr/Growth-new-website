('use strict');

// Utilities
import { SUtility } from '../../utilities/utility.js';

//   _                     _             _
//  | |                   | |           | |
//  | |     ___   __ _  __| |   ___ __ _| |_ ___  __ _  ___  _ __ _   _
//  | |    / _ \ / _` |/ _` |  / __/ _` | __/ _ \/ _` |/ _ \| '__| | | |
//  | |___| (_) | (_| | (_| | | (_| (_| | ||  __/ (_| | (_) | |  | |_| |
//  |______\___/ \__,_|\__,_|  \___\__,_|\__\___|\__, |\___/|_|   \__, |
//                  | |           | |             __/ |            __/ |
//    ___ ___  _ __ | |_ ___ _ __ | |_           |___/            |___/
//   / __/ _ \| '_ \| __/ _ \ '_ \| __|
//  | (_| (_) | | | | ||  __/ | | | |_
//   \___\___/|_| |_|\__\___|_| |_|\__|
//
//
// Load category content
export var load_category_content = function () {
  // Change view action
  let container = document.querySelector('#blog-block'),
    categories_container = container.querySelector('.header .categories'),
    categories_list = categories_container.querySelectorAll('.item'),
    blogs = container.querySelector('.blog--list');

  // Loop all categories and add click events to each category
  SUtility.each(categories_list, (category) => {
    category.addEventListener('click', async (e) => {
      e.preventDefault();

      // Set active category
      categories_container.querySelector('.active') &&
        categories_container.querySelector('.active').classList.remove('active');
      category.classList.add('active');

      let category_target = SUtility.attr(category, 'data-category'),
        category_blogs = new Array();

      // This an ajax request
      await fetch('../dist/temp/blog_data.json')
        .then((response) => response.json())
        .then((json) => {
          // Loop data
          SUtility.each(json, (blog) => {
            blog.categories.includes(category_target) && category_blogs.push(blog);
          });

          // Empty blog list
          blogs.innerHTML = '';

          // Insert blogs
          SUtility.each(category_blogs, (blog) => {
            // Get all categories related to this blog
            let blog_categories = '';
            SUtility.each(blog.categories, (category) => {
              blog_categories += `
                <a class="item" href="./category.html">تصنيف</a>
              `;
            });

            // Blog content
            let data = `
              <div
                  class="item"
                  data-reveal-self="translate-up"
                  data-reveal-delay="2"
                  data-scrolled-into-view="false"
                  data-scrolled-past-view="false">
                  <!-- Image -->
                  <a href="./single-blog.html" class="thumbnail" data-cursor-text="عرض المقالة">
                    <img src="${blog.image}" alt="Blog" />
                  </a>

                  <!-- Content -->
                  <div class="content">
                    <!-- Categories -->
                    <div class="categories">
                      ${blog_categories}
                    </div>

                    <!-- Header -->
                    <div class="header">
                      <!-- Title -->
                      <h3>
                        <a
                          href="./single-blog.html"
                          class="title stretched-link"
                          data-cursor-text="عرض المقالة">
                          ${blog.title}
                        </a>
                      </h3>

                      <!-- Subtitle -->
                      <div class="subtitle">${blog.subtitle}</div>

                      <!-- Info -->
                      <div class="info">23 سبتمبر 2022 · قراءة في 9 دقائق</div>
                    </div>
                  </div>
                </div>
            `;

            // Insert the content
            blogs.insertAdjacentHTML('beforeend', data);
          });

          // Add category link
          let pagination = container.querySelector('.blog--pagination .pagination');
          pagination.innerHTML = '';
          pagination.insertAdjacentHTML(
            'beforeend',
            `
              <li class="page-item">
                <a class="page-link" href="./category.html">عرض التصنيف</a>
              </li>
            `
          );

          // Add animation effects to new content
          SUtility.each(blogs.querySelectorAll('.item'), function (target) {
            // Run once
            animation_on_scroll_run(target);

            // Scroll
            let scrollEvent = document.addEventListener('scroll', (event) => {
              // Run on scroll
              animation_on_scroll_run(target);
            });

            // Resize
            let resizeEvent = document.addEventListener('resize', (event) => {
              // Run on window resize
              animation_on_scroll_run(target);
            });
          });
        });
    });
  });
};

// Animation support
function animation_on_scroll_run(target) {
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
