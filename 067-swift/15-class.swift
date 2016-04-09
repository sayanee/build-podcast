class Person {
  var firstname: String
  var lastname: String

  init(firstname: String, lastname: String) {
    self.firstname = firstname
    self.lastname = lastname
  }

  func fullname() -> String {
    return "\(firstname) \(lastname)"
  }
}

var p = Person(firstname: "Igor", lastname: "Novak")
print(p.fullname())

// Inheritance
class Neighbour: Person {
  var neighbourhood: String

  init(firstname: String, lastname: String, neighbourhood: String) {
    self.neighbourhood = neighbourhood
    super.init(firstname: firstname, lastname: lastname)
  }

  override func fullname() -> String {
    return "\(firstname) \(lastname) from \(neighbourhood)"
  }
}

let n = Neighbour(firstname: "Min", lastname: "Ong", neighbourhood: "Stockholm")
print(n.fullname())
