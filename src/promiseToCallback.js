export default function promiseToCallback(promiseFunction) {
  return (...argv) => {
    const callback = argv.pop();
    promiseFunction(...argv)
      .then((...ret) => callback(null, ...ret))
      .catch((err) => callback(err));
  };
}
