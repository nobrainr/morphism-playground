webpackHotUpdate(54,{

/***/ "./components/MorphismPlayground.tsx":
/*!*******************************************!*\
  !*** ./components/MorphismPlayground.tsx ***!
  \*******************************************/
/*! exports provided: MorphismViz, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphismViz", function() { return MorphismViz; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timkendrick_monaco_editor_dist_external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @timkendrick/monaco-editor/dist/external */ "./node_modules/@timkendrick/monaco-editor/dist/external/index.js");
/* harmony import */ var _timkendrick_monaco_editor_dist_external__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timkendrick_monaco_editor_dist_external__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morphism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morphism */ "./node_modules/morphism/dist/morphism.js");
/* harmony import */ var morphism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morphism__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-monaco-editor */ "./node_modules/react-monaco-editor/lib/index.js");
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_monaco_editor__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

window.MonacoEnvironment = {
  baseUrl: '/monaco-editor-external'
};




var source = {
  a: 'value',
  b: 'bvalue'
};
var schema = {
  foo: 'a',
  bar: 'b',
  test: function test() {
    return 'test';
  }
};
var MorphismViz =
/*#__PURE__*/
function (_Component) {
  _inherits(MorphismViz, _Component);

  function MorphismViz() {
    _classCallCheck(this, MorphismViz);

    return _possibleConstructorReturn(this, _getPrototypeOf(MorphismViz).apply(this, arguments));
  }

  _createClass(MorphismViz, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputSource, {
        data: source
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Schema, {
        data: schema
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Target, {
        source: source,
        schema: schema
      }));
    }
  }]);

  return MorphismViz;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (MorphismViz);

var InputSource =
/*#__PURE__*/
function (_Component2) {
  _inherits(InputSource, _Component2);

  function InputSource() {
    _classCallCheck(this, InputSource);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputSource).apply(this, arguments));
  }

  _createClass(InputSource, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, JSON.stringify(data, null, 2)));
    }
  }]);

  return InputSource;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Schema =
/*#__PURE__*/
function (_Component3) {
  _inherits(Schema, _Component3);

  function Schema() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Schema);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Schema)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      code: ''
    });

    return _this;
  }

  _createClass(Schema, [{
    key: "editorDidMount",
    value: function editorDidMount(editor) {
      console.log('editorDidMount', editor);
      editor.focus();
    }
  }, {
    key: "onChange",
    value: function onChange(newValue, e) {
      console.log('onChange', newValue, e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var code = this.state.code;
      var options = {
        selectOnLineNumbers: true
      };
      console.log('monaco', _timkendrick_monaco_editor_dist_external__WEBPACK_IMPORTED_MODULE_1__);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_monaco_editor__WEBPACK_IMPORTED_MODULE_3___default.a, {
        width: "800",
        height: "600",
        language: "javascript",
        theme: "vs-dark",
        value: code,
        options: options,
        onChange: function onChange(newVal, e) {
          return _this2.onChange(newVal, e);
        },
        editorDidMount: function editorDidMount(editor) {
          return _this2.editorDidMount(editor);
        }
      });
    }
  }]);

  return Schema;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Target =
/*#__PURE__*/
function (_Component4) {
  _inherits(Target, _Component4);

  function Target() {
    _classCallCheck(this, Target);

    return _possibleConstructorReturn(this, _getPrototypeOf(Target).apply(this, arguments));
  }

  _createClass(Target, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          source = _this$props.source,
          schema = _this$props.schema;
      var result = null;

      try {
        result = Object(morphism__WEBPACK_IMPORTED_MODULE_2__["morphism"])(schema, source);
      } catch (e) {}

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, JSON.stringify(result, null, 2)));
    }
  }]);

  return Target;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ })

})
//# sourceMappingURL=54.a480b89be05aa3fdc93f.hot-update.js.map