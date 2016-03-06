// default params

function area(height = 1, width = 1) {
  return height * width
}

console.log('Default area: ' + area())
console.log('Calculate area: ' + area(2, 3))

// spread operator
function fruits(...names) {
  return names
}

console.log(fruits('apples'))
console.log(fruits('orange', 'pineapple'))
console.log(fruits('orange', 'pineapple', 'tomato'))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
console.log(Math.max(25, -10, 100))
