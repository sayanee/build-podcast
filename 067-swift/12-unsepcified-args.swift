// Int... : any number of integer arguments
func sumOf(numbers: Int...) -> Int {
  var sum = 0
  for number in numbers {
    sum += number
  }
  return sum
}

print(sumOf())
print(sumOf(4, 5, 12))
print(sumOf(4, 5, 12, 10))
