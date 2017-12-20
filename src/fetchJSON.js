import keys from 'lodash.keys';
import fetch from './fetch';

function preprocess(data) {
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

export default async function fetchJSON(url, options) {
  options = options || {};
  options['Accept'] = 'application/json';
  const rsp = await fetch(url, options);
  if (/application\/json/.test(rsp.headers.get('content-type'))) {
    const data = await rsp.json();
    return preprocess(data);
  } else {
    const data = await rsp.text();
    try {
      const parsed = JSON.parse(data);
      return preprocess(parsed);
    } catch (e) {
      throw new Error(data);
    }
  }
}
