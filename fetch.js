'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = fetch;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetch(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (options.body) {
    options.headers = options.headers || {};
    if (Array.isArray(options.body)) {
      options.headers['content-type'] = 'application/json';
      options.body = (0, _stringify2.default)(options.body);
    } else if ((0, _typeof3.default)(options.body) === 'object') {
      if (!(options.body instanceof _formData2.default)) {
        options.headers['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        options.body = _querystring2.default.stringify(options.body);
      }
    }
  }
  return (0, _isomorphicFetch2.default)(url, options);
}