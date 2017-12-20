'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _lodash = require('lodash.keys');

var _lodash2 = _interopRequireDefault(_lodash);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preprocess(data) {
  if (data.err) {
    throw new Error(data.err);
  }
  if (Array.isArray(data)) {
    return data;
  }
  if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
    var k = (0, _lodash2.default)(data);
    if (k.length === 1) {
      return data[k[0]];
    } else {
      return data;
    }
  }
  return data;
}

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, options) {
    var rsp, data, _data, parsed;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = options || {};
            options['Accept'] = 'application/json';
            _context.next = 4;
            return (0, _fetch2.default)(url, options);

          case 4:
            rsp = _context.sent;

            if (!/application\/json/.test(rsp.headers.get('content-type'))) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return rsp.json();

          case 8:
            data = _context.sent;
            return _context.abrupt('return', preprocess(data));

          case 12:
            _context.next = 14;
            return rsp.text();

          case 14:
            _data = _context.sent;
            _context.prev = 15;
            parsed = JSON.parse(_data);
            return _context.abrupt('return', preprocess(parsed));

          case 20:
            _context.prev = 20;
            _context.t0 = _context['catch'](15);
            throw new Error(_data);

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[15, 20]]);
  }));

  function fetchJSON(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return fetchJSON;
}();