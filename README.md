# buffer-transform-using-stream
Easily transform Buffer instances using streams

It creates a readable stream from the input `Buffer`, pipes it into the `transform` parameter, and finally assembles the final `Buffer`. Because of this, you can use any duplex stream as a transform, but actual stream transformer objects is probably the most common use-case.

## Installing
`npm install buffer-transform-using-stream`

## Example usage
```js
var through2 = require('through2');
var applyTransform = require('buffer-transform-using-stream');

var buffer = new Buffer([1, 2, 3, 4]);

var transformer = through2(function(chunk, enc, cb) {
    // increase each byte in 'chunk' by 3
    var buf = new Buffer(chunk.length);
    for(var i = 0; i < chunk.length; i++) {
        buf[i] = chunk[i] + 3;
    }
    this.push(buf);
    cb();
});

applyTransform(buffer, transformer, function(err, data) {
    console.log(data); // <Buffer 04 05 06 07>
});
```

## License
The MIT License (MIT)

Copyright (c) 2015 Raymond Hammarling

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
