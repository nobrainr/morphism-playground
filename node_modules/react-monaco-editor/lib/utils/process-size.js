"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processSize = processSize;
function processSize(size) {
  return !/^\d+$/.test(size) ? size : size + "px";
}