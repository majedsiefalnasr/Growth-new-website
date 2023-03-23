('use strict');

//   _____                                       _ _
//  |  __ \                                     | | |
//  | |  | |_ __ __ _  __ _   ___  ___ _ __ ___ | | |
//  | |  | | '__/ _` |/ _` | / __|/ __| '__/ _ \| | |
//  | |__| | | | (_| | (_| | \__ \ (__| | | (_) | | |
//  |_____/|_|  \__,_|\__, | |___/\___|_|  \___/|_|_|
//                     __/ |
//                    |___/
// Drag scroll
export var drag_scroll = function (target) {
  // Check if run for target
  target
    ? // Add to parallax
      run(target)
    : // Loop all elements
      SUtility.each(document.querySelectorAll('[drag-scroll]'), (elem) => run(elem));
};

// Run
function run(elem) {
  // Rester
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    pos = {
      // The current scroll
      left: elem.scrollLeft,
      top: elem.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    // Change the cursor and prevent user from selecting the text
    elem.style.cursor = 'grabbing';
    elem.style.userSelect = 'none';

    elem.addEventListener('mousemove', mouseMoveHandler);
    elem.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the elem
    elem.scrollTop = pos.top - dy;
    elem.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    elem.removeEventListener('mousemove', mouseMoveHandler);
    elem.removeEventListener('mouseup', mouseUpHandler);

    elem.style.cursor = 'grab';
    elem.style.removeProperty('user-select');
  };

  // Attach the handler
  elem.addEventListener('mousedown', mouseDownHandler);
}
