// http://voyager.jpl.nasa.gov/spacecraft/greetings.html
var spaceCraft: String = "Voyager"
// try assigning it nil
// try type String?
print(spaceCraft)

var greeting = "Kia ora"
var alien: String? = "fellow humanoid" // amend to nil
print(alien!) // force unwrap

if let life = alien {
  greeting = "Kia ora, \(life)" // amend to \(alien)
}
print(greeting)


let nickname: String? = "Anna"
let fullname: String = "Anastasia"
let welcome = "Hi \(nickname ?? fullname)!"
print(welcome)
