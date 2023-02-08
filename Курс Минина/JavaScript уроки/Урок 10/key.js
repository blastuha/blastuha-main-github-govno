//* Ключ - всегда либо string / symbol

const user = {
  name: 'Maxim',
  10: '12345',
  undefined: undefined,
  false: false,
}

console.log(Object.keys(user)) //string

//* Символы нужны, чтобы создавать уникальные ключи объекта (как уникальный идентификатор объета)
//* Cимволы игнорируются циклом for in, А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства:
const id = Symbol('id')

const user2 = {
  [id]: 1,
  [Symbol('id')]: 1,
  [Symbol('id')]: 2,
  [Symbol('id')]: 3,
  name: 'Maxim',
  name: 'Boris',
}
console.log(user2)

console.log(user2[id])

//* in - проверяет существует ли такой ключ в объекте
const id2 = Symbol('id2')
const user3 = {
  [id2]: 2,
  name: 'Maxim',
  name: 'Boris',
}
console.log(user3)
console.log('name'  in user3)
console.log('notRealKey' in user3)
console.log(id2 in user3)