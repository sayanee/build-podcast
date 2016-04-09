let body = "comet 67P"

switch body {
case "mars":
print("Mars orbiter reached the Mars orbit in Sept 2014.")
case "jupiter", "uranus", "pluto":
  print("New Horizons reached Pluto in July 2015")
case let x where x.hasPrefix("comet"):
  print("Rosetta mission reached in August 2014")
default:
  print("Hello cosmic missions!")
}
