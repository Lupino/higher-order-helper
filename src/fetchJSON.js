import keys from 'lodash.keys';
import fetch from './fetch';

export default async function fetchJSON(url, options) {
  options = options || {};
  options['Accept'] = 'application/json';
  const rsp = await fetch(url, options);
  if (/application\/json/.test(rsp.headers.get('content-type'))) {
    const data = await rsp.json();
    if (data.err) {
      throw new Error(data.err);
    }
    if (Array.isArray(data)) {
      return data;
    }
    if (typeof data === 'object') {
      const k = keys(data);
      if (k.length === 1) {
        return data[k[0]];
      } else {
        return data;
      }
    }
    return data;
  }

  const err = await rsp.text();
  throw new Error(err);
}
