import fetch_ from 'isomorphic-fetch';
import qs from 'querystring';
import FormData from 'form-data';

export default function fetch(url, options = {}) {
  if (options.body) {
    options.headers = options.headers || {};
    if (Array.isArray(options.body)) {
      options.headers['content-type'] = 'application/json';
      options.body = JSON.stringify(options.body);
    } else if (typeof options.body === 'object') {
      if (!(options.body instanceof FormData)) {
        options.headers['content-type'] =
          'application/x-www-form-urlencoded;charset=UTF-8';
        options.body = qs.stringify(options.body);
      }
    }
  }
  return fetch_(url, options);
}
