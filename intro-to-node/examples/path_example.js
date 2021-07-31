const path = require('path'); // commonjs modules

// console.log(__dirname); // current directory path
// console.log(__filename); // current file path

// const filePath = "/folder/folder1/folder2/file.txt";
const filePath = path.join('folder', 'folder1', 'folder2', 'file.txt');
// console.log(filePath);

// console.log(filePath);
console.log(path.parse(filePath)); // give info about the path

// dirname
console.log(path.dirname(filePath));

// extension
console.log(path.extname(filePath));

// basename
console.log(path.basename(filePath));
