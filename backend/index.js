const http = require('http');

// let httpServer = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('hello world!');
// })

// httpServer.listen(8080);

process.stdout.write('hello process');

process.on('exit', function(code) {
  setTimeout(() => {
    console.log('exe');
  }, 0);

  console.log('exit code:', code);
})

console.log('process exit');

