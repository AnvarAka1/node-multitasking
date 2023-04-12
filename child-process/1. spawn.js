const child_process = require('node:child_process')

// wait for parent process to exit
process.on('exit', (code) => {
  console.log('---- parent exited with code', code, '----')
})

// creates child process with <command> and <arguments>[]
const ls_child = child_process.spawn('ls', ['-lh', '/usr'])

ls_child.stdout.on('data', (data) => {
  // reads as stream as communication between parent and child processes
  // is done via pipe
  console.log('stdout:', data.toString())
})

ls_child.stderr.on('data', (data) => {
  console.error('stderr:', data)
})

ls_child.on('close', (code) => {
  console.log('child process exited with code', code)
})

console.log('---- parent process last line ----')

