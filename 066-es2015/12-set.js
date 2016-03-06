const set = new Set();
set.add('red')
console.log(set.has('red'))

set.add('red')
set.add('red')
set.add('red')
set.add('green')

console.log(set)
console.log(`Size: ${set.size}`)
