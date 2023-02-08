//* Наследование - создание дочерних классов, на основе базовых

class Plane {
  constructor(type, passengers) {
    this.type = type
    this.passengers = passengers
  }

  startFlight() {
    console.log('Полетели!')
  }
}

const plane = new Plane('Пассажирский', 100)
console.log(plane)


//* Создаем новый объект наследующий главный объект через слово extends
//* super - вызывает конструктор родительского класса, чтобы инициализировать параметры
//* Plane - шаблон, MilitaryPlane - сущность от шаблона

class MilitaryPlane extends Plane {
  constructor(type) {
    super(type, 0)
    this.numberOfGuns = 0
  }

  // startFlight() {
  //   console.log('Полетели в атаку!')
  // }

  setNumberOfGuns(numberOfGuns) {
    this.setNumberOfGuns = numberOfGuns
  }
  shoot() {
    console.log('Стреляем!')
  }
}

const militaryPlane = new MilitaryPlane('Военный')
console.log(militaryPlane)

militaryPlane.setNumberOfGuns(4)
militaryPlane.shoot()
console.log(militaryPlane)


//* MilitaryPlane - сначала смотрит есть ли startFlight в нем, если нет, то смотрит в родительском классе - Plane
//* startFlight - можно перезаписать, смотреть комменты

militaryPlane.startFlight() 

//* instanceof - проверяет принадлежит ли объект к классу

console.log(militaryPlane instanceof MilitaryPlane)
//true
console.log(militaryPlane instanceof Plane)
//true