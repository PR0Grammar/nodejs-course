//Standard encoding is utf8, don't need to specify
const buffer1 = Buffer.from('LoremIpsum', 'utf8');
const buffer2 = Buffer.from('4c6f72656d497073756d', 'hex');

console.log(Buffer.compare(buffer1,buffer2)); //Outputs 1 since both buffers are equal in value

console.log(buffer1); //Output buffer with hex representation
console.log(buffer2); //Same output

console.log(buffer1.toString());
console.log(buffer2.toString()); //Same output

console.log(buffer1.toJSON());
console.log(buffer2.toJSON()); //Same output


//Overwrites the buffer as buffers are fixed-sizes.
//They are meant to hold data temporarily
buffer1.write('OVER');
buffer2.write('WRITE');
console.log(buffer1.toString());
console.log(buffer2.toString());
