'use strict';

var _callbackToPromise = require('./callbackToPromise');

var _callbackToPromise2 = _interopRequireDefault(_callbackToPromise);

var _promiseToCallback = require('./promiseToCallback');

var _promiseToCallback2 = _interopRequireDefault(_promiseToCallback);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _fetchJSON = require('./fetchJSON');

var _fetchJSON2 = _interopRequireDefault(_fetchJSON);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  callbackToPromise: _callbackToPromise2.default,
  promiseToCallback: _promiseToCallback2.default,
  fetch: _fetch2.default,
  fetchJSON: _fetchJSON2.default
};