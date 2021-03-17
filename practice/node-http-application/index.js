const http = require('http')
const fs   = require('fs')
const url = require('url');

// Your code here! We've required a few of the libraries you'll need to complete the project. 
const server = http.createServer(onRequest)

function onRequest(request, response){
    response.writeHead(200)
    response.write('<h1>Hello World</h1>');
    response.end();
  }
  
  server.listen('8000', () => {
    console.log("Server started. Listening on port 8000")
  })