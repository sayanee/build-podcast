// return a function that takes in an integer and returns an integer
// () -> ((Int) -> Int)
func cube() -> ((Int) -> Int) {
  func powerThree(num: Int) -> Int {
    return num * num * num
  }
  return powerThree
}

var cuboid1 = cube()
print(cuboid1(2))
