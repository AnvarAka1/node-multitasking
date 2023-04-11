// spawns a shell and runs a command within that shell, passing the stdout and stderr to a callback function when complete.

// on Unix, Linux, MacOS child_process.execFile is more efficient, because it does not spawn a shell by default
// on Windows, .bat and .cmd files are not executable without terminal. Cannot be launched using child_process.execFile

// on Windows .bat and .cmd files can be invoked by:
// 1. child_process.spawn('<cmd/bat file>', '<arguments>[]', { shell: true })
// 2. child_process.exec('<cmd/bat file>')
// 3. child_process.spawn('cmd.exe', ['/c', '<cmd/bat file>'])

const child_process = require('node:child_process');

const bat1 = spawn('cmd.exe', ['/c', 'my.bat']);

// Script with spaces in the filename should be wrapped into quotes:
const bat2 = child_process.spawn('"my script.cmd"', ['a', 'b'], { shell: true });

child_process.exec('my.bat', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

child_process.exec('"my script.cmd" a b', (err, stdout, stderr) => {
  // ...
}); 

child_process.exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
}); 