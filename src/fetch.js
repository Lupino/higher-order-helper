import fetch_ from 'isomorphic-fetch';
import FormData from 'form-data';
import {safeUrlencode} from './urlencode';

export default function fetch(url, {fetch: rawFetch, ...options} = {}) {
  if (options.body) {
    options.headers = options.headers || {};
    if (Array.isArray(options.body)) {
      options.headers['content-type'] = 'application/json';
      options.body = JSON.stringify(options.body);
    } else if (typeof options.body === 'object') {
      if (!(options.body instanceof FormData)) {
        options.headers['content-type'] =
          'application/x-www-form-urlencoded;charset=UTF-8';
        options.body = safeUrlencode(options.body).toString();
      }
    }
  }
  rawFetch = rawFetch || fetch_;
  return rawFetch(url, options);
}
