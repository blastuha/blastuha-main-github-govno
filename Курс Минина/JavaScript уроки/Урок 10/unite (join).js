//* Объединение объектов
//* Через spread-оператор ...  - рекомендуется использовать именно этот способ
const devInfo = {
  age: 24,
  exp: 3,
  name: 'Igor'
}

const devExtraInfo = {
  height: 180,
  isJunior: false,
  name: 'Vlad'
}

const developer = {
  ...devInfo,
  ...devExtraInfo,
  name: 'Nastya',
}
console.log(developer)

//* Через Object.assign (устаревший)
//* Принимает 2 параметра: целевой объект(объект для приёма ключей), источник самих ключей

const developer2 = Object.assign(devInfo, devExtraInfo)
console.log(developer2)

