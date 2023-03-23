/*!
 * Cuberto Mouse Follower
 * https://cuberto.com/
 *
 * @version 1.1.2
 * @author Cuberto, Artem Dordzhiev (Draft)
 */
var MouseFollower = /* @__PURE__ */ function() {
  MouseFollower2.registerGSAP = function registerGSAP(gsap) {
    MouseFollower2.gsap = gsap;
  };
  function MouseFollower2(options) {
    if (options === void 0) {
      options = {};
    }
    this.options = Object.assign({}, {
      el: null,
      container: document.body,
      className: "mf-cursor",
      innerClassName: "mf-cursor-inner",
      textClassName: "mf-cursor-text",
      mediaClassName: "mf-cursor-media",
      mediaBoxClassName: "mf-cursor-media-box",
      iconSvgClassName: "mf-svgsprite",
      iconSvgNamePrefix: "-",
      iconSvgSrc: "",
      dataAttr: "cursor",
      hiddenState: "-hidden",
      textState: "-text",
      iconState: "-icon",
      activeState: "-active",
      mediaState: "-media",
      stateDetection: {
        "-pointer": "a,button"
      },
      visible: true,
      visibleOnState: false,
      speed: 0.55,
      ease: "expo.out",
      overwrite: true,
      skewing: 0,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 1e-3,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 0,
      hideOnLeave: true,
      hideTimeout: 300,
      hideMediaTimeout: 300,
      initialPos: [-window.innerWidth, -window.innerHeight]
    }, options);
    if (this.options.visible && options.stateDetection == null)
      this.options.stateDetection["-hidden"] = "iframe";
    this.gsap = MouseFollower2.gsap || window.gsap;
    this.el = typeof this.options.el === "string" ? document.querySelector(this.options.el) : this.options.el;
    this.container = typeof this.options.container === "string" ? document.querySelector(this.options.container) : this.options.container;
    this.skewing = this.options.skewing;
    this.pos = {
      x: this.options.initialPos[0],
      y: this.options.initialPos[1]
    };
    this.vel = {
      x: 0,
      y: 0
    };
    this.event = {};
    this.events = [];
    this.init();
  }
  var _proto = MouseFollower2.prototype;
  _proto.init = function init() {
    if (!this.el)
      this.create();
    this.createSetter();
    this.bind();
    this.render(true);
    this.ticker = this.render.bind(this, false);
    this.gsap.ticker.add(this.ticker);
  };
  _proto.create = function create() {
    this.el = document.createElement("div");
    this.el.className = this.options.className;
    this.el.classList.add(this.options.hiddenState);
    this.inner = document.createElement("div");
    this.inner.className = this.options.innerClassName;
    this.text = document.createElement("div");
    this.text.className = this.options.textClassName;
    this.media = document.createElement("div");
    this.media.className = this.options.mediaClassName;
    this.mediaBox = document.createElement("div");
    this.mediaBox.className = this.options.mediaBoxClassName;
    this.media.appendChild(this.mediaBox);
    this.inner.appendChild(this.media);
    this.inner.appendChild(this.text);
    this.el.appendChild(this.inner);
    this.container.appendChild(this.el);
  };
  _proto.createSetter = function createSetter() {
    this.setter = {
      x: this.gsap.quickSetter(this.el, "x", "px"),
      y: this.gsap.quickSetter(this.el, "y", "px"),
      rotation: this.gsap.quickSetter(this.el, "rotation", "deg"),
      scaleX: this.gsap.quickSetter(this.el, "scaleX"),
      scaleY: this.gsap.quickSetter(this.el, "scaleY"),
      wc: this.gsap.quickSetter(this.el, "willChange"),
      inner: {
        rotation: this.gsap.quickSetter(this.inner, "rotation", "deg")
      }
    };
  };
  _proto.bind = function bind() {
    var _this = this;
    this.event.mouseleave = function() {
      return _this.hide();
    };
    this.event.mouseenter = function() {
      return _this.show();
    };
    this.event.mousedown = function() {
      return _this.addState(_this.options.activeState);
    };
    this.event.mouseup = function() {
      return _this.removeState(_this.options.activeState);
    };
    this.event.mousemoveOnce = function() {
      return _this.show();
    };
    this.event.mousemove = function(e) {
      _this.gsap.to(_this.pos, {
        x: _this.stick ? _this.stick.x - (_this.stick.x - e.clientX) * _this.options.stickDelta : e.clientX,
        y: _this.stick ? _this.stick.y - (_this.stick.y - e.clientY) * _this.options.stickDelta : e.clientY,
        overwrite: _this.options.overwrite,
        ease: _this.options.ease,
        duration: _this.visible ? _this.options.speed : 0,
        onUpdate: function onUpdate() {
          return _this.vel = {
            x: e.clientX - _this.pos.x,
            y: e.clientY - _this.pos.y
          };
        }
      });
    };
    this.event.mouseover = function(e) {
      for (var target = e.target; target && target !== _this.container; target = target.parentNode) {
        if (e.relatedTarget && target.contains(e.relatedTarget))
          break;
        for (var state in _this.options.stateDetection) {
          if (target.matches(_this.options.stateDetection[state]))
            _this.addState(state);
        }
        if (_this.options.dataAttr) {
          var params = _this.getFromDataset(target);
          if (params.state)
            _this.addState(params.state);
          if (params.text)
            _this.setText(params.text);
          if (params.icon)
            _this.setIcon(params.icon);
          if (params.img)
            _this.setImg(params.img);
          if (params.video)
            _this.setVideo(params.video);
          if (typeof params.show !== "undefined")
            _this.show();
          if (typeof params.stick !== "undefined")
            _this.setStick(params.stick || target);
        }
      }
    };
    this.event.mouseout = function(e) {
      for (var target = e.target; target && target !== _this.container; target = target.parentNode) {
        if (e.relatedTarget && target.contains(e.relatedTarget))
          break;
        for (var state in _this.options.stateDetection) {
          if (target.matches(_this.options.stateDetection[state]))
            _this.removeState(state);
        }
        if (_this.options.dataAttr) {
          var params = _this.getFromDataset(target);
          if (params.state)
            _this.removeState(params.state);
          if (params.text)
            _this.removeText();
          if (params.icon)
            _this.removeIcon();
          if (params.img)
            _this.removeImg();
          if (params.video)
            _this.removeVideo();
          if (typeof params.show !== "undefined")
            _this.hide();
          if (typeof params.stick !== "undefined")
            _this.removeStick();
        }
      }
    };
    if (this.options.hideOnLeave) {
      this.container.addEventListener("mouseleave", this.event.mouseleave, {
        passive: true
      });
    }
    if (this.options.visible) {
      this.container.addEventListener("mouseenter", this.event.mouseenter, {
        passive: true
      });
    }
    if (this.options.activeState) {
      this.container.addEventListener("mousedown", this.event.mousedown, {
        passive: true
      });
      this.container.addEventListener("mouseup", this.event.mouseup, {
        passive: true
      });
    }
    this.container.addEventListener("mousemove", this.event.mousemove, {
      passive: true
    });
    if (this.options.visible) {
      this.container.addEventListener("mousemove", this.event.mousemoveOnce, {
        passive: true,
        once: true
      });
    }
    if (this.options.stateDetection || this.options.dataAttr) {
      this.container.addEventListener("mouseover", this.event.mouseover, {
        passive: true
      });
      this.container.addEventListener("mouseout", this.event.mouseout, {
        passive: true
      });
    }
  };
  _proto.render = function render(force) {
    if (force !== true && (this.vel.y === 0 || this.vel.x === 0)) {
      this.setter.wc("auto");
      return;
    }
    this.trigger("render");
    this.setter.wc("transform");
    this.setter.x(this.pos.x);
    this.setter.y(this.pos.y);
    if (this.skewing) {
      var distance = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2));
      var scale = Math.min(distance * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing;
      var angle = Math.atan2(this.vel.y, this.vel.x) * 180 / Math.PI;
      this.setter.rotation(angle);
      this.setter.scaleX(1 + scale);
      this.setter.scaleY(1 - scale);
      this.setter.inner.rotation(-angle);
    }
  };
  _proto.show = function show() {
    var _this2 = this;
    this.trigger("show");
    clearInterval(this.visibleInt);
    this.visibleInt = setTimeout(function() {
      _this2.el.classList.remove(_this2.options.hiddenState);
      _this2.visible = true;
      _this2.render(true);
    }, this.options.showTimeout);
  };
  _proto.hide = function hide() {
    var _this3 = this;
    this.trigger("hide");
    clearInterval(this.visibleInt);
    this.el.classList.add(this.options.hiddenState);
    this.visibleInt = setTimeout(function() {
      return _this3.visible = false;
    }, this.options.hideTimeout);
  };
  _proto.toggle = function toggle(force) {
    if (force === true || force !== false && !this.visible) {
      this.show();
    } else {
      this.hide();
    }
  };
  _proto.addState = function addState(state) {
    var _this$el$classList;
    this.trigger("addState", state);
    if (state === this.options.hiddenState)
      return this.hide();
    (_this$el$classList = this.el.classList).add.apply(_this$el$classList, state.split(" "));
    if (this.options.visibleOnState)
      this.show();
  };
  _proto.removeState = function removeState(state) {
    var _this$el$classList2;
    this.trigger("removeState", state);
    if (state === this.options.hiddenState)
      return this.show();
    (_this$el$classList2 = this.el.classList).remove.apply(_this$el$classList2, state.split(" "));
    if (this.options.visibleOnState && this.el.className === this.options.className)
      this.hide();
  };
  _proto.toggleState = function toggleState(state, force) {
    if (force === true || force !== false && !this.el.classList.contains(state)) {
      this.addState(state);
    } else {
      this.removeState(state);
    }
  };
  _proto.setSkewing = function setSkewing(value) {
    this.gsap.to(this, {
      skewing: value
    });
  };
  _proto.removeSkewing = function removeSkewing() {
    this.gsap.to(this, {
      skewing: this.options.skewing
    });
  };
  _proto.setStick = function setStick(element) {
    var el = typeof element === "string" ? document.querySelector(element) : element;
    var rect = el.getBoundingClientRect();
    this.stick = {
      y: rect.top + rect.height / 2,
      x: rect.left + rect.width / 2
    };
  };
  _proto.removeStick = function removeStick() {
    this.stick = false;
  };
  _proto.setText = function setText(text) {
    this.text.innerHTML = text;
    this.addState(this.options.textState);
    this.setSkewing(this.options.skewingText);
  };
  _proto.removeText = function removeText() {
    this.removeState(this.options.textState);
    this.removeSkewing();
  };
  _proto.setIcon = function setIcon(name, style) {
    if (style === void 0) {
      style = "";
    }
    this.text.innerHTML = "<svg class='" + this.options.iconSvgClassName + " " + this.options.iconSvgNamePrefix + name + "'" + (" style='" + style + "'><use xlink:href='" + this.options.iconSvgSrc + "#" + name + "'></use></svg>");
    this.addState(this.options.iconState);
    this.setSkewing(this.options.skewingIcon);
  };
  _proto.removeIcon = function removeIcon() {
    this.removeState(this.options.iconState);
    this.removeSkewing();
  };
  _proto.setMedia = function setMedia(element) {
    var _this4 = this;
    clearTimeout(this.mediaInt);
    if (element) {
      this.mediaBox.innerHTML = "";
      this.mediaBox.appendChild(element);
    }
    this.mediaInt = setTimeout(function() {
      return _this4.addState(_this4.options.mediaState);
    }, 20);
    this.setSkewing(this.options.skewingMedia);
  };
  _proto.removeMedia = function removeMedia() {
    var _this5 = this;
    clearTimeout(this.mediaInt);
    this.removeState(this.options.mediaState);
    this.mediaInt = setTimeout(function() {
      return _this5.mediaBox.innerHTML = "";
    }, this.options.hideMediaTimeout);
    this.removeSkewing();
  };
  _proto.setImg = function setImg(url) {
    if (!this.mediaImg)
      this.mediaImg = new Image();
    if (this.mediaImg.src !== url)
      this.mediaImg.src = url;
    this.setMedia(this.mediaImg);
  };
  _proto.removeImg = function removeImg() {
    this.removeMedia();
  };
  _proto.setVideo = function setVideo(url) {
    if (!this.mediaVideo) {
      this.mediaVideo = document.createElement("video");
      this.mediaVideo.muted = true;
      this.mediaVideo.loop = true;
      this.mediaVideo.autoplay = true;
    }
    if (this.mediaVideo.src !== url) {
      this.mediaVideo.src = url;
      this.mediaVideo.load();
    }
    this.mediaVideo.play();
    this.setMedia(this.mediaVideo);
  };
  _proto.removeVideo = function removeVideo() {
    if (this.mediaVideo && this.mediaVideo.readyState > 2)
      this.mediaVideo.pause();
    this.removeMedia();
  };
  _proto.on = function on(event, callback) {
    if (!(this.events[event] instanceof Array))
      this.off(event);
    this.events[event].push(callback);
  };
  _proto.off = function off(event, callback) {
    if (callback) {
      this.events[event] = this.events[event].filter(function(f) {
        return f !== callback;
      });
    } else {
      this.events[event] = [];
    }
  };
  _proto.trigger = function trigger(event) {
    var _arguments = arguments, _this6 = this;
    if (!this.events[event])
      return;
    this.events[event].forEach(function(f) {
      return f.call.apply(f, [_this6, _this6].concat([].slice.call(_arguments, 1)));
    });
  };
  _proto.getFromDataset = function getFromDataset(element) {
    var dataset = element.dataset;
    return {
      state: dataset[this.options.dataAttr],
      show: dataset[this.options.dataAttr + "Show"],
      text: dataset[this.options.dataAttr + "Text"],
      icon: dataset[this.options.dataAttr + "Icon"],
      img: dataset[this.options.dataAttr + "Img"],
      video: dataset[this.options.dataAttr + "Video"],
      stick: dataset[this.options.dataAttr + "Stick"]
    };
  };
  _proto.destroy = function destroy() {
    this.trigger("destroy");
    this.gsap.ticker.remove(this.ticker);
    this.container.removeEventListener("mouseleave", this.event.mouseleave);
    this.container.removeEventListener("mouseenter", this.event.mouseenter);
    this.container.removeEventListener("mousedown", this.event.mousedown);
    this.container.removeEventListener("mouseup", this.event.mouseup);
    this.container.removeEventListener("mousemove", this.event.mousemove);
    this.container.removeEventListener("mousemove", this.event.mousemoveOnce);
    this.container.removeEventListener("mouseover", this.event.mouseover);
    this.container.removeEventListener("mouseout", this.event.mouseout);
    if (this.el) {
      this.container.removeChild(this.el);
      this.el = null;
      this.mediaImg = null;
      this.mediaVideo = null;
    }
  };
  return MouseFollower2;
}();
export default MouseFollower;
