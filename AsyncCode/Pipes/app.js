var fs = require('fs');
var zLib = require('zlib');

var readable = fs.createReadStream(__dirname + '/dummy.txt')
var compressedWritable = fs.createWriteStream(__dirname + '/dummy.txt.gz')
var gzip = zLib.createGzip();

//Essentially, a 'chain' of streams. Data is read, passed onto gzip for compression, which is then passed onto the .gz file
readable.pipe(gzip).pipe(compressedWritable)
