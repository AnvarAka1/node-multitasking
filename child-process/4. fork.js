// spawns a new Node.js process and invokes a specified module with an IPC communication channel established that allows sending messages between parent and child.

console.log(process.argv[2])

if (process.argv[2] === 'child') {
  setTimeout(() => {
    console.log(`Hello from ${process.argv[2]}!`);
  }, 1_000);
} else {
  const child_process = require('node:child_process');

  const controller = new AbortController();
  
  const { signal } = controller;
  
  const child = child_process.fork(__filename, ['child'], { signal });

  child.on('error', (err) => {
    // This will be called with err being an AbortError if the controller aborts
  });

  controller.abort(); // Stops the child process
} 