// 1 function argument
func greet(name: String) -> String {
  return "Hello \(name)"
}

print(greet("Bob"))

func divide(dividend: Int, divisor: Int) -> Double {
  return Double(dividend / divisor)
}

print(divide(20, divisor: 2)) // need to put the name of second argumnet
