module.exports = (callback) => function() {
  if (typeof callback !== 'function') throw new TypeError('promisify must receive a function');
  const args = [].slice.call(arguments);
  return new Promise((resolve, reject) => {
    args.push((error, data) => {
      if (error == null) resolve(data); else reject(error);
    });
    callback.apply(null, args);
  });
};
