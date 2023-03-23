function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var anchor = createCommonjsModule(function(module) {
  (function(root, factory) {
    if (module.exports) {
      module.exports = factory();
    } else {
      root.AnchorJS = factory();
      root.anchors = new root.AnchorJS();
    }
  })(globalThis, function() {
    function AnchorJS(options) {
      this.options = options || {};
      this.elements = [];
      function _applyRemainingDefaultOptions(opts) {
        opts.icon = Object.prototype.hasOwnProperty.call(opts, "icon") ? opts.icon : "\uE9CB";
        opts.visible = Object.prototype.hasOwnProperty.call(opts, "visible") ? opts.visible : "hover";
        opts.placement = Object.prototype.hasOwnProperty.call(opts, "placement") ? opts.placement : "right";
        opts.ariaLabel = Object.prototype.hasOwnProperty.call(opts, "ariaLabel") ? opts.ariaLabel : "Anchor";
        opts.class = Object.prototype.hasOwnProperty.call(opts, "class") ? opts.class : "";
        opts.base = Object.prototype.hasOwnProperty.call(opts, "base") ? opts.base : "";
        opts.truncate = Object.prototype.hasOwnProperty.call(opts, "truncate") ? Math.floor(opts.truncate) : 64;
        opts.titleText = Object.prototype.hasOwnProperty.call(opts, "titleText") ? opts.titleText : "";
      }
      _applyRemainingDefaultOptions(this.options);
      this.add = function(selector) {
        var elements, elsWithIds, idList, elementID, i, index, count, tidyText, newTidyText, anchor2, hrefBase, indexesToDrop = [];
        _applyRemainingDefaultOptions(this.options);
        if (!selector) {
          selector = "h2, h3, h4, h5, h6";
        }
        elements = _getElements(selector);
        if (elements.length === 0) {
          return this;
        }
        _addBaselineStyles();
        elsWithIds = document.querySelectorAll("[id]");
        idList = [].map.call(elsWithIds, function(el) {
          return el.id;
        });
        for (i = 0; i < elements.length; i++) {
          if (this.hasAnchorJSLink(elements[i])) {
            indexesToDrop.push(i);
            continue;
          }
          if (elements[i].hasAttribute("id")) {
            elementID = elements[i].getAttribute("id");
          } else if (elements[i].hasAttribute("data-anchor-id")) {
            elementID = elements[i].getAttribute("data-anchor-id");
          } else {
            tidyText = this.urlify(elements[i].textContent);
            newTidyText = tidyText;
            count = 0;
            do {
              if (index !== void 0) {
                newTidyText = tidyText + "-" + count;
              }
              index = idList.indexOf(newTidyText);
              count += 1;
            } while (index !== -1);
            index = void 0;
            idList.push(newTidyText);
            elements[i].setAttribute("id", newTidyText);
            elementID = newTidyText;
          }
          anchor2 = document.createElement("a");
          anchor2.className = "anchorjs-link " + this.options.class;
          anchor2.setAttribute("aria-label", this.options.ariaLabel);
          anchor2.setAttribute("data-anchorjs-icon", this.options.icon);
          if (this.options.titleText) {
            anchor2.title = this.options.titleText;
          }
          hrefBase = document.querySelector("base") ? window.location.pathname + window.location.search : "";
          hrefBase = this.options.base || hrefBase;
          anchor2.href = hrefBase + "#" + elementID;
          if (this.options.visible === "always") {
            anchor2.style.opacity = "1";
          }
          if (this.options.icon === "\uE9CB") {
            anchor2.style.font = "1em/1 anchorjs-icons";
            if (this.options.placement === "left") {
              anchor2.style.lineHeight = "inherit";
            }
          }
          if (this.options.placement === "left") {
            anchor2.style.position = "absolute";
            anchor2.style.marginLeft = "-1.25em";
            anchor2.style.paddingRight = ".25em";
            anchor2.style.paddingLeft = ".25em";
            elements[i].insertBefore(anchor2, elements[i].firstChild);
          } else {
            anchor2.style.marginLeft = ".1875em";
            anchor2.style.paddingRight = ".1875em";
            anchor2.style.paddingLeft = ".1875em";
            elements[i].appendChild(anchor2);
          }
        }
        for (i = 0; i < indexesToDrop.length; i++) {
          elements.splice(indexesToDrop[i] - i, 1);
        }
        this.elements = this.elements.concat(elements);
        return this;
      };
      this.remove = function(selector) {
        var index, domAnchor, elements = _getElements(selector);
        for (var i = 0; i < elements.length; i++) {
          domAnchor = elements[i].querySelector(".anchorjs-link");
          if (domAnchor) {
            index = this.elements.indexOf(elements[i]);
            if (index !== -1) {
              this.elements.splice(index, 1);
            }
            elements[i].removeChild(domAnchor);
          }
        }
        return this;
      };
      this.removeAll = function() {
        this.remove(this.elements);
      };
      this.urlify = function(text) {
        var textareaElement = document.createElement("textarea");
        textareaElement.innerHTML = text;
        text = textareaElement.value;
        var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g;
        if (!this.options.truncate) {
          _applyRemainingDefaultOptions(this.options);
        }
        return text.trim().replace(/'/gi, "").replace(nonsafeChars, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase();
      };
      this.hasAnchorJSLink = function(el) {
        var hasLeftAnchor = el.firstChild && (" " + el.firstChild.className + " ").indexOf(" anchorjs-link ") > -1, hasRightAnchor = el.lastChild && (" " + el.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
        return hasLeftAnchor || hasRightAnchor || false;
      };
      function _getElements(input) {
        var elements;
        if (typeof input === "string" || input instanceof String) {
          elements = [].slice.call(document.querySelectorAll(input));
        } else if (Array.isArray(input) || input instanceof NodeList) {
          elements = [].slice.call(input);
        } else {
          throw new TypeError("The selector provided to AnchorJS was invalid.");
        }
        return elements;
      }
      function _addBaselineStyles() {
        if (document.head.querySelector("style.anchorjs") !== null) {
          return;
        }
        var style = document.createElement("style"), linkRule = ".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}", hoverRule = ":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}", anchorjsLinkFontFace = '@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}', pseudoElContent = "[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}", firstStyleEl;
        style.className = "anchorjs";
        style.appendChild(document.createTextNode(""));
        firstStyleEl = document.head.querySelector('[rel="stylesheet"],style');
        if (firstStyleEl === void 0) {
          document.head.appendChild(style);
        } else {
          document.head.insertBefore(style, firstStyleEl);
        }
        style.sheet.insertRule(linkRule, style.sheet.cssRules.length);
        style.sheet.insertRule(hoverRule, style.sheet.cssRules.length);
        style.sheet.insertRule(pseudoElContent, style.sheet.cssRules.length);
        style.sheet.insertRule(anchorjsLinkFontFace, style.sheet.cssRules.length);
      }
    }
    return AnchorJS;
  });
});
export default anchor;
