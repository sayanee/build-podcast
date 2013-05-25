// run in command line
// node index.js

console.log( 'Before - ' + new Date() );

setTimeout(function() {
  console.log( '2 seconds - ' + new Date() );
}, 2000);

console.log( 'After - ' + new Date() );
