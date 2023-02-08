//* Статические методы и поля - это поля/методы, которые принадлежать изначальному классу, а не наследникам

//* Ключевая особенность стат. метода/поля - для доступа к нему, не нужно создавать экземпляр класса с помощью New

//* static нужен тогда, когда поле/метод не пренадлежит конкретному объекту, а принадлежит классу. Либо когда в методе не используется this.

// Если в методе/поле есть this - они не могут быть статическим, а есл нету, то рационально сделать их статическими

// Статик поля/методы можно делать приватными
// Например, с initialParams мы не работаем вне класса Car, поэтому логично его сделать приватным

class Car {
  static #isCar(car) {
    return car instanceof Car
  }

  static initialParams = { // начальные параметры
    name: 'Audi',
    maxSpeed: 150,
  }

  constructor(name, maxSpeed) {
    this.name = name || Car.#initialParams.name
    this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed
  }

  drive() {
    console.log(`Машина ${this.name} сейчас в пути`)
  }
}

const car = new Car()
console.log(car)

const car2 = new Car('BMW', 200)
console.log(car2)

const isCAr = Car.isCar(car)
console.log(isCAr)
// car.isCar(car) // error
Car.isCar()
