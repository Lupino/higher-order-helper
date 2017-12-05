export default function callbackToPromise(callbackFunction) {
  return (...argv) => {
    return new Promise((resolve, reject) => {
      callbackFunction(...argv, (err, ...ret) => {
        if (err) return reject(err);
        resolve(...ret);
      });
    });
  };
}
