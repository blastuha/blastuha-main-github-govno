const mainHero = {
  fullName: 'SpiderMan',
  health: 65,
  strength: 5,
}

const badHero = {
  fullName: 'Joker',
  health: 55,
  strength: 10,
}

function printHeroInfo(extraInfo = '') {
  console.log('this', this) // window
  console.log(`Имя: ${this.fullName}, Здоровье: ${this.health},
  Сила: ${this.strength}, ${extraInfo}`)
}

//* call apply
//* ключевое различие в передаче параметров (call - через запятую), (apply - через [])
printHeroInfo.call(mainHero, 'Роль: Главный герой')
printHeroInfo.apply(mainHero, ['Роль: Главный герой'])

//* bind - не вызывает функцию. Он создает новую функцию с новым контекстом
const bindedPrintHeroInfo = printHeroInfo.bind(badHero, 'Роль: Главный герой')
console.log(bindedPrintHeroInfo())