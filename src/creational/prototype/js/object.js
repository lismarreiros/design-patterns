const dog = {
  firstName: 'Juca',
  lastName: 'Marreiros',
  age: 10,

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const anotherDog = Object.create(dog)
anotherDog.firstName = 'Collie'
console.log(anotherDog)
console.log(anotherDog.firstName)
console.log(anotherDog.fullName())