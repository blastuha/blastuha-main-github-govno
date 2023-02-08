//* ООП - методология программирования, в основе которой лежат объекты
//* В ОПП можно создавать объекты через class/function

//* function и class
//* function
function Animal(name) {
  this.name = name

  this.getName = function() {
    return this.name
  }
}

// Функция Animal создаст новый объект
const catNotRight = Animal('кот') // не создаст
const cat = new Animal('Кот') // создаст! (new - новый объект)
console.log('catNotRight',  catNotRight)
console.log('cat',  cat)

//* class - современная версия, объекты стоит создавать через class
//* constructor - главная цель - инициализация начальных значений
//* функция в классах - метод, значения - поля
// 1) создаем класс,  2)инициализируем параметры через конструктор + this

class Animal2 {
  constructor(name) {
    this.name = name
  }

  getName2() {
    return this.name
  }
}

const dog = new Animal2('собака')
console.log(dog)