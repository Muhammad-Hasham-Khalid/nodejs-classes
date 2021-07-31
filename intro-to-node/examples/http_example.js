const http = require('http');

const controller = (request, response) => {
  console.log('request was matched');
  response.write('<h1> Hello from Node.js </h1>');
  response.end();
};

const server = http.createServer(controller);

server.listen(5000, () => console.log('Listening on http://localhost:5000'));
