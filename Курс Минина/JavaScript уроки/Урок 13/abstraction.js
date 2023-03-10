//* Абстракция -  использование только тех характеристик объекта, которые с наибольшей точностью представляют его в какой-то определенной системе.

// Абстракция - это способ создания простой модели, которая содержит только важные свойства с точки зрения контекста приложения, из более сложной модели. Иными словами - это способ скрыть детали реализации и показать пользователям только функциональность

//* class Footballer - абстрактный, так как описывает общие параметры, присущие всем футболистам

class Footballer {
  constructor(name, club) {
    this.name = name
    this.club = club
  }

  shoot() {}
  celebrateGoal() {}
  pass() {}
}

class Forward extends Footballer {
  constructor(name, club) {
    super(name, club)
  }

  shoot() {
    console.log('Очень сильный удар')
  }

  celebrateGoal() {
    console.log('Я забил гол')
  }

  pass() {
    console.log('Средний пасс')
  }
}