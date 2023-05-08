const cluster = require('node:cluster');
const http = require('node:http');
const os = require('node:os');
const process = require('node:process');


const numCPUs = os.cpus().length;

console.log('Number of cpus', numCPUs)

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    setTimeout(() => {
      console.log(`Worker ${process.pid} responded`);
      res.end('hello world\n');
    }, 1000)

  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
