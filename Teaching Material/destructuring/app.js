//* Деструкторизация с массмвами

const fun = function(a, b) {
  return [
    a + b,
    a - b,
    a * b,
    a / b,
    a ** b,
    undefined
  ]
}

const [sum,, multy, division, ...other] = fun(2, 3)
console.log([sum, multy, division, ...other, error = 'невозможно выполнить'])

//* ...others - остаточные параметры, error - значение по умолчанию (возможно при деструкторизации). Но если задать a и b, то значение по умолчанию перепишется
console.log([...other], [error])

//* Деструкторизация с объектами

const person = {
  name: 'Misha Yakovklev',
  age: 13,
  leaving: {
    country: 'Russia',
    city: 'SPB'
  }
}

const {name: fullName, age, leaving: {city}} = person
console.log({fullName, age, city})

const {name, ...info} = person
console.log({name})
console.log({...info})

//* Пример с функцией
const person2 = {
  name: 'Misha Yakovklev',
  age: 13,
  leaving: {
    country: 'Russia',
    city: 'SPB'
  }
}

const logPerson = function({name, leaving: {country}}) {
  console.log(name + ' ' + country)
}

logPerson(person2)

