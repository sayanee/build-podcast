function getInfo() {
  return {
    first: 'Jane',
    last: 'Doe',
    role: 'developer'
  }
}

function getList() {
  return [ 'apple', 'brinjal', 'caramel' ]
}

const profile = getInfo()
const {first, last, role} = profile

const food = getList()
const [ fruit, vege, dessert ] = food

console.log(`I am ${first} ${last} and work as a ${role}`)
console.log(`I love ${fruit}, ${vege} and ${dessert}`)
