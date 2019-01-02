(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

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

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

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

  var createHtmlNodes = function createHtmlNodes(str) {
    return document.createRange().createContextualFragment(str);
  };

  var panel = function panel(_ref) {
    var id = _ref.id,
        title = _ref.title,
        showClose = _ref.showClose,
        tabs = _ref.tabs;
    return vhtml("div", {
      class: "figma-plugin-panel",
      id: id
    }, vhtml("header", null, Array.isArray(tabs) && tabs.length > 0 ? vhtml("nav", null, tabs.map(function (tab) {
      return vhtml("button", null, tab);
    })) : vhtml("span", null, "$", title), showClose ? vhtml("button", null, vhtml("span", {
      class: "g0126e402"
    })) : ''), vhtml("main", null));
  };

  var footer = vhtml("footer", null);

  var FigmaPluginPanel =
  /*#__PURE__*/
  function () {
    function FigmaPluginPanel(args) {
      classCallCheck(this, FigmaPluginPanel);

      var ui = panel(args);
      var htmlNodes = createHtmlNodes(ui);
      document.body.appendChild(htmlNodes);
      this.panel = document.getElementById(args.id);
      var clientWidth = document.documentElement.clientWidth;
      var clientHeight = document.documentElement.clientHeight;
      this.panel.style.left = clientWidth / 2 - args.width / 2 + 'px';
      this.panel.style.top = clientHeight / 2 - args.height / 2 + 'px';
      this.header = this.panel.getElementsByTagName("header")[0];
      this.draggable(this.panel, this.header);
    }

    createClass(FigmaPluginPanel, [{
      key: "draggable",
      value: function draggable(panel, header) {
        var isMouseDown = false; // initial mouse X and Y for `mousedown`

        var mouseX;
        var mouseY; // element X and Y before and after move

        var elementX = parseInt(panel.style.left) || 0;
        var elementY = parseInt(panel.style.top) || 0; // mouse button down over the element

        header.addEventListener('mousedown', onMouseDown);
        /**
         * Listens to `mousedown` event.
         *
         * @param {Object} event - The event.
         */

        function onMouseDown(event) {
          mouseX = event.clientX;
          mouseY = event.clientY;
          isMouseDown = true;
        } // mouse button released


        header.addEventListener('mouseup', onMouseUp);
        /**
         * Listens to `mouseup` event.
         *
         * @param {Object} event - The event.
         */

        function onMouseUp(event) {
          isMouseDown = false;
          elementX = parseInt(panel.style.left) || 0;
          elementY = parseInt(panel.style.top) || 0;
        } // need to attach to the entire document
        // in order to take full width and height
        // this ensures the element keeps up with the mouse


        document.addEventListener('mousemove', onMouseMove);
        /**
         * Listens to `mousemove` event.
         *
         * @param {Object} event - The event.
         */

        function onMouseMove(event) {
          if (!isMouseDown) return;
          var deltaX = event.clientX - mouseX;
          var deltaY = event.clientY - mouseY;
          panel.style.left = elementX + deltaX + 'px';
          panel.style.top = elementY + deltaY + 'px';
        }
      }
    }]);

    return FigmaPluginPanel;
  }();

  var ExamplePlugin =
  /*#__PURE__*/
  function (_FigmaPluginPanel) {
    inherits(ExamplePlugin, _FigmaPluginPanel);

    function ExamplePlugin(props) {
      classCallCheck(this, ExamplePlugin);

      return possibleConstructorReturn(this, getPrototypeOf(ExamplePlugin).call(this, props));
    }

    createClass(ExamplePlugin, [{
      key: "main",
      value: function main() {}
    }]);

    return ExamplePlugin;
  }(FigmaPluginPanel);

  window.examplePlugin = new ExamplePlugin({
    id: "example-plugin",
    title: "Example Plugin",
    tabs: ["First", "Second"],
    showClose: true,
    width: 320,
    height: 320
  });

}));
//# sourceMappingURL=figma-plugin-boilerplate.js.map
