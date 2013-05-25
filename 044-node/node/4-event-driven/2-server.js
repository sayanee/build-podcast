// process.nextTick - defer the execution of a function until the next iteration of the event loop

console.log('Before: ' + new Date().getSeconds());

// process.nextTick(function() {
//   var a = 0;
//   while(true) {
//     a ++;
//   }
// });

setTimeout(function() {
  console.log('Timeout in 2s: '+ new Date().getSeconds());
}, 2000);

process.nextTick(function() {
  console.log('tick 2 ' + new Date().getSeconds());
  setTimeout(function() {
    console.log('Timeout in 2s in next tick '+ new Date().getSeconds());
  }, 2000);
});
