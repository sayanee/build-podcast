var exec = require('child_process').exec;

console.log('Before: ' + new Date().getSeconds() );

exec('node child.js', function(err, stdout, stderr) {
  console.log('stdout:\n', stdout);
});

console.log('After: ' + new Date().getSeconds() );
