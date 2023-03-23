var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
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
var hcSticky = createCommonjsModule(function(module) {
  !function(t, e) {
    {
      if (!t.document)
        throw new Error("HC-Sticky requires a browser to run.");
      module.exports = e(t);
    }
  }(typeof window != "undefined" ? window : commonjsGlobal, function(V) {
    var i, n, Q = V.document, U = {top: 0, bottom: 0, bottomEnd: 0, innerTop: 0, innerSticker: null, stickyClass: "sticky", stickTo: null, followScroll: true, responsive: null, mobileFirst: false, onStart: null, onStop: null, onBeforeResize: null, onResize: null, resizeDebounce: 100, disable: false}, Y = function(t, e, o) {
      console.warn("%cHC Sticky:%c " + o + "%c '" + t + "'%c is now deprecated and will be removed. Use%c '" + e + "'%c instead.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default");
    }, $ = function(n2, f) {
      var o = this;
      if (f = f || {}, !(n2 = typeof n2 == "string" ? Q.querySelector(n2) : n2))
        return false;
      f.queries && Y("queries", "responsive", "option"), f.queryFlow && Y("queryFlow", "mobileFirst", "option");
      var p = {}, u = $.Helpers, s = n2.parentNode;
      u.getStyle(s, "position") === "static" && (s.style.position = "relative");
      function d(t2) {
        u.isEmptyObject(t2 = t2 || {}) && !u.isEmptyObject(p) || (p = Object.assign({}, U, p, t2));
      }
      function t() {
        return p.disable;
      }
      function e() {
        var t2, e2 = p.responsive || p.queries;
        if (e2) {
          var o2 = V.innerWidth;
          if (t2 = f, (p = Object.assign({}, U, t2 || {})).mobileFirst)
            for (var i3 in e2)
              i3 <= o2 && !u.isEmptyObject(e2[i3]) && d(e2[i3]);
          else {
            var n3, s2 = [];
            for (n3 in e2) {
              var r2 = {};
              r2[n3] = e2[n3], s2.push(r2);
            }
            for (var l2 = s2.length - 1; 0 <= l2; l2--) {
              var a2 = s2[l2], c2 = Object.keys(a2)[0];
              o2 <= c2 && !u.isEmptyObject(a2[c2]) && d(a2[c2]);
            }
          }
        }
      }
      function i2() {
        var t2, e2, o2, i3;
        I.css = (t2 = n2, e2 = u.getCascadedStyle(t2), o2 = u.getStyle(t2), i3 = {height: t2.offsetHeight + "px", left: e2.left, right: e2.right, top: e2.top, bottom: e2.bottom, position: o2.position, display: o2.display, verticalAlign: o2.verticalAlign, boxSizing: o2.boxSizing, marginLeft: e2.marginLeft, marginRight: e2.marginRight, marginTop: e2.marginTop, marginBottom: e2.marginBottom, paddingLeft: e2.paddingLeft, paddingRight: e2.paddingRight}, e2.float && (i3.float = e2.float || "none"), e2.cssFloat && (i3.cssFloat = e2.cssFloat || "none"), o2.MozBoxSizing && (i3.MozBoxSizing = o2.MozBoxSizing), i3.width = e2.width !== "auto" ? e2.width : i3.boxSizing === "border-box" || i3.MozBoxSizing === "border-box" ? t2.offsetWidth + "px" : o2.width, i3), P.init(), y = !(!p.stickTo || !(p.stickTo === "document" || p.stickTo.nodeType && p.stickTo.nodeType === 9 || typeof p.stickTo == "object" && p.stickTo instanceof (typeof HTMLDocument != "undefined" ? HTMLDocument : Document))), h = p.stickTo ? y ? Q : u.getElement(p.stickTo) : s, z = (R = function() {
          var t3 = n2.offsetHeight + (parseInt(I.css.marginTop) || 0) + (parseInt(I.css.marginBottom) || 0), e3 = (z || 0) - t3;
          return -1 <= e3 && e3 <= 1 ? z : t3;
        })(), v = (H = function() {
          return y ? Math.max(Q.documentElement.clientHeight, Q.body.scrollHeight, Q.documentElement.scrollHeight, Q.body.offsetHeight, Q.documentElement.offsetHeight) : h.offsetHeight;
        })(), S = y ? 0 : u.offset(h).top, w = p.stickTo ? y ? 0 : u.offset(s).top : S, E = V.innerHeight, N = n2.offsetTop - (parseInt(I.css.marginTop) || 0), b = u.getElement(p.innerSticker), L = isNaN(p.top) && -1 < p.top.indexOf("%") ? parseFloat(p.top) / 100 * E : p.top, k = isNaN(p.bottom) && -1 < p.bottom.indexOf("%") ? parseFloat(p.bottom) / 100 * E : p.bottom, x = b ? b.offsetTop : p.innerTop || 0, T = isNaN(p.bottomEnd) && -1 < p.bottomEnd.indexOf("%") ? parseFloat(p.bottomEnd) / 100 * E : p.bottomEnd, j = S - L + x + N;
      }
      function r() {
        z = R(), v = H(), O = S + v - L - T, C = E < z;
        var t2, e2 = V.pageYOffset || Q.documentElement.scrollTop, o2 = u.offset(n2).top, i3 = o2 - e2;
        B = e2 < F ? "up" : "down", A = e2 - F, j < (F = e2) ? O + L + (C ? k : 0) - (p.followScroll && C ? 0 : L) <= e2 + z - x - (E - (j - x) < z - x && p.followScroll && 0 < (t2 = z - E - x) ? t2 : 0) ? I.release({position: "absolute", bottom: w + s.offsetHeight - O - L}) : C && p.followScroll ? B == "down" ? i3 + z + k <= E + 0.9 ? I.stick({bottom: k}) : I.position === "fixed" && I.release({position: "absolute", top: o2 - L - j - A + x}) : Math.ceil(i3 + x) < 0 && I.position === "fixed" ? I.release({position: "absolute", top: o2 - L - j + x - A}) : e2 + L - x <= o2 && I.stick({top: L - x}) : I.stick({top: L - x}) : I.release({stop: true});
      }
      function l() {
        M && (V.removeEventListener("scroll", r, u.supportsPassive), M = false);
      }
      function a() {
        n2.offsetParent !== null && u.getStyle(n2, "display") !== "none" ? (i2(), v < z ? l() : (r(), M || (V.addEventListener("scroll", r, u.supportsPassive), M = true))) : l();
      }
      function c() {
        n2.style.position = "", n2.style.left = "", n2.style.top = "", n2.style.bottom = "", n2.style.width = "", n2.classList ? n2.classList.remove(p.stickyClass) : n2.className = n2.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), I.css = {}, !(I.position = null) === P.isAttached && P.detach();
      }
      function g() {
        c(), e(), (t() ? l : a)();
      }
      function m() {
        q && (V.removeEventListener("resize", W, u.supportsPassive), q = false), l();
      }
      var y, h, b, v, S, w, E, L, k, x, T, j, O, C, z, N, H, R, A, B, I = {css: {}, position: null, stick: function(t2) {
        t2 = t2 || {}, u.hasClass(n2, p.stickyClass) || (P.isAttached === false && P.attach(), I.position = "fixed", n2.style.position = "fixed", n2.style.left = P.offsetLeft + "px", n2.style.width = P.width, t2.bottom === void 0 ? n2.style.bottom = "auto" : n2.style.bottom = t2.bottom + "px", t2.top === void 0 ? n2.style.top = "auto" : n2.style.top = t2.top + "px", n2.classList ? n2.classList.add(p.stickyClass) : n2.className += " " + p.stickyClass, p.onStart && p.onStart.call(n2, Object.assign({}, p)));
      }, release: function(t2) {
        var e2;
        (t2 = t2 || {}).stop = t2.stop || false, t2.stop !== true && I.position !== "fixed" && I.position !== null && (t2.top === void 0 && t2.bottom === void 0 || t2.top !== void 0 && (parseInt(u.getStyle(n2, "top")) || 0) === t2.top || t2.bottom !== void 0 && (parseInt(u.getStyle(n2, "bottom")) || 0) === t2.bottom) || (t2.stop === true ? P.isAttached === true && P.detach() : P.isAttached === false && P.attach(), e2 = t2.position || I.css.position, I.position = e2, n2.style.position = e2, n2.style.left = t2.stop === true ? I.css.left : P.positionLeft + "px", n2.style.width = (e2 !== "absolute" ? I.css : P).width, t2.bottom === void 0 ? n2.style.bottom = t2.stop === true ? "" : "auto" : n2.style.bottom = t2.bottom + "px", t2.top === void 0 ? n2.style.top = t2.stop === true ? "" : "auto" : n2.style.top = t2.top + "px", n2.classList ? n2.classList.remove(p.stickyClass) : n2.className = n2.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), p.onStop && p.onStop.call(n2, Object.assign({}, p)));
      }}, P = {el: Q.createElement("div"), offsetLeft: null, positionLeft: null, width: null, isAttached: false, init: function() {
        for (var t2 in P.el.className = "sticky-spacer", I.css)
          P.el.style[t2] = I.css[t2];
        P.el.style["z-index"] = "-1";
        var e2 = u.getStyle(n2);
        P.offsetLeft = u.offset(n2).left - (parseInt(e2.marginLeft) || 0), P.positionLeft = u.position(n2).left, P.width = u.getStyle(n2, "width");
      }, attach: function() {
        s.insertBefore(P.el, n2), P.isAttached = true;
      }, detach: function() {
        P.el = s.removeChild(P.el), P.isAttached = false;
      }}, F = V.pageYOffset || Q.documentElement.scrollTop, M = false, q = false, D = function() {
        p.onBeforeResize && p.onBeforeResize.call(n2, Object.assign({}, p)), g(), p.onResize && p.onResize.call(n2, Object.assign({}, p));
      }, W = p.resizeDebounce ? u.debounce(D, p.resizeDebounce) : D, D = function() {
        q || (V.addEventListener("resize", W, u.supportsPassive), q = true), e(), (t() ? l : a)();
      };
      this.options = function(t2) {
        return t2 ? p[t2] : Object.assign({}, p);
      }, this.refresh = g, this.update = function(t2) {
        d(t2), f = Object.assign({}, f, t2 || {}), g();
      }, this.attach = D, this.detach = m, this.destroy = function() {
        m(), c();
      }, this.triggerMethod = function(t2, e2) {
        typeof o[t2] == "function" && o[t2](e2);
      }, this.reinit = function() {
        Y("reinit", "refresh", "method"), g();
      }, d(f), D(), V.addEventListener("load", g);
    };
    return V.jQuery !== void 0 && (i = V.jQuery, n = "hcSticky", i.fn.extend({hcSticky: function(e, o) {
      return this.length ? e === "options" ? i.data(this.get(0), n).options() : this.each(function() {
        var t = i.data(this, n);
        t ? t.triggerMethod(e, o) : (t = new $(this, e), i.data(this, n, t));
      }) : this;
    }})), V.hcSticky = V.hcSticky || $, $;
  }), function(a) {
    var t = a.hcSticky, c = a.document;
    typeof Object.assign != "function" && Object.defineProperty(Object, "assign", {value: function(t2, e2) {
      if (t2 == null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var o2 = Object(t2), i = 1; i < arguments.length; i++) {
        var n2 = arguments[i];
        if (n2 != null)
          for (var s2 in n2)
            Object.prototype.hasOwnProperty.call(n2, s2) && (o2[s2] = n2[s2]);
      }
      return o2;
    }, writable: true, configurable: true}), Array.prototype.forEach || (Array.prototype.forEach = function(t2) {
      var e2, o2;
      if (this == null)
        throw new TypeError("this is null or not defined");
      var i, n2 = Object(this), s2 = n2.length >>> 0;
      if (typeof t2 != "function")
        throw new TypeError(t2 + " is not a function");
      for (1 < arguments.length && (e2 = arguments[1]), o2 = 0; o2 < s2; )
        o2 in n2 && (i = n2[o2], t2.call(e2, i, o2, n2)), o2++;
    });
    var e = false;
    try {
      var o = Object.defineProperty({}, "passive", {get: function() {
        e = {passive: false};
      }});
      a.addEventListener("testPassive", null, o), a.removeEventListener("testPassive", null, o);
    } catch (t2) {
    }
    function n(t2, e2) {
      return a.getComputedStyle ? e2 ? c.defaultView.getComputedStyle(t2, null).getPropertyValue(e2) : c.defaultView.getComputedStyle(t2, null) : t2.currentStyle ? e2 ? t2.currentStyle[e2.replace(/-\w/g, function(t3) {
        return t3.toUpperCase().replace("-", "");
      })] : t2.currentStyle : void 0;
    }
    function s(t2) {
      var e2 = t2.getBoundingClientRect(), o2 = a.pageYOffset || c.documentElement.scrollTop, t2 = a.pageXOffset || c.documentElement.scrollLeft;
      return {top: e2.top + o2, left: e2.left + t2};
    }
    t.Helpers = {supportsPassive: e, isEmptyObject: function(t2) {
      for (var e2 in t2)
        return false;
      return true;
    }, debounce: function(i, n2, s2) {
      var r;
      return function() {
        var t2 = this, e2 = arguments, o2 = s2 && !r;
        clearTimeout(r), r = setTimeout(function() {
          r = null, s2 || i.apply(t2, e2);
        }, n2), o2 && i.apply(t2, e2);
      };
    }, hasClass: function(t2, e2) {
      return t2.classList ? t2.classList.contains(e2) : new RegExp("(^| )" + e2 + "( |$)", "gi").test(t2.className);
    }, offset: s, position: function(t2) {
      var e2 = t2.offsetParent, o2 = s(e2), i = s(t2), e2 = n(e2), t2 = n(t2);
      return o2.top += parseInt(e2.borderTopWidth) || 0, o2.left += parseInt(e2.borderLeftWidth) || 0, {top: i.top - o2.top - (parseInt(t2.marginTop) || 0), left: i.left - o2.left - (parseInt(t2.marginLeft) || 0)};
    }, getElement: function(t2) {
      var e2 = null;
      return typeof t2 == "string" ? e2 = c.querySelector(t2) : a.jQuery && t2 instanceof a.jQuery && t2.length ? e2 = t2[0] : t2 instanceof Element && (e2 = t2), e2;
    }, getStyle: n, getCascadedStyle: function(t2) {
      var e2, o2 = t2.cloneNode(true);
      o2.style.display = "none", Array.prototype.slice.call(o2.querySelectorAll('input[type="radio"]')).forEach(function(t3) {
        t3.removeAttribute("name");
      }), t2.parentNode.insertBefore(o2, t2.nextSibling), o2.currentStyle ? e2 = o2.currentStyle : a.getComputedStyle && (e2 = c.defaultView.getComputedStyle(o2, null));
      var i, n2, s2, r = {};
      for (i in e2)
        !isNaN(i) || typeof e2[i] != "string" && typeof e2[i] != "number" || (r[i] = e2[i]);
      if (Object.keys(r).length < 3)
        for (var l in r = {}, e2)
          isNaN(l) || (r[e2[l].replace(/-\w/g, function(t3) {
            return t3.toUpperCase().replace("-", "");
          })] = e2.getPropertyValue(e2[l]));
      return r.margin || r.marginLeft !== "auto" ? r.margin || r.marginLeft !== r.marginRight || r.marginLeft !== r.marginTop || r.marginLeft !== r.marginBottom || (r.margin = r.marginLeft) : r.margin = "auto", r.margin || r.marginLeft !== "0px" || r.marginRight !== "0px" || (s2 = (n2 = t2.offsetLeft - t2.parentNode.offsetLeft) - (parseInt(r.left) || 0) - (parseInt(r.right) || 0), (s2 = t2.parentNode.offsetWidth - t2.offsetWidth - n2 - (parseInt(r.right) || 0) + (parseInt(r.left) || 0) - s2) != 0 && s2 != 1 || (r.margin = "auto")), o2.parentNode.removeChild(o2), o2 = null, r;
    }};
  }(window);
});
export default hcSticky;
