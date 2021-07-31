// const url = require("url");

const testUrl = new URL('http://www.abc.com:5000/index.html?id=100&status=on');

// Serialized URL
console.log(testUrl.href);
console.log(testUrl.toString());

// Host
console.log(testUrl.host);

// Hostname (doesnot get port)
console.log(testUrl.hostname);

// Path name
console.log(testUrl.pathname);

// Serialized query
console.log(testUrl.search);

// Params object
console.log(testUrl.searchParams);

// Add params
testUrl.searchParams.append('name', 'John');
console.log(testUrl.searchParams);

// Loop through params
testUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
