module.exports = (callback) => function() {
  'use strict';
  if (typeof callback !== 'function') throw new TypeError('promisify must receive a function');
  for (var args = new Array(arguments.length), i = 0; i < args.length; ++i) args[i] = arguments[i]; // git.io/vk55A
  return new Promise((resolve, reject) => {
    args.push((error, data) => error == null ? resolve(data) : reject(error));
    callback.apply(this, args);
  });
};
