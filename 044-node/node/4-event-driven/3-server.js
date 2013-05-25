// child process
// spawn external commands

var exec = require('child_process').exec;
console.log('Before');
exec('ls -al', function(err, stdout, stderr) {
  if (err) {
    console.log('child process exited with error code', err.code);
    return;
  }
  console.log(stdout);
});
console.log('After');
