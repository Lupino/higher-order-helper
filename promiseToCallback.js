"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseToCallback;
function promiseToCallback(promiseFunction) {
  return function () {
    for (var _len = arguments.length, argv = Array(_len), _key = 0; _key < _len; _key++) {
      argv[_key] = arguments[_key];
    }

    var callback = argv.pop();
    promiseFunction.apply(undefined, argv).then(function () {
      for (var _len2 = arguments.length, ret = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        ret[_key2] = arguments[_key2];
      }

      return callback.apply(undefined, [null].concat(ret));
    }).catch(function (err) {
      return callback(err);
    });
  };
}