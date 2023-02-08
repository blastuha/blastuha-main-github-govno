//* Инкапсуляция - это скрытие данных от доступа вне класса либо при наследовании

//* Приватные (private) поля и методы (нет доступа через точку и нет доступа в дочерних классах) #. Можно работать только внутри родительского класса

//* Приватные поля и методы нужны чтобы работать с ними только в одном классе

//* get / set - слова для получения доступа к значению (даже приватного поля)
// get - для получения значения, set - устанавливаем новое значение

class Developer {
  #salary // приватные поля выносим в начало класса

  constructor(name, progLang) {
    this.name = name
    this.progLang = progLang
    this.#salary = 3000
  }

  get devSalary() {
    return this.#salary
  }

  set setSalary(salary) {
    this.#salary = salary
  }
  startCoding() {
    console.log(`${this.name} начинает писать код!`)
    console.log(`Зарплата ${this.name} ${this.#salary}`)
  }

  #printProgLang() {
    console.log(`Язык программированиея ${this.progLang}`)
  }
}

const developer = new Developer('Maxim', 'JavaScript')
//* Поля и методы, которые вызываются через точку - называются публичными (public)!

console.log(developer)
console.log(developer.name)
console.log(developer.progLang)
console.log(developer.salary) // private 
console.log(developer.devSalary) // не функция, не вызываем, без ()
developer.startCoding()
// меняем приватное поле через set
developer.setSalary = 5000 // передаем параметр без ()
console.log(developer.devSalary)



class JuniorDeveloper extends Developer {
  constructor(name, progLang) {
    super(name, progLang)
  }
}

const juniorDeveloper = new JuniorDeveloper('Игорь', 'JavaScript')
juniorDeveloper.printProgLang() // private (error)