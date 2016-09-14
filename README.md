# micro-promisify

Convert callback-based function into promise. Simple, 10LOC, no deps.

## Usage

```javascript
const promisify = require('micro-promisify');
const fs = require('fs');

const promise = promisify(fs.readFile)('filename.txt');
```

## License

[The MIT license](https://github.com/paulmillr/mit)
