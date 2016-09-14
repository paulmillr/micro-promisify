# micro-promisify

Convert callback-based function into promise. Simple, 10LOC, no deps.

## Usage

```javascript
var promisify = require('micro-promisify');
var fs = require('fs');

var promise = promisify(fs.readFile)('filename.txt');
```

## License

[The MIT license](https://github.com/paulmillr/mit)
