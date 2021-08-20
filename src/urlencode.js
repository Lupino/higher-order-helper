export default function urlencode(opts) {
  return new URLSearchParams(opts);
}

export function safeUrlencode(opts) {
  const params = {};
  let k;
  for (k of Object.keys(opts)) {
    if (opts[k] === undefined) {
      continue;
    }
    params[k] = opts[k];
  }
  return urlencode(params);
}
