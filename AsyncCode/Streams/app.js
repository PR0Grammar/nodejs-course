var fs = require('fs');

//Reads 1024 bytes at a time
var readable = fs.createReadStream(__dirname + '/dummy.txt', {
  encoding: 'utf8',
  highWaterMark: 1024
});

var writable = fs.createWriteStream(__dirname + '/dummycopy.txt');

//Processes each 1024 byte 'chunck'
readable.on('data', function(dataChunck){
  writable.write(dataChunck)
});
