"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.default = callbackToPromise;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function callbackToPromise(callbackFunction) {
  return function () {
    for (var _len = arguments.length, argv = Array(_len), _key = 0; _key < _len; _key++) {
      argv[_key] = arguments[_key];
    }

    return new _promise2.default(function (resolve, reject) {
      callbackFunction.apply(undefined, argv.concat([function (err) {
        for (var _len2 = arguments.length, ret = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          ret[_key2 - 1] = arguments[_key2];
        }

        if (err) return reject(err);
        resolve.apply(undefined, ret);
      }]));
    });
  };
}