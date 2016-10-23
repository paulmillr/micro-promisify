import test from 'ava';
import promisify from './';

const twice = (data, callback) => {
  if (!callback) throw new Error('No callback');
  setTimeout(() => {
    callback(null, data * 2);
  });
};

const twiceError = (data, callback) => {
  if (!callback) throw new Error('No callback');
  setTimeout(() => {
    callback(new Error('Invalid'));
  });
};

test('promisify', t => {
  const res = promisify(twice)(5);
  return res;
});

test('promisify with error', t => {
  const res = promisify(twiceError)(5);
  return res.then(data => t.fail()).catch(error => {
    t.is(error.message, 'Invalid');
  });
});

test('sets correct .length', t => {
  let res = promisify((a, b, c) => {});
  t.is(res.length, 2);
  res = promisify(() => {});
  t.is(res.length, 0);
});

test('sets correct .name', t => {
  const res = promisify(function hello() {});
  t.is(res.name, 'hello');
});
