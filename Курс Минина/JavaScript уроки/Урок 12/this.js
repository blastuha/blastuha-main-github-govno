//* This - ключевое слово, указывает на текущий контекст кода, тип данных object
// this - объект перед точкой

console.log(this) // в глоабльной области видимости, ссылается на window

const user = {
  name: 'Max',
  dateOfBirth: 2003,
  getName() {
    // return user.name
    return this.name
  },
  calculateAge() {
    const currentYear = new Date().getFullYear()
    console.log(currentYear)
    return currentYear - this.dateOfBirth
  },
  getAllInfo: function() {
    const age = this.calculateAge()
    return (`Имя: ${this.name}, возраст: ${age}`)
  }
}
console.log(user.getName(), user.calculateAge())
console.log(user.getAllInfo())

//* 3 метода bind, call, apply (привязываем контекст к this)

//* call
// 1 вар
function showFullName() {
  return ( this.firstName + " " + this.lastName )
}

const user2 = {
  firstName: "Василий",
  lastName: "Петров",
  patronym: "Иванович"
};

// функция вызовется с this=user
console.log(showFullName.call(user2)) // "Василий Петров"


// 2 вар
function showFullName2(firstPart, lastPart) {
  return (this[firstPart] + ' ' + this[lastPart])
}

console.log(showFullName2.call(user2, 'firstName', 'lastName'))
console.log(showFullName2.call(user2, 'firstName', 'patronym'))
