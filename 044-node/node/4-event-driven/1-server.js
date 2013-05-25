// 4 events: Scheduling functions

// 1. once - console.log
// 2. delayed - setTimeout
// 3. repeated - setInterval
// 4. cancel - clearTimeout

var repeat = setInterval(function() {
  console.log('Repeat!');
}, 2000);

var timeout = setTimeout(function() {
  console.log("Timeout in 4s");
}, 4000);

clearTimeout(repeat);

console.log('Hello :)');
