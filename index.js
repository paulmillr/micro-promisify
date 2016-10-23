module.exports = fn => {
  'use strict'; // MIT License, paulmillr.com
  if (typeof fn !== 'function') throw new TypeError('micro-promisify must receive a function');
  return Object.defineProperties(function() {
    for (var args = new Array(arguments.length), i = 0; i < args.length; ++i) args[i] = arguments[i]; // git.io/vk55A
    return new Promise((resolve, reject) => {
      args.push((error, result) => error == null ? resolve(result) : reject(error));
      fn.apply(this, args);
    });
  }, {
    length: {value: Math.max(0, fn.length - 1)},
    name: {value: fn.name},
  });
};
