(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['figma-plugin-boilterplate'] = factory());
}(this, function () { 'use strict';

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var vhtml = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function () {

    var emptyTags = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

    var esc = function esc(str) {
      return String(str).replace(/[&<>"']/g, function (s) {
        return '&' + map[s] + ';';
      });
    };

    var map = {
      '&': 'amp',
      '<': 'lt',
      '>': 'gt',
      '"': 'quot',
      "'": 'apos'
    };
    var sanitized = {};

    function h(name, attrs) {
      var stack = [];

      for (var i = arguments.length; i-- > 2;) {
        stack.push(arguments[i]);
      }

      if (typeof name === 'function') {
        (attrs || (attrs = {})).children = stack.reverse();
        return name(attrs);
      }

      var s = '<' + name;
      if (attrs) for (var _i in attrs) {
        if (attrs[_i] !== false && attrs[_i] != null) {
          s += ' ' + esc(_i) + '="' + esc(attrs[_i]) + '"';
        }
      }

      if (emptyTags.indexOf(name) === -1) {
        s += '>';

        while (stack.length) {
          var child = stack.pop();

          if (child) {
            if (child.pop) {
              for (var _i2 = child.length; _i2--;) {
                stack.push(child[_i2]);
              }
            } else {
              s += sanitized[child] === true ? child : esc(child);
            }
          }
        }

        s += '</' + name + '>';
      } else {
        s += '>';
      }

      sanitized[s] = true;
      return s;
    }

    return h;
  });
  });

  /** @jsx h */

  var ExamplePlugin =
  /*#__PURE__*/
  function () {
    function ExamplePlugin() {
      classCallCheck(this, ExamplePlugin);

      this.options = ["Alert File Name", this.main.bind(this), null, {
        shift: true,
        option: true,
        key: "t"
      }];
      var _window = window,
          figmaPlugin = _window.figmaPlugin;
      figmaPlugin.createPluginsMenuItem.apply(figmaPlugin, toConsumableArray(this.options));
      window.examplePlugin = this;
    }

    createClass(ExamplePlugin, [{
      key: "main",
      value: function main() {
        var _window2 = window,
            App = _window2.App,
            alert = _window2.alert;
        var fileName = App.getCurrentFileName();
        alert(fileName);
      }
    }]);

    return ExamplePlugin;
  }();
  document.body.innerHTML = vhtml("div", {
    id: "figma-plugin-boilerplate"
  }, vhtml("header", null, vhtml("span", null, "Figma Plugin Boilerplate"), vhtml("button", null, vhtml("span", {
    class: "g0126e402"
  }))), vhtml("main", null, "Hello"), vhtml("footer", null, vhtml("button", null, vhtml("span", {
    class: "g0126e402"
  })), vhtml("button", null, vhtml("span", {
    class: "g0126e402"
  }))));

  return ExamplePlugin;

}));
//# sourceMappingURL=figma-plugin-boilerplate.js.map
