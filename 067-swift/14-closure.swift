// map
var numbers = [3, 9, 10, 12]

var mul1 = numbers.map({
  (num: Int) -> Int in // define params and return type followed by in
  return 3 * num
})
print(mul1)

// when params are known: omit type of parameters or return type
let mul2 = numbers.map({ num in 3 * num })
print(mul2)

// using $0
let mul3 = numbers.map({ 3 * $0 })
print(mul3)
