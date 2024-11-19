function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Lis',
  lastName:  'Marreiros',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

// herança
function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age)
  this.fromSubClass = 'OIE'
}

SubPerson.prototype = Object.create(Person.prototype)
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Miranda', 31);
console.log(person1.fullName());

const person2 = new SubPerson('J', 'J', 24);
console.log(person2)
console.log(person2.fullName());