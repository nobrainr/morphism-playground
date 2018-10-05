'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _processSize = require('./process-size');

Object.keys(_processSize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _processSize[key];
    }
  });
});