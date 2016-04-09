func calc(num: [Int]) -> (add: Int, sub: Int, area: Int) {
  let addAnswer = num[0] + num[1]
  let subAnswer = num[0] - num[1]
  let area = num[0] * num[1]

  return (addAnswer, subAnswer, area)
}

let stats = calc([5, 3])
print(stats)
print(stats.add)
print(stats.0)

print(stats.sub)
print(stats.1)
