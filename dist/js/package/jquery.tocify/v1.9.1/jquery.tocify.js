// jquery@3.6.4
// Local call (Server-side):               url => '../package/jquery/v3.6.4/jquery.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/jquery@v3.6.4-jYcc4gY1YpZ8Kqd6GK8S/mode=imports,min/optimized/jquery.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/jquery@3.6.4'
import jQuery from '../../jquery/v3.6.4/jquery.min.js';

// jquery-ui@1.13.2
// Local call (Server-side):               url => '../package/jquery-ui/v1.13.2/jquery-ui.min.js'
// Pinned URL (Optimized for Production):  url => 'https://cdn.skypack.dev/pin/jquery-ui@v1.13.2-25fiD23Xbhxm6ilSNTRa/mode=imports,min/optimized/jquery-ui.js'
// Default (Not good for Production):      url => 'https://cdn.skypack.dev/jquery-ui@1.13.2'
import '../../jquery-ui/v1.13.2/jquery-ui.min.js';

(function (tocify) {
  tocify(jQuery, window, document);
})(function($, window2, document2, undefined$1) {
  var tocClassName = "tocify", tocFocusClassName = "tocify-focus", tocHoverClassName = "tocify-hover", hideTocClassName = "tocify-hide", headerClassName = "tocify-header", headerClass = "." + headerClassName, subheaderClassName = "tocify-subheader", subheaderClass = "." + subheaderClassName, itemClassName = "tocify-item", itemClass = "." + itemClassName, extendPageClassName = "tocify-extend-page", extendPageClass = "." + extendPageClassName;
  $.widget("toc.tocify", {
    version: "1.9.0",
    options: {
      context: "body",
      ignoreSelector: null,
      selectors: "h1, h2, h3",
      showAndHide: true,
      showEffect: "slideDown",
      showEffectSpeed: "medium",
      hideEffect: "slideUp",
      hideEffectSpeed: "medium",
      smoothScroll: true,
      smoothScrollSpeed: "medium",
      scrollTo: 0,
      showAndHideOnScroll: true,
      highlightOnScroll: true,
      highlightOffset: 40,
      theme: "bootstrap",
      extendPage: true,
      extendPageOffset: 100,
      history: true,
      scrollHistory: false,
      hashGenerator: "compact",
      highlightDefault: true
    },
    _create: function() {
      var self = this;
      self.extendPageScroll = true;
      self.items = [];
      self._generateToc();
      self._addCSSClasses();
      self.webkit = function() {
        for (var prop in window2) {
          if (prop) {
            if (prop.toLowerCase().indexOf("webkit") !== -1) {
              return true;
            }
          }
        }
        return false;
      }();
      self._setEventHandlers();
      $(window2).load(function() {
        self._setActiveElement(true);
        $("html, body").promise().done(function() {
          setTimeout(function() {
            self.extendPageScroll = false;
          }, 0);
        });
      });
    },
    _generateToc: function() {
      var self = this, firstElem, ul, ignoreSelector = self.options.ignoreSelector;
      if (this.options.selectors.indexOf(",") !== -1) {
        firstElem = $(this.options.context).find(this.options.selectors.replace(/ /g, "").substr(0, this.options.selectors.indexOf(",")));
      } else {
        firstElem = $(this.options.context).find(this.options.selectors.replace(/ /g, ""));
      }
      if (!firstElem.length) {
        self.element.addClass(hideTocClassName);
        return;
      }
      self.element.addClass(tocClassName);
      firstElem.each(function(index) {
        if ($(this).is(ignoreSelector)) {
          return;
        }
        ul = $("<ul/>", {
          id: headerClassName + index,
          class: headerClassName
        }).append(self._nestElements($(this), index));
        self.element.append(ul);
        $(this).nextUntil(this.nodeName.toLowerCase()).each(function() {
          if ($(this).find(self.options.selectors).length === 0) {
            $(this).filter(self.options.selectors).each(function() {
              if ($(this).is(ignoreSelector)) {
                return;
              }
              self._appendSubheaders.call(this, self, ul);
            });
          } else {
            $(this).find(self.options.selectors).each(function() {
              if ($(this).is(ignoreSelector)) {
                return;
              }
              self._appendSubheaders.call(this, self, ul);
            });
          }
        });
      });
    },
    _setActiveElement: function(pageload) {
      var self = this, hash = window2.location.hash.substring(1), elem = self.element.find('li[data-unique="' + hash + '"]');
      if (hash.length) {
        self.element.find("." + self.focusClass).removeClass(self.focusClass);
        elem.addClass(self.focusClass);
        if (self.options.showAndHide) {
          elem.click();
        }
      } else {
        self.element.find("." + self.focusClass).removeClass(self.focusClass);
        if (!hash.length && pageload && self.options.highlightDefault) {
          self.element.find(itemClass).first().addClass(self.focusClass);
        }
      }
      return self;
    },
    _nestElements: function(self, index) {
      var arr, item, hashValue;
      arr = $.grep(this.items, function(item2) {
        return item2 === self.text();
      });
      if (arr.length) {
        this.items.push(self.text() + index);
      } else {
        this.items.push(self.text());
      }
      hashValue = this._generateHashValue(arr, self, index);
      item = $("<li/>", {
        class: itemClassName,
        "data-unique": hashValue
      }).append($("<a/>", {
        text: self.text()
      }));
      self.before($("<div/>", {
        name: hashValue,
        "data-unique": hashValue
      }));
      return item;
    },
    _generateHashValue: function(arr, self, index) {
      var hashValue = "", hashGeneratorOption = this.options.hashGenerator;
      if (hashGeneratorOption === "pretty") {
        hashValue = self.text().toLowerCase().replace(/\s/g, "-");
        while (hashValue.indexOf("--") > -1) {
          hashValue = hashValue.replace(/--/g, "-");
        }
        while (hashValue.indexOf(":-") > -1) {
          hashValue = hashValue.replace(/:-/g, "-");
        }
      } else if (typeof hashGeneratorOption === "function") {
        hashValue = hashGeneratorOption(self.text(), self);
      } else {
        hashValue = self.text().replace(/\s/g, "");
      }
      if (arr.length) {
        hashValue += "" + index;
      }
      return hashValue;
    },
    _appendSubheaders: function(self, ul) {
      var index = $(this).index(self.options.selectors), previousHeader = $(self.options.selectors).eq(index - 1), currentTagName = +$(this).prop("tagName").charAt(1), previousTagName = +previousHeader.prop("tagName").charAt(1);
      if (currentTagName < previousTagName) {
        self.element.find(subheaderClass + "[data-tag=" + currentTagName + "]").last().append(self._nestElements($(this), index));
      } else if (currentTagName === previousTagName) {
        ul.find(itemClass).last().after(self._nestElements($(this), index));
      } else {
        ul.find(itemClass).last().after($("<ul/>", {
          class: subheaderClassName,
          "data-tag": currentTagName
        })).next(subheaderClass).append(self._nestElements($(this), index));
      }
    },
    _setEventHandlers: function() {
      var self = this;
      this.element.on("click.tocify", "li", function(event) {
        if (self.options.history) {
          window2.location.hash = $(this).attr("data-unique");
        }
        self.element.find("." + self.focusClass).removeClass(self.focusClass);
        $(this).addClass(self.focusClass);
        if (self.options.showAndHide) {
          var elem = $('li[data-unique="' + $(this).attr("data-unique") + '"]');
          self._triggerShow(elem);
        }
        self._scrollTo($(this));
      });
      this.element.find("li").on({
        "mouseenter.tocify": function() {
          $(this).addClass(self.hoverClass);
          $(this).css("cursor", "pointer");
        },
        "mouseleave.tocify": function() {
          if (self.options.theme !== "bootstrap") {
            $(this).removeClass(self.hoverClass);
          }
        }
      });
      if (self.options.extendPage || self.options.highlightOnScroll || self.options.scrollHistory || self.options.showAndHideOnScroll) {
        $(window2).on("scroll.tocify", function() {
          $("html, body").promise().done(function() {
            var winScrollTop = $(window2).scrollTop(), winHeight = $(window2).height(), docHeight = $(document2).height(), scrollHeight = $("body")[0].scrollHeight, elem, lastElem, lastElemOffset, currentElem;
            if (self.options.extendPage) {
              if (self.webkit && winScrollTop >= scrollHeight - winHeight - self.options.extendPageOffset || !self.webkit && winHeight + winScrollTop > docHeight - self.options.extendPageOffset) {
                if (!$(extendPageClass).length) {
                  lastElem = $('div[data-unique="' + $(itemClass).last().attr("data-unique") + '"]');
                  if (!lastElem.length)
                    return;
                  lastElemOffset = lastElem.offset().top;
                  $(self.options.context).append($("<div />", {
                    class: extendPageClassName,
                    height: Math.abs(lastElemOffset - winScrollTop) + "px",
                    "data-unique": extendPageClassName
                  }));
                  if (self.extendPageScroll) {
                    currentElem = self.element.find("li.active");
                    self._scrollTo($('div[data-unique="' + currentElem.attr("data-unique") + '"]'));
                  }
                }
              }
            }
            setTimeout(function() {
              var closestAnchorDistance = null, closestAnchorIdx = null, anchors = $(self.options.context).find("div[data-unique]"), anchorText;
              anchors.each(function(idx) {
                var distance = Math.abs(($(this).next().length ? $(this).next() : $(this)).offset().top - winScrollTop - self.options.highlightOffset);
                if (closestAnchorDistance == null || distance < closestAnchorDistance) {
                  closestAnchorDistance = distance;
                  closestAnchorIdx = idx;
                } else {
                  return false;
                }
              });
              anchorText = $(anchors[closestAnchorIdx]).attr("data-unique");
              elem = $('li[data-unique="' + anchorText + '"]');
              if (self.options.highlightOnScroll && elem.length) {
                self.element.find("." + self.focusClass).removeClass(self.focusClass);
                elem.addClass(self.focusClass);
              }
              if (self.options.scrollHistory) {
                if (window2.location.hash !== "#" + anchorText) {
                  window2.location.replace("#" + anchorText);
                }
              }
              if (self.options.showAndHideOnScroll && self.options.showAndHide) {
                self._triggerShow(elem, true);
              }
            }, 0);
          });
        });
      }
    },
    show: function(elem, scroll) {
      var self = this;
      if (!elem.is(":visible")) {
        if (!elem.find(subheaderClass).length && !elem.parent().is(headerClass) && !elem.parent().is(":visible")) {
          elem = elem.parents(subheaderClass).add(elem);
        } else if (!elem.children(subheaderClass).length && !elem.parent().is(headerClass)) {
          elem = elem.closest(subheaderClass);
        }
        switch (self.options.showEffect) {
          case "none":
            elem.show();
            break;
          case "show":
            elem.show(self.options.showEffectSpeed);
            break;
          case "slideDown":
            elem.slideDown(self.options.showEffectSpeed);
            break;
          case "fadeIn":
            elem.fadeIn(self.options.showEffectSpeed);
            break;
          default:
            elem.show();
            break;
        }
      }
      if (elem.parent().is(headerClass)) {
        self.hide($(subheaderClass).not(elem));
      } else {
        self.hide($(subheaderClass).not(elem.closest(headerClass).find(subheaderClass).not(elem.siblings())));
      }
      return self;
    },
    hide: function(elem) {
      var self = this;
      switch (self.options.hideEffect) {
        case "none":
          elem.hide();
          break;
        case "hide":
          elem.hide(self.options.hideEffectSpeed);
          break;
        case "slideUp":
          elem.slideUp(self.options.hideEffectSpeed);
          break;
        case "fadeOut":
          elem.fadeOut(self.options.hideEffectSpeed);
          break;
        default:
          elem.hide();
          break;
      }
      return self;
    },
    _triggerShow: function(elem, scroll) {
      var self = this;
      if (elem.parent().is(headerClass) || elem.next().is(subheaderClass)) {
        self.show(elem.next(subheaderClass), scroll);
      } else if (elem.parent().is(subheaderClass)) {
        self.show(elem.parent(), scroll);
      }
      return self;
    },
    _addCSSClasses: function() {
      if (this.options.theme === "jqueryui") {
        this.focusClass = "ui-state-default";
        this.hoverClass = "ui-state-hover";
        this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content");
      } else if (this.options.theme === "bootstrap") {
        this.element.find(headerClass + "," + subheaderClass).addClass("nav nav-list");
        this.focusClass = "active";
      } else {
        this.focusClass = tocFocusClassName;
        this.hoverClass = tocHoverClassName;
      }
      return this;
    },
    setOption: function() {
      $.Widget.prototype._setOption.apply(this, arguments);
    },
    setOptions: function() {
      $.Widget.prototype._setOptions.apply(this, arguments);
    },
    _scrollTo: function(elem) {
      var self = this, duration = self.options.smoothScroll || 0, scrollTo = self.options.scrollTo, currentDiv = $('div[data-unique="' + elem.attr("data-unique") + '"]');
      if (!currentDiv.length) {
        return self;
      }
      $("html, body").promise().done(function() {
        $("html, body").animate({
          scrollTop: currentDiv.offset().top - ($.isFunction(scrollTo) ? scrollTo.call() : scrollTo) + "px"
        }, {
          duration
        });
      });
      return self;
    }
  });
});
export default null;
