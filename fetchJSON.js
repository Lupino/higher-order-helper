'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lodash = require('lodash.keys');

var _lodash2 = _interopRequireDefault(_lodash);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, options) {
    var rsp, data, k, err;
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
              _context.next = 21;
              break;
            }

            _context.next = 8;
            return rsp.json();

          case 8:
            data = _context.sent;

            if (!data.err) {
              _context.next = 11;
              break;
            }

            throw new Error(data.err);

          case 11:
            if (!Array.isArray(data)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt('return', data);

          case 13:
            if (!((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object')) {
              _context.next = 20;
              break;
            }

            k = (0, _lodash2.default)(data);

            if (!(k.length === 1)) {
              _context.next = 19;
              break;
            }

            return _context.abrupt('return', data[k[0]]);

          case 19:
            return _context.abrupt('return', data);

          case 20:
            return _context.abrupt('return', data);

          case 21:
            _context.next = 23;
            return rsp.text();

          case 23:
            err = _context.sent;
            throw new Error(err);

          case 25:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function fetchJSON(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return fetchJSON;
}();