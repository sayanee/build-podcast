const config = new Map([
  [ 'url', 'https://build-podcast.com' ],
  [ 'type', 'podcast' ],
  [ 'topic', 'developer tools' ]
]);

console.log(config)
console.log(`Website: ${config.get('url')}`)

const fruits = new Map()
  .set(1, 'apple')
  .set(2, 'banana')
  .set(3, 'cranberries')
  .set(4, 'durian')

console.log(fruits)

console.log(fruits.has(1))
console.log(`Size: ${fruits.size}`)
