//  similar to child_process.exec() except that it spawns the command directly without first spawning a shell by default.
// The same options as child_process.exec() are supported. Since a shell is not spawned, behaviors such as I/O redirection and file globbing are not supported

const child_process = require('node:child_process');
const child = child_process.execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
}); 