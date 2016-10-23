# micro-promisify

Convert callback-based function into promise. Simple, 10LOC, no deps.

## Usage

```javascript
const promisify = require('micro-promisify');
const fs = require('fs');

const promise = promisify(fs.readFile)('filename.txt');
```

## Runtime support

Node.js 4+ and modern browsers only.

## License

[MIT](https://github.com/paulmillr/mit) (c) 2016 Paul Miller (http://paulmillr.com)
