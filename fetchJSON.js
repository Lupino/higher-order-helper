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
  if (!data) {
    return data;
  }
  if (data.err) {
    throw new Error(data.err);
  }
  if (data.error) {
    throw new Error(data.error);
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
    var auto_pop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

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
              _context.next = 16;
              break;
            }

            _context.next = 8;
            return rsp.json();

          case 8:
            data = _context.sent;

            if (!auto_pop) {
              _context.next = 13;
              break;
            }

            return _context.abrupt('return', preprocess(data));

          case 13:
            return _context.abrupt('return', data);

          case 14:
            _context.next = 27;
            break;

          case 16:
            _context.next = 18;
            return rsp.text();

          case 18:
            _data = _context.sent;
            _context.prev = 19;
            parsed = JSON.parse(_data);
            return _context.abrupt('return', preprocess(parsed));

          case 24:
            _context.prev = 24;
            _context.t0 = _context['catch'](19);
            throw new Error(_data);

          case 27:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[19, 24]]);
  }));

  function fetchJSON(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return fetchJSON;
}();