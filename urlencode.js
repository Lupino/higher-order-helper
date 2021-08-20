"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = urlencode;
exports.safeUrlencode = safeUrlencode;
function urlencode(opts) {
  return new URLSearchParams(opts);
}

function safeUrlencode(opts) {
  var params = {};
  for (var k in opts) {
    if (opts[k] === undefined) {
      continue;
    }
    params[k] = opts[k];
  }
  return urlencode(params);
}