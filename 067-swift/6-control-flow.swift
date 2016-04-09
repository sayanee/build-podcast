// https://en.wikipedia.org/wiki/Planetary_mass

let planetMass = [0.06,	0.82,	1,	0.11,	317.8,	95.2,	14.6,	17.2]

var terrestrialPlanetMass: Double = 0
var jovianPlanetMass: Double  = 0

for mass in planetMass {
  if (mass > 1) {
    jovianPlanetMass += mass
  } else {
    terrestrialPlanetMass += mass
  }
}

print("Terrestrial planet mass is \(terrestrialPlanetMass) earth mass.")
print("Jovian planet mass is \(jovianPlanetMass) earth mass.")
