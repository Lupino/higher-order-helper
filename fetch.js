'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = fetch;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

var _urlencode = require('./urlencode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetch(url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var rawFetch = _ref.fetch,
      options = (0, _objectWithoutProperties3.default)(_ref, ['fetch']);

  if (options.body) {
    options.headers = options.headers || {};
    if (Array.isArray(options.body)) {
      options.headers['content-type'] = 'application/json';
      options.body = (0, _stringify2.default)(options.body);
    } else if ((0, _typeof3.default)(options.body) === 'object') {
      if (!(options.body instanceof _formData2.default)) {
        options.headers['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        options.body = (0, _urlencode.safeUrlencode)(options.body).toString();
      }
    }
  }
  rawFetch = rawFetch || _isomorphicFetch2.default;
  return rawFetch(url, options);
}