//* 8 типов данных
//* 7 примитивных (не сылочный) и 1 объект (ссылочный)
//* Перезаписать в функции примитивный тип данных нельзя, только объекты
const setName = (entity, value) => {
  if (typeof entity === 'object') {
    entity.name = value
  } else {
    entity = value
  }
}

const developer = {
  name: 'Maxim'
}
let developerName = 'Maxim'

setName(developer, 'Max')
setName(developerName, 'Max')

console.log(developer)
console.log(developerName)



//
let misha = 'Misha'
let figures = 123
misha = 'питерский'
figures = 228

function nameChanger(name, figures) {
  name = 'Какашка'
  figures = '1337'
}
nameChanger(misha, figures)
console.log(misha, figures)


//
console.log({} === {})
console.log([] === [])
const entity2 = {}
const entity2Copy = entity2
//* entity2Copy - хранит ссылку на entity2 - поэтому true
console.log(entity2 === entity2Copy)

//*примитивные типы данных
console.log('hello' === 'hello')

