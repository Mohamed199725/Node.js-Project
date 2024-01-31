// file-operations.js
const fs = require('fs');

// Writing to a file
fs.writeFileSync('welcome.txt', 'Hello Node');

// Reading from the file
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);