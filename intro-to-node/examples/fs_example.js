const fs = require('fs');

// writeFile (async)
fs.writeFile('sample.txt', 'written with write file', err => {
  // callback
  if (err) console.log(err);
  console.log('Done');
});

// writeFileSync
fs.writeFileSync('sample.txt', 'written with writeFileSync');

// readFile (async)
fs.readFile('sample.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

try {
  // readFileSync
  const data = fs.readFileSync('sample.txt', 'utf-8');
  console.log(data);
} catch (err) {
  console.log(err);
}

// appendFile
fs.appendFile('sample.txt', ' appended using appendFile', err => {
  if (err) console.log(err);
});

// appendFileSync
fs.appendFileSync('sample.txt', ' appended with appendFileSync');

// rename file
fs.rename('sample.txt', 'test.txt', err => {
  if (err) console.log(err);
});

// renameSync
// fs.renameSync("test.txt", "sample.txt");

// unlink (delete file)
// fs.unlink('test.txt', err => {
//   if (err) console.log(err);
// });

// unlinkSync
// fs.unlinkSync("test.txt");

fs.mkdir('test', err => {
  console.log(err);
});
