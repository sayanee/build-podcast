class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  toString() {
    return `${this.firstname} ${this.lastname})`
  }
}

class Neighbour extends Person {
  constructor(firstname, lastname, neighbourhood) {
    super(firstname, lastname)
    this.neighbourhood = 'Shenzhen'
  }
  toString() {
    return super.toString() + ' from ' + this.neighbourhood
  }
}

var p = new Person('Igor', 'Novak')
console.log(p.toString())

const np = new Neighbour('Min', 'Ong', 'Stockholm')
console.log(cp.toString())
